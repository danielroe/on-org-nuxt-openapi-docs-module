import each from "./foreach.mjs";
function api(obj, pointer, value) {
  if (arguments.length === 3) {
    return api.set(obj, pointer, value);
  }
  if (arguments.length === 2) {
    return api.get(obj, pointer);
  }
  var wrapped = api.bind(api, obj);
  for (var name in api) {
    if (api.hasOwnProperty(name)) {
      wrapped[name] = api[name].bind(wrapped, obj);
    }
  }
  return wrapped;
}
api.get = function get(obj, pointer) {
  var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);
  for (var i = 0; i < refTokens.length; ++i) {
    var tok = refTokens[i];
    if (!(typeof obj == "object" && tok in obj)) {
      throw new Error("Invalid reference token: " + tok);
    }
    obj = obj[tok];
  }
  return obj;
};
api.set = function set(obj, pointer, value) {
  var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer), nextTok = refTokens[0];
  if (refTokens.length === 0) {
    throw Error("Can not set the root object");
  }
  for (var i = 0; i < refTokens.length - 1; ++i) {
    var tok = refTokens[i];
    if (typeof tok !== "string" && typeof tok !== "number") {
      tok = String(tok);
    }
    if (tok === "__proto__" || tok === "constructor" || tok === "prototype") {
      continue;
    }
    if (tok === "-" && Array.isArray(obj)) {
      tok = obj.length;
    }
    nextTok = refTokens[i + 1];
    if (!(tok in obj)) {
      if (nextTok.match(/^(\d+|-)$/)) {
        obj[tok] = [];
      } else {
        obj[tok] = {};
      }
    }
    obj = obj[tok];
  }
  if (nextTok === "-" && Array.isArray(obj)) {
    nextTok = obj.length;
  }
  obj[nextTok] = value;
  return this;
};
api.remove = function(obj, pointer) {
  var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);
  var finalToken = refTokens[refTokens.length - 1];
  if (finalToken === void 0) {
    throw new Error('Invalid JSON pointer for remove: "' + pointer + '"');
  }
  var parent = api.get(obj, refTokens.slice(0, -1));
  if (Array.isArray(parent)) {
    var index = +finalToken;
    if (finalToken === "" && isNaN(index)) {
      throw new Error('Invalid array index: "' + finalToken + '"');
    }
    Array.prototype.splice.call(parent, index, 1);
  } else {
    delete parent[finalToken];
  }
};
api.dict = function dict(obj, descend) {
  var results = {};
  api.walk(obj, function(value, pointer) {
    results[pointer] = value;
  }, descend);
  return results;
};
api.walk = function walk(obj, iterator, descend) {
  var refTokens = [];
  descend = descend || function(value) {
    var type = Object.prototype.toString.call(value);
    return type === "[object Object]" || type === "[object Array]";
  };
  (function next(cur) {
    each(cur, function(value, key) {
      refTokens.push(String(key));
      if (descend(value)) {
        next(value);
      } else {
        iterator(value, api.compile(refTokens));
      }
      refTokens.pop();
    });
  })(obj);
};
api.has = function has(obj, pointer) {
  try {
    api.get(obj, pointer);
  } catch (e) {
    return false;
  }
  return true;
};
api.escape = function escape(str) {
  return str.toString().replace(/~/g, "~0").replace(/\//g, "~1");
};
api.unescape = function unescape(str) {
  return str.replace(/~1/g, "/").replace(/~0/g, "~");
};
api.parse = function parse(pointer) {
  if (pointer === "") {
    return [];
  }
  if (pointer.charAt(0) !== "/") {
    throw new Error("Invalid JSON pointer: " + pointer);
  }
  return pointer.substring(1).split(/\//).map(api.unescape);
};
api.compile = function compile(refTokens) {
  if (refTokens.length === 0) {
    return "";
  }
  return "/" + refTokens.map(api.escape).join("/");
};
export default api;

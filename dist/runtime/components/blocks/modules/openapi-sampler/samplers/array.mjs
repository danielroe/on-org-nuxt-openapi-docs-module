import { traverse } from "../traverse.mjs";
export function sampleArray(schema, options = {}, spec, context) {
  const depth = context && context.depth || 1;
  let arrayLength = Math.min(schema.maxItems != void 0 ? schema.maxItems : Infinity, schema.minItems || 1);
  const items = schema.prefixItems || schema.items || schema.contains;
  if (Array.isArray(items)) {
    arrayLength = Math.max(arrayLength, items.length);
  }
  let itemSchemaGetter = (itemNumber) => {
    if (Array.isArray(items)) {
      return items[itemNumber] || {};
    }
    return items || {};
  };
  let res = [];
  if (!items)
    return res;
  for (let i = 0; i < arrayLength; i++) {
    let itemSchema = itemSchemaGetter(i);
    let { value: sample } = traverse(itemSchema, options, spec, { depth: depth + 1 });
    res.push(sample);
  }
  return res;
}

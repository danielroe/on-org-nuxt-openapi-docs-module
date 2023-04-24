const ContentPlugin = (context, inject) => {
  context.$openapidoc.setAccess((file) => {
    if(context.isStatic && !context.nuxtState) {
      return true;
    }
    return file !== 'no-access';
  })

  context.$openapidoc.setRouteInfo((file, url, method) => {
    if(file === 'petstore_extended' && url === '/pet') {
      return "<b>Your APIKEY:</b> aaaaaaaa";
    }
    return null;
  })

  context.$openapidoc.setFooter('<div><b>Nuxt OpenApi doc panel</b> - [<a href="https://on-org.github.io/nuxt-openapi-docs-module/docs/petstore_extended/en/components/">Example</a>] [<a href="https://github.com/on-org/nuxt-openapi-docs-module">Info</a>] by <a href="https://github.com/s00d">s00d</a></div>');
};

export default ContentPlugin;

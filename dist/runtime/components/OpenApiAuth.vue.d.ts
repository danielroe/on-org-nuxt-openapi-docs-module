declare namespace _default {
    namespace components {
        export { OpenApiParameter };
        export { OpenApiResponse };
        export { OpenApiSecurityScheme };
        export { OpenApiMediaTypes };
        export { OpenApiExampleObject };
        export { OpenApiObjectModel };
    }
    namespace props {
        export namespace components_1 {
            export let type: ObjectConstructor;
            function _default(): {};
            export { _default as default };
        }
        export { components_1 as components };
        export namespace currentLocale {
            let type_1: StringConstructor;
            export { type_1 as type };
            export let required: boolean;
        }
    }
}
export default _default;

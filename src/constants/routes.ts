export const BasePath = '/CascadeKit'; 

export const BaseRouts = {
    home: '/home',
    why: '/why',
    how: '/how',
    components: '/components',
    layers: '/layers',
    mixin: '/mixin',
    layoutUtils: '/layout-utils',
    example: '/example',
    theme: '/theme',
    scopedStyles: '/scoped-styles',
    aiTools: '/ai-tools',
}

export const routes = {
    home: BasePath + BaseRouts.home,
    why: BasePath + BaseRouts.why,
    how: BasePath + BaseRouts.how,
    components: BasePath + BaseRouts.components,
    layers: BasePath + BaseRouts.layers,
    mixin: BasePath + BaseRouts.mixin,
    layoutUtils: BasePath + BaseRouts.layoutUtils,
    example: BasePath + BaseRouts.example,
    theme: BasePath + BaseRouts.theme,
    scopedStyles: BasePath + BaseRouts.scopedStyles,
    aiTools: BasePath + BaseRouts.aiTools,
};

export const nonDocsRoutes = [
    routes.home,
    routes.why,
];

export const isDocsPage = (path: string) => {
    return !nonDocsRoutes.includes(path);
};
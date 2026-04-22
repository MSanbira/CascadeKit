export const BasePath = '/CascadeKit'; 

export const BaseRouts = {
    home: '/',
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
    home: BasePath + '/',
    why: BasePath + '/why',
    how: BasePath + '/how',
    components: BasePath + '/components',
    layers: BasePath + '/layers',
    mixin: BasePath + '/mixin',
    layoutUtils: BasePath + '/layout-utils',
    example: BasePath + '/example',
    theme: BasePath + '/theme',
    scopedStyles: BasePath + '/scoped-styles',
    aiTools: BasePath + '/ai-tools',
};

export const nonDocsRoutes = [
    routes.home,
    routes.why,
];

export const isDocsPage = (path: string) => {
    return !nonDocsRoutes.includes(path);
};
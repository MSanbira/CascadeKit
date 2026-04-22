export const routes = {
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
};

export const nonDocsRoutes = [
    routes.home,
    routes.why,
];

export const isDocsPage = (path: string) => {
    return !nonDocsRoutes.includes(path);
};
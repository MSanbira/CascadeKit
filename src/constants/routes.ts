export const routes = {
    home: '/home',
    why: '/why',
    how: '/how',
    components: '/components',
    layers: '/layers',
    mixin: '/mixin',
    layoutUtils: '/layout-utils',
    example: '/example',
    caseStudy: '/case-study',
    theme: '/theme',
    scopedStyles: '/scoped-styles',
    aiTools: '/ai-tools',
    about: '/about',
    links: '/links',
};

export const nonDocsRoutes = [
    routes.home,
    routes.why,
    routes.about,
    routes.links,
];

export const isDocsPage = (path: string) => {
    return !nonDocsRoutes.includes(path);
};
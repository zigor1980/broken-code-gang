export const routeNavigation = ({ page, paylod = {} }) => ({
    type: 'ROUTE_NAVIGATE',
    page,
    paylod
});

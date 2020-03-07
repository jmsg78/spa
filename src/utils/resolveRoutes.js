const resolveRoutes = (route) => {
    /*console.log(route);
    let validRoute;
    if (!Number.isInteger(route)) {
        validRoute = route === "/" ? `/`:`/:id`;
    }
    else
    {
        validRoute = '/:id';
    }
    return validRoute;*/
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
      }
      return `/${route}`;
}
export default resolveRoutes;
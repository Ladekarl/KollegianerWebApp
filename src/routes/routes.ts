const pathsMap = {
    home: () => '/',
    aboutUs: () => '/about-us',
    privacyPolicy: () => `/privacy-policy`,
    login: () => `/login`,
    register: () => `/register`,
    forgotPassword: () => `/forgot-password`
};
type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(
    route: TRoute,
    ...params: Parameters<PathsMap[TRoute]>
) => {
    const pathCb: (...args: any[]) => string = pathsMap[route];
    return pathCb(...params);
};
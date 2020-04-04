const pathsMap = {
    home: (): string => '/',
    aboutUs: (): string => '/about-us',
    privacyPolicy: (): string => `/privacy-policy`,
    login: (): string => `/login`,
    register: (): string => `/register`,
    forgotPassword: (): string => `/forgot-password`,
    usermgt: (): string => `/usermgt`,
};
type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(
    route: TRoute,
    ...params: Parameters<PathsMap[TRoute]>
): string => {
    const pathCb: (...args: any[]) => string = pathsMap[route];
    return pathCb(...params);
};

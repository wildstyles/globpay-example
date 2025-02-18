const usersRoot = 'users';
const usersApiTag = 'Users';

const v1 = 'v1';

export const routes: Record<Route, RouteSettings> & { version: string } = {
  version: v1,

  getUser: {
    apiTag: usersApiTag,
    params: { id: 'id' },
    path: function () {
      return `${usersRoot}/:${this.params.id}`;
    },
  },
  createUser: {
    apiTag: usersApiTag,
    params: {},
    path: function () {
      return usersRoot;
    },
  },
};

type Route = 'getUser' | 'createUser';

type RouteSettings = {
  path: () => string;
  apiTag: string;
  params: Record<string, string>;
};
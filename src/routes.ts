import { plugins, RequestHandler } from 'restify';
import { getCity } from './handlers/city';

export interface IRoute {
    path: string;
    handlers: plugins.HandlerCandidate[];
    
}

export interface IRouteByMethod {
    get?: IRoute[];
}

const CURRENT_API_VERSION = process.env.CURRENT_API_VERSION;
const PATH_PREFIX = '/api/:version';

const routesForGet: IRoute[] = [
    {
      path: '/cities/:slug',
      handlers: [{ version: CURRENT_API_VERSION, handler: [getCity] }]
    }
  ];

const allRoutes: IRouteByMethod = {
    get: routesForGet.map(
      route => ({ ...route, path: `${PATH_PREFIX}${route.path}` } as IRoute)
    )
  };
  
  export default allRoutes;
  
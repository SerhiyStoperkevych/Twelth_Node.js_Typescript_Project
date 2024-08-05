declare module 'engine.io' {
    import { CorsOptions, CorsOptionsDelegate } from 'cors';
  
    interface ServerOptions {
      cors?: CorsOptions | CorsOptionsDelegate;
    }
  }
  
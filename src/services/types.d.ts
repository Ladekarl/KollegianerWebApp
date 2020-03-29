import index from './index';

declare module 'GlobalTypes' {
  export type Services = typeof index;
} 
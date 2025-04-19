import { ContainerProps } from './Container.types';

function Container({ className = '', children }: ContainerProps) {
  return <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>;
}

export default Container;

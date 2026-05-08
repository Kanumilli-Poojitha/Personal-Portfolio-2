import { cn } from '../utils/cn';

export default function Button({ as: Component = 'button', className = '', variant = 'primary', ...props }) {
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';

  return <Component className={cn(variantClass, className)} {...props} />;
}

import { cn } from '../utils/cn';

export default function Card({ className = '', ...props }) {
  return <div className={cn('card-shell', className)} {...props} />;
}

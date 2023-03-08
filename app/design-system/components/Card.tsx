import {ReactNode} from 'react';

interface CardProps {
  children: ReactNode;
  subtitle?: string;
  title?: string;
}

export const Card = ({
  children,
  subtitle,
  title
}: CardProps) => {
  return (
    <div className='havok-dnd-card-border'>
      <div className='havok-dnd-card'>
        {
          title && <h3>{title}</h3>
        }
        {
          subtitle && <h4>{subtitle}</h4>
        }
        {children}
      </div>
    </div>
  );
};

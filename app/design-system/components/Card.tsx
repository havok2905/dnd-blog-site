import {ReactNode} from 'react';

interface CardProps {
  children: ReactNode;
  footer?: ReactNode;
  subtitle?: string;
  title?: string;
}

export const Card = ({
  children,
  footer,
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
      {
        footer && (
          <div className='havok-dnd-card-footer'>
            {footer}
          </div>
        )
      }
    </div>
  );
};

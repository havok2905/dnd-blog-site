import {ReactNode} from 'react';

interface QuoteProps {
  children: ReactNode;
  citation?: string;
}

export const Quote = ({
  children,
  citation
}: QuoteProps) => {
  return (
    <blockquote className="havok-dnd-blockquote">
      {children}
      {
        citation && (
          <p className="havok-dnd-blockquote-citation">
            - {citation}
          </p>
        )
      }
    </blockquote>
  );
};

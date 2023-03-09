interface ButtonProps {
  isAnchor: boolean;
  path?: string;
  text: string;
}

export const Button = ({
  isAnchor,
  path,
  text
}: ButtonProps) => {
  if (isAnchor) return (
    <div className="havok-dnd-button-border">
      <a
        className="havok-dnd-button"
        href={path}>
        {text}
      </a>
    </div>
  );

  return (
    <div className="havok-dnd-button-border">
      <button
        className="havok-dnd-button"
        type="button">
        {text}
      </button>
    </div>
  );
};

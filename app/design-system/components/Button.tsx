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
    <button
      className="havok-dnd-button-border"
      type="button">
      {text}
    </button>
  );
};

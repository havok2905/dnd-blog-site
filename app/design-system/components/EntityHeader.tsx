interface EntityHeaderProps {
  name: string;
  subtitle: string;
  tokenAlt: string;
  tokenSrc: string;
}

export const EntityHeader = ({
  name,
  subtitle,
  tokenAlt,
  tokenSrc
}: EntityHeaderProps) => {
  return (
    <div className="havok-dnd-entity-header">
      <img
        alt={tokenAlt}
        src={tokenSrc}/>
      <div>
        <h3>{name}</h3>
        <p>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

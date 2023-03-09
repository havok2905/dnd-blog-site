interface InlineListProps {
  collection?: string[];
  name: string;
}

export const InlineList = ({
  collection,
  name
}: InlineListProps) => {
  if (!collection || !collection.length) return null;
  return (
    <p>
      <strong>{name}:</strong> {collection?.join(', ')}
    </p>
  );
};

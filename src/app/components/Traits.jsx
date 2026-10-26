import Tag from "./Tag";

const colors = ["blue", "pink", "green", "yellow"];

const Traits = ({ temperament }) => {
  const traits = temperament.split(", ").slice(0, 4);

  return (
    <div className="flex flex-wrap gap-3 pt-4">
      {traits.map((trait, i) => (
        <Tag key={trait} variant={colors[i % colors.length]}>
          {trait}
        </Tag>
      ))}
    </div>
  );
};

export default Traits;

import Tag from "./Tag";

const Traits = () => {
  return (
    <div className="flex flex-wrap gap-3 pt-4">
      <Tag variant="blue">Confident</Tag>
      <Tag variant="pink">Alert</Tag>
      <Tag variant="green">Playful</Tag>
      <Tag variant="yellow">Loyal</Tag>
    </div>
  );
};

export default Traits;

const variants = {
  blue: "bg-[#ACD7FF]",
  pink: "bg-[#EDA8B3]",
  green: "bg-[#C5E59C]",
  yellow: "bg-[#F1E689]",
};

const Tag = ({ children, variant = "blue" }) => {
  return <span className={`inline-block rounded-full px-4 py-2 text-base text-[#6B7F3A] ${variants[variant]}`}>{children}</span>;
};

export default Tag;

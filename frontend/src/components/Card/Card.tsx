const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-xl border border-gray-300 bg-gray-100 w-full md:w-[400px]">
      <h4 className="p-4 font-bold border-b border-gray-300">{title}</h4>
      <p className="px-4 pt-1 pb-4 font-medium text-gray-700">{description}</p>
    </div>
  );
};

export default Card;

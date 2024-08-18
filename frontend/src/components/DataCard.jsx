const DataCard = ({ title, description }) => {
  return (
    <section className="bg-[#f4f6f8] border-2 border-[#d2dce7] rounded-xl py-4 ">
      <h2 className="text-xl font-bold text-[#434037] px-5 p-1">{title}</h2>
      <p className="font-light text-[#595c63]border-[#d2dce7]  border-t-2   border-[#d2dce7] px-5  p-2">
        {description}
      </p>
    </section>
  );
};

export default DataCard;

const Card = ({ title, description }) => {
    return (
        <div className=" md:w-96 bg-gray-200 border border-gray-400 rounded-lg shadow-md">
            <h3 className=" p-4  text-lg font-semibold  border-b-2 border-gray-400 ">{title}</h3>
            <p className="p-4 text-gray-700">{description}</p>
        </div>
    );
};

export default Card;

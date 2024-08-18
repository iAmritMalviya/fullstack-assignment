const Header = () => {
  return (
    <div className="py-4 px-8  text-gray-200 bg-black flex justify-between">
      <div className="flex items-center gap-2">
        <p >Absract</p> | <p>Help center</p>
      </div>
      <button className="bg-gray-800 border border-gray-400 text-gray-100 rounded-md p-2">Submit Request</button>
    </div>
  );
};

export default Header;

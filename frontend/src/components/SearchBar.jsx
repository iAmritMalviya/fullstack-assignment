const SearchBar = ({ onSearch }) => {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="flex justify-center mt-6 mb-10">
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                className="p-3 w-full md:w-1/2 border rounded-lg"
            />
        </div>
    );
};

export default SearchBar;

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Search = ({ setSearchQuery, setIsSearchTriggered }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = () => {
        if (query.trim()) {
            setSearchQuery(query);
            setIsSearchTriggered(true);
        }
    };

    return (
        <div className='bg-blue-200 h-96 flex justify-center items-center'>
            <div className='flex flex-col gap-4 justify-center items-center max-w-xl w-full space-y-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl'>How can we help?</h1>
                <div className='relative w-full'>
                    <input
                        onChange={handleInputChange}
                        value={query}
                        className='p-4 w-full indent-1 pr-10'
                        placeholder='Search'
                    />
                    <button
                        type='button'
                        onClick={handleSearchClick}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2'
                    >
                        <FaArrowRight className='text-gray-500' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;

import React, { useState } from 'react'
import Search from '../components/Search'
import Cards from '../components/Cards'

const Help = () => {
    const [searchQuery, setSearchQuery] = useState()
    const [isSearchTriggered, setIsSearchTriggered] = useState(false)

    return (
        <div className='h-full'>
            <Search setSearchQuery={setSearchQuery} setIsSearchTriggered={setIsSearchTriggered} />
            <Cards searchQuery={searchQuery} isSearchTriggered={isSearchTriggered} />
        </div>
    )
}

export default Help
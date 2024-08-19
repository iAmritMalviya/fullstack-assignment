import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import Footer from './Footer'
import { fetchCards, fetchCardByTitle } from '../api' // Import the API functions

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        if (searchTerm) {
          const response = await fetchCardByTitle(searchTerm)
          setCards(Array.isArray(response.data) ? response.data : [response.data])
        } else {
          const response = await fetchCards()
          setCards(response.data)
        }
      } catch (error) {
        console.error('Error fetching cards:', error)
        setCards([])
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(() => {
      fetchData()
    }, 300)  // Debounce the API call by 300ms

    return () => clearTimeout(debounceTimer)
  }, [searchTerm])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='min-h-screen'>
      <div className='w-full flex flex-col justify-center items-center bg-[#e5e5e5]'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl pt-12'>How can we help?</h1>
        <input 
          type="text" 
          placeholder='Search' 
          className='placeholder:text-gray-400 pl-4 sm:w-1/3 mt-8 py-3 rounded-2xl mb-12'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className='min-h-[80vh]'>
        {isLoading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : cards.length > 0 ? (
          <CardList cards={cards} />
        ) : (
          <p className="text-center ">No results found. Please try a different search term.</p>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
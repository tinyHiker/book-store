import React from 'react'
import { useFetchAllQuotesQuery } from '../../redux/features/quotes/quotesApi'
const AllQuotes = () => {

    const {data: quotes = []} = useFetchAllQuotesQuery()

    console.log(quotes)
    
  return (
    <div>AllQuotes</div>
  )
}

export default AllQuotes
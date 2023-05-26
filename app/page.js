'use client'

import { Box }  from '@chakra-ui/react'
import VtuaList from './news/VtuaList'
import { useState, useEffect } from 'react'

export default function Home() {
  //
  const [articles, setArticles ] = useState([ ])
  //
  useEffect(( ) => {
    const apikey = 'dbb5ac33d06d257e35bd9e5b0e53f569';
    const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

    fetch(url)
      .then(function (response) {
        return response.json();
    })
      .then(function (data) { 
        setArticles(data.articles)
        console.log(data.articles)
      })

  },[ ])
  //
  const pageContainer = {
    gridColumn:["1/-1","1/-1","1/-1","2/5"],
    // boxSizing:'border-box',
    // h:"95vh", 
    minHeight:"100%",
    // overflowX:'hidden',
    // bg:"lightgray",
  }
  //
  const dummyArticles = [ ...Array(30).keys( ) ] // generating keys for dummy list news articles

  const listStyles = { p:2 }
  //
  const listContainerStyles = {
  
    bg:'white',
    h:"100%",
    overflowX:'hidden',
  }
  //
  return (
    <Box { ...pageContainer }> 
        <Box {  ...listContainerStyles }>
            <VtuaList
              listData   = { dummyArticles } // list data prop.
              //listItem   = { CardItem }   // list item prop ( a card component).
              listStyles = { listStyles } // list styles for styling list.
             />
          </Box>
    </Box>
  )
}

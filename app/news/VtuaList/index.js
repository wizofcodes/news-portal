'use client'
import React                    from 'react'
import { Grid, Box, ListItem, Text, Button  } from "@chakra-ui/react"



import View from './View'
import NewsArticlesList from '../articles-list'
import NewsMainSection from '../main-section'
// import NewsCategories from '../categories'

//
const SETTINGS = {
  minIndex: 1,
  maxIndex: 16,
  startIndex: 6,
  itemHeight: 20,
  amount: 5,
  tolerance: 2
}
//
const virtualListContainer = { bg:'white'}
/**

**/

export default function VtualList({
   listData = [ ], // data making up a list.
   listItem,       // list item component.
   listStyles,     // styles for styling list.
 }){
  //
  const [ settings, updateSettings ] = React.useState(SETTINGS)
  const viewportRef                  = React.createRef(null)
  //
  const runScroller = (e) => { /*.....*/ }
  //
  React.useEffect(( ) => {
      viewportRef.current.scrollTop = settings.initialPosition
      //
      if (!settings.initialPosition) {
        runScroller({ target: { scrollTop: 0 } })
      }
  })

//

  const virtualList = {
    h:"100%",
    m:2, 
    // bg:"blue",
     // p:2,
  }
//
const gridStyles = {
  templateColumns: ['1fr','1fr 1fr','1fr 1fr 1fr'],
  // templateRows: '1fr 1fr 1fr',
}
//
const listViewportStyles = {
  id:"viewport",
  ref:viewportRef, 
  style:listStyles, 
  onScroll:runScroller,
}

  return <Box { ...virtualListContainer }>
          <Box { ...virtualList }>
            <Box></Box>
            <Box {...listViewportStyles }>
              <Grid { ...gridStyles }>
                <NewsMainSection />
                <NewsArticlesList listData={listData} />
              </Grid>
            </Box>
            <Box></Box>
          </Box>
         </Box>
         //

}

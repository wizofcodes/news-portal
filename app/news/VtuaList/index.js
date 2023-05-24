'use client'
import React                    from 'react'
import Image  from 'next/image'
import { Grid, Box, ListItem, Text, Button  } from "@chakra-ui/react"
import renderListItem           from './renderListItem'

import View from './View'
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
const virtualListContainer = {
  // d:'flex',
  // justifyContent:'center',
  // alignItems:"center",
  // width:'100%',
  // h:"100%",
  // p:2,
  bg:'black',



}
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

  const PlaceHolder = () => <Box d="flex" justifyContent="center" >
                              <Text w="50%" h="50%" fontFamily="lato">
                                No Data
                              </Text>
                            </Box>
//

  const virtualList = {
    h:"100%",
    m:2, bg:"blue",
     // p:2,
  }
//
const gridStyles = {
  templateColumns: ['1fr','1fr 1fr','1fr 1fr 1fr'],
  // templateRows: '1fr 1fr 1fr',
}//
const mainStyles = {
  gridColumn:"1/-1",
  // h:"200px",
  w:"100%",
  bg:"purple"
}
  return <Box { ...virtualListContainer }>
          <Box { ...virtualList }>
            <Box></Box>
            <Box
              id    ="viewport"
              ref   ={ viewportRef }
              style ={ listStyles }
              onScroll={ runScroller }
            >
            <Grid { ...gridStyles }>
              <Box { ...mainStyles }>
              <Box display="flex" flexDir={['column','column','row','row']}>

               <Image  src="/gpixel.jpg" alt="Article Image" width={600} height={150} />

               <Box display="flex" flexDir="column" bg="white" >

                <Text fontSize={['md','lg','xl','2xl']} fontWeight={800}>Google's Pixel 7 and 7 Pro&#39;'s design gets revealed even more with fresh crisp renders</Text>
                <Text fontSize={['xs','sm','md']}mt={2} mb={2} color="darkgray"> May 23, 2023</Text>
                <Text fontSize={['sm','md','lg']}>Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!...</Text>
                <Button size="lg" color="tomato">Read More</Button>

               </Box>
              </Box>  
             
              <Box display="flex">
                 <Button size="sm" color="tomato" mt={2}>All</Button> 
                 <Button size="sm" color="tomato" mt={2} ml={2}>Tech</Button>
                 <Button size="sm" color="tomato"  mt={2} ml={2}>Sports</Button>
                 <Button size="sm" color="tomato"  mt={2} ml={2}>Politics</Button>
              </Box>
              </Box>
                { (listData.length === 0) ? PlaceHolder( ): listData.map(renderListItem({ listItem })) }
            </Grid>
            </Box>
            <Box></Box>
          </Box>
         </Box>
         //
  // return <View items ={ items }/>

}

'use client'
import   React      from 'react'
import { Box,Text,Image }    from '@chakra-ui/react'

export default function CardItem({ itemData }){
  //
  const itemWrapperStyles = {
    display:"flex", 
    flexDir:['row','column','column','column'],
    bg:'lightgray',
    m:2,
  }
  //
  const phoneDetailStyles = {
    mt:"2",
    d:"flex",
    bg:"yellow",
    justifyContent:"center",
  }
  //
  return <Box { ...itemWrapperStyles }>
        
            <Image  src="/gpixel.jpg" alt="Article Image" width={['50%','auto']} height="auto" />

            <Box  width={['50%','auto']}  bg="white">           
              <Text color="gray" fontSize="sm">
              23, May 2023
              </Text>
              <Text fontWeight="bold">
                Google&#39;s Pixel 7 and 7 Pro&#39;s design gets revealed even more with fresh crisp renders
              </Text>
            </Box>
        </Box>

}

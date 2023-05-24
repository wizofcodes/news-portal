'use client'
import   React      from 'react'
// import Image  from 'next/image'
import { Box, Text,Image }    from '@chakra-ui/react'

export default function CardItem({ itemData }){

  const visitShop = ( ) => { 
    // navigate('/shop') 
  }
  //
  const itemWrapperStyles = {
    display:"flex", 
    // justifyContent:"center" ,
    // flexDir:'row',
    // flexDir:['row','row','column','column'],
    // w:'100%',
    bg:'lightgray',
    m:2,
  }
  //
  // const cardStyles = {
  //   // d:"flex",
  //   // justifyContent:"center",
  //   // alignItems:"center",
  //   // width:"100%",
  //   bg:"yellow",
  //   m:2,
  //   borderTop:"3px solid brown"
  // }
  //
  // const checkButtonStyles = {
  //   w:"100%",
  //   d:"flex",
  //   justifyContent:"center",
  //   alignItems:"center",
  //   bg:"#fe6d34",
  //   as:"button",
  //   onClick:visitShop,
  //   borderRadius:"6px"
  // }
  //
  const phoneDetailStyles = {
    mt:"2",
    d:"flex",
    bg:"yellow",
    justifyContent:"center",
    // flexDir:['row','column'],
    // w:['50%','100%'],
  }
  //
  return <Box { ...itemWrapperStyles }>
        
          {/* <Box width='50%'  bg="red" >
                    
                    <Text color="gray" fontSize="sm">
                    23, May 2023
                    </Text>
                    <Text fontWeight="bold">
                      Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders
                    </Text>
            </Box> */}
                  <Image  src="/gpixel.jpg" alt="Article Image" width={['50%']} height="auto" />

            <Box  width='50%' bg="white">
                    
                    <Text color="gray" fontSize="sm">
                    23, May 2023
                    </Text>
                    <Text fontWeight="bold">
                      Google's Pixel 7 and 7 Pro&apos;'s design gets revealed even more with fresh crisp renders
                    </Text>
            </Box>
        </Box>

}

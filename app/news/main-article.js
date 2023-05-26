'use client'

import React from 'react'
import {Box, Text, Image } from '@chakra-ui/react'


export default function MainNewsArticle(){

    return   <Box display="flex" flexDir={["column","column","row","row"]}>

    <Image  src="/gpixel.jpg" alt="Article Image" width={["100%","100%","60%","60%"]}  height={["auto","50%"]} />

    <Box  bg="white"   width={["100%","100%","40%","40%"]}  height={["auto","50%"]}>

     <Text fontSize={['lg','xl','xl','2xl']} fontWeight={800}>Google&#39;s Pixel 7 and 7 Pro&#39;s design gets revealed even more with fresh crisp renders</Text>
     <Text fontSize={['sm','md']}mt={2} mb={2} color="darkgray"> May 23, 2023</Text>
     <Text fontSize={['md','lg','lg']}>Now we have a complete image of what the next Google flagship phones will look like. All that&#39;s left now is to welcome them during their October announcement!...
     <span style={{ color:"blue"}}>Read More</span></Text>

    </Box>
   </Box>  
}
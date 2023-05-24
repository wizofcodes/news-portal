'use client'

import React from 'react'
import Image  from 'next/image'
import {Box, Text, Button } from '@chakra-ui/react'


export default function MainNewsArticle(){

    return   <Box display="flex" flexDir={['column','column','row','row']}>

    <Image  src="/gpixel.jpg" alt="Article Image" width={600} height={150} />

    <Box display="flex" flexDir="column" bg="white" >

     <Text fontSize={['md','lg','xl','2xl']} fontWeight={800}>Google&#39;s Pixel 7 and 7 Pro&#39;s design gets revealed even more with fresh crisp renders</Text>
     <Text fontSize={['xs','sm','md']}mt={2} mb={2} color="darkgray"> May 23, 2023</Text>
     <Text fontSize={['sm','md','lg']}>Now we have a complete image of what the next Google flagship phones will look like. All that&#39;s left now is to welcome them during their October announcement!...</Text>
     <Button size="lg" color="tomato">Read More</Button>

    </Box>
   </Box>  
}
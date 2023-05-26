'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'
//
import MainNewsArticle from './main-article'
import NewsCategories  from './categories'

export default function NewsMainSection(){
    const mainStyles = {
        gridColumn:["1/-1"],
        w:"100%",
        borderBottom:"2px solid black",
        bg:"white"
      }
      //
    return  <Box { ...mainStyles }>
                <MainNewsArticle />
                <NewsCategories />
            </Box>
}
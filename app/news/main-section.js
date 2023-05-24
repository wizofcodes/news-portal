'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'
//
import MainNewsArticle from './main-article'
import NewsCategories  from './categories'

export default function NewsMainSection(){
    const mainStyles = {
        gridColumn:"1/-1",
        // h:"200px",
        w:"100%",
        bg:"purple"
      }
      //
    return  <Box { ...mainStyles }>
                <MainNewsArticle />
                <NewsCategories />
            </Box>
}
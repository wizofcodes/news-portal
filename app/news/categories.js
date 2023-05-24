'use client'
import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'

export default function NewsCategories(){
    const newsCategoryNames = ['All','Tech','Sports','Politics']
    const newsCategoriesMenuStyles = {
        display:"flex",
    }
    //
    const categoryNameButtonStyles = { 
        size:"sm",
        color:"tomato",
        m:2,
    }

    return   <Box { ...newsCategoriesMenuStyles }>
        { newsCategoryNames.map((newsCategoryName, key )=> {
            return <Button { ...categoryNameButtonStyles } key={key}>
                     { newsCategoryName }
                    </Button>
        })}
            </Box>
}
'use client'
import React   from "react"
import CardItem           from '/app/news/CardItem'
import { Box, Text } from "@chakra-ui/react"

export default function NewsArticlesList({ listData = [ ]}){
    const PlaceHolder = () => <Box d="flex" justifyContent="center" >
    <Text w="50%" h="50%" >
      No Data
    </Text>
  </Box>

    return (listData.length === 0) ? PlaceHolder( ): listData.map((itemData, i) => <CardItem key = {i} itemData = { itemData } />)
}
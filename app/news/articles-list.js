'use client'
import React   from "react"
import renderListItem     from '/app/news/VtuaList/renderListItem'
import CardItem           from '/app/news/CardItem'
import { Box, Text } from "@chakra-ui/react"

export default function NewsArticlesList({ listData = [ ]}){
    const PlaceHolder = () => <Box d="flex" justifyContent="center" >
    <Text w="50%" h="50%" fontFamily="lato">
      No Data
    </Text>
  </Box>

    return (listData.length === 0) ? PlaceHolder( ): listData.map(renderListItem({ listItem:CardItem }))
}
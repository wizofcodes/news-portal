'use client'
import React    from 'react'
import { List, Box } from "@chakra-ui/react"

export default function View({ items }){

  return <List spacing={3}>
            { items }
          </List>

}

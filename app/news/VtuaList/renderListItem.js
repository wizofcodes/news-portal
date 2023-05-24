'use client'

import React from 'react'
import CardItem  from '../CardItem'
// import Deal from './Deal' // TODO: check benefit vs injecting this dep

export default function renderListItem({ listItem:ListItem }){
  //
  return (itemData, i) => <ListItem key = {i} itemData = { itemData } />

}

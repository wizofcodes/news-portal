'use client'
import React       from 'react'
import Image  from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import {Box}       from '@chakra-ui/react'

//
// import MobileMenu  from './MobileMenu'
// import DesktopMenu from './DesktopMenu'

export default function HeadSection( ){

  const [ windowWidth, setWindowWidth ] = React.useState()
  //
  const handleResize = ( ) => { setWindowWidth(window.innerWidth) }
  //
  React.useEffect(( ) => {
    //
    window.addEventListener('resize', handleResize)
    //
    return ( ) => { window.removeEventListener('resize', handleResize) }

  }, [ windowWidth ])
  //
  //
  const headStyles = {
    display:"flex",
    justifyContent:'space-between',
    gridColumn:["1/-1","1/-1","1/-1","2/5"],
   borderBottom:"2px solid black",
   m:2,
   pt:2,
   pb:2,
  }
  //
  return <Box { ...headStyles }>
            <Image src= "/news-portal-logo.svg" alt="logo" height={30} width={150} />
            <AiOutlineMenu size={30}/>
          </Box>

}
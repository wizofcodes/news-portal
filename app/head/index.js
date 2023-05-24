'use client'
import React       from 'react'
import Image  from 'next/image'
// import { Link } from '@reach/router'
import {Box}       from '@chakra-ui/react'
//
// import MobileMenu  from './MobileMenu'
// import DesktopMenu from './DesktopMenu'

export default function HeadSection( ){

  const [ windowWidth, setWindowWidth ] = React.useState(window.innerWidth)
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
    gridColumn: [
      '1/-1',
      '2/10',
      // '1/-1',
      // // '1/-1',
      // '2/3',
    ],
    // d:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    // bg:'white',
    bg:"#fe6d34",
    // m:2,
    // w:["100vw","100vw","80vw", "60vw"],
  }
  //
  return <Box { ...headStyles }>
            <Image src= "/news-portal-logo.svg" alt="logo" height={45} width={48} />

            { ( windowWidth <= 1047 ) ? <Box>Mobile</Box> : <Box>Desktop</Box> }
          </Box>

}
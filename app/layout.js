'use client'
import { Providers } from "./providers";
import { Box,Text } from '@chakra-ui/react'
import Head from "./head"

export default function RootLayout({ children }) {
  //
  const mainContainer = {
    display: "grid",
    gridTemplateColumns:[
      '1fr',
      '1fr 1fr',
      '1fr 1fr 1fr',
      '1fr 1fr 1fr 1fr 1fr'
    ],
    gridTemplateRows:"max-content auto",
    gridGap:['4px','8px','10px','20px'],
    boxSizing: 'border-box',
    // flexDir:"column",
    height:"100vh",
    // bg:"gray"
  }
  //
  const footer = {
    display:"flex",
    alignItems:"center",
    gridColumn:["1/-1","1/-1","1/-1","2/5"],
    height:"40px",
    bg:"white",
    borderTop:"2px solid black",
    ml:2,
  }

  return (
    <html lang="en">
      <head>
  <title>News Portal</title>
  <meta
    charset="utf-8"
    name="viewport"
    content="
      width=device-width,
      initial-scale=1,
      maximum-scale=1,
      user-scalable=no
      "
  />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" /> 
</head>
      <body>
        <Providers>
          <Box { ...mainContainer }>
            <Head />
            {children}
            <Box { ...footer }>
              <Text color="gray" fontSize={['sm', 'md','lg']}> &#169; 2023, 20WebAppsChallenge | All Rights Reserved. </Text>
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  )
}

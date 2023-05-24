'use client'
import { Providers } from "./providers";
import { Box } from '@chakra-ui/react'
import Head from "./head"

export default function RootLayout({ children }) {
  const mainContainer = {
    display: "grid",
    // gridTemplateColumns:['6fr 1fr 4fr 3fr 3fr 4fr 1fr 6fr'],
    gridTemplateColumns:['1fr','9fr 2fr 6fr 1fr 4fr 4fr 1fr 6fr 2fr 9fr'],
    gridTemplateRows:"max-content auto",
    gridGap:"20px",
    boxSizing: 'border-box',
    // flexDir:"column",
    height:"100vh",
    // bg:"gray"
  }
  //
  const footer = {
    gridColumn:["1/-1","2/10"],
    height:"40px",
    bg:"black"
  }

  return (
    <html lang="en">
      <body>
        <Providers>
          <Box { ...mainContainer }>
            <Head />
            {children}
            <Box { ...footer }>Footer</Box>
          </Box>
        </Providers>
      </body>
    </html>
  )
}

import {
  Box,
} from '@chakra-ui/react'

import Header from '../../components/home/header'
import Landing from '../../components/home/landing'
import Products from '../../components/home/products'


export default function Home() {
  return (
    <Box>
      <Header />
      <Landing />
      <Products />
    </Box>
  )
}
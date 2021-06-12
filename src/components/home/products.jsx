import { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Center,
  HStack,
  VStack,
} from '@chakra-ui/react'

import Trono from '../../assets/premium_trono.jpg'

import ProductCard from '../../components/home/product-card'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    await fetch('https://bathalaph.herokuapp.com/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json())
      .then((result) => {
        setProducts(result)
      })
  }

  return (
    <Box bgColor='gray.50' px={[10, 100, 250]} py={50} id='all-products'>
      <Heading size='md'>all products</Heading>
      <Center m={10}>
        <HStack spacing='24px' alignItems='center'>
          {
            products.map((row) => {
              return (
                <ProductCard key={row._id} image={row.image} name={row.name} price={row.price} />
              )
            })
          }
        </HStack>
      </Center>

    </Box>
  )
}
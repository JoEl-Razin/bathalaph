import {
  Box,
  Heading,
  Center,
  HStack,
} from '@chakra-ui/react'

import Trono from '../../assets/premium_trono.jpg'

import ProductCard from '../../components/home/product-card'

export default function Products() {
  return (
    <Box bgColor='gray.50' px={[10, 100, 250]} py={50} id='all-products'>
      <Heading size='md'>all products</Heading>
      <Center m={10}>
        <HStack spacing='24px' alignItems='center'>

         <ProductCard img={Trono} name='Trono' price='9999' />
          
        </HStack>
      </Center>

    </Box>
  )
}
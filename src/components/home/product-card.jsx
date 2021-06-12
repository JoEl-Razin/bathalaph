import { useEffect, useState } from 'react'
import {
  Box,
  Image,
  Heading,
  Text,
  IconButton,
  Flex,
  Spacer,
  useToast,
} from '@chakra-ui/react'

import { GrFormAdd } from 'react-icons/gr'

export default function ProductCard({ key, image, name, price }) {
  const id = key;

  const toast = useToast()

  const [quantity, setQuantity] = useState()

  async function addtoCart() {
    setQuantity(quantity + 1)

    const credentials = JSON.stringify({
      name,
      quantity,
      price,
      image
    })

    await fetch('https://bathalaph.herokuapp.com/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: credentials,
    }).then((res) => res.json())

    toast({
      title: `${name} added successfully`,
      status: 'success',
      duration: 1000,
      isClosable: true
    })
  }

  return (
    <Box bgColor='gray.50' p={2} borderRadius='xl' boxShadow='base' _hover={{ cursor: 'pointer', bgColor: 'gray.100', transition: '0.25s'}}>
      <Box h='15vw' w='15vw'>
        <Image src={image} objectFit='cover' boxSize='full' borderRadius='xl' />
      </Box>
      <Flex alignItems='center'>
        <Box p={2}>
          <Heading size='lg'>{name}</Heading>
          <Text fontSize='lg' color='red.400'>₱ {price}</Text>
        </Box>
        <Spacer />
        <IconButton colorScheme='yellow' borderRadius='full' pos='relative' bottom='0' icon={<GrFormAdd />} 
          onClick={() => addtoCart()}/>
      </Flex>
    </Box>
  )
}
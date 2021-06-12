import {
  Box,
  Flex,
  Button,
  Heading,
  Spacer,
  Divider,
  Stack,
  HStack,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { IoIosArrowBack } from 'react-icons/io'

import { ProductCartPage } from '../../components/home/product-cart'
import Header from '../../components/home/header'

export default function Cart() {
  return (
    <Box>
      <Box py={5} px={100} mb={5} bgColor='gray.100'>
        <Link to='/'>
          <Button colorScheme='red' leftIcon={<IoIosArrowBack />} variant='link'>home</Button>
        </Link>
      </Box>

      <Flex px={[10, 100]} >
        <Box p={5} w='70vw'>
          <Heading>cart</Heading>
          <ProductCartPage />
        </Box>

        <Box p={5} borderRadius='xl' boxShadow='lg' pos='sticky' w='25vw' h='100%'>
          <Heading>summary</Heading>
          <Divider />
          <Stack spacing='24px' py={10}>
            <Flex>
              <Heading size='xs'>subtotal</Heading>
              <Spacer />
              <Heading size='xs'>₱ 0000</Heading>
            </Flex>
            <Stack px={2} spacing='12px'>
              <Flex color='gray.500'>
                <Heading size='xs'>delivery fee</Heading>
                <Spacer />
                <Heading size='xs'>₱ 0000</Heading>
              </Flex>
              <Flex color='gray.500'>
                <Heading size='xs'>taxes</Heading>
                <Spacer />
                <Heading size='xs'>---</Heading>
              </Flex>
            </Stack>

            <Divider />
            <Flex>
              <Heading size='sm'>grand total</Heading>
              <Spacer />
              <Heading size='sm'>₱ 0000</Heading>
            </Flex>
          </Stack>
          <Button w='100%' colorScheme='orange' borderRadius='full'>checkout</Button>
        </Box>
      </Flex>

    </Box>
  )
}

/* px={[10, 100]} py={10}*/
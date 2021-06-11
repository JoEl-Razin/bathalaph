import {
  Box,
  Flex,
  Button,
  Heading,
  Spacer,
  Divider,
  Stack,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { IoIosArrowBack } from 'react-icons/io'

import { ProductCartPage } from '../../components/home/product-cart'

export default function Cart() {
  return (
    <Box>

      <Box py={5} px={100} mb={5} bgColor='red.900'>
        <Link to='/'>
          <Button colorScheme='whiteAlpha' leftIcon={<IoIosArrowBack />} variant='link'>home</Button>
        </Link>
      </Box>

      <Flex px={[10, 100]}>
        <Box flex='2' p={5} h='150vh'>
          <Heading >cart</Heading>
          <ProductCartPage />
        </Box>

        <Box flex='1' p={5} borderRadius='xl' boxShadow='lg' pos='sticky'>
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
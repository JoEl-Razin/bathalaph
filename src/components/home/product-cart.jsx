import { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Spacer,
  IconButton,
  HStack,
  Button,
  Input,
  useNumberInput,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
} from '@chakra-ui/react'

import { CgTrash } from 'react-icons/cg'

import Trono from '../../assets/premium_trono.jpg'

export default function ProductCart() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({ step: 1, defaultValue: 1, min: 1, max: 5 })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState()

  useEffect(() => {
    getCart()
  }, [])

  async function getCart() {
    await fetch('https://bathalaph.herokuapp.com/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/josn'
      },
    }).then((res) => res.json())
      .then((result) => {
        setCart(result)
      })
  }

  return (
    <Stack spacing='12px'>
      {
        cart.map((row) => {
          setTotalPrice(totalPrice + row.price)

          return (
            <Flex boxShadow='base' borderRadius='xl' color='gray.700' bgColor='gray.50'>
              <Box boxSize='100px' p={1}>
                <Image src={row.image} objectFit='cover' boxSize='full' borderRadius='xl' />
              </Box>
              <Box p={3} w='calc(100% - 100px)' alignItems='center'>
                <Flex alignItems='center' >
                  <Heading size='md'>{row.name}</Heading>
                  <Spacer />
                  <IconButton borderRadius='full' variant='ghost' colorScheme='red' icon={<CgTrash />} />
                </Flex>
                <Flex alignItems='center' >
                  <HStack w='115px' bgColor='white' borderRadius='full' p={1} border='1px' borderColor='gray.200'>
                    <Button {...dec} borderRadius='full' size='sm'>-</Button>
                    <Input variant='unstyled'{...input} />
                    <Button {...inc} borderRadius='full' size='sm'>+</Button>
                  </HStack>
                  <Spacer />
                  <Heading size='sm'>₱ {row.price}</Heading>
                </Flex>
              </Box>
            </Flex>
          )
        })
      }
    </Stack>
  )
}

export function ProductCartPage() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({ step: 1, defaultValue: 1, min: 1, max: 5 })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <Table variant='striped'>
      <Thead>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th></Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Box boxSize='125px' p={2}>
              <Image src={Trono} objectFit='cover' boxSize='full' borderRadius='xl' />
            </Box>
          </Td>
          <Td>
            <Heading size='md'>Trono</Heading>
            <Text color='gray.500' fontSize='md'>Fabric</Text>
          </Td>
          <Td>
            <HStack w='115px' bgColor='white' borderRadius='full' p={2} border='1px' borderColor='gray.200'>
              <Button {...dec} borderRadius='full' size='sm'>-</Button>
              <Input variant='unstyled'{...input} />
              <Button {...inc} borderRadius='full' size='sm'>+</Button>
            </HStack>
          </Td>
          <Td>
            <Center>
              <Heading size='sm'>₱ 9999</Heading>
            </Center>
          </Td>
          <Td>
            <IconButton borderRadius='full' variant='ghost' colorScheme='red' icon={<CgTrash />} />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

{/* <Flex boxShadow='base' borderRadius='xl' color='gray.700' bgColor='red.50'>
  <Box boxSize='100px' p={1}>
    <Image src={Trono} objectFit='cover' boxSize='full' borderRadius='xl' />
  </Box>
  <Box p={3} w='calc(100% - 100px)'>
    <Flex alignItems='center' >
      <Heading size='md'>Trono</Heading>
      <Spacer />
      <IconButton borderRadius='full' size='sm' icon={<CgTrash />} />
    </Flex>
    <Flex alignItems='center' >
      <HStack flex='1.25'>
        <Button {...dec} borderRadius='full' size='sm'>-</Button>
        <Input {...input} />
        <Button {...inc} borderRadius='full' size='sm'>+</Button>
      </HStack>
      <Spacer />
      <Heading size='sm'>₱ 9999</Heading>
    </Flex>
  </Box>
</Flex> */}

{/* <Flex borderRadius='xl' color='gray.700' bgColor='gray.50' alignItems='center' mt={5}>
      <Box boxSize='150px' p={2}>
        <Image src={Trono} objectFit='cover' boxSize='full' borderRadius='xl' />
      </Box>
      <Box p={3} w='80%'>
        <Center>
          <Box flex='2'>
            <Heading size='md'>Trono</Heading>
            <Text color='gray.500' fontSize='md'>Fabric</Text>
          </Box>
          <HStack flex='1.25'>
            <Button {...dec} borderRadius='full' size='sm'>-</Button>
            <Input {...input} />
            <Button {...inc} borderRadius='full' size='sm'>+</Button>
          </HStack>
          <Center flex='2'>
            <Heading size='sm'>₱ 9999</Heading>
          </Center>
        </Center>
      </Box>
      
    </Flex> */}
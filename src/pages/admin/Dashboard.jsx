import { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Divider,
  Stack,
  Input,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react'

import Products from '../../components/admin/dashboard-products'

export default function Dashboard() {
  const toast = useToast()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const [products, setProducts] = useState([])

  function clearFields() {
    setName('')
    setDescription('')
    setQuantity()
    setPrice()
    setImage('')
  }

  async function addProduct() {
    if (name === '' && description === '' && quantity === '' && price === '' && image === '') {
      toast({
        title: 'There was an empty field',
        status: 'error',
        duration: 1500,
        isClosable: true
      })
    } else {
      const credentials = JSON.stringify({
        name,
        description,
        quantity,
        price,
        image,
      })

      await fetch('https://bathalaph.herokuapp.com/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: credentials,
      }).then((res) => res.json())

      toast({
        title: 'Added Successfully',
        status: 'success',
        duration: 1500,
        isClosable: true
      })

      clearFields()
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts(){
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
    <Box>
      <Flex py={5} px={100} mb={5} bgColor='gray.200' alignItems='center'>
        Admin Dashboard
        <Spacer />
        <Button colorScheme='red' size='sm'>Logout</Button>
      </Flex>
      <Flex px={[10, 100]}>

        <Box p={5} w='70vw'>
          <Heading size='md'>products</Heading>
          <Products products={products}/>
          
        </Box>

        <Box p={5} borderRadius='xl' boxShadow='lg' w='25vw' h='100%' bgColor='gray.50'>
          <Heading size='md'>add product</Heading>
          <Divider />
          <Stack py={5} spacing='12px'>

            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Short Description</FormLabel>
              <Input value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Quantity</FormLabel>
              <NumberInput min={0} value={quantity} onChange={(value) => setQuantity(value)}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <NumberInput min={0} value={price} onChange={(value) => setPrice(value)}>
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Image Link</FormLabel>
              <Input value={image} onChange={(e) => setImage(e.target.value)} />
            </FormControl>
          </Stack>
          <Button w='100%' colorScheme='green' borderRadius='full' onClick={addProduct}>add product</Button>
        </Box>
      </Flex>
    </Box>
  )
}
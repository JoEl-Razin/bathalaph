import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  useNumberInput,
  HStack,
  Input,
  Spacer,
  Stack,
  Center,
} from '@chakra-ui/react'

import Header from '../../components/home/header'

import Trono from '../../assets/premium_trono.jpg'

export default function ProductPage() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({ step: 1, defaultValue: 1, min: 1, max: 5 })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <Box>
      <Header />
      <Flex >
        <Center bgColor='gray.50' p={5} m='auto' borderRadius='xl'>
          <Box boxSize='md'>
            <Image src={Trono} objectFit='cover' boxSize='full' borderRadius='xl' />
          </Box>

          <Stack boxSize='md' p={5}>
            <Stack spacing='5px'>
              <Heading size='lg'>Trono</Heading>
              <Text fontSize='lg' color='gray.600'>₱ 0000</Text>
            </Stack>
            <Spacer/>
            <Stack>
              <Text>Wasup</Text>
              <Text>Wasup</Text>
              <Text>Wasup</Text>
              <Text>Wasup</Text>
            </Stack>
            <Spacer />
            <Box>
              <Heading size='sm'>quantity</Heading>
              <HStack w='115px' bgColor='white' borderRadius='full' p={1} border='1px' borderColor='gray.200'>
                <Button {...dec} borderRadius='full' size='sm'>-</Button>
                <Input variant='unstyled'{...input} />
                <Button {...inc} borderRadius='full' size='sm'>+</Button>
              </HStack>
            </Box>
            <Spacer />
            <Button colorScheme='green' borderRadius='full'>add to cart</Button>
          </Stack>
        </Center>

      </Flex>
    </Box>
  )
}
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react'

import Trono from '../../assets/premium_trono.jpg'
import Mayari from '../../assets/mid_mayari.jpg'

export default function Landing() {
  return (
    <Box>
      <Box>
        <Center bgColor='gray.900' py={20} color='white'>
          <VStack spacing='12px'>
            <Heading size='2xl'>level up your gaming experience</Heading>
            <Text>A Philippine based brand gaming chairs</Text>
            <Button
              borderRadius='full'
              colorScheme='purple'
              onClick={() =>
                document.getElementById('all-products')
                  .scrollIntoView({ behavior: 'smooth' })}
                > view all products</Button>
          </VStack>
        </Center>
        <Box px={[10, 100, 250]} py={10}>
          <Heading size='md'>featured product</Heading>
          <Center my={5}>
            <HStack spacing='12px'>
              <Center h='30vw' w='40vw' bgImage={Trono} bgPos='center' bgSize='cover' borderRadius='xl'>
                <Button mt={250} borderRadius='full' size='lg' colorScheme='pink'>
                  Trono Premium
              </Button>
              </Center>
              <Center h='30vw' w='40vw' bgImage={Mayari} bgPos='center' bgSize='cover' borderRadius='xl'>
                <Button mt={250} borderRadius='full' size='lg' colorScheme='pink'>
                  Mayari
              </Button>
              </Center>
            </HStack>
          </Center>
        </Box>
      </Box>
    </Box>
  )
}
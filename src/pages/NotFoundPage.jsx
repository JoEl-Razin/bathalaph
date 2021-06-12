import {
  Center,
  Text,
  Heading,
  VStack,
} from '@chakra-ui/react'

export default function NotFoundPage() {
  return (
    <Center h='100vh'>
      <VStack>
        <Heading size='md'>Error 404</Heading>
        <Text>Page not found</Text>
      </VStack>
    </Center>
  )
}
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'

import { Card } from '../../components/admin/login-card'
import { LoginForm } from '../../components/admin/login-form'

export default function Admin() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
      py="12"
      px={{
        base: '4',
        lg: '8',
      }}
    >
      <Box maxW="md" mx="auto">

        <Heading mt="4" mb="8" textAlign="center" size="xl" fontWeight="extrabold">
          Login
        </Heading>

        <Card>
          <LoginForm />
        </Card>
      </Box>
    </Box>
  )
}
import {
  Box,
  Heading,
  Text,
  Stack,
  Divider,
} from '@chakra-ui/react'

import Header from '../../components/home/header'

export default function FAQs() {
  return (
    <Box>
      <Header />
      <Box px={250} py={25}>
        <Heading size='md' mb={10}>Frequently Asked Questions</Heading>

        <Stack spacing={10}>
          <Box>
            <Heading size='sm'>1. Where can I pick-up my order?</Heading>
            <Text>You can pick-up your order in our warehouse located in Sta. Lucia, Novaliches, Quezon City.</Text>
          </Box>
          <Divider/>
          <Box>
            <Heading size='sm'>2. How soon can I receive my order?</Heading>
            <Text>Due to the pandemic, we are currently on a pre-ordering method and delivery schedules are posted monthly.</Text>
          </Box>
          <Divider/>

          <Box>
            <Heading size='sm'>3. Do you provide warranty for your products?</Heading>
            <Text>We provide a 1-yr warranty on all functionality portions of the chair. Aesthetic defects and damage due to misuse of the chair are not covered.</Text>
            <Text>Please keep in mind that we reserve the right in determining if a benefit under the warranty can be claimed or not.</Text>
          </Box>
          <Divider/>

          <Box>
            <Heading size='sm'>4. Can I return the product if there are defects / malfunctions?</Heading>
            <Text>We accept replacement of parts given that the customer could provide proof of defects/malfunction (subject for approval since all products go through inspection before delivery)</Text>
            <Text>Parts should be returned in excellent condition and in original packaging. Otherwise, fees may apply.</Text>
            <Text>Validity period of return policy is up to 5 days after purchase</Text>
          </Box>
          <Divider/>

          <Box>
            <Heading size='sm'>5. Do you accept refund of unclaimed items?</Heading>
            <Text>We accept refund for unclaimed chairs or any bathala item but are subject to a 10% cancellation fee. (Note: This is to avoid joy reserver)</Text>
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}
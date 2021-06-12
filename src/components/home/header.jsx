import {
  Box,
  Center,
  Button,
  Flex,
  Image,
  Spacer,
  Heading,
  IconButton,
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/bathala_logo.png'
import ProductCart from './product-cart'

import { RiShoppingBag3Line } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex pos='sticky' top='0' z-index='2' p={3} bgColor='whiteAlpha.900'>
      <Center flex='1'>
        <Image borderRadius='full' boxSize='40px' src={Logo} m={2} />
        <Link to='/'>
          <Heading size='md'>Bathala Ph</Heading>
        </Link>
      </Center>
      <Spacer />
      <Center flex='1'>
        <HStack spacing='24px'>
          <Link to='/faqs'>
            <Button colorScheme='gray' variant='link'>FAQs</Button>
          </Link>
          <Link to='/cart'>
            <Button rightIcon={<RiShoppingBag3Line />} colorScheme='red' variant='link' size='lg'>Cart</Button>

          </Link>
        </HStack>
      </Center>

      <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
        <DrawerOverlay />
        <DrawerContent>
          <Flex alignItems='center'>
            <DrawerHeader>cart</DrawerHeader>
            <Spacer />
            <IconButton size='sm' borderRadius='full' colorScheme='red' mx={5} onClick={onClose} icon={<AiOutlineArrowRight />} />
          </Flex>

          <DrawerBody>
            <ProductCart />
          </DrawerBody>
          <DrawerFooter>
            <Box w='100%'>
              <Flex py={5}>
                <Heading size='sm' color='gray.600'>total price</Heading>
                <Spacer />
                <Heading size='sm'>₱ 0000</Heading>
              </Flex>
              <Flex>
                <Spacer />
                <HStack spacing='12px'>
                  {/* <Link to='/cart'>
                    <Button borderRadius='full' colorScheme='orange'>view cart</Button>
                  </Link> */}
                  <Button borderRadius='full' colorScheme='green' onClick={onClose}>check out</Button>
                </HStack>
              </Flex>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </Flex>
  )
}
import {
  Box,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  useToast,
} from '@chakra-ui/react'

import { CgTrash } from 'react-icons/cg'

export default function Products({ products }) {
  const toast = useToast()

  async function deleteProduct(id) {
    await fetch(`https://bathalaph.herokuapp.com/product/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/type'
      },
    }).then((res) => res.json())
      .then((result) => console.log(result))

    toast({
      title: 'Deleted Successfully',
      status: 'success',
      duration: 1500,
      isClosable: true
    })

    window.location.reload(true)
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Product Name</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          products.map((row) => {
            const id = row._id;

            return (
              <Tr key={row._id}>
                <Td>
                  <Box boxSize='40px'>
                    <Image src={row.image} objectFit='cover' boxSize='full' borderRadius='xl'/>
                  </Box>
                </Td>
                <Td>{row.name}</Td>
                <Td>{row.quantity}</Td>
                <Td>{row.price}</Td>
                <Td><IconButton borderRadius='full' variant='ghost' colorScheme='red' icon={<CgTrash />} onClick={() => deleteProduct(id)}/></Td>
              </Tr>
            )
          })
        }
      </Tbody>
    </Table>
  )
}
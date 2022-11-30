import { AddIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, Flex, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { useGetAllSurveysQuery } from '../../resources/MhealthApi';

const Surveys = () => {

    const {data}=useGetAllSurveysQuery()
    console.log(data)
    return (
       <Flex
       flexDir='column'
       >

<TableContainer>
  <Table >
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
        
      <Tr>
        <Th>FirstName</Th>
        <Th>LastName</Th>
        <Th>E-mail</Th>
        <Th>Phone</Th> 

      </Tr>
    </Thead>


    <Tbody>
     {data?.survey?.map((user)=>{
        return(
              <Tr key={user?.id}>
        <Td>{user?.firstName}</Td>
        <Td>{user?.lastName} </Td>
        <Td >{user?.email}</Td>
        <Td >{user?.phone}</Td>
        <Td> 
            <Stack direction="row">
            <Button _hover={{bgColor:'#28a745'}}  size='xs' bgColor='#28a745'  color="white"   leftIcon={<ViewIcon/>}>View</Button>
            <Button  _hover={{bgColor:'#28a745'}}  size='xs'  bgColor='#28a745' color="white"   leftIcon={<AddIcon/>}>Add in group</Button>
          </Stack>
        </Td>
      </Tr> 
        )
     })}
      

    </Tbody>


    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
      
    </Tfoot>
  </Table>
</TableContainer>
       </Flex>
    );
};

export default Surveys;
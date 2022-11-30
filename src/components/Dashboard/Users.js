import { Flex, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import {CheckIcon,AddIcon,ViewIcon} from '@chakra-ui/icons'
import { useGetAllUsersQuery } from '../../resources/MhealthApi';
const Users = () => {

    const {data}=useGetAllUsersQuery()
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
        <Th>Appproved</Th> 
      </Tr>
    </Thead>


    <Tbody>
     {data?.users?.map((user)=>{
            return (
                <Tr key={user?.id}>
        <Td>{user?.firstName}</Td>
        <Td>{user?.lastName} </Td>
        <Td >{user?.email}</Td>
        <Td >{(user?.isApproved)?'Yes':'No'}</Td>
        <Td> 
            <Stack direction="row">
                <Button _hover={{bgColor:'#28a745'}}  size='xs' bgColor='#28a745'  color="white"   leftIcon={<ViewIcon/>}>View</Button>
            <Button  _hover={{bgColor:'#28a745'}}  size='xs'  bgColor='#28a745' color="white"   leftIcon={<AddIcon/>}>Add in group</Button>
             <Button _hover={{bgColor:'#28a745'}}   size='xs' bgColor='#28a745'  color="white" leftIcon={<CheckIcon/>}>Approve</Button>
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

export default Users;
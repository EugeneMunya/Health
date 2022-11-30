import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {Divider, Text, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Spinner } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react';
import { useGetGroupsQuery, useNewGroupMutation } from '../../resources/MhealthApi';
import {MinusIcon} from '@chakra-ui/icons'

const Groups = () => {

    const {data:dataG,refetch,isFetching}=useGetGroupsQuery()
    const [newGroup]=useNewGroupMutation()

    const [group,setGroup]=useState({name:'',description:''})
    const [openMd,setOpenMd]=useState(false)

    const handleChange = (e)=>{
        console.log(e.target.value)
        const {name,value}=e.target
        setGroup(g=>({...g,[name]:value}))
    }
    const handleSubmit=()=>{
        newGroup(group)
        refetch()
        setOpenMd(!openMd)
    }

    return (
        <Flex
        flexDir='column'
        gap={10}
        >
  <Button onClick={()=>setOpenMd(!openMd)} w={200} _hover={{bgColor:'#28a745'}} bgColor='#28a745'  color="white" size='sm' leftIcon={<AddIcon/>}>
    Create new group
  </Button>
  <Flex
  flexDir='column'
  >
    {isFetching?<Spinner/>:''}
    <TableContainer>
  <Table >
    <TableCaption></TableCaption>
    <Thead>
        
      <Tr>
        <Th>Group Name</Th>
    
      </Tr>
    </Thead>


    <Tbody>
    
    {dataG?.groups?.map((group)=>{
        return(
              <Tr key={group?.id}>
        <Td border='0px'>
    <Accordion allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bgColor: 'purple.400', color: 'white'}}>
        <Box flex='1' textAlign='left' w={400} >
          {group?.name}{' '} ({group?.description})
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Flex gap={20}>
      {group?.users?.map(user=>{
        return (
            <Fragment key={user?.email}>
                <Text>{user?.firstName}{" "}{user?.lastName}</Text>
                <IconButton _hover={{bgColor:'red.300'}} bgColor='red.300' color='#fff' size='xs' aria-label='remove-user' icon={<MinusIcon/>} />
                <Divider/>
            </Fragment>
        )
      })}
      </Flex>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

        </Td>
        
        <Td border='0px'> 
            <Stack direction="row">
            <Button _hover={{bgColor:'#28a745'}}  size='xs' bgColor='#28a745'  color="white"   leftIcon={<EditIcon/>}>Edit</Button>
            <Button  _hover={{bgColor:'#28a745'}}  size='xs'  bgColor='#28a745' color="white"   leftIcon={<DeleteIcon/>}>Delete</Button>
          </Stack>
        </Td>
      </Tr> 
        )
    })}


    </Tbody>


    <Tfoot> 
    </Tfoot>
  </Table>
</TableContainer>

  </Flex>
  <Modal isOpen={openMd} onClose={()=>setOpenMd(!openMd)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
                <Input onChange={(e)=>handleChange(e)} type='text' name='name' placeholder='Group name' />
                <Input onChange={(e)=>handleChange(e)}   type='text' name='description' placeholder='Description' />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} size='sm' colorScheme='blue' mr={3} >
              Save
            </Button>
            <Button onClick={()=>setOpenMd(!openMd)} size='sm' colorScheme='gray' mr={3} >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
 </Flex>
    );
};

export default Groups;
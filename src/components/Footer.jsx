import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'

const Footer = () => {
    return (
        <>
        <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      className='footer'
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text className='studentName'>Helmi Jauhar Irsyad</Text>
        <Text className='studentID'>FE4942191</Text>
        
      </Container>
    </Box>
        </>
    );
};

export default Footer;

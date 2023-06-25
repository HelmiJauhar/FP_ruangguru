import {
  Link, 
  Box, 
  AbsoluteCenter, 
  Button,
  Heading,
  Image
} from '@chakra-ui/react'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <div>
        <Box position='fixed' h='100%' w='100%' color='white'>
        <Image src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        filter='auto'
        brightness='40%'
        position='fixed'
        h='100%'
        w='100%'
        ></Image>
          <AbsoluteCenter axis='both'>
          <Heading>Student Portal</Heading>
            <Link href='/student'>
              <Button data-testid='student-btn' colorScheme='teal' size='md'>
                Menuju ke data student
              </Button>
            </Link>
          </AbsoluteCenter>
          <Footer/>
        </Box>
      </div>
    </>


  )
};

export default Home;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from '../components/Footer'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select
} from '@chakra-ui/react'

const AddStudent = () => {
    const [fullname, setFullname] = useState("")
    const [profilePicture, setProfilePicture] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthDate, setBirthDate] = useState("")
    const [gender, setGender] = useState("")
    const [programStudy, setProgramStudy] = useState("")
    let faculty = ''
    let pindah = useNavigate()

    if (programStudy === 'Ekonomi' || programStudy === 'Manajemen' || programStudy === 'Akutansi') {
        faculty = 'Fakultas Ekonomi'
    }
    if (programStudy === 'Administrasi Publik' || programStudy === 'Administrasi Bisnis' || programStudy === 'Hubungan Internasional') {
        faculty = 'Fakultas Ilmu Sosial dan Politik'
    }
    if (programStudy === 'Teknik Sipil' || programStudy === 'Arsitektur') {
        faculty = 'Fakultas Teknik'
    }
    if (programStudy === 'Matematika' || programStudy === 'Fisika' || programStudy === 'Informatika') {
        faculty = 'Fakultas Teknologi Informasi dan Sains'
    }

    const data = {
        fullname,
        profilePicture,
        address,
        phoneNumber,
        birthDate,
        gender,
        faculty,
        programStudy
    }
    console.log(data);

    const postStudent = async () => {
        await fetch('http://localhost:3001/student', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
        pindah('/student')
    }

    const handleSubmit = () => {
        postStudent()
    }

    return (
        <>
            <NavBar />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Add Student Form
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            Add new student data in this form
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input type="text" data-testid='name'
                    onChange={(e) => setFullname(e.target.value)}/>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Profile Picture URL</FormLabel>
                                        <Input type="text" data-testid='profilePicture'
                    onChange={((e) => setProfilePicture(e.target.value))}/>
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="address" isRequired>
                                <FormLabel>Address</FormLabel>
                                <Input type="text" data-testid='address'
                    onChange={((e) => setAddress(e.target.value))}/>
                            </FormControl>
                            <FormControl id="phoneNumber" isRequired>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="text" data-testid='phoneNumber'
                    onChange={((e) => setPhoneNumber(e.target.value))}/>
                            </FormControl>
                            <FormControl id="birthDate" isRequired>
                                <FormLabel>Birth Date</FormLabel>
                                <Input type="date" data-testid='date'
                    onChange={(e) => setBirthDate(e.target.value)}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Select name="Gender" id="input-gender" onChange={(e) => setGender(e.target.value)}
                                    data-testid='gender'>
                                    <option value="">-SELECT GENDER-</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Program Study</FormLabel>
                                <Select name="prody" id="input-prody" onChange={(e) => setProgramStudy(e.target.value)}
                                    data-testid='prody'>
                                    <option value="">-SELECT PROGRAM STUDY-</option>
                                    <option value="Ekonomi">Ekonomi</option>
                                    <option value="Manajemen">Manajemen</option>
                                    <option value="Akutansi">Akuntansi</option>
                                    <option value="Administrasi Publik">Administrasi Publik</option>
                                    <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                                    <option value="Hubungan Internasional">Hubungan Internasional</option>
                                    <option value="Teknik Sipil">Teknik Sipil</option>
                                    <option value="Arsitektur">Arsitektur</option>
                                    <option value="Matematika">Matematika</option>
                                    <option value="Fisika">Fisika</option>
                                    <option value="Informatika">Informatika</option>
                                </Select>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'teal.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'green.500',
                                    }}
                                    onClick={handleSubmit}
                                    >
                                    Submit
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        <Footer/>
        </>
    );
};

export default AddStudent;

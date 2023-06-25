import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
    Select,
    Avatar
} from '@chakra-ui/react'

const getDataById = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}

const EditStudent = () => {
    const { id } = useParams()
    const url = `http://localhost:3001/student/${id}`
    const [dataById, setDataById] = useState([])
    const [isLoading, setLoading] = useState(false)

    const [fullname, setFullname] = useState(dataById.fullname)
    const [address, setAddress] = useState(dataById.address)
    const [phoneNumber, setPhoneNumber] = useState(dataById.phoneNumber)
    const [birthDate, setBirthDate] = useState(dataById.birthDate)
    const [gender, setGender] = useState(dataById.gender)
    const [programStudy, setProgramStudy] = useState(dataById.programStudy)
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

    const bodyData = {
        fullname,
        profilePicture: dataById.profilePicture,
        address,
        phoneNumber,
        birthDate,
        gender,
        faculty,
        programStudy
    }

    useEffect(() => {
        setLoading(true)
        const fetchingData = async () => {
            const data = await getDataById(url)
            setDataById(data)
            setLoading(false)
        }
        fetchingData()
    }, [url])

    const putData = async () => {
        await fetch(`http://localhost:3001/student/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
        pindah('/student')
    }

    const handleSubmit = () => {
        putData()
    }

    return (
        <>
            {/* {isLoading && <Text>Loading ...</Text>} */}

            <div>
                <NavBar />
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue('gray.50', 'gray.800')}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'} textAlign={'center'}>
                                Edit Student Form
                            </Heading>
                            <Text fontSize={'lg'} color={'gray.600'}>
                                Edit student data that already exist below
                            </Text>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}
                        >
                            {!isLoading ? (
                                <Stack spacing={4}>
                                    <FormControl>
                                        <HStack>
                                            <Box>

                                                <FormLabel>Full Name</FormLabel>
                                                <Input type="text" data-testid='name' defaultValue={dataById.fullname}
                                                    onChange={(e) => setFullname(e.target.value)} />

                                            </Box>
                                            <Box>
                                                <Avatar size='xl' src={dataById.profilePicture} ml={10}></Avatar>
                                            </Box>
                                        </HStack>

                                        <FormLabel>Address</FormLabel>
                                        <Input type="text" data-testid='address' defaultValue={dataById.address}
                                            onChange={((e) => setAddress(e.target.value))} />

                                        <FormLabel>Phone Number</FormLabel>
                                        <Input type="text" data-testid='phoneNumber' defaultValue={dataById.phoneNumber}
                                            onChange={((e) => setPhoneNumber(e.target.value))} />

                                        <FormLabel>Birth Date</FormLabel>
                                        <Input type="date" data-testid='date' defaultValue={dataById.birthDate}
                                            onChange={(e) => setBirthDate(e.target.value)} />


                                        <FormLabel>Gender</FormLabel>
                                        <Select name="Gender" id="input-gender" defaultValue={dataById.gender} onChange={(e) => setGender(e.target.value)}
                                            data-testid='gender'>
                                            <option value="">-SELECT GENDER-</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Select>


                                        <FormLabel>Program Study</FormLabel>
                                        <Select name="prody" id="input-prody" defaultValue={dataById.programStudy} onChange={(e) => setProgramStudy(e.target.value)}
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

                                        <Stack spacing={10} pt={2}>
                                            <Button
                                                loadingText="Submitting"
                                                size="lg"
                                                bg={'blue.400'}
                                                color={'white'}
                                                _hover={{
                                                    bg: 'blue.500',
                                                }}
                                                onClick={handleSubmit}
                                                data-testid='edit-btn'
                                            >
                                                Submit
                                            </Button>
                                        </Stack>
                                    </FormControl>
                                </Stack>
                            ) : (
                                <Text>Loading ...</Text>
                            )}

                        </Box>
                    </Stack>
                </Flex>
                <Footer />
            </div>
        </>
    );
};

export default EditStudent;

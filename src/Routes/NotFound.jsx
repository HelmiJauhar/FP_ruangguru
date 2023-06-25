import { useNavigate } from "react-router-dom";
import {
    Link,
    Box,
    AbsoluteCenter,
    Button,
    Heading
} from '@chakra-ui/react'


const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <Box position='fixed' h='100%' w='100%' bgColor='red' color='white'>
                    <AbsoluteCenter axis='both'>
                        <Heading margin='10px'>404 | Not Found</Heading>
                        <Link href='/student'>
                            <Button data-testid='back' colorScheme='teal' size='lg'
                                onClick={() => navigate(-1)}>
                                Kembali ke halaman sebelumnya
                            </Button>
                        </Link>
                    </AbsoluteCenter>
                </Box>
            </div>
        </>
    );
};

export default NotFound;

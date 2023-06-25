import {
    Link,
    Flex,
    Button,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const NavBar = () => {
    const [display, changeDisplay] = useState('none')
    return (
        <>
            <Flex>
                <Flex
                    position="absolute"
                    top="1rem"
                    left="5rem"
                    align="center"
                >
                    {/* Desktop */}
                    <Flex
                        display={['none', 'none', 'flex', 'flex']}
                    >
                        <Link href="/" data-testid='home-page'>
                            <Button
                                variant="ghost"
                                aria-label="Home"
                                my={5}
                                w="100%"
                            >
                                Home
                            </Button>
                        </Link>

                        <Link href="/student" data-testid='student-page'>
                            <Button
                                variant="ghost"
                                aria-label="About"
                                my={5}
                                w="100%"
                                data-testid='student-btn'
                            >
                                All Student
                            </Button>
                        </Link>

                        <Link href="/add" data-testid='add-page'>
                            <Button
                                variant="ghost"
                                aria-label="Contact"
                                my={5}
                                w="100%"
                            >
                                Add Student
                            </Button>
                        </Link>
                    </Flex>

                    {/* Mobile */}
                    <IconButton
                        aria-label="Open Menu"
                        size="lg"
                        mr={2}
                        icon={
                            <HamburgerIcon />
                        }
                        onClick={() => changeDisplay('flex')}
                        display={['flex', 'flex', 'none', 'none']}
                    />
                    
                </Flex>

                {/* Mobile Content */}
                <Flex
                    w='100vw'
                    display={display}
                    bgColor="gray.50"
                    zIndex={20}
                    h="100vh"
                    pos="fixed"
                    top="0"
                    left="0"
                    overflowY="auto"
                    flexDir="column"
                >
                    <Flex justify="flex-end">
                        <IconButton
                            mt={2}
                            mr={2}
                            aria-label="Open Menu"
                            size="lg"
                            icon={
                                <CloseIcon />
                            }
                            onClick={() => changeDisplay('none')}
                        />
                    </Flex>

                    <Flex
                        flexDir="column"
                        align="center"
                    >
                        <Link href="/" >
                            <Button
                                variant="ghost"
                                aria-label="Home"
                                my={5}
                                w="100%"
                            >
                                Home
                            </Button>
                        </Link>

                        <Link href="/student" >
                            <Button
                                variant="ghost"
                                aria-label="About"
                                my={5}
                                w="100%"
                            >
                                All Student
                            </Button>
                        </Link>

                        <Link href="/add" >
                            <Button
                                variant="ghost"
                                aria-label="Contact"
                                my={5}
                                w="100%"
                            >
                                Add Student
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </>

    );
};

export default NavBar;

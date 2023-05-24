import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={16} />
    </HStack>
  )
}

export default NavBar
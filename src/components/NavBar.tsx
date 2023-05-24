import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorSchemeToggler from './ColorSchemeToggler'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding={'10px'}>
      <Image src={logo} boxSize={16} />
      <ColorSchemeToggler />
    </HStack>
  )
}

export default NavBar
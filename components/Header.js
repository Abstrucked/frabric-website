import { Box, Link } from '@chakra-ui/react'
export default function Header() {
    return (
        <Box w='100%'>
            <Box as='nav' bg='#ffffff99' p={6} borderBottom='solid 1px #00000022'>
                <Link href='#'>
                    Link
                </Link>        
            </Box> 
            <Box bg='white' h='400px' p={6}>
            HERO
            </Box>
        </Box>
    )
}
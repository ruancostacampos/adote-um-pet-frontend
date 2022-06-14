import {Link, Box} from '@mui/material'
import NextLink from 'next/link'

import {
    AdminHeaderContainer,
    Logo, LinksContainer
} from './AdminHeader.style'


export default function AdminHeader(){
    return (
        <AdminHeaderContainer>
            <div>
               <Link component={NextLink} href={'/'}>
                  <Logo src={'../images/logo.svg'} alt={'Adote um pet'} />
               </Link>
                <LinksContainer>
                  <Link component={NextLink} href={'/pets/new'}>
                    <a>Cadastrar Pet</a>
                  </Link>
                  <Link component={NextLink} href={'/pets/report'}>
                    <a>Relatório 
                    <Box component={'span'} 
                      sx={{display: {sm: 'initial', xs: 'none'}}}>
                      de Adoção
                    </Box>
                    </a>
                  </Link>
                </LinksContainer>
            </div>
        </AdminHeaderContainer>
    )
}
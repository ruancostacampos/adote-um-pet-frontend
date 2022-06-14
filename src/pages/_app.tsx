import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@mui/material'
import AdminHeader from '../ui/components/AdminHeader/AdminHeader'
import Header from '../ui/components/Header/Header'
import light from '../ui/themes/light'
import {useRouter} from 'next/router'
import Footer from '../ui/components/Footer/Footer'


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return(
  <ThemeProvider theme={light}>
    {router.pathname === '/' ? <Header/> : <AdminHeader/>}
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
  )
  
}

export default MyApp

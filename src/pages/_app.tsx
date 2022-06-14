import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@mui/material'
import AdminHeader from '../ui/components/AdminHeader/AdminHeader'
import Header from '../ui/components/Header/Header'
import light from '../ui/themes/light'
import {useRouter} from 'next/router'
import Footer from '../ui/components/Footer/Footer'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return(
  <ThemeProvider theme={light}>

  <Head>
    <title>Adote um Pet</title>
  </Head>

  <div className="pageContainer">

    <div className="header">
      {router.pathname === '/' ? <Header/> : <AdminHeader/>}
    </div>

    <div className="mainContent">
      <Component {...pageProps} />
    </div>

    <div className="footer">
      <Footer/>
    </div>

  </div>
  </ThemeProvider>
  )
  
}

export default MyApp

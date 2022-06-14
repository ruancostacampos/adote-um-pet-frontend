import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'
import {Dialog, DialogActions, TextField, Grid, Button, Snackbar} from '@mui/material'

// Importing hooks
import {useIndex} from '../data/hooks/pages/useIndex'


const Home: NextPage = () => {

  const {
    petList,
    selectedPet, setSelectedPet,
    email, setEmail,
    monthlyAmount, setMonthlyAmount,
    message, setMessage,
    adopt,
  } = useIndex()

  return (
    <div>
      
      <Title 
        title=""
        subtitle={<span>Com um pequeno valor mensal, você pode <strong>adotar um pet virtualmente.</strong></span>}
      />

      <List 
        pets={petList}
        onSelect={(pet) => setSelectedPet(pet)}
      />
      
      { /*  ======== Adoption dialog ========   */}

      <Dialog 
        open={selectedPet !== null}
        fullWidth
        PaperProps={ {sx: {p: 5}} }
        onClose={ () => setSelectedPet(null) }
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label={'E-mail'} 
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth 
            /> 
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label={'Quantia por mês'} 
              type={'number'}
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(e.target.value)}
              fullWidth 
            /> 
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button 
            color={'secondary'}
            onClick={() => setSelectedPet(null)}
          >Cancelar</Button>
          <Button 
            variant={'contained'}
            onClick={adopt}
          >Confirmar Adoção</Button>
        </DialogActions>

      </Dialog>

      { /*  ======== End Adoption dialog ========   */}

      <Snackbar 
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />


    </div>

    
  )
}

export default Home

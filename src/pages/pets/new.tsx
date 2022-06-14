import { NextPage } from "next"
import { useNew } from "../../data/hooks/pages/pets/useNew"
import Tittle from '../../ui/components/Title/Title'
import {Paper, Grid, TextField, Button, Snackbar} from '@mui/material'

const New: NextPage = () =>{

    const { name, history, imageUrl, message,
      setName, setHistory, setImageUrl, 
      setMessage, registerPet} = useNew()

    return(
        <>
          <Tittle
            title="Cadastro de Pets para adoção"
            subtitle="Preencha os dados do novo pet"
          />

          <Paper sx={{maxWidth: 970, mx: 'auto', p: 5}}>
            <Grid container spacing={3}>
             
              <Grid item xs={12}>
                <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Nome"
                placeholder="Digite o nome do pet"
                fullWidth
              />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  value={history}
                  onChange={(e) => setHistory(e.target.value)}
                  label="História"
                  placeholder="Digite a história do pet"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  label="Imagem (URL)"
                  placeholder="Digite a url da imagem"
                  fullWidth
                />

                <Button
                  variant={'contained'}
                  color={'secondary'}
                  sx={{mt: 2}}
                  component={'a'}
                  href={'https://imgur.com/upload'}
                  target="_blank"
                >Carregar imagem</Button>
              </Grid>

              <Grid item xs={12} sx={{textAlign: 'center'}}>
                <Button 
                  variant={'contained'}
                  fullWidth
                  sx={{maxWidth: {md: 200}}}
                  onClick={registerPet}
                >Cadastrar</Button>
              </Grid>


            </Grid>
        
          </Paper>

          <Snackbar 
            open={message.length > 0}
            autoHideDuration={2500}
            onClose={() => setMessage('')}
            message={message}
          />


        </>
    )
}

export default New
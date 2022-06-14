import { AxiosError } from 'axios'
import {useState} from 'react'
import { ApiService } from '../../../services/ApiService'

export function useNew(){

    const [name, setName] = useState('')
    const [history, setHistory] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [message, setMessage] = useState('')

    function registerPet(){
      if(validateForm()){
        ApiService.post('/pets', {
          name, 
          description: history, 
          image: imageUrl 
        }).then(() => {
            clearFields()
            setMessage('Pet adicionado!')
        }).catch((error) => {

            const errorMessage = error.response?.data.message
            
            if(errorMessage != undefined)
            setMessage(errorMessage);
        })
      }else{
        setMessage('Preencha todos os campos!')
      }
    }

    function validateForm(){
      return (name.length > 2 && 
      history.length > 20 && 
      imageUrl.length > 6)
    }

    function clearFields(){
      setName('')
      setHistory('')
      setImageUrl('')
    }

    return {
        name, history, imageUrl, message,
        setName, setHistory, setImageUrl, 
        setMessage, registerPet
    }

}
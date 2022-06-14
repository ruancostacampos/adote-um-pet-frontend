import { AxiosError } from 'axios'
import {useState, useEffect} from 'react'
import {Pet} from '../../@types/Pet'
import { ApiService } from '../../services/ApiService'

export function useIndex(){

    const [petList, setPetList] = useState<Pet[]>([])

    const [selectedPet, setSelectedPet] = useState<Pet | null>(null)

    const [email, setEmail] = useState('')
    const [monthlyAmount, setMonthlyAmount] = useState('')
    const [message, setMessage] = useState('')


    useEffect( () => {
      ApiService.get('/pets')
      .then( (res) => {
        setPetList(res.data)
      })
    }, [])

    useEffect ( () => {
      if(selectedPet === null){
        clearFields()
      }
    }, [selectedPet])
 
    function adopt(){
        if(selectedPet !== null){
          if(adoptValidation()){
           
            ApiService.post('/adoptions', {
              email,
              monthlyAmount,
              petID:  selectedPet._id 
            }).then( () => {
              
                setSelectedPet(null)
                setMessage('Parabéns, você adotou um pet!')

            }).catch( (error) => {
                error.response?.data && setMessage(error.response?.data.error)
                error.response?.data.error.message && setMessage(error.response?.data.error.message)
            })

          }else{
            setMessage('Preencha todos os campos corretamente.')
          }
        }
    }

    function adoptValidation(){
        return email.length > 7 && monthlyAmount.length > 0
    }

    function clearFields(){
        setEmail(''),
        setMonthlyAmount('')
    }

    return {petList, selectedPet, setSelectedPet, email, setEmail,
            monthlyAmount, setMonthlyAmount, message, setMessage,
            adopt}
}
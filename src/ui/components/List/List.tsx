import {
    ListStyled, ListItem, Image, Info, Name, Description
} from './List.style'

import {Button} from '@mui/material'
import {Pet} from '../../../data/@types/Pet'

//importing service to control the description text lenght
import {TextService} from '../../../data/services/TextService'

interface ListProps{
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListProps){

    const descriptionMaxLenght = 200;

    return (
      <ListStyled>
        {props.pets.map( pet => (
          <ListItem key={pet._id}>
          <Image src={pet.image} alt={pet.name}/>
          <Info>
          <Name>{pet.name}</Name> 
          <Description>
              { TextService.limitText(pet.description, descriptionMaxLenght)}
          </Description>
          <Button 
            variant={'contained'} 
            fullWidth
            onClick={() => props.onSelect(pet)}
          >Adotar</Button>
          </Info>
          </ListItem>
        ))}
      </ListStyled> 
    )
}
import { styled } from '@mui/material'

export const FooterContainer = styled('footer')`
  height: 80px;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #F6F6F6;
  ${ ({theme})=> theme.breakpoints.down('sm') } {
      height: 130px;
  }
  
  ${ ({theme})=> theme.breakpoints.down('md') } {
    flex-direction: column;
  }

  .hide{
    ${ ({theme})=> theme.breakpoints.down('sm') } {
      display: none;
    }
  }

`
export const Logo = styled('img')``


export const SocialMediaList = styled('ul')`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  ${ ({theme})=> theme.breakpoints.down('sm') } {
    justify-content: space-around;
    flex-direction: column;
  }
`

export const SocialMediaItem = styled('li')`

  a{
    display: flex;
    align-items: center;
    padding: ${({theme}) => theme.spacing(1)};

    &:hover{
      color: ${({theme}) => theme.palette.text.primary}
    }
  }

  &:hover{
    img{
    filter: brightness(0) saturate(100%) invert(20%) sepia(97%) saturate(7474%) hue-rotate(284deg) brightness(100%) contrast(100%);
    }
  }


`


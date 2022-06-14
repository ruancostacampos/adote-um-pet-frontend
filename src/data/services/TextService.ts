export const TextService = {
  limitText(text: string, maxLenght: number) : string{
    //verify if text is too long and if yes return only a part of text
    if(text.length < maxLenght){
        return text;
    }

    return text.slice(0, maxLenght) + '...';
  }
}
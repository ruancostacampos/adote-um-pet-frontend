import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_BASEURL;

export const ApiService = axios.create({

  

  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})
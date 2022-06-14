import { useState, useEffect } from 'react'
import { Report } from '../../../@types/Report'
import { ApiService } from '../../../services/ApiService'

export function useReport(){
  const [reports, setReports] = useState<Report[]>([])

  useEffect(() => {
    ApiService.get('/adoptions').then( (res) => {
      setReports(res.data)    
    })
  }, [])

  return reports
}
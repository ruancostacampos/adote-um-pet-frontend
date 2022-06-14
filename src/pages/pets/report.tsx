import { NextPage} from 'next'
import Title from '../../ui/components/Title/Title'
import {Table, TableHead, 
  TableRow, TableContainer, 
  TableCell, TableBody,
  Paper} from '@mui/material'

import { useReport } from '../../data/hooks/pages/pets/useReport'

const Report: NextPage = () => {

    const reports = useReport()

    return (
      <>
        <Title  
          title="Relatório de adoção."
          subtitle="Veja a lista de pets adotados"
        />

        <TableContainer 
          component={Paper}
          sx={{maxWidth: 830, mx: 'auto', p: {xs: 3, md: 5}}}
        >
          <Table>
            
            <TableHead>
              <TableRow>
                <TableCell>Pet</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell align={'right'}>Valor mensal</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
                {reports.map((report) => (
                  <TableRow key={report._id}>
                    <TableCell>{report.pet.name}</TableCell>
                    <TableCell>{report.email}</TableCell>
                    <TableCell align="right">{report.monthlyAmount}</TableCell>
                  </TableRow>                 
                ) )}
            </TableBody>

          </Table>
        </TableContainer>

      </>
    )
}

export default Report
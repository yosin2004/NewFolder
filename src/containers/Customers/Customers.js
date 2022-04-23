import axios from "axios";
import { useState , useEffect} from "react" 
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Customers(props) {

  const [user, setUser] = useState([])
  const getUser = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users") 
      setUser(data, "data")
      console.log(data)

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  
     return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((elem) => (
            <TableRow
              key={elem.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{elem.id}</TableCell>
              <TableCell component="th" scope="row">
                {elem.name}
              </TableCell>
              <TableCell align="right">{elem.name}</TableCell>
              <TableCell align="right">{elem.username}</TableCell>
              <TableCell align="right">{elem.email}</TableCell>
              <TableCell align="right">{elem.phone}</TableCell>
              <TableCell align="right">{elem.wibsite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Customers;

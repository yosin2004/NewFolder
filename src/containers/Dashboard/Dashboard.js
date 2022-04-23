import React from "react";
import axios from "axios"
import { useState , useEffect} from "react"
import ImgMediaCard from "../../components/Cards/Cards";

function Dashboard() {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    try {
      const { data } = await axios.get ("https://reqres.in/api/users?page=1") 
      setUsers(data.data)
      console.log(data.data, "data")
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
    <h1>Today</h1>
    {users.map(elem => {
      return <div key={elem.id}>
         <ImgMediaCard img={elem.avatar} first_name={elem.first_name} email={elem.first_name}/>
        </div>
    })}
    </>
  );
}

export default Dashboard;

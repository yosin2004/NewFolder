import React from "react";
import axios from "axios";
import { useState , useEffect} from "react"  
import Copyright from "../../components/Copright/Copyright";

function Orders() {
  const [user, setUser] = useState([])
  const getUser = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts") 
      setUser(data , "data")
      console.log(data)

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
    {user.map(elem => {
      return <div key={elem.id}>
         <Copyright userId={elem.userId} title={elem.title} body={elem.body} />
         <p>{elem.userId}</p>
         <p>{elem.title}</p>
         <p>{elem.body}</p>
         <p>{elem.id}</p>
        </div>
    })}
    </>
  );
}

export default Orders;

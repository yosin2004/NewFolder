import { useState } from "react";
import "./App.css";
import Chart from "./Components/Chart";
import Dashboard from "./Components/Dashboard";
import Deposits from "./Components/Deposits";
import listItems from "./Components/listItems"
import Orders from "./Components/Orders";
import Title from "./Components/Title"


function App() {
return(
    <>
    <Chart/>
    <Dashboard/>
    <Deposits/>
    <listItems/>
    <Orders/>
    <Title/>
    </>
)
}

export default App;
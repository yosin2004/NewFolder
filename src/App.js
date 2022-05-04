import "antd/dist/antd.min.css";
import "./App.css";
import Layout from "./layout/OwnLayout";
import Order from "./container/Orders/Order";
import { Routes, Route } from "react-router-dom";
import Users from "./container/Users/Users";
import { Counter } from "./container/Counter/Counter";
import Todos from "./container/Todos/Todos";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/users" element={<Users />} />
          <Route path="/orders" element={<Order />} />
        </Route>
      </Routes>
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;
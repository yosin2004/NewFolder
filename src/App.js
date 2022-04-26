import "antd/dist/antd.min.css";
import "./App.css";
import Layout from "./layout/OwnLayout";
import Order from "./container/Orders/Order";
import { Routes, Route } from "react-router-dom";
import Users from "./container/Users/Users";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/users" element={<Users />} />
          <Route path="/orders" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Products from "./components/Products"
import Users from "./components/Users"
import CreateUser from "./components/CreateUser"
import CreateProduct from "./components/CreateProduct"
import EditUser from "./components/EditUser"
import EditProduct from "./components/EditProduct"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={<Users />}></Route>

        <Route path='/products'>
          <Route index element={<Products />}></Route>
          <Route path='create' element={<CreateProduct />}></Route>
          <Route path='edit'>
            <Route path=':id' element={<EditProduct />}></Route>
          </Route>
        </Route>

        <Route path='/users'>
          <Route index element={<Users />}></Route>
          <Route path='create' element={<CreateUser />}></Route>
          <Route path='edit/'>
            <Route path=':id' element={<EditUser />}></Route>
          </Route>
        </Route>        

      </Routes>
    </div>
  );
}

export default App;

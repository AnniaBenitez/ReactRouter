import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ListUsersContext } from "./UsersContext"
import axiosInstance from "../libs/axios"
import "../styles/Forms.css"
import {Form, Col, Row, Button} from 'react-bootstrap/';

function CreateUser() {

    const {userList, setUserList} = useContext(ListUsersContext)

    const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
        email: "",
    })

    const createUser = async () => {
        const res = await axiosInstance.post('/users', userInfo)
        if (res.status != 201) return
        const newUser = {
            id: res.data.id,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            email: res.data.email,
            avatar: "./img/unknown.jpg"
        }
        setUserList([...userList, newUser])
        alert("Guardado!!")
    }

    const onChangeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="editContainer">
      <Form className="formulario">  
        <h2 className="titulo-form">Create User</h2>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm="2">First Name</Form.Label>
          <Col sm="10">
            <Form.Control name="first_name" type="text" placeholder="First Name" onChange={(e)=>{onChangeHandler(e)}} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formLastName">
          <Form.Label column sm="2">Last Name</Form.Label>
          <Col sm="10">
            <Form.Control name="last_name" type="text" placeholder="Last Name" onChange={(e)=>{onChangeHandler(e)}} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm="2">Email</Form.Label>
          <Col sm="10">
            <Form.Control name="email" type="email" placeholder="Email" onChange={(e)=>{onChangeHandler(e)}} />
          </Col>
        </Form.Group>
        <div className="optionButtons">
          <Button variant="primary" onClick={()=>{createUser()}}>Create</Button>
          <Link to={"/"}><Button className="deleteButton" variant="secondary">Back</Button></Link>
        </div>
      </Form>
    </div>
  )
}

export default CreateUser
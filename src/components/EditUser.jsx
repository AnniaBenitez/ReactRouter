import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axiosInstance from "../libs/axios";
import { useEffect, useState, useCallback } from "react";
import { useContext } from "react";
import "../styles/Forms.css"
import {Form, Col, Row, Button} from 'react-bootstrap/';
import { ListUsersContext } from "./UsersContext";

export default function EditUser() {

  const {userList, setUserList} = useContext(ListUsersContext)

  const {id} = useParams()
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
  })

  const editUser = useCallback(async () => {
    const res = await axiosInstance.put(`/users/${id}`, userInfo)
    if (res.status != 200) return
    const newUserInfo = await res.data
    setUserList(userList.map(user => user.id == newUserInfo.id ? newUserInfo : user))
    alert("Editado con exito")

  }, [id,setUserList,userList,userInfo])

  const getUserInfo = useCallback(async () => {
    const data = userList.find(user => user.id == id)
    if (!data) return
    return data
  }, [id, userList])

  const onChangeHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    getUserInfo().then((data) => {
      setUserInfo(data)
    })
  }, [getUserInfo])

  return (
    <div className="editContainer">
      <Form className="formulario">  
        <h2 className="titulo-form">Edit User</h2>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm="2">First Name</Form.Label>
          <Col sm="10">
            <Form.Control value={userInfo.first_name} name="first_name" type="text" placeholder="First Name" onChange={(e)=>{onChangeHandler(e)}} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formLastName">
          <Form.Label column sm="2">Last Name</Form.Label>
          <Col sm="10">
            <Form.Control value={userInfo.last_name} name="last_name" type="text" placeholder="Last Name" onChange={(e)=>{onChangeHandler(e)}} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm="2">Email</Form.Label>
          <Col sm="10">
            <Form.Control value={userInfo.email} name="email" type="email" placeholder="Email" onChange={(e)=>{onChangeHandler(e)}} />
          </Col>
        </Form.Group>
        <div className="optionButtons">
          <Button variant="primary" onClick={()=>{editUser()}}>Edit</Button>
          <Link to={"/"}><Button className="deleteButton" variant="secondary">Back</Button></Link>
        </div>
      </Form>
    </div>
  )
}

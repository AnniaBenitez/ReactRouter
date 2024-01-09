import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ListProductsContext } from "./ProductsContext"
import "../styles/Forms.css"
import {Form, Col, Row, Button} from 'react-bootstrap/';

function CreateUser() {

    const {globalProductId, setGlobalProductId, productList, setProductList} = useContext(ListProductsContext)

    const [productInfo, setProductInfo] = useState({
        descripcion: "",
        quantity: "",
        price: "",
    })

    const createProduct = async () => {
        const newProduct = {
            id: globalProductId,
            descripcion: productInfo.descripcion,
            quantity: productInfo.quantity,
            price: productInfo.price
        }
        setGlobalProductId(globalProductId+1)       
        setProductList([...productList, newProduct])
        alert("Guardado!!")
    }

    const onChangeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="editContainer">
      <Form className="formulario">  
        <h2 className="titulo-form">Create Product</h2>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm="2">Product Description</Form.Label>
          <Col sm="10">
            <Form.Control value={productInfo.descripcion} type="text" placeholder="Description" onChange={(e)=>{onChangeHandler(e)}} name="descripcion" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formCant">
          <Form.Label column sm="2">Quantity</Form.Label>
          <Col sm="10">
            <Form.Control value={productInfo.quantity} type="number" placeholder="Quantity" onChange={(e)=>{onChangeHandler(e)}} name="quantity" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="price">
          <Form.Label column sm="2">Price</Form.Label>
          <Col sm="10">
            <Form.Control value={productInfo.price} type="number" placeholder="Price" onChange={(e)=>{onChangeHandler(e)}} name="price" />
          </Col>
        </Form.Group>

        <div className="optionButtons">
          <Button variant="primary" onClick={()=>{createProduct()}}>Create</Button>
          <Link to={"/products"}><Button className="deleteButton" variant="secondary">Back</Button></Link>
        </div>
      </Form>
  </div>
  )
  
}

export default CreateUser
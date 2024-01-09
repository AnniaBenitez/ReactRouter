import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useContext } from "react";
import { ListProductsContext } from "./ProductsContext";
import "../styles/Forms.css"
import {Form, Col, Row, Button} from 'react-bootstrap/';

export default function EditUser() {

  const {productList, setProductList} = useContext(ListProductsContext)

  const {id} = useParams()
  const [productInfo, setProductInfo] = useState({
    descripcion: "",
    quantity: "",
    price: "",
  })

  const editProduct = useCallback(async () => {
    setProductList(productList.map(p => p.id == id ? productInfo : p))
    alert("Editado!!")

  }, [id,setProductList,productList,productInfo])

  const getProductInfo = useCallback(async () => {
    const data = productList.find(p => p.id == id)
    if (!data) {
        alert("No se encontro el producto")
        return
    }
    return data
  }, [id, productList])

  const onChangeHandler = (e) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value
    })
  }
  
  useEffect(() => {
    getProductInfo().then((data) => {
      if (data) {
        setProductInfo(data)
      }
    });
  }, [getProductInfo])

  return (
    <div className="editContainer">
      <Form className="formulario">
        <h2 className="titulo-form">Edit Product</h2>
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
          <Button variant="primary" onClick={()=>{editProduct()}}>Edit</Button>
          <Link to={"/products"}><Button className="deleteButton" variant="secondary">Back</Button></Link>
        </div>
      </Form>
    </div>
  )
}

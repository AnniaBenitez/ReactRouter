import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListProductsContext } from "./ProductsContext";
import '../styles/Lists.css'
import { Button, Table } from 'react-bootstrap';


function Products() {
    const { productList, setProductList } = useContext(ListProductsContext)
    const deleteProduct = async (id) => {
        setProductList(productList.filter(p => p.id != id))
    }

    return (
        <div className="container">
            <div className="header_info">
                <h2 className="">Products</h2>
                <Link className="link" to={'/products/create'}>Add Product</Link>
            </div>
            {
                productList.length === 0 ?
                    (<h2 className="alerta">No Products</h2>)
                    :
                    (
                        <div className="contenedor-tabla">
                            <Table striped bordered hover variant="dark" id="user-list" className="tabla">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productList.map((p) => (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.descripcion}</td>
                                            <td>{p.quantity}</td>
                                            <td>{p.price}</td>
                                            <td >
                                                <div className="botones">
                                                    <Button variant="danger" type='button' onClick={() => { deleteProduct(p.id) }}>Delete</Button>
                                                    <Link to={`/products/edit/${p.id}`}><Button variant="info" type='button'>Edit</Button></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )
            }
        </div>
    )
}

export default Products
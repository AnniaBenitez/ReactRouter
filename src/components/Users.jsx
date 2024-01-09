import { useContext } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../libs/axios";
import { ListUsersContext } from "./UsersContext";
import { Button, Table } from 'react-bootstrap';
import "../styles/Lists.css";

function Users() {

    const { userList, setUserList } = useContext(ListUsersContext)

    const deleteUser = async (id) => {
        const res = await axiosInstance.delete(`/users/${id}`)
        if (res.status != 204) return
        setUserList(userList.filter(user => user.id != id))
    }

    return (
        <div className="container">
            <div className="header_info">
                <h2 className="">Users</h2>
                <Link className="link" to={'/users/create'}>Create User</Link>
            </div>
            <div className="contenedor-tabla">
                <Table striped hover variant="dark" id="user-list" size="sm" className="tabla">
                    <thead className="">
                        <tr> 
                            <th>Id</th>
                            <th>Photo</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList && userList.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><img className="perfil-photo" src={user.avatar} ></img></td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td >
                                    <div className="botones">
                                        <Button variant="danger" type='button' onClick={() => { deleteUser(user.id) }}>Delete</Button>
                                        <Link to={`/users/edit/${user.id}`}><Button variant="info" type='button'>Edit</Button></Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}


export default Users
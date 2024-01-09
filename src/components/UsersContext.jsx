import { createContext, useState, useCallback, useEffect } from 'react';
import axiosInstance from '../libs/axios';
import PropTypes from 'prop-types';

export const ListUsersContext = createContext();

export const ListUsersProvider = ({ children }) => {
    const [userList, setUserList] = useState([])

    const getAllUsers = useCallback(async () => {
        const res = await axiosInstance.get('/users')
        if (res.status != 200) return
        const data = await res.data
        setUserList(data.data)
    }, [setUserList])

    useEffect(() => {
        getAllUsers()
    }, [getAllUsers])

    return (
        <ListUsersContext.Provider value={{ userList, setUserList }}>
            {children}
        </ListUsersContext.Provider>
    )
}

ListUsersProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
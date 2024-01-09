import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ListProductsContext = createContext();

export const ListProductsProvider = ({ children }) => {
    const [productList, setProductList] = useState([])
    const [globalProductId, setGlobalProductId] = useState(1)

    return (
        <ListProductsContext.Provider value={{ globalProductId, setGlobalProductId, productList, setProductList }}>
            {children}
        </ListProductsContext.Provider>
    )
}

ListProductsProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
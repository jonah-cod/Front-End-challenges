import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { datasuccess, loading } from '../redux/actions/dataAction'
import ProductsList from './productsList'

const Products = () => {
    const dispatch = useDispatch()
    

    const fetchProducts = async ()=>{
        let products = await axios.get('https://fakestoreapi.com/products').catch(err=>console.log("Err:", err))
        dispatch(datasuccess(products.data));
    }

    useEffect(() => {
        dispatch(loading())
        fetchProducts();
    }, [])
    
  return (
    <div className="container">
      <div className="category">
        
      </div>
      <ProductsList/>
    </div>
    
  )
}

export default Products
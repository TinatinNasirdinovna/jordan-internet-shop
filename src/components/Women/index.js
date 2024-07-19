import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryWoman } from '../../redux/AddProductSlice';
import BuyNowCard from '../BuyNow/BuyNowCard';

const Women = () => {
    const {woman} = useSelector(s => s.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoryWoman())
    },[])
    console.log(woman, 'woman');
 
    
    return (
        <div className='container'>
            <div className="flex items-center gap-12 justify-center py-10 flex-wrap">
              {
                woman.map(el => <BuyNowCard data={el}/>)
              }
            </div>
        </div>
    );
};

export default Women;
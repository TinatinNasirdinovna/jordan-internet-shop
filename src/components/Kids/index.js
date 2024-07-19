import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuyNowCard from '../BuyNow/BuyNowCard';
import { categoryKids } from '../../redux/AddProductSlice';

const Kids = () => {
    const {kids} = useSelector(s => s.product)
    const dispatch =useDispatch()
    useEffect(() => {
        dispatch(categoryKids())
    },[])
    return (
        <div className='container'>
            <div className="flex items-center gap-12 justify-center py-10 flex-wrap">
                {
                    kids.map(el => <BuyNowCard data={el}/>)
                }
            </div>
        </div>
    );
};

export default Kids;
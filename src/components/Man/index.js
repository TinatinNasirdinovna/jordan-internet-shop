import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryMan } from '../../redux/AddProductSlice';
import BuyNowCard from '../BuyNow/BuyNowCard';

const Man = () => {
    const {man} = useSelector(s => s.product)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(categoryMan())
    },[])
    return (
        <div className='container'>
            <div className="flex items-center gap-12 justify-center py-10 flex-wrap">
                {
                    man.map(el => <BuyNowCard data={el}/>)
                }
            </div>
        </div>
    );
};

export default Man;
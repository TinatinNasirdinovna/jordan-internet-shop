import React from 'react';
import { useSelector } from 'react-redux';
import BuyNowCard from './BuyNowCard';

const BuyNow = () => {
    const {product} = useSelector(s => s.product)
    // console.log(product);
    return (
        <div className='container'>
            <div className="flex items-center gap-12 justify-center py-10 flex-wrap">
                {product.length ?  product.map((el, id) => <BuyNowCard data={el} key={id}/>):<p className='text-white text-2xl'>Нет продуктов!</p>}
            </div>
        </div>
    );
};

export default BuyNow;
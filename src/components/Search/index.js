import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuyNowCard from '../BuyNow/BuyNowCard';
import { searchElem } from '../../redux/AddProductSlice';

const Search = () => {
    const {search} = useSelector(s => s.product)
    const dispatch = useDispatch()
    console.log(search, 'seaarch');

    // useEffect(() => {
    //     dispatch(searchElem())
    // },[search])
    return (
        <div className='container'>
            <div className="flex items-center gap-12 justify-center py-10 flex-wrap">
                {
                   search.length ?  search.map(el => <BuyNowCard data={el}/>) : <p className='text-white text-4xl'>Product is not found !</p>
                }
            </div>
        </div>
    );
};

export default Search;
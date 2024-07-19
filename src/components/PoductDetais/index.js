import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
    const {details} = useSelector(s => s.product)
    console.log(details, 'details');
    return (
        <div className='container'>
            <div className="flex items-center mx-auto mt-[100px]">
                <img src={details.url} alt="url" width={200} />
                <div className="text-white text-2xl ml-[20px]">
                    <h1>Title: {details.title.toUpperCase()}</h1>
                    <h3>Category: {details.category}</h3>
                    <h2>Price:  $ {details.price}</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur aus sed molestiae tempora? Molestias quo nesciunt, doloribus nostrum ad fugit, sit voluptate minima, reprehenderit neque deleniti natus esse? Sit nemo voluptates eos, in sed consequatur debitis libero, voluptatum facilis quam obcaecati hic. Impedit, aliquam fuga dolorem deleniti porro dicta nulla neque nisi, rerum eligendi totam accusamus magni labore fugiat. Ad aliquid facere dicta quo blanditiis. Optio nihil nam sed minima itaque magni praesentium, fuga voluptatibus excepturi quasi aspernatur atque rerum quisquam libero, facere cum culpa soluta nisi similique numquam commodi dolore. Cum explicabo libero saepe fuga.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
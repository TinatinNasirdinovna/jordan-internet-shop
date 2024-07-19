import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../../redux/AddProductSlice";

const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const [productImg, setProductImg] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [selectCategory, setSelectCategory] = useState('')
    const dispatch = useDispatch()
    const {product} = useSelector((s) => s.product)

    const addProduct = () => {
        if(productName.trim() === '' || productPrice.trim() === '') {
            alert('fill the inputs')
        } else {
            let newProduct = {
                id: Date.now(),
                title: productName,
                url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da405d3b-e380-4f0e-8b2c-b37194cc6761/air-jordan-1-mid-se-womens-shoes-wkMdft.png',
                price: productPrice,
                category: selectCategory
            }
            setProductName('')
            // setProductImg('')
            setProductPrice('')
            return dispatch(addToProduct(newProduct))
        }
       
    }

    console.log(product);
  return (
    <div className="container">
      <div className="flex flex-col gap-12 mx-auto w-[550px] mt-[80px] items-center justify-center">
        <h1 className="text-white text-4xl text-center ">
          Add to Product ...
        </h1>
        <input
          type="text"
          value={productImg}
          onChange={(e) => setProductImg(e.target.value)}
          className="w-full h-[44px] bg-transparent text-white text-2xl py-1 border-b-2 border-inherit outline-none"
          placeholder="Product Img"
        />
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full h-[44px] bg-transparent text-white text-2xl py-1 border-b-2 border-inherit outline-none"
          placeholder="Product Name"
        />
       <div className="flex items-center gap-[40px]">
       <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="w-full h-[44px] bg-transparent text-white text-2xl py-1 border-b-2 border-inherit outline-none"
          placeholder="Product Price"
        />
        <select className="w-[200px] h-[40px] p-[10px] rounded-[10px] outline-none" onChange={(e) => setSelectCategory(e.target.value)}>
          <option value="">select</option>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
          <option value="kids">Kids</option>
        </select>
       </div>
        <button
          type="button"
          onClick={() => addProduct()}
          class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-2sm px-[40px] py-[20px] text-center me-2 mb-2 text-xl"
        >
            Add to Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

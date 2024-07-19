import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import { useNavigate } from "react-router-dom";
import { deleteAllBasket } from "../../redux/AddBasketSlice";
import axios from "axios";

const Basket = () => {
  const [userName, setUserName] = useState('')
  const [addess, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [modal, setModal] = useState(false)

  const { basket } = useSelector((s) => s.basket);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = basket.reduce((acc, el) => {
    return acc + +el.price;
  }, 0);

  let limit = 10000;
  let width = (totalPrice * 100) / limit;

  let err = <p className="text-red-500 mt-5">Your limit is end !</p>;

const sendToTelegram = async() => {
  setModal(true)
  let my_id = `-1002057591888`
  let token = '6993119782:AAE_V6iiwdlGBH4rTDcdTzhxe0R2loL-ugU'
  const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

 let obj = {
  chat_id: my_id,
  parse_model: 'html',
  text:   `Заказ : ${userName} \n
  addres : ${addess} \n
  phone number : ${phoneNumber}
  `
 }
 await axios.post(URL_API, obj)


}

  // console.log(width, "width");
  return (
    <div className="container">
      <div className="flex gap-10 relative">
        <div className="flex flex-col h-[600px] overflow-y-scroll w-[760px] py-10 gap-5 relative">
          {basket.length ? (
            basket.map((el, idx) => <BasketCard data={el} key={idx} />)
          ) : (
            <p className="text-white text-2xl">Ваша корзина пусто! </p>
          )}
          <button
            onClick={() => dispatch(deleteAllBasket())}
            className="text-white fixed left-[41.4%] mt-[-20px] border-inherit border-x-2 border-y-2 p-[10px] w-[120px]"
          >
            Удалить все
          </button>
          <button
            onClick={() => nav("/buyNow")}
            className="text-white fixed left-[41.4%] mt-[80px] border-inherit border-x-2 border-y-2 p-[10px] w-[120px]"
          >
            Купить ещё
          </button>
        </div>
        <div className="text-white text -2xl fixed left-[53%]">
          <h2 className="text-4xl">Total price: {totalPrice} сом:</h2>
          <h2 className="text-white mt-[30px] text-2xl">
            Limit : {String(limit).slice(0, 2) + "  " + String(limit).slice(2)}
            cом
          </h2>
          <div className="w-[400px] h-[20px]  mt-7 rounded-[10px] relative overflow-hidden pt-1">
            <div
              className={` h-[20px] bg-slate-700 rounded-[50px] w-full absoulte`}
            >
              <div className="star absolute left-[90px] top-[-1px] z-50"></div>
              <div className="star absolute left-[230px] top-[-1px] z-50"></div>
              <div className="star absolute right-[3px] top-[-1px] z-50"></div>
              <div
                style={{
                  width: `${width}%`,
                  background: "blue",
                  height: "20px",
                }}
                className="absolute rounded-[50px]   bg-blue-500 z-20"
              ></div>
              <div
                style={{
                  width: `${width >= 25 ? `${width - 25}%` : "0px "}`,
                  height: "20px",
                  background: "green",
                }}
                className="absolute h-[10px] rounded-[50px] left-[100px] bg-lime-500 z-30"
              ></div>
              <div
                style={{
                  width: `${width >= 60 ? `${width - 60}%` : "0px "}`,
                  height: "20px",
                  background: "red",
                }}
                className="absolute h-[10px] rounded-[50px]  left-[241px] z-40 "
              ></div>
            </div>
          </div>
          {totalPrice > limit ? err : null}

          <div className="">
            <div className="pt-[40px] flex flex-col gap-5">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_email"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Name
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={addess}
                  onChange={(e) => setAddress(e.target.value)}
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                   Address
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
              <button
                type="button"
                onClick={() => sendToTelegram()}
                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Send
              </button>
            </div>
            {modal ? <div className="w-[300px] bg-slate-400 h-[200px] flex items-center justify-center flex-col">
             <p className="mb-[30px]"> Are your sure to send it</p>
             <div className="">
             <button
                type="button"
                onClick={() => setModal(false)}
                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Ok
              </button>
              <button
                type="button"
                onClick={() => setModal(true)}
                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
               Reset
              </button> 
             </div>
            </div> : null}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;

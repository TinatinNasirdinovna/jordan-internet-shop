import React from "react";
import bg from '../../assets/img/bg.png'
import shoes from '../../assets/img/shoes.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate()
  return (
    <div id="home" style={{background: `url('${bg}') no-repeat center/cover`, minHeight: '90vh'}} className="relative">
      <div className="container">
        <div className="absolute bottom-0 flex items-center justify-between text-white gap-[120px]">
            <div className="flex flex-col gap-5">
                <h1 className="ml-20 font-semibold">CHOOSE COLOR : </h1>
                <img src={shoes} alt="img"/>
            </div>
            <div className="flex gap-10">
                <button className="w-[180px] h-[60px] text-black  bg-white font-black rounded-[10px]" onClick={() => nav(`/addProduct`)}>ADD TO CART</button>
                <button className="w-[180px] h-[60px] font-black border-2 border-inherit rounded-[10px]" onClick={() => nav(`/buyNow`)}>BUY NOW</button>
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold">INSPIRATION</h2>
                <p className="w-[433px]">Inspired by the design of the latest Air Jordan game shoe, the Jordan Jumpman 2021 helps up-and-coming players level up their game. </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

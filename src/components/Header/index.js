import React, { useState } from "react";
import logo from "../../assets/img/logos.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { searchElem } from "../../redux/AddProductSlice";
const Header = () => {
  const [search, setSearch] = useState("");
  
  const dispatch = useDispatch();
  const nav = useNavigate()

  const searchHandle = () => {
    if (search.trim() === "") {
      alert("input is empty");
    } else {
    return  (
      dispatch(searchElem(search)),
      nav('/search'),
      setSearch('')
    )

    }
  };

  console.log(search, 'ser');
  return (
    <div id="header" className="sticky top-0 z-50 bg-black">
      <div className="container">
        <div className="py-5 flex items-center justify-between">
          <img src={logo} alt="img" />
          <div className="text-white  flex items-center gap-20 text-4xl font-semibold">
            <Link to="/">Home</Link>
            <Link to="/man">Man</Link>
            <Link to="/woman">Women</Link>
            <Link to="/kids">Kids</Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search ...."
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-[7px] outline-none h-[40px] px-[15px]"
              />
              <span className="text-white text-4xl cursor-pointer" onClick={() => searchHandle()}>
                <IoSearchSharp  />
              </span>
            </div>
            <Link to={"/basket"} className="text-white text-4xl">
              <BsCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

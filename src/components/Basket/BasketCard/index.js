import React from "react";
import { useDispatch } from "react-redux";
import { deleteBasket } from "../../../redux/AddBasketSlice";

const BasketCard = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <div className="">
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-[300px] rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={data.url}
          alt="basket-img"
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          $  {data.price}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button onClick={() => dispatch(deleteBasket(data.id))} className="cursor-pointer text-2xl text-red-600">Delete</button>
        </div>
      </a>
    </div>
  );
};

export default BasketCard;

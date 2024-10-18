import React from 'react'
import burger from '../Component/Challenge/product-list-with-cart-main/assets/images/image-cake-tablet.jpg'
import vanil from '../Component/Challenge/product-list-with-cart-main/assets/images/image-creme-brulee-mobile.jpg'
import Macaron from '../Component/Challenge/product-list-with-cart-main/assets/images/image-macaron-mobile.jpg'
import tiranmisu from '../Component/Challenge/product-list-with-cart-main/assets/images/image-baklava-mobile.jpg'
import pie from '../Component/Challenge/product-list-with-cart-main/assets/images/image-brownie-mobile.jpg'
import brownie from '../Component/Challenge/product-list-with-cart-main/assets/images/image-meringue-mobile.jpg'
import cake from '../Component/Challenge/product-list-with-cart-main/assets/images/image-panna-cotta-mobile.jpg'
import baklava from '../Component/Challenge/product-list-with-cart-main/assets/images/image-tiramisu-tablet.jpg'
import panna from '../Component/Challenge/product-list-with-cart-main/assets/images/image-waffle-mobile.jpg'



const Navbar = () => {
    const Products = [
        {
            id: 1,
            name: "Waffle",
            des: "Waffle With barries",
            img: burger,
        },
        {
            id: 2,
            name: "Creme Brulee",
            des: "Vannile Beam Creme Brulee",
            img: vanil,
        },
        {
            id: 3,
            name: "Macaron",
            des: "Macron Mix of Five",
            img: Macaron,
        },
        {
            id: 4,
            name: "tiranmisu",
            des: "Classic Tiranmisu",
            img: tiranmisu,
        },
        {
            id: 5,
            name: "pie",
            des: "Lemon Meringue Pie",
            img: pie,
        },
        {
            id: 6,
            name: "brownie",
            des: "Salted Caramel brownie",
            img: brownie,
        },
        {
            id: 7,
            name: "cake",
            des: "Red Velvet Cake",
            img: cake,
        },
        {
            id: 8,
            name: "Baklava",
            des: "Pistachio Blaklava",
            img: baklava,
        },
        {
            id: 9,
            name: "Panna Cotta",
            des: "Vanilla Panna Cotta",
            img: panna,
        },
    ]
  const goods = [
    {
      id:1,
      name:"Classic Tiranmisu",
      money: "1X",
      price:"@$5.50",
      secPrice:"$5.50"
    },
    {
      id:2,
      name:"Vanilla Bean Creme Brulee",
      money: "4X",
      price:"@$7.00",
      secPrice:"$28.00"
    },
    {
      id:3,
      name:"Vanilla Panna Cotta",
      money: "3X",
      price:"@$6.50",
      secPrice:"$13.00"
    }

  ]
  return (
    <div className='lg:flex lg:justify-between lg:p-10 max-sm:p-5'>
    <div className='lg:grid lg:grid-cols-3 lg:grid-rows-3 sm:flex sm:flex-col p-[30px] gap-[30px]'>
      {Products.map((product) => (
    <section key={product.id}>
      <section>
      <img className='lg:w-[10vw] sm:w-[40vw] relative rounded-2xl' src={product.img} alt="" />
      </section>
        <div>
        <button className='bg-white max-sm:w-[40vw] lg:w-[10vw] p-2 rounded-full shadow-lg relative lg:bottom-3  outline-none '>Add to Cart</button>
        </div>
        <div>
         <h1 className=''>{product.name}</h1>
         <p className='text-[15px]'>{product.des}</p>
         <p>$6.50</p>
        </div>
   </section>
      ))}
      </div>

      <div className='flex flex-col gap-5 bg-white lg:h-[82vh] shadow-lg rounded-3xl p-5'>
        <h1 className='text-[35px] text-red-600'>Your Cart(7)</h1>
        {goods.map((mygoods) => (
        <div key={mygoods.id}>
          <h1 className='text-[20px]'>{mygoods.name}</h1>
          <legend className='flex gap-3 border-b-2 border-zinc-100'>
            <p className='text-red-700'>{mygoods.money}</p>
            <p>{mygoods.price}</p>
            <p>{mygoods.secPrice}</p>
          </legend>
        </div>
        ))}


        <div className='flex items-center justify-between'>
          <h1>Oder Total</h1>
          <h1 className='text-[25px]'>$46.50</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <button className='text-zinc-400 bg-zinc-100 p-2 rounded-md'>This is a <span className='text-black'>carbon-neutral </span> delivery</button>
          <button className='bg-orange-700 p-2 rounded-3xl text-white'>Confirm Order</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

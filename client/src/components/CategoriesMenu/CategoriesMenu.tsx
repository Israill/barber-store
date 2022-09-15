import React from 'react'

function CategoriesMenu() {
  return (
    <div className="w-screen h-screen border border-none bg-black fixed overflow-hidden">
    <div className="text-white">
    </div>
  <div className="m-auto w-11/12">
    <div className="border-2 my-6">
      <input
        className="border border-none bg-black placeholder:text-white p-2 uppercase w-10/12 text-white outline-none"
        placeholder="search"
      />
      <button className="w-2/12 bg-white hover:bg-slate-400 transition-all p-2 text-base uppercase font-bold">
        search
      </button>
    </div>

    <div className="">
      <hr className="border-stone-700" />
    </div>

    <div className="w-11-12 my-5">
      <ul className="text-white font-semibold uppercase leading-9 ">
        <li className="cursor-pointer">electrical</li>
        <li className="cursor-pointer">scissors</li>
        <li className="cursor-pointer">grooming</li>
        <li className="cursor-pointer">essentials</li>
        <li className="cursor-pointer">furniture</li>
        <li className="cursor-pointer">specials</li>
      </ul>
    </div>

    <div className="">
      <hr className="border-stone-700" />
    </div>

    <div className="text-white flex space-around gap-80 leading-8 my-5 uppercase">
      <ul>
        <li className="hover:text-amber-700 transition-all cursor-pointer">about</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">returns</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">blog</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">specials</li>
      </ul>

      <ul>
        <li className="hover:text-amber-700 transition-all cursor-pointer">account</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">new in</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">trade</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">contact</li>
      </ul>

      <ul>
        <li className="hover:text-amber-700 transition-all cursor-pointer">delivery</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">brands</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">rewards</li>
        <li className="hover:text-amber-700 transition-all cursor-pointer">privacy</li>
      </ul>
    </div>

    <div className="">
      <hr className="border-stone-700" />
    </div>

    <div className="text-white my-5 flex gap-72">
      <div className="leading-9">
        <p className="uppercase">GET IN TOUCH</p>

        <ul className="text-sm">
          <li>Unit 3 Charnwood Park,</li>
          <li>Clos Marion,</li>
          <li>Cardiff</li>
          <li>CF10 4LJ</li>
        </ul>

        <ul>
          <li>Live Chat</li>
          <li>8am-4pm</li>
        </ul>
      </div>



    </div>
  </div>
</div>
  )
}

export default CategoriesMenu
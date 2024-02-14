import React from 'react';
import { FaSearch } from "react-icons/fa";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';

const Header = () => {
    const menu = [
        {
            name:"About",
            url:"/about"
        },
        {
            name:"Sign in",
            url:"/login"
        },
    ]


  return (
    <div className='flex items-center gap-7 h-20 p-5'>
        <div  className='bg-amber-600 p-3 rounded-lg text-2xl font-bold'>MovieApp</div>
        <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
            <input placeholder='arama yap' className='outline-none bg-transparent flex-1' type="text" />
            <FaSearch size={25}/>
        </div>
        <ThemeComp/>


        {
            menu.map((mn,i) =>(
                <MenuItem mn={mn} key={i}/>


            ))
        }


    </div>
  );
}

export default Header;

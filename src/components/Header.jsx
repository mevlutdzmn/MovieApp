"use client"
 
import React,{useState} from 'react';
import { FaSearch } from "react-icons/fa";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const [keyword , setKeyword] = useState('');
    const router = useRouter();
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

    const searchFunc=(e)=> {
        if(e.key === "Enter" && keyword.length>=3){
            router.push(`/search/${keyword}`)
            setKeyword('')
        }
    }


  return (
    <div className='flex items-center gap-7 h-20 p-5'>
        <Link href="/#">
            <div className='bg-amber-600 p-3 rounded-lg text-2xl font-bold'>MovieApp</div>
        </Link> 
        <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
            <input value={keyword} onKeyDown={searchFunc} onChange={e=> setKeyword(e.target.value)} placeholder='arama yap' className='outline-none bg-transparent flex-1' type="text" />
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

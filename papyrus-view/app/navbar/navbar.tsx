import React from 'react';
import Link from 'next/link'

//From https://medium.com/@ryaddev/build-responsive-navbar-with-tailwind-css-and-react-icons-3b13a272dec4

const Navbar = () => {
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'LSMT',  link:'/exploration/lstm' },
    { id: 2, text: 'ViT',   link:'/exploration/vit' },
  ];

  return (
    <div className='bg-black flex items-center h-24 mx-auto px-4 text-white'>
      {/* Home logo */}
      <Link href="/">
        <h1 className='w-full text-3xl font-bold text-[#a88332]'>Home</h1>
      </Link>

      <ul className='hidden md:flex pl-6'>
        {navItems.map(item => (
            <li key={item.id} className='p-4 hover:bg-[#3244a8] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#a88332]'>
                <Link href={item.link}>
                    {item.text}
                </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
import { useState } from "react";
import Link from "../Link/Link";
// import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { Sling as Hamburger } from 'hamburger-react'

const NavBar = () => {
    // const [open, setOpen] = useState(true)
    const [openMenu, setOpenMenu] = useState(false)
    const navbarItems = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];

    // const openCloseHandle = () => {
    //     setOpen(!open)
    // }
    return (
        <nav className="p-1">
            <div className="lg:hidden flex justify-end items-end w-full my-4 text-3xl text-black pr-8">
                {
                    // open === true ?
                    //     <AiOutlineAlignRight></AiOutlineAlignRight>
                    //     : <AiOutlineClose ></AiOutlineClose>
                    <Hamburger toggled={openMenu} toggle={setOpenMenu} duration={0.3} easing="ease-in"></Hamburger>
                }
            </div>
            <ul className={`${openMenu ? 'top-[85px]' : 'top-[-300px]'} flex lg:flex-row flex-col lg:justify-center items-end gap-4 lg:gap-10 lg:text-xl backdrop-blur-md p-4 text-gray-600ra lg:top-0 lg:left-0 left-[75%] lg:w-full absolute duration-500 lg:relative lg:ml-0 w-[25%] border-2 border-gray-500 rounded-xl`}>
                {
                    navbarItems.map(item => <Link key={item.id} route={item}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
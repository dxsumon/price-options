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
        <nav className="sticky top-0 z-20 drop-shadow-lg bg-gray-500">
            <div className="flex justify-center items-center bg-gray-500 text-white px-3">
            <h1 className="text-2xl font-bold lg:hidden">Fitness</h1>
                <div className="lg:hidden flex justify-end items-end w-full my-4 text-3xl text-white pr-8">
                    {
                        // open === true ?
                        //     <AiOutlineAlignRight></AiOutlineAlignRight>
                        //     : <AiOutlineClose ></AiOutlineClose>
                        <Hamburger toggled={openMenu} toggle={setOpenMenu} duration={0.3} easing="ease-in"></Hamburger>
                    }
                </div>
            </div>
            <ul className={`${openMenu ? 'top-[85px]' : 'top-[-300px]'} flex lg:flex-row flex-col lg:justify-center items-end gap-4 lg:gap-10 lg:text-xl lg:backdrop-blur-0 backdrop-blur-md p-4 text-gray-600 lg:text-white lg:top-0 lg:left-0 left-[75%] lg:w-full absolute duration-500 lg:relative lg:ml-0 w-[25%] border-2 border-gray-500 rounded-xl`}>
                {
                    navbarItems.map(item => <Link key={item.id} route={item}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
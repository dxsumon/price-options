import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(true)
    const navbarItems = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];

    const openCloseHandle = () => {
        setOpen(!open)
    }
    return (
        <nav className="bg-slate-600 p-1">
            <div onClick={openCloseHandle} className="lg:hidden flex justify-end items-end w-full my-4 text-3xl text-white pr-4">
                {
                    open === true ?
                        <AiOutlineAlignRight></AiOutlineAlignRight>
                        : <AiOutlineClose ></AiOutlineClose>
                }
            </div>
            <ul className={`${open ? 'ml-[200px]' : '-ml-[0px]'} flex lg:flex-row flex-col lg:justify-center items-end gap-4 lg:gap-10 lg:text-xl bg-slate-600 p-4 text-white shadow-2xl lg:left-0 left-[79%] w-[24%] lg:w-full absolute duration-500 lg:relative lg:ml-0`}>
                {
                    navbarItems.map(item => <Link key={item.id} route={item}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
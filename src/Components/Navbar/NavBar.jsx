import Link from "../Link/Link";

const NavBar = () => {
    const navbarItems = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Contact', path: '/contact' }
      ];
    return (
        <div>
            <ul className="flex justify-center items-center gap-10 text-xl">
                {
                    navbarItems.map(item=><Link key={item.id} route={item}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;
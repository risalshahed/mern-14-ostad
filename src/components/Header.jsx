import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();

  // console.log(location);

  const navMenus = [
    {
      id: crypto.randomUUID(),
      name: 'Home',
      path: '/'
    },
    {
      id: crypto.randomUUID(),
      name: 'About',
      path: '/about'
    },
    {
      id: crypto.randomUUID(),
      name: 'Contact',
      path: '/contact'
    },
  ]

  const navClass = path =>
    location.pathname === path ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
  

  /* const navClass = path => {
    return location.pathname === path ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
  } */

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

          <h1 className="text-2xl font-bold">
            My Portfolio
          </h1>

          <nav className="space-x-5">
            <Link to="/" className={navClass('/')}>Home</Link>
            <Link to="/about" className={navClass('/about')}>About</Link>
            <Link to="/contact" className={navClass('/contact')}>Contact</Link>
            {/* {
              navMenus.map(menu =>
                <Link
                  key={menu.id}
                  to={menu.path}
                  className={navClass(menu.path)}
                >
                  {menu.name}
                </Link>
              )
            } */}
          </nav>

      </div>

    </header>
  )
}

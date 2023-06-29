import { Link,useLocation,Outlet } from "react-router-dom"

const Layout = () => {
    const {pathname} = useLocation()
    return (
        <>
            <div className='md:flex md:justify-between  shadow-xl'>
                <div className='bg-orange-600 px-20 py-8'>
                    <h1 className='text-center text-gray-200 text-3xl font-black'>RecetasDev</h1>
                </div>
                <nav >
                    <ul className='flex flex-col md:flex-row py-8 md:px-20 md:gap-8 items-center justify-evenly '>
                        <Link 
                            className={`${pathname == "/" ? "bg-orange-700 text-white py-2 md:px-6 font-bold" : "text-gray-700"} hover:bg-orange-700 hover:text-white py-2 px-6 font-bold rounded transition duration-300 mb-4 md:mb-0`}
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            className={`${pathname == "/todas/recetas" ? "bg-orange-700 text-white py-2 md:px-6 font-bold" : "text-gray-700"} hover:bg-orange-700 hover:text-white py-2 px-6 font-bold rounded transition duration-300 mb-4 md:mb-0`}
                            to="/todas/recetas"
                        >
                            Todas las recetas
                        </Link>
                        <Link
                            to="/mejores/recetas"
                            className={`${pathname == "/mejores/recetas" ? "bg-orange-700 text-white py-2 px-6 font-bold" : "text-gray-700"} hover:bg-orange-700 hover:text-white py-2 md:px-6 font-bold rounded transition duration-300 md:mb-0`}
                        >
                            Las mejores recetas
                        </Link>
                    </ul>
                </nav>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout
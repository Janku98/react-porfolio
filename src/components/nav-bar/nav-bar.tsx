import { Outlet, Link } from "react-router-dom";


//Images and icons
import codeicon from '../../assets/png/code-logo.png';
//Style
import './nav-bar.css';
import NavBarHooks from "./nav-bar.hooks";


const NavBar = () => {

    //State to select navbar items
    const {itemSelected, selectItem} = NavBarHooks()


    return(
        <div className="w-screen h-screen flex flex-col lg:flex-row">

            <div className="w-full h-full  lg:w-1/12 lg:h-full flex flex-row lg:flex-col justify-center lg:justify-between navbar px-10 lg:px-3">

                <div className="hidden lg:flex w-full flex-col h-36 justify-center items-center">
                    <img alt="brackets-icon" src={codeicon} className="w-24 h-16 transition-all hover:brightness-150 hover:drop-shadow-xl"/>
                    <h2 className="hover:text-amber-300 hover:brightness-150 transition-all ">Fronted Dev</h2>
                </div>

                <ul className="flex flex-row lg:flex-col w-full justify-center items-center my-8 gap-2">                    
                    <Link to={`/`}
                         onClick={()=>selectItem(1)}>
                        <li className={itemSelected=== 1 ? "selected navbar__item transition-all" : "navbar__item transition-all"}
                            >
                            Acerca de mí
                        </li>
                    </Link>

                    <div className="navbar__separator my-3 sm:mx-5"></div>

                    <Link to={`/skills`}
                         onClick={()=>selectItem(2)}>
                        <li className={itemSelected=== 2 ? "selected navbar__item transition-all" : "navbar__item transition-all"} >
                            Hablilidades
                        </li>
                    </Link>

                    <div className="navbar__separator my-3 sm:mx-5"></div>

                    <Link to={`/formation`}  
                         onClick={()=>selectItem(3)}>
                        <li className={itemSelected=== 3 ? "selected navbar__item transition-all" : "navbar__item transition-all"}>
                            Formación
                        </li>
                    </Link>

                    <div className="navbar__separator my-3 sm:mx-5"></div>

                    <Link to={`/proyects`}
                         onClick={()=>selectItem(4)}>
                        <li className={itemSelected=== 4 ? "selected navbar__item transition-all" : "navbar__item transition-all"}>
                            Proyectos    
                        </li>
                    </Link>

                    <div className="navbar__separator my-3 sm:mx-5"></div>

                    <Link to={`/contact`}
                         onClick={()=>selectItem(5)}>
                        <li className={itemSelected=== 5 ? "selected navbar__item transition-all" : "navbar__item transition-all"}> 
                            Contacto
                        </li>  
                    </Link>

                </ul>

                <div className="hidden lg:flex w-full h-24">

                </div>

            </div>

            <div className="w-11/12">
                <Outlet />
            </div>
        </div>
    )
}


export default NavBar
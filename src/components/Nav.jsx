
import logo from "../assets/Images/logo.png"
function Nav() {
    return (
     <header className="flex text-white justify-between items-center lg:px-[80px] py-4 px-[1.5rem]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo"/>
          <h2>Winden</h2>
        </div>
        <nav>
         <ul className="hidden gap-4 lg:flex cursor-pointer">
            <li>
                Use Cases
            </li>
            <li>
                Product
            </li>
            <li>
                Company
            </li>
            <li>
                Support
            </li>
         </ul>
        </nav>
        <div className="flex gap-4 items-center">
           <button className="cursor-pointer">Log in</button>
           <button className="cursor-pointer">Sign Up</button>
        </div>
     </header>
    )
}

export default Nav

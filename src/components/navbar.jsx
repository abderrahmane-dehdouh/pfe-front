import { Link } from "react-router-dom";

const Navbar = ({ page }) => {

    
    return (

        <div className="flex justify-between font-ralewey text-2xl my-5 mx-16  ">

            <div className="flex justify-start text-5xl" >
                <h1 className="text-primary">InternShip</h1>
            </div>

            <div className=" flex justify-end">
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="http://">Companies</a>
                <a className="mx-2" href="">About us</a>
                <div className="pl-6">
                    {(page === 'home' || page === 'signup') && (<Link to="/login" className="focus:outline-none text-white bg-primary hover:bg-purple-950  font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 ">Login</Link>)}
                    {(page === 'login') && (<Link to="/signup" className="focus:outline-none text-white bg-primary hover:bg-purple-950  font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-24 h-9 ">Sign up</Link>)}
                </div>

            </div>

 


        </div>
    );
}


export default Navbar;  
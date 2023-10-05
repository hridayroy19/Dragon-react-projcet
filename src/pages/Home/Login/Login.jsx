import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../provider/Authprovider";


const Login = () => {

 const {sigIn} =useContext(AuthContext)

const location =useLocation()
const navigate = useNavigate()
console.log( "locatin in the login page" , location);

const handelLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
const form = new FormData(e.currentTarget);
const email = form.get('email')
const password = form.get('password')
// console.log(email,password);
sigIn(email,password)
.then(resul =>{
  console.log(resul.user)

navigate(location?.state ? location.state :"/")

})
.catch(error=>{
  console.error(error);
})
    
}

    return (
        <div>

            <Navbar></Navbar>

  
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
         <h2 className="text-green-200 text-3xl font-bold"> Login Now </h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
         <form onSubmit={handelLogin} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email"  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                 </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
         </form>
         <p> New Here? Please <Link to={"/register"}>  <button className="uppercase ml-2 underline" > Register</button> </Link> </p>
            </div>
          </div>
      
         
        </div>
      </div>


 ------
        </div>
    );
};

export default Login;
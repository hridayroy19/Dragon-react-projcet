import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../provider/Authprovider";
import { useContext } from "react";

const Register = () => {

  const { CreateUser}= useContext(AuthContext)

    const handelRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name,photo,email,password);

// crate user

CreateUser(email,password)
.then(result =>{console.log(result)
})
.catch(error=>{console.error(error)})
        
  }


  return (
    <div>
      <Navbar></Navbar>
    
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
         <h2 className="text-green-200 text-3xl font-bold"> Register Now </h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
         <form  onSubmit={handelRegister} >
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="your name" name="name"  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="photo" placeholder="Photo URl" name="photo"  className="input input-bordered" />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
         </form>
         <p> all ready have a account <Link to={"/login"}>  <button className="uppercase ml-2 underline" > Login</button> </Link> </p>
            </div>
          </div>
      
         
        </div>
      </div>


    </div>
  );
};

export default Register;

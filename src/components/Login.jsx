import React, { useContext } from 'react';
import GoogleImage from "../assets/google.jpg"
import GitHubImage from "../assets/github.jpg"
import TwitterImage from "../assets/twitter.jpg"
import { AuthContext } from '../provider/AuthProvider';



const Login = () => {
     const {githubWithLogin} = useContext(AuthContext)
     const {googleWithLogin} = useContext(AuthContext)
    
//    console.log(authInfo)

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='card-body pt-0'>
                        <h3 className='text-3xl'>Login With</h3>
                        <div className='flex gap-3'>
                            <button onClick={googleWithLogin}>
                                <img className='w-10 h-10 rounded-full p-1 border' src={GoogleImage} alt="" />
                            </button>
                            <button onClick={githubWithLogin}>
                                <img className='w-10 h-10 rounded-full p-1 border' src={GitHubImage} alt="" />
                            </button>
                            <button>
                                <img className='w-10 h-10 rounded-full p-1 border' src={TwitterImage} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
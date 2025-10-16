import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        // console.log('Submit clicked');
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ email, password });

    }

    return (
        <div className="hero bg-base-200 min-h-screen rounded-xl my-3">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration Please!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Registration</button>
                                <NavLink to='/login'><h2 className='mt-5 text-xl hover:text-red-500'>Go To Sign In</h2></NavLink>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
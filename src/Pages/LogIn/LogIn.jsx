import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../firebase/firebase.config';
import { NavLink } from 'react-router';

const LogIn = () => {
    const emailRef = useRef()

    const handleLoginSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(auth, email, password).then(result => {
            console.log('after Login a new user', result.user);
            e.target.reset()
            if (!result.user.emailVerified) {
                alert('please verify your email address')
            }
        })
            .catch(err => {
                console.log('Error :', err.message)
            })
    }
    const handleForgetPassword = () => {
        console.log('clicked');
        const email = emailRef.current.value
        // console.log(email);
        sendPasswordResetEmail(auth, email).then(() => {
            alert('Password reset email sent!')
        }).catch(err => {
            console.log(err.message);
        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen rounded-xl my-3">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLoginSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email"
                                    ref={emailRef}
                                    name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password"
                                    name='password' className="input" placeholder="Password" />
                                <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <div>
                            <p>you Have not an Account  Please <NavLink to='/register'><span className=' hover:text-blue-500 font-medium'>Registration</span></NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
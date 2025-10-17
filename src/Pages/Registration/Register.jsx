import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = (e) => {
        e.preventDefault()
        // console.log('Submit clicked');
        const email = e.target.email.value
        const password = e.target.password.value
        const checked = e.target.checkTerms.checked
        console.log({ email, password, checked });
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        const specialRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]).{6,}$/;
        if (!regex.test(password)) {
            setError('Passwords must be 6 character and one upperCase ,One lowercase')
            return
        } else if (!specialRegEx.test(password)) {
            setError('Passwords must be 6 character and one upperCase ,One lowercase and one special characters')
            return;
        }
        //reset error and success
        setError('')
        setSuccess(false)
        if (!checked) {
            setError('Accept Terms And Conditions')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log('after creation a new user', result.user);
                setSuccess(true)
                e.target.reset()
                sendEmailVerification(result.user)
                    .then(() => {
                        alert('Please verify your email address')
                    }).catch(err => {
                        setError(err.message)
                    })
            })
            .catch(err => {
                console.log('Error :', err.message)
                setError(err.message)
            })
    }
    const handleToggleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
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
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'} className="input" placeholder="Password" name='password' />
                                    <button onClick={handleToggleShowPassword} className='absolute top-3.5 right-6'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>
                                <div>
                                    <label class="label">
                                        <input type="checkbox"
                                            name='checkTerms' class="checkbox" />
                                        Remember me
                                    </label>
                                </div>
                                {/* {error ? 'Password should be at least 6 characters' : ''} */}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Registration</button>
                                <div>
                                    {
                                        success && <p className='text-green-500'>Registration Successfully</p>
                                    }
                                    {
                                        error && <p className='text-red-500'>{error}</p>
                                    }
                                </div>

                            </fieldset>
                        </form>
                        <div>
                            <p>Already Have an Account  Please <NavLink to='/login'><span className=' hover:text-blue-500 font-medium'>Sign In</span></NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
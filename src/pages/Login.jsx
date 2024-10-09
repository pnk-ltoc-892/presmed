import React, { useState } from 'react'

function Login() {
    const [state, setState] = useState('Sign Up')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        console.log(name);
        console.log(email);
        console.log(password);    
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg' >
                <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
                <p>Please {state} to book appointment</p>

                <div className={`w-full ${state === 'Sign Up' ? '' : 'hidden'}`}>
                    <p>Full Name</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1'
                    type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='w-full'>
                    <p>Email</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1'
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1'
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
                
                {
                    state === 'Sign Up' ? <p>Already have an account? <span className='text-primary underline cursor-pointer' onClick={() => setState('Login')}>Login Here</span></p> : <p>Create an new account? <span className='text-primary underline cursor-pointer' onClick={() => setState('Sign Up')}>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login
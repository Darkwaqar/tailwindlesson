import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
      <div>
        <img className='mx-auto h-12 w-auto' src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Creat your account</h2>
        <p className='mt-2 text-center text-sm text-gray-600 max-w'>Already Register?
          <a href="#" className='ml-2 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none
            focus:ring-2 focus:ring-indigo-500'>Sign in </a>
        </p>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <form action="#" method="POST" className='mb-0 space-y-6'>
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email address</label>
              <div className='mt-1'>
                <input type="email" id='email' name='email' autoComplete='email' required className=''  />
              </div>
            </div>
            <div>
              <label htmlFor="password">password</label>
              <div className='mt-1'>
                <input type="password" id='password' name='password' autoComplete='password' required className=''/>
              </div>
            </div>
            <div>
              <label htmlFor="company-size">company size</label>
              <div className='mt-1'>
                <select name="compnay-size" id="company-size" className=''>
                  <option value="">Please Select</option>
                  <option value="small">1 to 10 employess</option>
                  <option value="medium">11 to 10 employess</option>
                  <option value="large">50+ to 10 employess</option>
                </select>
              </div>
            </div>
            <div className='flex items-center'>
              <input id='terms-and-privacy' name='terms-and-privacy' type="checkbox"  className=''/>
              <label htmlFor="terms-and-privacy" className='ml-2 block text-sm text-gray-900'>
                I agree to the
                <a href="#" className='text-indigo-600 hover:text-indigo-500 px-1'>Terms</a>
                and 
                <a href="#" className='text-indigo-600 hover:text-indigo-500 px-1'>Privacy Policy</a>
              </label>
            </div>
            <div>
              <button type='submit' className='w-full felx justify-center py-2
              px-4 border border-transparent rounded-md shadow-sm text-sm
              font-medium text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:rind-indigo-500'>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

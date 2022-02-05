import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import Button from '../components/Button';
import Field from '../components/Field';
import Input from '../components/Input';
import Page from '../components/Page';
import { useSignIn } from '../hooks/user';

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();
    const {signIn, signInError, signInLoading} = useSignIn()
    
    const handleSubmit = async (e)=> {
            e.preventDefault();
          const valid =  await signIn(email, password)
          if(valid){
              router.push('/')
          }
    }

  return (
      <Page title="Sign in">
        <form onSubmit={handleSubmit} className = "flex flex-col mx-auto w-1/2 border-2 border-green-300 box-border py-4" >
            <Field label="Email" >
                <Input type="email" value={email} required onChange={(e)=> setEmail(e.target.value)} />
            </Field>
            <Field label="Password" >
                <Input type="password" value={password} required onChange= {(e)=> setPassword(e.target.value)} />
            </Field>
            {signInError && <p className='text-sm text-red-700 text-center' >Invalid credentials</p>}
            {signInLoading ? 
            <p className='text-center text-blue-400'>Loading ...</p> 
            : <Button type="submit" > 
                Sign in
            </Button>}
        </form>
      </Page> 
  )
};

export default SignInPage;

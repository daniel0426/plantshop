import React, { useState } from 'react';
import Button from '../components/Button';
import Field from '../components/Field';
import Input from '../components/Input';
import Page from '../components/Page';

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('should send to API')
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
            <Button type="submit" > 
                Sign in
            </Button>
        </form>
      </Page> 
  )
};

export default SignInPage;

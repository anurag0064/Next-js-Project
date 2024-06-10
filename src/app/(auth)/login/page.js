"use client";

import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';

import backgroundImage from '../../../assets/images/wallpaper.jpg'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <Card className="w-full max-w-xs">
        <CardBody>
          <div className="flex flex-col items-center">
            <Typography variant="h4" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-center">
              Welcome to Our Project
            </Typography>
          </div>
          <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <Input
                type="email"
                label="Your Email"
                placeholder="name@mail.com"
                size="lg"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                label="Password"
                placeholder="********"
                size="lg"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4 flex items-center">
              <Checkbox
                id="remember"
                color="blue-gray"
                label={
                  <Typography variant="small" color="gray" className="flex items-center">
                    I agree to the{' '}
                    <a href="#" className="ml-1 font-medium text-blue-gray-900 transition-colors hover:text-gray-900">
                      Terms and Conditions
                    </a>
                  </Typography>
                }
              />
            </div>
           
              <Typography color="red" className="mt-2 text-center">
               
              </Typography>
      
            <Button className="mt-6 bg-black" fullWidth color="blue-gray" type="submit">
              Login
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small" color="gray" className="text-center">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-gray-900 transition-colors hover:text-gray-900">
              Sign Up
            </a>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;

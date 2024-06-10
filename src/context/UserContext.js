"use client"


import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import config from '@/config/Constant';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${config.apiBaseUrl}/user/login`, {
        email,
        password,
        expiresInMins: 30,
      });
      setUser(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data : 'Login failed');
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, error, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

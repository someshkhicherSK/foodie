"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const AuthContext =
  createContext();


export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);


  // LOAD USER FROM LOCALSTORAGE
  useEffect(() => {

    const storedUser =
      localStorage.getItem(
        "user"
      );

    if (storedUser) {

      setUser(
        JSON.parse(
          storedUser
        )
      );

    }

    setLoading(false);

  }, []);


  // LOGIN
  const login = (
    userData,
    token
  ) => {

    localStorage.setItem(
      "user",
      JSON.stringify(
        userData
      )
    );

    localStorage.setItem(
      "token",
      token
    );

    setUser(userData);

  };


  // LOGOUT
  const logout = () => {

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "token"
    );

    setUser(null);

  };


  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {!loading &&
        children}

    </AuthContext.Provider>

  );
};


export const useAuth =
  () => useContext(
    AuthContext
  );
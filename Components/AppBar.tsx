"use client"

import React from "react";

import { signIn, signOut } from "next-auth/react";
const AppBar = () => {
  return (
    <div>
      <button onClick={() => {signIn()}}>signIn</button>
      <button onClick={() => {signOut()}}>signOut</button>
    </div>
  );
};

export default AppBar;

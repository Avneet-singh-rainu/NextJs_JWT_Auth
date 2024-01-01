"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const form = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    await res.json().then((data) => {
      console.log(data.user);
      console.log(data.message);

      setData({
        name: "",
        password: "",
      });
      return router.push(`/profile`);
    });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center ">
      <div className="bg-black shadow-md rounded px-16 pt-8 pb-12 mb-4 border-2 border-blue-600 ">
        <h1 className="text-3xl mb-4 text-center">Login</h1>
        <form className=" flex gap-2 items-center justify-center text-black ">
          <input
            name="name"
            value={data.name}
            type="text"
            placeholder="Username"
            onChange={onValueChange}
          />
          <input
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            onChange={onValueChange}
          />
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Do not have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default form;

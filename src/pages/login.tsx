import { authApi } from "@/api-client";
import { useAuth } from "@/hooks";
import React from "react";
import { useRouter } from "next/router";
import { PATHNAME } from "@/configs";

type Props = {};

const login = (props: Props) => {
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });
  const router = useRouter();
  const handleLogin = async () => {
    try {
      await login();
      router.push(PATHNAME.HOME);
    } catch (error) {}
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {}
  };

  console.log(profile);

  return (
    <div>
      <h1>Login Page</h1>
      <h2>profile: {JSON.stringify(profile || {}, null, 4)} </h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default login;

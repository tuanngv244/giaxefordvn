import { useAuth } from "@/hooks";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { PATHNAME } from "@/configs";

type AuthContainerProps = {
  children?: ReactNode;
};

const AuthContainer = (props: AuthContainerProps) => {
  const { children } = props || {};
  const { profile, firstLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(!firstLoading, !profile?.username, profile);
    if (!firstLoading && !profile?.username) router.push(PATHNAME.LOGIN);
  }, [firstLoading, profile, router]);

  if (!profile?.username) return <p>Loading time...!</p>;
  return <div>{children}</div>;
};

export default AuthContainer;

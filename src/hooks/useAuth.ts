import { authApi } from "@/api-client";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
export const useAuth = (options?: Partial<PublicConfiguration>) => {
  // profile
  const {
    data: profile,
    error,
    isLoading,
    mutate,
  } = useSWR("/profile", null, {
    dedupingInterval: 60000, // 1h
    revalidateOnFocus: false,
    ...options,
  });

  const login = async () => {
    await authApi.login({
      username: "vanTuan",
      password: "123abc",
    });
    await mutate(); // trigger login after refetch new profile data
  };
  const logout = async () => {
    await authApi.logout();
    mutate({}, false);
  };

  const firstLoading = profile === undefined && error === undefined;

  return {
    profile,
    error,
    isLoading,
    mutate,
    login,
    logout,
    firstLoading,
  };
};

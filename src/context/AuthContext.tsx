"use client";
import { Company, User } from "@/store/definitions";
import { getUserInfo } from "@/store/main";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type authContextType = {
  user: User | Company | "" | null;
  login: (email: string) => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: "",
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | Company | "" | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userLocal = JSON.parse(user);
      setUser(userLocal);
    } else {
      setUser(null);
    }
  }, []);

  const login = async (email: string) => {
    const userInfo = await getUserInfo(email);
    localStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo as User | Company | "" | null);
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem("user", "");
    window.location.href = "/";
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

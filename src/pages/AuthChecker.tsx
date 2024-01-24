import { useEffect } from "react";
import { useRouter } from "next/router";

import { ReactNode } from "react";

function AuthChecker({ children }: { children: ReactNode }) {
  const router = useRouter();

  function isAuthenticated() {
    const token = localStorage.getItem("user");
    return !!token;
  }

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  return children;
}

export default AuthChecker;

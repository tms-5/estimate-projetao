"use client";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "@/lib/components/sidebar/Sidebar";
import { userType } from "@/store/enum";
import { isAuthenticated } from "@/store/main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Layout(props: {
  childrenDev: React.ReactNode;
  childrenCompany: React.ReactNode;
  backto?: string;
  backToRoute?: string;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    if (user === "" || user === null) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div id="Layout">
      {isAuthenticated()
        ? user &&
          typeof user !== "string" && (
            <Sidebar
              user={user!}
              backTo={props.backto}
              backToRoute={props.backToRoute}
            >
              {user.level === userType.developer
                ? props.childrenDev
                : props.childrenCompany}
            </Sidebar>
          )
        : null}
    </div>
  );
}

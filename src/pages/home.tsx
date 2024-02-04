"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "@/lib/components/sidebar/Sidebar";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/store/main";
import HomeDev from "@/lib/components/appComponents/home/HomeDev";
import HomeCompany from "@/lib/components/appComponents/home/HomeCompany";
import { userType } from "@/store/enum";

function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

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
    <>
      {isAuthenticated()
        ? user &&
          typeof user !== "string" && (
            <Sidebar user={user!}>
              {user.level === userType.developer ? (
                <HomeDev user={user} />
              ) : (
                <HomeCompany />
              )}
            </Sidebar>
          )
        : null}
    </>
  );
}

export default DashboardPage;

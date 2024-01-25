"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "@/lib/components/sidebar/Sidebar";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/store/main";
import { userType } from "@/store/enum";
import TaskDev from "@/lib/components/appComponents/task/TaskDev";
import TaskCompany from "@/lib/components/appComponents/task/TaskCompany";

function TasksPage() {
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
      {isAuthenticated() && user && typeof user !== "string" && (
        <Sidebar user={user!}>
          {user.level === userType.developer ? <TaskDev /> : <TaskCompany />}
        </Sidebar>
      )}
    </>
  );
}

export default TasksPage;

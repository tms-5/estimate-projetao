"use client";
import Login from "@/lib/components/appComponents/login/Login";
import Background from "@/lib/components/appComponents/background/background";


export default function Page() {
  return (
    <div className="d-flex h-100">
      <Login />
      <Background />
    </div>
  );
}

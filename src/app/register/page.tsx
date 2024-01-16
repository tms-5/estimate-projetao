"use client";
import Background from "@/lib/components/appComponents/background/background";
import Register from "@/lib/components/appComponents/register/Register";
import RegisterForm from "@/lib/components/appComponents/register/RegisterForm";
import { userType } from "@/store/enum";
import { useState } from "react";

export default function Page() {
  const [activeType, setActiveType] = useState("");

  if (activeType === "") {
    return (
      <div className="d-flex h-100">
        <Background />
        <Register setActiveType={setActiveType} activeType={activeType} />
      </div>
    );
  } else {
    return <RegisterForm activeType={activeType} setActiveType={setActiveType}/>;
  }
}

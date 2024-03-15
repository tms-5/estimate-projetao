import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Login from "@/lib/components/appComponents/login/Login";
import Background from "@/lib/components/appComponents/background/background";

export default function Home() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <div className="d-flex h-100">
      <Login />
      <Background />
    </div>
  );
}

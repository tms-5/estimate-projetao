"use client";
import Logo from "../../../assets/logo/logo-degrade.png";
import Image from "next/image";
import Input from "../../input/Input";
import Button from "../../button/Button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { isAuthenticated } from "@/store/main";
import { useRouter } from "next/router";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateLogin = async () => {
    if (formData.email === "" || formData.password === "") {
      alert("Preencha todos os campos");
    } else if (
      formData.email === "developer@example.com" ||
      formData.email === "company@example.com"
    ) {
      await login(formData.email);
      window.location.href = "/home";
    }
  };

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/home");
    }
  }, []);

  return (
    <>
      <div className="w-50" id="Login">
        <div className="w-70 d-grid justify-items-center">
          <Image src={Logo} alt="Logo" />
          <Input
            type="email"
            class="b-none mt-2r w-web font-nunito"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            class="b-none mt-1r w-web font-nunito"
            placeholder="Senha"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          <div className="d-flex mt-2r justify-s-b w-100">
            <Button
              text={"Entrar"}
              class="b-none bg-white"
              onClick={() => validateLogin()} style={"primary"}            />
            <Button text={"Esqueceu a senha?"} class="b-none no-filter" style={"primary"} />
          </div>
        </div>

        <Link
          key={"register"}
          href={"/register"}
          className="b-none no-filter fw-400 button-register-now"
        >
          <p className="hidden md:block">Não tem conta? Cadastre-se agora</p>
        </Link>
      </div>{" "}
    </>
  );
}

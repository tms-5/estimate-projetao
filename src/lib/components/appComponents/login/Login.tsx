"use client";
import Logo from "../../../assets/logo/logo-degrade.png";
import Image from "next/image";
import "./Login.scss";
import Input from "../../input/Input";
import Button from "../../button/Button";
import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-50" id="Login">
      <div className="w-70 d-grid justify-items-center">
        <Image src={Logo} alt="Logo" />
        <Input
          type="email"
          class="b-none mt-2r w-web font-nunito"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          class="b-none mt-1r w-web font-nunito"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="d-flex mt-2r justify-s-b w-100">
          <Button text={"Entrar"} class="b-none bg-white" />
          <Button text={"Esqueceu a senha?"} class="b-none no-filter" />
        </div>
      </div>

      <Link
        key={"register"}
        href={"/register"}
        className="b-none no-filter fw-400 button-register-now"
      >
        <p className="hidden md:block">Não tem conta? Cadastre-se agora</p>
      </Link>
    </div>
  );
}

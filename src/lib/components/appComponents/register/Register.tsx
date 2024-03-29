"use client";
import Logo from "../../../assets/logo/logo-degrade.png";
import Arrow from "../../../assets/icon/arrow.png";
import Image from "next/image";
import Button from "../../button/Button";
import React, { useState } from "react";
import { userType } from "@/store/enum";
import Link from "next/link";

export default function Register(props: {
  setActiveType: (arg: string) => any;
  activeType: string;
}) {
  const [active, setActive] = useState("");
  const allUserTypes = Object.values(userType) ?? [];

  return (
    <div className="w-50" id="Cadastro">
      <div className="w-70 d-grid justify-items-center">
        <Image src={Logo} alt="Logo" className="logo-img" />

        <p className="mt-2r mb-1r f-08">Quero me cadastrar como:</p>

        {allUserTypes.map((item) => (
          <Button
            key={item}
            text={item}
            class={`button-checkbox w-100 text-start mb-1r ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)} style={"primary"}          />
        ))}

        <div className="d-flex mt-3r justify-s-b">
          <Button
            text={<Image src={Arrow} alt="Arrow" width={35} />}
            class="p-1 button-arrow-register"
            onClick={() => props.setActiveType(active)} style={"primary"}          />
        </div>
      </div>
      <Link
        key={"register"}
        href={"/register"}
        className="b-none no-filter fw-400 button-register-now"
      >
        <p className="hidden md:block">Já tem uma conta? Entrar</p>
      </Link>
    </div>
  );
}

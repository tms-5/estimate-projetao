"use client";
import Logo from "../../../assets/logo/logo-degrade.png";
import Arrow from "../../../assets/icon/arrow.png";
import Image from "next/image";
import Button from "../../button/Button";
import React, { useState } from "react";
import { userType } from "@/store/enum";
import Input from "../../input/Input";
import Back from "../../back/Back";

export default function RegisterForm(props: {
  activeType: string;
  setActiveType: (arg: string) => any;
}) {
  const formDev = [
    { value: "name", type: "text", placeholder: "Nome completo" },
    { value: "nickname", type: "text", placeholder: "Apelido de usuário" },
    { value: "email", type: "email", placeholder: "Email" },
    { value: "password", type: "password", placeholder: "Senha" },
    { value: "occupation", type: "text", placeholder: "Cargo atual" },
  ];

  const formCompany = [
    { value: "name", type: "text", placeholder: "Nome da empresa" },
    { value: "email", type: "email", placeholder: "Email" },
    { value: "password", type: "password", placeholder: "Senha" },
  ];

  const [formDataDev, setFormDataDev] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    seniority: "",
    occupation: "",
    specialist: false,
  });

  const [formDataCompany, setFormDataCompany] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: { target: { name: any; value: any } },
    formData: any,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function returnData() {
    if (props.activeType === userType.developer) {
      return formDataDev;
    } else {
      return formDataCompany;
    }
  }

  return (
    <div className="w-100" id="RegisterDev">
      <Back text={"Voltar"} onClick={() => props.setActiveType("")} />
      <div className="w-50 d-grid justify-items-center">
        <Image src={Logo} alt="Logo" className="logo-img" />

        {props.activeType === userType.developer &&
          formDev.map((item) => {
            return (
              <Input
                key={item.value}
                name={item.value}
                type={item.type}
                class="b-none bg-white mt-2r w-web font-nunito"
                placeholder={item.placeholder}
                onChange={(e) => handleChange(e, formDataDev, setFormDataDev)}
              />
            );
          })}

        {props.activeType === userType.company &&
          formCompany.map((item) => {
            return (
              <Input
                key={item.value}
                name={item.value}
                type={item.type}
                class="b-none bg-white mt-2r w-web font-nunito"
                placeholder={item.placeholder}
                onChange={(e) =>
                  handleChange(e, formDataCompany, setFormDataCompany)
                }
              />
            );
          })}

        <div className="d-flex mt-3r justify-s-b">
          <Button
            text={<Image src={Arrow} alt="Arrow" width={35} />}
            class="p-1 button-arrow-register"
            onClick={() => console.log(returnData())}
          />
        </div>
      </div>
    </div>
  );
}

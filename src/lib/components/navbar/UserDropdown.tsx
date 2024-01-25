"use-client";
import { useEffect, useState } from "react";
import Arrow from "../../assets/icon/arrow_back.png";
import Image from "next/image";
import Button from "../button/Button";
import { useAuth } from "@/context/AuthContext";

function UserDropdown({ userName }: { userName: string }) {
  const [abreviacao, setAbreviacao] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  const changeAbreviacao = (nome: string) => {
    if (nome) {
      let posicaoLetra = nome.indexOf(" ");
      let primeiraLetra = nome.substring(0, 1);
      let segundaLetra = nome.substring(posicaoLetra + 1, posicaoLetra + 2);
      setAbreviacao(primeiraLetra + segundaLetra);
    }
  };

  useEffect(() => {
    userName !== "" && changeAbreviacao(userName);
  }, [userName]);

  return (
    <>
      <div className="p-relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="d-flex c-pointer align-items-center"
        >
          <div className="circle mr-1r fw-800">{abreviacao}</div>
          <div className="f-09">{userName}</div>
          <Image
            src={Arrow}
            alt="Arrow"
            width={8}
            className={`ml-2r mr-1r ${isOpen ? `arrow-down` : "arrow-up"} blue-img`}
          />
        </div>

        {isOpen && (
          <div className="p-absolute navbar-dropdown">
            <Button text={"Encerrar sessão"} onClick={logout} />
          </div>
        )}
      </div>
    </>
  );
}

export default UserDropdown;

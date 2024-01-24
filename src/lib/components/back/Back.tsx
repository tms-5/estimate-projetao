"use client";
import ArrowBack from "../../assets/icon/arrow_back.png";
import Image from "next/image";

export default function Back(props: { text: string; onClick: () => void }) {
  return (
    <div className="d-flex back-component" onClick={props.onClick}>
      <Image src={ArrowBack} alt="ArrowBack" />
      <p className="c-gray-50 ml-1r">{props.text}</p>
    </div>
  );
}

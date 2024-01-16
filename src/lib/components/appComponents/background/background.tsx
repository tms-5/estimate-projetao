import "./background.scss";
import Cube from "../../../assets/logo/logomarca.png";
import Image from "next/image";

export default function Background() {
  return (
    <div className="w-50 bg-space-blue-100 p-relative o-hidden">
      <div className="square-1" />
      <div className="square-2" />
      <div className="square-4" />
      <div className="square-3" />
      <Image src={Cube} alt="Logo" className="cube-logo" />
    </div>
  );
}

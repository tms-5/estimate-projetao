"use-client";
import { Company, User } from "@/store/definitions";
import { userType } from "@/store/enum";
import Image from "next/image";
import Logo from "../../assets/logo/logo-100-branca.png";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

function Sidebar(props: {
  user: Company | User;
  children: React.ReactNode;
  backTo?: string;
  backToRoute?: string;
}) {
  const [search, setSearch] = useState(false);
  const developerOptions = [
    { name: "Dashboard", path: "/home", search: true },
    { name: "Tasks", path: "/tasks", search: false },
    { name: "Projetos", path: "/projects", search: false },
    { name: "Suporte", path: "/support", search: false },
  ];

  const companyOptions = [
    { name: "Início", path: "/home", search: false },
    { name: "Projetos", path: "/projects", search: false },
  ];

  useEffect(() => {
    if (
      window.location.pathname === "/home" &&
      props.user.level === userType.developer
    ) {
      setSearch(true);
    }
  }, [props.user.level]);

  return (
    <>
      <div className="d-flex h-100v">
        <aside className="bg-space-blue-100 c-white pl-1r pr-1r pt-2r sidebar-menu">
          <Image src={Logo} width={150} alt="Logo EstiMate" className="mb-1r" />
          {props.user && props.user.level === userType.developer
            ? developerOptions.map((option, i) => (
                <SidebarItem key={i} option={option} itemId={i} />
              ))
            : props.user && props.user.level === userType.company
            ? companyOptions.map((option, i) => (
                <SidebarItem key={i} option={option} itemId={i} />
              ))
            : null}
        </aside>
        <Navbar
          user={props.user!}
          search={search}
          backTo={props.backTo}
          backToRoute={props.backToRoute}
        >
          {props.children}
        </Navbar>
      </div>
    </>
  );
}

export default Sidebar;

"use-client";
import { Company, User } from "@/store/definitions";
import { userType } from "@/store/enum";
import Image from "next/image";
import Logo from "../../assets/logo/logo-100-branca.png";
import IconMenu from "../../assets/icon/dashboard_FILL1_wght400_GRAD0_opsz24 1.png";
import { useRouter } from "next/router";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";

function Sidebar({
  user,
  children,
}: {
  user: Company | User;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isRouteActive = (path: string) => {
    return router.pathname === path;
  };

  const [search, setSearch] = useState(false);
  const developerOptions = [
    { name: "Dashboard", path: "/home", search: true },
    { name: "Tasks", path: "/tasks", search: false },
    { name: "Projetos", path: "/projects", search: false },
    { name: "Suporte", path: "/support", search: false },
  ];

  const companyOptions = [
    { name: "Início", path: "/home", search: false },
    { name: "Projetos", path: "/projetos", search: false },
  ];

  useEffect(() => {
    if (
      window.location.pathname === "/home" &&
      user.level === userType.developer
    ) {
      setSearch(true);
    }
  }, [user.level]);

  return (
    <>
      <div className="d-flex h-100v">
        <aside className="bg-space-blue-100 c-white pl-1r pr-1r pt-2r sidebar-menu">
          <Image src={Logo} width={150} alt="Logo EstiMate" className="mb-1r" />
          {user && user.level === userType.developer
            ? developerOptions.map((option) => (
                <div
                  className={`d-flex align-items-center mb-1 pl-1 pr-1 c-pointer ${
                    isRouteActive(option.path) ? "active-item-sidebar" : ""
                  }`}
                  key={option.name}
                  onClick={() => router.push(option.path)}
                >
                  <Image src={IconMenu} width={15} alt="Icon menu" />
                  <div className="ml-1 f-09">{option.name}</div>
                </div>
              ))
            : user && user.level === userType.company
            ? companyOptions.map((option) => (
                <div
                  className={`d-flex align-items-center mb-1 pl-1 pr-1 c-pointer ${
                    isRouteActive(option.path) ? "active-item-sidebar" : ""
                  }`}
                  key={option.name}
                  onClick={() => router.push(option.path)}
                >
                  <Image src={IconMenu} width={15} alt="Icon menu" />
                  <div className="ml-1 f-09">{option.name}</div>
                </div>
              ))
            : null}
        </aside>
        <Navbar user={user!} search={search}>
          {children}
        </Navbar>
      </div>
    </>
  );
}

export default Sidebar;

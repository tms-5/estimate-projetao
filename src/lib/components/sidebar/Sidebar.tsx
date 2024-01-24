"use-client";
import { Company, User } from "@/store/definitions";
import { userType } from "@/store/enum";
import Image from "next/image";
import Logo from "../../assets/logo/logo-100-branca.png";
import IconMenu from "../../assets/icon/dashboard_FILL1_wght400_GRAD0_opsz24 1.png";
import { useRouter } from "next/router";
import Navbar from "../navbar/Navbar";

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
  const developerOptions = [
    { name: "Dashboard", path: "/home" },
    { name: "Tasks", path: "/tasks" },
    { name: "Projetos", path: "/projects" },
    { name: "Suporte", path: "/support" },
  ];

  const companyOptions = [
    { name: "Início", path: "/home" },
    { name: "Projetos", path: "/projetos" },
  ];

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
        <Navbar user={user!}>{children}</Navbar>
      </div>
    </>
  );
}

export default Sidebar;

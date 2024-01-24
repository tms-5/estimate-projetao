"use-client";
import { Company, User } from "@/store/definitions";
import { userType } from "@/store/enum";
import Image from "next/image";
import { useEffect } from "react";
import Logo from "../../assets/logo/logo-100-branca.png";
import IconMenu from "../../assets/icon/dashboard_FILL1_wght400_GRAD0_opsz24 1.png";

function Sidebar({
  user,
  children,
}: {
  user: Company | User;
  children: React.ReactNode;
}) {
  const developerOptions = [
    { name: "Início", path: "/inicio" },
    { name: "Tasks", path: "/tasks" },
  ];

  const companyOptions = [
    { name: "Início", path: "/inicio" },
    { name: "Projetos", path: "/projetos" },
  ];

  console.log(user);

  useEffect(() => {
    if (user) {
      if (user.level === userType.developer) {
        console.log("developer");
      }
      if (user.level === userType.company) {
        console.log("company");
      }
    }
  }, [user]);

  return (
    <>
      <div className="d-flex h-100v">
        <aside className="bg-space-blue-100 c-white pl-1r pr-1r pt-2r">
          <Image src={Logo} width={150} alt="Logo EstiMate" className="mb-1r"/>
          {user &&
            user.level === userType.developer &&
            developerOptions.map((option) => (
              <div className="d-flex align-items-center" key={option.name}>
                <Image src={IconMenu} width={15} alt="Icon menu" />
                <div>{option.name}</div>
              </div>
            ))}
          {user &&
            user.level === userType.company &&
            companyOptions.map((option) => (
              <div key={option.name}>{option.name}</div>
            ))}
        </aside>
        {children}
      </div>
    </>
  );
}

export default Sidebar;

import Image from "next/image";
import { useRouter } from "next/router";
import IconMenu from "../../assets/icon/dashboard_FILL1_wght400_GRAD0_opsz24 1.png";

export default function SidebarItem(props: {
  option: { name: string; path: string; search: boolean };
  itemId: number;
}) {
  const router = useRouter();
  const isRouteActive = (path: string) => {
    return router.pathname === path;
  };
  return (
    <div
      className={`d-flex align-items-center mb-1 pl-1 pr-1 c-pointer ${
        isRouteActive(props.option.path) ? "active-item-sidebar" : ""
      }`}
      onClick={() => router.push(props.option.path)}
    >
      <Image src={IconMenu} width={15} alt="Icon menu" />
      <div className="ml-1 f-09">{props.option.name}</div>
    </div>
  );
}

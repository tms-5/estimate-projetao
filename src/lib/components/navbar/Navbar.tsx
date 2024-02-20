"use-client";
import { Company, User } from "@/store/definitions";
import SearchInput from "../search/Search";
import UserDropdown from "./UserDropdown";
import Back from "../back/Back";
import { useRouter } from "next/router";

function Navbar(props: {
  user: Company | User;
  children: React.ReactNode;
  search?: boolean;
  backTo?: string;
  backToRoute?: string;
}) {
  const router = useRouter();
  function handleSearch(searchTerm: string) {
    console.log(searchTerm);
  }

  const renderRightComponent = () => {
    if (props.search)
      return <SearchInput onSearch={handleSearch} placeholder="Pesquisar..." />;
    if (props.backTo && props.backToRoute)
      return (
        <Back
          text={props.backTo}
          onClick={() => router.push(props.backToRoute || "")}
        />
      );
    return <></>;
  };

  return (
    <div className="p-2 w-web ml-2r">
      <div
        className={`d-flex ${
          props.search || props.backTo ? "justify-s-b" : "justify-end"
        }`}
      >
        {renderRightComponent()}
        <div>
          {props.user && <UserDropdown userName={props.user.name.toString()} />}
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Navbar;

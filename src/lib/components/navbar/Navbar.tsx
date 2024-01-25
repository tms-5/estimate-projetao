"use-client";
import { Company, User } from "@/store/definitions";
import SearchInput from "../search/Search";
import UserDropdown from "./UserDropdown";
import { useEffect, useState } from "react";

function Navbar(props: {
  user: Company | User;
  children: React.ReactNode;
  search?: boolean;
}) {
  function handleSearch(searchTerm: string) {
    console.log(searchTerm);
  }

  return (
    <div className="p-2 w-web">
      <div
        className={`d-flex w-100 ${
          props.search ? "justify-s-b" : "justify-end"
        }`}
      >
        {props.search && (
          <SearchInput onSearch={handleSearch} placeholder="Pesquisar..." />
        )}
        <div>
          {props.user && <UserDropdown userName={props.user.name.toString()} />}
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Navbar;

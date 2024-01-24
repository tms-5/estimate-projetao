"use-client";
import { Company, User } from "@/store/definitions";
import SearchInput from "../search/Search";

function Navbar({
  user,
  children,
}: {
  user: Company | User;
  children: React.ReactNode;
}) {
  function handleSearch(searchTerm: string) {
    console.log(searchTerm);
  }
  return (
    <div className="p-2 w-web">
      <div className="d-flex w-100 justify-s-b">
        <SearchInput onSearch={handleSearch} placeholder="Pesquisar..." />
        <div>{user && user.name}</div>
      </div>
      {children}
    </div>
  );
}

export default Navbar;

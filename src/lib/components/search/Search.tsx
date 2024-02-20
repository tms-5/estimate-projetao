import React, { useState } from "react";
import Search from "../../assets/icon/search-icon.png";
import Image from "next/image";

function SearchInput({
  onSearch,
  placeholder,
  className,
}: {
  onSearch: Function;
  placeholder: string;
  className?: string;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={`search-div p-relative`}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`search-input ${className ?? ""}`}
      />
      <button onClick={handleSearch}>
        <Image src={Search} alt="Search icon" width={20} />
      </button>
    </div>
  );
}

export default SearchInput;

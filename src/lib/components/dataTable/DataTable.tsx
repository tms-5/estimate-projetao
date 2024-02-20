import React, { useEffect, useState } from "react";
import Image from "next/image";
import DoubleArrow from "@/lib/assets/icon/double-arrow.png";

interface FilterProps {
  functionFilter: (key: string, value: string) => void;
}

export default function DataTable({
  headers,
  data,
  hasFilters,
  hiddenFilters,
  FilterComponent,
}: {
  headers: { value: string; key: string }[];
  data: any[];
  hasFilters?: boolean;
  hiddenFilters?: boolean;
  FilterComponent?: React.ElementType<FilterProps>;
}) {
  const [showFilters, setShowFilters] = useState<boolean>(
    hiddenFilters ?? false
  );
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>(
    {}
  );

  interface FilterAsProps {
    filter: React.ReactNode;
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const filteredData = data.filter((row) =>
    Object.entries(filterValues).every(([key, filterValue]) =>
      row[key].toString().toLowerCase().includes(filterValue.toLowerCase())
    )
  );

  const FilterAsProps: React.FC<FilterAsProps> = ({ filter }) => {
    return <>{filter}</>;
  };

  return (
    <>
      {hasFilters && !showFilters && FilterComponent && (
        <FilterComponent functionFilter={handleFilterChange} />
      )}
      {hasFilters && (
        <>
          <div className="d-flex align-items-center mt-1r">
            <hr className="line-hidden-filter-table" />
            <div
              className="circle-hidden-filter-table c-pointer"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Image
                src={DoubleArrow}
                alt="Double arrow"
                className={`svg-to-blue ${showFilters ? "rotate-arrow" : ""}`}
                width={15}
              />
            </div>
            <hr className="line-hidden-filter-table" />
          </div>
        </>
      )}
      <div className="table-container mt-1 mb-1r">
        <div className="mb-1r">Itens ({filteredData.length})</div>
        <table className="w-web">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.key} className="f-07 text-start fw-500 pb-1">
                  {header.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row: any, index: number) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header.key} className="f-07">
                    {Array.isArray(row[header.key])
                      ? row[header.key]?.join(", ")
                      : row[header.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

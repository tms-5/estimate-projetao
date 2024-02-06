import { Key } from "react";

export default function DataTable({
  headers,
  data,
}: {
  headers: { name: string; value: string }[];
  data: any[];
}) {
  return (
    <div className="table-container mt-1r mb-1r">
      <div className="mb-1r">Itens ({data.length})</div>
      <table className="w-web">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.value} className="f-07 text-start fw-500 pb-1">
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, index: Key) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header.value} className="f-07">
                  {row[header.value]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import styled from "styled-components";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const BasicTable = styled.table`
  width: 100%;
  border-spacing: 0;
  color: #525252;
`;

const Tr = styled.tr`
  border-bottom: 2px solid #c4e0ff;

  &:last-child td {
    &:nth-child(1) {
    border-radius: 0 0 0 10px;
    }
    &:last-child {
        border-radius: 0 0 10px 0;
    }
  }
`;

const Th = styled.th`
  padding: 12px 8px;
  text-align: center;
  font-weight: 600;
  border: 1px solid #C4E0FF;
  border-left: none;
  font-size: 16px;
  white-space: nowrap;
  
  &:nth-child(1) {
    border-left: 1px solid #C4E0FF;
    border-radius: 10px 0 0 0;
  }
  &:last-child {
    border-radius: 0 10px 0 0;
  }
`;

const Td = styled.td`
  padding: 12px 8px;
  text-align: left;
  border-bottom: 1px solid #C4E0FF;
  border-right: 1px solid #C4E0FF;
  text-align: center;
  font-size: 15px;

  &:nth-child(1) {
    border-left: 1px solid #C4E0FF;
  }
`;

const BorderTable = ({ headers, data }) => {
  const columns = React.useMemo(
    () =>
      headers.map((header) => ({
        header: header.label,
        accessorKey: header.accessor || header.label,
        size: header.width,
        cell: header.cell
          ? ({ row }) => header.cell(row.original)
          : ({ getValue }) => getValue(),
      })),
    [headers],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <BasicTable>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th
                key={header.id}
                style={{ width: header.column.columnDef.size }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </Th>
            ))}
          </Tr>
        ))}
      </thead>
      <tbody>
        {!table.getRowModel().rows.length ? (
          <Tr>
            <Td colSpan={headers.length} style={{ textAlign: "center" }}>
              데이터가 없습니다.
            </Td>
          </Tr>
        ) : (
          table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))
        )}
      </tbody>
    </BasicTable>
  );
};

export default BorderTable;

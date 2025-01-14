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
`;

const Th = styled.th`
  background: #c4e0ff;
  padding: 12px 8px;
  text-align: center;
  font-weight: 600;
  border-right: 1px solid #d2d2d2;
  border-top: none;
  font-size: 16px;
  white-space: nowrap;
  
  &:nth-child(1) {
    border-left: 1px solid #d2d2d2;
  }
`;

const Td = styled.td`
  padding: 12px 8px;
  text-align: left;
  border-bottom: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  text-align: center;
  font-size: 16px;

  &:nth-child(1) {
    border-left: 1px solid #d2d2d2;
  }
`;

const BasicTables = ({ headers, data }) => {
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

export default BasicTables;

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
  border-bottom: 2px solid #e5e7eb;
`;

const Th = styled.th`
  background: #c4e0ff;
  padding: 12px 8px;
  text-align: center;
  font-weight: 600;
  border-right: 1px solid #e5e7eb;
  border-top: none;
  font-size: 16px;
  white-space: nowrap;

  &:nth-child(1) {
    border-left: 1px solid #e5e7eb;
  }
`;

const Td = styled.td`
  padding: 12px 8px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  text-align: center;
  font-size: 16px;

  &:nth-child(1) {
    border-left: 1px solid #e5e7eb;
  }
`;

const translations = {
  payConfirme: "결제 확정",
  payProgress: "결제 진행",
  payComplete: "결제 완료",
  estimat: "견적 발급",
  needGuide: "안내 필요",
  waitInfo: "정보 대기",
  needIssue: "발급 필요",
  issueComplete: "발급 완료",
};

const BasicTables = ({ headers, data }) => {
  const columns = React.useMemo(
    () =>
      headers.map((header) => ({
        header: header.label,
        accessorKey: header.accessor || header.key,
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
                {cell.column.id === 'payStatus' || cell.column.id === 'accountStatus'
                  ? translations[cell.getValue()] || cell.getValue() // 번역된 값 사용
                  : flexRender(cell.column.columnDef.cell, cell.getContext())}
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

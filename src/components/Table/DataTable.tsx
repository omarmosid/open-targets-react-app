/* eslint-disable react/jsx-key */

import React, { Component, ReactNode } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Skeleton,
} from "@mui/material";
import { useExpanded, useTable } from "react-table";
import { ChartTabs } from "src/features/diseaseTable/ui/ChartTabs";

type DataTableProps<T = any> = {
  data?: Array<T>;
  columns: Array<any>;
  isLoading?: boolean;
  error?: any;
};

const DataTable: React.FC<DataTableProps> = ({
  data = [],
  columns: passedColumns,
  isLoading,
  error
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns: passedColumns,
      data,
    },
    useExpanded // Use the useExpanded plugin hook
  );

  if (isLoading) {
    const rows = new Array(10).fill("");
    return (
      <TableContainer sx={{ maxHeight: "80vh" }} component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="Data table"
          size="small"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              {passedColumns.map((column, index) => {
                return (
                  <TableCell key={index}>
                    <Skeleton variant="text" />
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow key={`loadin-row-${index}`}>
                  {passedColumns.map((column, colIndex) => {
                    return (
                      <TableCell key={`loading-col-${colIndex}`}>
                        <Skeleton variant="text" />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <>
      <TableContainer sx={{ maxHeight: "80vh" }} component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="Data table"
          size="small"
          stickyHeader
          {...getTableProps()}
        >
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    sx={{
                      fontWeight: 700,
                    }}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {rows.map((row: any, i) => {
              prepareRow(row);
              return (
                // Use a React.Fragment here so the table markup is still valid
                <React.Fragment {...row.getRowProps()}>
                  <TableRow>
                    {row.cells.map((cell: any) => {
                      return (
                        <TableCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                  {row.isExpanded ? (
                    <TableRow>
                      <TableCell colSpan={visibleColumns.length}>
                        {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                        <ChartTabs data={row.original} />
                      </TableCell>
                    </TableRow>
                  ) : null}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export { DataTable };

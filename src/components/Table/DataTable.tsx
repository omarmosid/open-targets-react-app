/* eslint-disable react/jsx-key */

import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import { useExpanded, useTable } from "react-table";

type DataTableProps<T = any> = {
  data?: Array<T>;
  columns: Array<any>;
};

const DataTable: React.FC<DataTableProps> = ({
  data = [],
  columns: passedColumns,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, visibleColumns } =
    useTable(
      {
        columns: passedColumns,
        data,
      },
      useExpanded // Use the useExpanded plugin hook
    );

    const renderRowSubComponent = React.useCallback(
      ({ row }) => (
        <pre
          style={{
            fontSize: '10px',
          }}
        >
          <code>{JSON.stringify({ values: row.original }, null, 2)}</code>
        </pre>
      ),
      []
    )

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="Data table"
          {...getTableProps()}
        >
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
          {rows.map((row: any, i) => {
            prepareRow(row)
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment {...row.getRowProps()}>
                <TableRow>
                  {row.cells.map((cell: any) => {
                    return (
                      <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                    )
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
                      {renderRowSubComponent({ row })}
                    </TableCell>
                  </TableRow>
                ) : null}
              </React.Fragment>
            )
          })}
        </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export { DataTable };

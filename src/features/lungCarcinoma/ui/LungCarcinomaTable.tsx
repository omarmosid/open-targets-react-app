import React, { useMemo } from "react";
import { CellProps, Column } from "react-table";
import { DataTable } from "src/components/Table/DataTable";
import { useLungCarcinomaAssociatedTargetsQuery } from "src/utils/graphql/codegen";
import { ExpandButtons } from "./ExpandButtons";

type LungCarcinomaTableProps = {};

const LungCarcinomaTable: React.FC<LungCarcinomaTableProps> = () => {
  const columns = useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }: any) => <ExpandButtons row={row} />,
      },
      {
        accessor: "target.approvedSymbol",
        Header: "Approved Symbol",
      },
      {
        accessor: "target.approvedName",
        Header: "Gene Name",
      },
      {
        accessor: "score",
        Header: "Overall Association Score",
      },
    ],
    []
  );

  const { data, loading, error } = useLungCarcinomaAssociatedTargetsQuery({
    variables: {
      efoId: "EFO_0001071",
      page: {
        index: 0,
        size: 10,
      },
    },
    fetchPolicy: "cache-first",
  });

  return (
    <>
      <DataTable
        columns={columns}
        data={data?.disease?.associatedTargets.rows}
      />
    </>
  );
};

export { LungCarcinomaTable };

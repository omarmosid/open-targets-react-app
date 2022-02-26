import { CallMade } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { CellProps, Column } from "react-table";
import { DataTable } from "src/components/Table/DataTable";
import { useLungCarcinomaAssociatedTargetsQuery } from "src/utils/graphql/codegen";
import { ChartTabs } from "./ChartTabs";
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
        accessor: "target",
        Header: "Approved Symbol",
        Cell: ({ value }: any) => (
          <Link
            href={`https://platform.opentargets.org/target/${value.approvedName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography fontSize="1em">{value.approvedSymbol}</Typography>
              <span>
                <CallMade
                  fontSize="small"
                  sx={{
                    marginLeft: "4px",
                  }}
                />
              </span>
            </Box>
          </Link>
        ),
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
        isLoading={loading}
      />
    </>
  );
};

export { LungCarcinomaTable };

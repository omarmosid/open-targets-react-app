import { CallMade } from "@mui/icons-material";
import { Box, Divider, Link, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { DataTable } from "src/components/Table/DataTable";
import { useDiseaseQuery } from "src/utils/graphql/codegen";
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

  const { data, loading, error } = useDiseaseQuery({
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
      <Typography variant="h2">{data?.disease?.name}</Typography>
      <Typography variant="body1">{data?.disease?.description}</Typography>
      <Divider sx={{
        marginTop: "1em",
        marginBottom: "4em"
      }} />
      <Typography variant="h4" sx={{
        marginBottom: "1em",
        fontSize: "1.4em",
        fontWeight: "bold"
      }}>Associated Targets Table</Typography>
      <DataTable
        columns={columns}
        data={data?.disease?.associatedTargets.rows}
        isLoading={loading}
        error={error}
      />
    </>
  );
};

export { LungCarcinomaTable };

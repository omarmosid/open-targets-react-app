import { Typography } from "@mui/material";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatTick } from "../helpers/tickFormatter";

type DataBarChartProps = {
  data: any;
  title: string;
};

const DataBarChart: React.FC<DataBarChartProps> = ({ data, title }) => {
  return (
    <>
      <Typography variant="h3" fontSize="2em" fontWeight="700">
        {title}
      </Typography>

      <BarChart width={880} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" tickFormatter={(value) => formatTick(value)} />
        <YAxis />
        <Tooltip labelFormatter={(label) => formatTick(label)} />
        <Legend />
        <Bar dataKey="score" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export { DataBarChart };

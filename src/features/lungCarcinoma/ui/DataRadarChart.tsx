import { Typography } from "@mui/material";
import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { formatTick } from "../helpers/tickFormatter";

type DataRadialChartProps = {
  title: string;
  data: any;
};

const DataRadialChart: React.FC<DataRadialChartProps> = ({ data, title }) => {
  return (
    <>
      <Typography variant="h3" fontSize="2em" fontWeight="700">
        {title}
      </Typography>
      <RadarChart outerRadius={90} width={460} height={400} data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="id"
          tickFormatter={(value) => formatTick(value)}
        />
        <PolarRadiusAxis angle={30} domain={[0, 1]} />
        <Radar
          name="Score"
          dataKey="score"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
      </RadarChart>
    </>
  );
};

export { DataRadialChart };

import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { DataBarChart } from "./DataBarChart";
import { DataRadialChart } from "./DataRadarChart";

type ChartTabsProps = {
  data: any;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `chart-tab-${index}`,
    "aria-controls": `chart-tabpanel-${index}`,
  };
}

const ChartTabs: React.FC<ChartTabsProps> = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="chart tabs">
          <Tab label="Line Chart" {...a11yProps(0)} />
          <Tab label="Bar Chart" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DataRadialChart
          title={`Data Type Scores: ${data.target.approvedSymbol} and lung carcinoma`}
          data={data.datatypeScores}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataBarChart
          title={`Data Type Scores: ${data.target.approvedSymbol} and lung carcinoma`}
          data={data.datatypeScores}
        />
      </TabPanel>
    </>
  );
};

export { ChartTabs };

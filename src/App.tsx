import React, { useState } from "react";
import "./App.css";
import { StatisticTab } from "./components/statistic/StatisticTab";
import { DetailedPage } from "./components/detailed/DetailedPage";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

enum TabEnum {
  STATISTIC = "STATISTIC",
  DETAILED = "DETAILED",
}

function App() {
  const [tab, setTab] = useState(TabEnum.STATISTIC);

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setTab(newValue);
  };

  return (
    <div className="App">
      <h1>ESLINT VISUALIZATION DASHBOARD</h1>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Statistic" value={TabEnum.STATISTIC} />
              <Tab label="Detailed" value={TabEnum.DETAILED} />
            </TabList>
          </Box>
          <TabPanel value={TabEnum.STATISTIC}>
            <StatisticTab />
          </TabPanel>
          <TabPanel value={TabEnum.DETAILED}>
            <DetailedPage />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default App;

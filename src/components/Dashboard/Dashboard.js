import Box from "@mui/material/Box";

import Toolbar from "./../Toolbar/Toolbar";
import ChartActionBar from "./../Charts/ActionBar/ChartActionBar";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <ChartActionBar />
        <Box
          sx={{
            flex: 1
          }}
        >
          Dashboard
        </Box>
      </div>
      <Toolbar />
    </div>
  );
}

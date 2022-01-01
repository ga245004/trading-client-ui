import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImportExportRoundedIcon from "@mui/icons-material/ImportExportRounded";
import CandlestickChartRoundedIcon from "@mui/icons-material/CandlestickChartRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Box from "@mui/material/Box";
import "./Toolbar.css";

const ToolbarTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    top: 0
  }
});

export default function Toolbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <ToolbarTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="toolbar"
        justi
      >
        {options.map((option) => (
          <Tab key={option.name} icon={option.icon} label={option.name}></Tab>
        ))}
      </ToolbarTabs>
    </Box>
  );
}

const options = [
  {
    name: "Quotes",
    icon: <ImportExportRoundedIcon />
  },
  {
    name: "Chart",
    icon: <CandlestickChartRoundedIcon />
  },
  {
    name: "Trade",
    icon: <ShowChartRoundedIcon />
  },
  {
    name: "History",
    icon: <HistoryRoundedIcon />
  },
  {
    name: "News",
    icon: <NewspaperRoundedIcon />
  },
  {
    name: "Mailbox",
    icon: <AlternateEmailRoundedIcon />
  },
  {
    name: "Chat",
    icon: <ChatBubbleRoundedIcon />
  },
  {
    name: "Account",
    icon: <AccountCircleRoundedIcon />
  },
  {
    name: "Settings",
    icon: <SettingsRoundedIcon />
  }
];

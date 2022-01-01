import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CandlestickChartRoundedIcon from "@mui/icons-material/CandlestickChartRounded";
import FlareRoundedIcon from "@mui/icons-material/FlareRounded";
import FunctionsRoundedIcon from "@mui/icons-material/FunctionsRounded";
import InterestsRoundedIcon from "@mui/icons-material/InterestsRounded";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

export default function ChartActionBar() {
  const [selected, setSelected] = useState("search quotes");

  const handleClick = (action) => {
    setSelected(action.name);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 35,
          borderRight: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {actions.map((action) => (
          <>
            {action.type === "spacer" && (
              <Box sx={{ flex: 1 }} key={action.name}></Box>
            )}
            {action.type === "icon" && (
              <Box sx={{}} key={action.name}>
                <IconButton
                  aria-label={action.name}
                  color={action.name === selected ? "primary" : "default"}
                  onClick={() => handleClick(action)}
                >
                  {action.icon}
                </IconButton>
              </Box>
            )}
          </>
        ))}
      </Box>
    </>
  );
}

const actions = [
  {
    type: "icon",
    name: "Cross",
    icon: <FlareRoundedIcon />
  },
  {
    type: "icon",
    name: "Chart",
    icon: <CandlestickChartRoundedIcon />
  },
  {
    type: "icon",
    name: "Functions",
    icon: <FunctionsRoundedIcon />
  },
  {
    type: "icon",
    name: "Add Shape",
    icon: <InterestsRoundedIcon />
  },
  {
    type: "icon",
    name: "M1",
    icon: <LooksOneRoundedIcon />
  },
  {
    type: "spacer",
    name: "Spacer"
  },
  {
    type: "icon",
    name: "search quotes",
    selected: false,
    icon: <SearchRoundedIcon />
  },
  {
    type: "icon",
    name: "add quotes",
    icon: <AddBoxRoundedIcon />
  }
];

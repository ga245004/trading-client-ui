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
          <Box key={action.name} sx={{ flex: action.spacer ? 1 : 0 }}>
            {action.icon && (
              <Box>
                <IconButton
                  aria-label={action.name}
                  color={action.name === selected ? "primary" : "default"}
                  onClick={() => handleClick(action)}
                >
                  {action.icon}
                </IconButton>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </>
  );
}

const actions = [
  {
    name: "Cross",
    icon: <FlareRoundedIcon />
  },
  {
    name: "Chart",
    icon: <CandlestickChartRoundedIcon />
  },
  {
    name: "Functions",
    icon: <FunctionsRoundedIcon />
  },
  {
    name: "Add Shape",
    icon: <InterestsRoundedIcon />
  },
  {
    name: "M1",
    icon: <LooksOneRoundedIcon />
  },
  {
    spacer: true,
    name: "Spacer"
  },
  {
    name: "search quotes",
    icon: <SearchRoundedIcon />
  },
  {
    name: "add quotes",
    icon: <AddBoxRoundedIcon />
  }
];

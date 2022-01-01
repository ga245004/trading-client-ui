import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import QuoteHeader from "./QuoteHeader";
import SearchQuotes from "./SearchQuotes";

export default function ViewQuotes() {
  return (
    <Box
      sx={{
        minWidth: 235
      }}
    >
      <QuoteHeader />
      <SearchQuotes />
    </Box>
  );
}

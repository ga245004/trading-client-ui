import Box from "@mui/material/Box";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import OutlinedInput from "@mui/material/OutlinedInput";

import { styled } from "@mui/material/styles";

const SeachInput = styled(OutlinedInput)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px"
  }
});

const SearchQuotes = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: 40,
        display: "flex",
        alignItems: "center",
        backgroundColor: "lightgrey",
        borderRadius: 12,
        color: "gray",
        marginLeft: "8px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "8px"
        }}
      >
        <SearchRoundedIcon />
      </Box>
      <Box
        sx={{
          marginLeft: 0,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          userSelect: "none"
        }}
      >
        <SeachInput placeholder="enter symbol for search" />
      </Box>
    </Box>
  );
};
export default SearchQuotes;

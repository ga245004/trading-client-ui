import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const QuoteHeader = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: 40,
        display: "flex",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          marginLeft: "12px"
        }}
      >
        <IconButton>
          <EditRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          marginLeft: 0,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none"
        }}
      >
        <h4 style={{ margin: 0 }}>Quotes</h4>
      </Box>
    </Box>
  );
};

export default QuoteHeader;

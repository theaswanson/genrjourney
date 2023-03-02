import "./App.css";
import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 8 }}
          >
            <Typography variant="h1">Gen-R</Typography>
            <Typography variant="h6">Genesis to Revelation</Typography>
          </Box>

          <Typography variant="h6" sx={{ mb: 1 }}>
            Stop Murmuring: Rejoice, Serve, and Live
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Compiled by David N. Wallin
          </Typography>
          <Button variant="contained" disabled>
            Coming Soon
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default App;

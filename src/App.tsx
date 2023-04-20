import React from "react";
import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";
import { Comment } from "./Comment";
import "./App.css";

const App = () => {
	const quotes = [
		{ quote: "\"You have hit a topic that needs addressing in our culture and churches today.\"", author: "Pastor K. - Fort Collins, CO" },
		{ quote: "\"This is an answer to prayer. I can make many sermons from this.\"", author: "Pastor A. - Danville, IL" },
		{ quote: "\"This is what I have been waiting for.\"", author: "Pastor D. - Danville, IL" },
		{ quote: "\"You are leaving a legacy.\"", author: "Bible study member - Danville, IL" },
		{ quote: "\"The timing is perfect. I am starting a discipleship program.\"", author: "Pastor H. - Danville, IL" },
		{ quote: "\"This book can be used for teaching.\"", author: "Pastor B. - Danville, IL" },
		{ quote: "\"Can I make copies for each of my staff members?\"", author: "Pastor S. - Danville, IL" },
	];

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
          <Typography variant="body1" sx={{ mb: 4 }}>
            Compiled by David N. Wallin
          </Typography>
          <Button
            variant="contained"
						size="large"
            href={process.env.PUBLIC_URL + "/Stop Murmuring.pdf"}
            target="_blank"
            sx={{ mb: 8 }}
          >
            Read Now
          </Button>

          <Box>
						{quotes.map((q) => <Comment quote={q.quote} author={q.author} />)}
          </Box>
        </Grid>
      </div>
    </>
  );
}

export default App;

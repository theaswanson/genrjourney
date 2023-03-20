import React from "react";
import { Box, Typography } from "@mui/material";

interface CommentProps {
  quote: string;
  author: string;
}

export const Comment = ({ quote, author }: CommentProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        {quote}
      </Typography>
      <Typography variant="caption" align="center" sx={{ mb: 1 }}>
        {author}
      </Typography>
    </Box>
  );
}

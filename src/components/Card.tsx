import { FC } from "react";
import { Typography, Paper, Box, Button } from "@mui/material";


interface CardProps {
  text: {
    title: string;
    description: string;
  };
}

const Card: FC<CardProps> = ({ text }) => {
  return (
    
        <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }} >
          <Box sx={{ p: 3 }}>
            <Typography variant="h3">{text.title}</Typography>
            <Typography sx={{ mt: 2 }}>{text.description}</Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </Box>
        </Paper>
 

  );
};

export default Card;

import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
      
      primary: {
        main: "#FFE7CE",
      },

      secondary: {
        main: "#FFAAC9",
      },
    },

    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      button: {
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "none",
      }
    },



  });

  export default theme;
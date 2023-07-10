import { AppBar, Toolbar, Box, Button, Link } from "@mui/material";
import { FC, useState } from "react";
import React from "react";
import scroll from "../hooks/scroll";
import navItems from "../data/navItems";



const Navbar: FC = () => {
  const [isTop, setIsTop] = useState(true);
  scroll(isTop, setIsTop);

  return (
    <AppBar color="inherit" variant={isTop ? "outlined" : "elevation"}>
      <Toolbar sx={{ display: "flex", height: 100 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "space-around",
            width: "100vw",
          }}
        >
          {navItems.map((item) => (
            <Link key={item.key} href={item.route}>
              <Button sx={{ color: "black" }}>{item.page}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

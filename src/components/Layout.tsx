import React, { PropsWithChildren } from "react";

import { Container } from "@mui/material";
import dynamic from "next/dynamic";

const DynamicImport = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Container
        sx={{
          bgcolor: "white",
          mt: 15,
          mb: 7,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <DynamicImport />
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 4,
          }}
        > */}
        {children}
        {/* </Box> */}
      </Container>
    </>
  );
};

export default Layout;

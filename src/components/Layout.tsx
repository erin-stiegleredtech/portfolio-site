import React, { PropsWithChildren } from "react";

import { Container } from "@mui/material";
import dynamic from "next/dynamic";

const DynamicImport = dynamic(
    () => import('../components/Navbar'), {ssr: false}
);


const Layout = ({children}:PropsWithChildren) => {
    return (
        <>
            
            <Container  sx={{bgcolor: "white", mt:15, mb: 7}}>
            <DynamicImport />
                {children}
            </Container>
        </>
    )
}

export default Layout;
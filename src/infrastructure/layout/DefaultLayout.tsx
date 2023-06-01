import React, { ReactPropTypes } from "react";
import { Layout } from "./styles";

export default function DefaultLayout({ children }: React.PropsWithChildren) {
    return (
        <Layout>{children}</Layout>
    )
}

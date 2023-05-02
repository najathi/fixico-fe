import { ReactNode } from "react";

import Footer from "../Footer";
import Header from "../Header";
import Meta from "../Meta";

interface LayoutProps {
    [key: string]: any;
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Meta />
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;

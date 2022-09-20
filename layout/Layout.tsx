import styles from "./Layout.module.css";
import {LayoutProps} from "./Layout.props";
import Footer from "./layout_components/Footer/Footer";
import Header from "./layout_components/Header/Header";
import Sidebar from "./layout_components/Sidebar/Sidebar";
import {FunctionComponent} from "react";

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div className="main_div">
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>

        </>
    );

};

export default Layout;
import { Fragment } from "react";
import MainHeader from "./main-header";

const Layout = (props) => {

    return(
        <div>
            <Fragment>
                <MainHeader />
                <main>
                    {props.children}
                </main>
            </Fragment>
        </div>
    )
}

export default Layout;
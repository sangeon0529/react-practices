import React, {Fragment, Component} from "react";

import Header from "./Header";
import Content from "./content";

class App extends Component{
    render () {
    return (
        <Fragment>
            <Header />
            <Content />
        </Fragment>
    );
    }
}

export default App;
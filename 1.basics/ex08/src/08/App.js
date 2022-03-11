import React, {Fragment} from "react";

import Header from "./Header";
import Content from "./content";

const App = function() {
    return (
        <Fragment>
            <Header />
            <Content />
        </Fragment>
    );
}

export default App;
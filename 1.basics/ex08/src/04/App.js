import React, {Fragment} from "react";

import Header from "./Header";
import Content from "./content";

const App = function() {
    // return (
    //     <Fragment>
    //         <Header />
    //         <Content />
    //     </Fragment>
    // );
    return React.createElement(
        Fragment,
        null,
        React.createElement(Header,null),
        React.createElement(Content,null)
        );
}

export default App;
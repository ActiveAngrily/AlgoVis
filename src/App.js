import React from "react";
import ReactDOM from "react-dom";

import SortingVisualizer from './SortingVisualizer.js';

class App extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SortingVisualizer />
        );
    }
}
export default App;
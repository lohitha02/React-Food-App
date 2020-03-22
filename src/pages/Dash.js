import React from "react"
import Search from '../components/Search';
import Maps from "../components/Maps";

class Dash extends React.Component{
    render() {
        return(
            <>
            <Search />
            <Maps />
            </>
        );
    }
}
export default Dash;
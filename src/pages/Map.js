import React from "react"
import Search from '../components/Search';
import Maps from "../components/Maps";

class Map extends React.Component{
    render() {
        return(
            <>
            <Search />
            <Maps />
            </>
        );
    }
}
export default Map;
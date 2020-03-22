import React from "react";
import { Link } from 'react-router-dom';
import '../styles/style.sass';

class Search extends React.Component{
    render() {
        return ( 
            <div className="search">
                    <label>Search for your favourite FOOD!</label>
                    <input type="text" className="form-control" placeholder="Search" />
            </div>
            );
        }
    }
    
export default Search
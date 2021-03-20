import React, { Component } from 'react'
import DataFetching from "./DataFetching.js";
export default class Navbar extends React.Component {
    render() {
        return (
            
                <div class="topnav">
                <a class="active" href="#home">Home</a>
                
                <input type="text" placeholder="Search.."/>
              
                </div>
            
        )
    }
}

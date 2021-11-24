import React from 'react';
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            href:'#',
            myName:'no-type-ul'
        }
    }
    render(){
        return(
            <>
            <header className="header">
            <div className="custom_logo">
                    <a href={this.state.href}  className="btn-nav">Gourmet Catering</a>
            </div>
            <div className="rest_header_items">
    
            <a href={this.state.href}  className="btn-nav ">About</a>
            <a href={this.state.href}  className="btn-nav ">Menu</a>
            <a href={this.state.href}  className="btn-nav ">Contact</a>
            </div>
                {/* <ul className={this.state.myName}>
                    <li><a className="navlink" href={this.state.href}>Todo App</a></li>
                </ul> */}
            </header>
            </>
        );
    }
}

export default Header;
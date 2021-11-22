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
                <ul className={this.state.myName}>
                    <li><a className="navlink" href={this.state.href}>Todo App</a></li>
                </ul>
            </header>
            </>
        );
    }
}

export default Header;
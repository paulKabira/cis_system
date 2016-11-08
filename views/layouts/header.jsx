import React from 'react';
class Header extends React.Component {
    render() {
        // for(var i = ())
        return (
            <div className="header" >
                <nav>
                    <ul>
                        <li className="cis">{/*}<img className="logo" src='./images/logo.png' alt="CIS"></img>{*/}<strong>CIS</strong></li>
                        <li>
                            <a href="home">Home</a>
                        </li>
                        <li>
                            <a href="#div">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;

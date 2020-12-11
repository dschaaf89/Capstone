import React from 'react';
import { MenuItems } from "./MenuItems"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbarItems">
                <h1 className="navbar-logo">Sara's Corner</h1>
                <div className="menu-Icon">

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                                <li key={index}>
                                    <a className={item.cName} href={item.link}>
                                        {item.title}
                                    </a>
                                </li>
                                )
                         })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
import React from 'react'

const NavBar = ({ filterItem, menuList }) => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-btns">
                    {menuList.map((item) => {
                        return (
                            <button className="nav-btn" onClick={() => filterItem(item)}>{item}</button>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default NavBar

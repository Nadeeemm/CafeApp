import React, { useState } from 'react'
import Menu from './MenuApi'
import NavBar from './NavBar'
import Card from "./Card"
import "./product.css"
const Product = () => {

    const uniqueList = [
        ... new Set(
            Menu.map((item) => {
                return item.category
            })
        ),
        "All"
    ]
    // console.log(uniqueList)

    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)


    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu)
        } else {
            const updatedList = Menu.filter((item => {
                return item.category === category
            }))
            setMenuData(updatedList)
        }
    }
    return (
        <>
            <NavBar filterItem={filterItem} menuList={menuList} />
            <Card menuData={menuData} />
        </>
    )
}
export default Product
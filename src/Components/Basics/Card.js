import React from 'react'

const Card = ({ menuData }) => {
    // console.log(menuData)
    return (
        <>
            <div className="card-container">
                {menuData.map((item) => {
                    const { name, price, image, desc, id, category } = item
                    return (
                        <>
                            <div className="card-body" key={id}>
                                <h1 className="card-heading">{name}  ({category})</h1>

                                <div className="card-img">
                                    <img src={image} />
                                </div>
                                <h3 className="card-price">Rs. {price}</h3>
                                <p className="card-text">{desc}</p>

                                <button className="card-btn">Order Now</button>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    )
}

export default Card

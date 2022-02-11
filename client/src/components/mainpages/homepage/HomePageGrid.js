import React from 'react';
import ImageCard from './ImageCard';
import Cap from './images/products/cap.png'
import Shirt from './images/products/shirt.png'
import Bag from './images/products/bag.png'
import Jacket from './images/products/jacket.png'
import Shoes from './images/products/shoes.png'
import Jeans from './images/products/jeans.png'
import Sunglass from './images/products/sunglass.png'
import Tshirt from './images/products/tshirt.png'

const HomePageGrid = () => {
    return(
        <div className="products_content">
            <div className="row">
                <ImageCard imageUrl={Cap} class="prod_img1"/>
                <ImageCard imageUrl={Shirt} class="prod_img2"/>
            </div>
            <div className="row">
                <ImageCard imageUrl={Bag} class="prod_img3"/>
                <ImageCard imageUrl={Jacket} class="prod_img4"/>
            </div>
            <div className="row">
                <ImageCard imageUrl={Shoes} class="prod_img5"/>
                <ImageCard imageUrl={Jeans} class="prod_img6"/>
            </div>
            <div className="row">
                <ImageCard imageUrl={Sunglass} class="prod_img7"/>
                <ImageCard imageUrl={Tshirt} class="prod_img8"/>
            </div>
        </div>
    )
}
export default HomePageGrid;
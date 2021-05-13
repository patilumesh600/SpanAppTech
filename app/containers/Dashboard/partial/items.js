/*
 *
 * List all the items
 */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function itemProducts() {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1">
            <img class="" alt="Top Offers" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
        </div>,
        <div className="item" data-value="2">
            <img class="" alt="Top Offers" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
        </div>,
        <div className="item" data-value="3">
            <img class="" alt="Top Offers" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
        </div>,
        <div className="item" data-value="4">
            <img class="" alt="Top Offers" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
        </div>,
        <div className="item" data-value="5">
            <img class="" alt="Top Offers" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
        </div>,
    ];
    return (
        <div>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    )
}

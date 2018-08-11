import React, { Component } from 'react';
import pictureOne from './img/1.jpg';
import {
    Carousel,
    CarouselItem,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: pictureOne,
        altText: 'Slide 1',
        caption: 'Slide 1'
    }
];

class Caption extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map(item => {
            return (
                <CarouselItem key={item.src}>
                    <img
                        src={item.src}
                        alt={item.altText}
                        className="imgCarousel"
                    />
                    <CarouselCaption
                        captionText={item.caption}
                        captionHeader={item.caption}
                    />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                {slides}
            </Carousel>
        );
    }
}

export default Caption;

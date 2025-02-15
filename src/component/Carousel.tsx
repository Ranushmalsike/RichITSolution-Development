import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomCarousel: React.FC = () => {
    return (
        <div className="mt-16"> {/* Add margin-top to avoid overlap with the fixed navbar */}
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
            >
                <div>
                    <img
                        src="/image/images.jpeg"
                        alt="Slide 1"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/image/image1.jpeg"
                        alt="Slide 2"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/image/website-development-process-1.jpg"
                        alt="Slide 3"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
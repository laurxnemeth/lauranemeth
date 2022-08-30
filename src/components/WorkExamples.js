import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import allconnect from '../pictures/cropped-allconnect.png';
import mymove from '../pictures/cropped-mymove.png';
import nyu from '../pictures/cropped-nyu.png';
import mobileAllconnect from '../pictures/mobile-cropped-allconnect.png';
import mobileMymove from '../pictures/mobile-cropped-mymove.png';
import mobileNyu from '../pictures/mobile-cropped-nyu.png';
import {isMobile} from 'react-device-detect';

export default function WorkExamples() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

    if (isMobile) {
        return (
					<Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
						<Carousel.Item interval={100000}>
							<img
								className="d-block w-100"
								src={mobileAllconnect}
								alt="First slide"
							/>
							<Carousel.Caption>
								<a
									className="button"
									href="https://allconnect.com"
									target="_blank"
								>
									AllConnect
								</a>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={100000}>
							<img
								className="d-block w-100"
								src={mobileMymove}
								alt="Second slide"
							/>

							<Carousel.Caption>
								<a className="button" href="https://mymove.com" target="_blank">
									MYMOVE
								</a>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={100000}>
							<img
								className="d-block w-100"
								src={mobileNyu}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<a
									className="button"
									href="https://library.nyu.edu"
									target="_blank"
								>
									NYU Libraries
								</a>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				);
    }

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
			<Carousel.Item interval={100000}>
				<img className="d-block w-100" src={allconnect} alt="First slide" />
				<Carousel.Caption>
					<a className="button" href="https://allconnect.com" target="_blank">
						AllConnect
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={100000}>
				<img className="d-block w-100" src={mymove} alt="Second slide" />
				<Carousel.Caption>
					<a className="button" href="https://mymove.com" target="_blank">
						MYMOVE
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={100000}>
				<img className="d-block w-100" src={nyu} alt="Third slide" />

				<Carousel.Caption>
					<a className="button" href="https://library.nyu.edu" target="_blank">
						NYU Libraries
					</a>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}



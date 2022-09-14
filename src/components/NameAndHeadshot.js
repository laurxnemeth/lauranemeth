import React from 'react';

export default function NameAndHeadshot() {

  return (
		<div id="first-section">
			<div id="name-and-headshot">
				<div id="name-wrapper">
					<h1 className="name" aria-hidden="true">
						hello!
					</h1>
					<h1 className="name" aria-hidden="true">
						I am
					</h1>
					<h1 className="name" id="me" aria-hidden="true">
						Laura Nemeth
					</h1>
					<h1 id="accessible-header">Hello! I am Laura Nemeth</h1>
				</div>
				<p>
					Let's collaborate on beautiful websites, apps, and more! I am
					passionate about the longevity of code, the accessibility of
					information, and the many mysteries of the world wide web.
				</p>
			</div>
		</div>
	);
};
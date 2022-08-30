import React from 'react'
import InfoModal from './InfoModal';
import Button from 'react-bootstrap/Button';

export default function Header () {
    const [modalShow, setModalShow] = React.useState(false);

    return (
			<div>
				<div id="top-section">
					<h3 id="title">software engineer</h3>
					<span className="sub" onClick={() => setModalShow(true)}>
						wanna chat? click here!
					</span>
					{/* link opens module with contact me info*/}
				</div>
				<InfoModal show={modalShow} onHide={() => setModalShow(false)} />
			</div>
		);
}
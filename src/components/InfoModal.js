import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import github from '../pictures/GitHub_Logo_White.png'


export default function InfoModal(props) {
  return (
		<Modal
			{...props}
			id="info-modal"
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className="title">
					Contact Me
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-center">
				<div className="modal-body">
					<a className="contact-me" href="https://github.com/laurxnemeth">
						github
					</a>
					<a className="contact-me" href="https://linkedin.com/in/laurxnemeth">
						linkedin
					</a>
					<a className="contact-me" href="https://dev.to/laurxnemeth">
						dev.to
					</a>
					<a className="contact-me" href="mailto:laura@lauranemeth.com">
						laura@lauranemeth.com
					</a>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};
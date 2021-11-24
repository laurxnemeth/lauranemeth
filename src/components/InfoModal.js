import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

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
				<Modal.Title id="contained-modal-title-vcenter" class="title">
					Contact Me
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-center">
				<div className="modal-body">
					<p>laura@lauranemeth.com</p>
					<p>you can find me on Linkedin, Github, and Dev.to as</p>
					<p>LAURXNEMETH</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};
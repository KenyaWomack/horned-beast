import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    // constructor(props) {
    // super(props);
    // }
    render() {
        return (

          
            //     className="modal show"
            //     style={{ display: 'block', position: 'absolute' }}
            // >
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.props.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
            
        );
    }
}

export default SelectedBeast;
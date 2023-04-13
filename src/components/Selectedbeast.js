import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    // constructor(props) {
    // super(props);
    // }
    render() {
      console.log(this.props.currentBeast);
        return (

          
            //     className="modal show"
            //     style={{ display: 'block', position: 'absolute' }}
            // >
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {this.props.currentBeast && (<><h2>{this.props.currentBeast.title}</h2>
         <img width="200px" src={this.props.currentBeast.image_url} alt={this.props.currentBeast.description} />

         <h3>{this.props.currentBeast.description}</h3></>)}
            </Modal.Body>
            {/* <Modal.Body>{this.props.description}</Modal.Body> */}
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
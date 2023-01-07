import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function UserInfo({user, setUser}) {

    return (
      <Modal
      show={user !== null ? true : false}
      onHide={()=>setUser(null)}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setUser(null)}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default UserInfo;
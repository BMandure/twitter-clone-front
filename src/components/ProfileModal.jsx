import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function ModalProfile({ userData }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  //   const token = (state) => state.user.id;
  //   const [avatar, setAvatar] = useState();

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     const formData = new FormData();
  //     formData.append("avatar", avatar);

  //     const response = await axios({
  //       method: "PATCH",
  //       url: "http://localhost:3000/users/",
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     if (response.data === "El usuario fue creado") {
  //       navigate("/login");
  //     } else {
  //       setError(String(response.data));
  //     }
  //   };

  return (
    <>
      <img
        src={
          userData.avatar.includes("http")
            ? userData.avatar
            : "http://localhost:3000/img/" + userData.avatar
        }
        alt="profile-image"
        className="profile-image"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cambia tu foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form onSubmit={handleSubmit}>
            {" "}
            <input
              className="form-control my-2 py-2"
              type="file"
              id="avatar"
              name="avatar"
              onChange={(event) => setAvatar(event.target.files[0])}
            />
          </form> */}
          Aca va el input
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirmar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProfile;

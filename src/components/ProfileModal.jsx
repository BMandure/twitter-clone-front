import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { uploadAvatar } from "../redux/userSlice";

function ModalProfile({ userData, setRender }) {
  const idLoggedUser = useSelector((state) => state.user.userData.id);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (userData.id === idLoggedUser) {
      setShow(true);
    }
  };
  const [show, setShow] = useState(false);

  const token = useSelector((state) => state.user.token);
  const [avatar, setAvatar] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("avatar", avatar);

    const response = await axios({
      method: "PATCH",
      url: "http://localhost:3000/users/avatar",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });

    if (response.data.code === "err") {
      handleClose();
      return console.log(response.data.message);
    }

    handleClose();
    setRender((prevState) => prevState + 1);
    return dispatch(uploadAvatar(response.data));
  };

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
          <Modal.Title>Change Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control my-2 py-2"
              type="file"
              accept="image/*"
              id="avatar"
              name="avatar"
              onChange={(event) => setAvatar(event.target.files[0])}
            />
            <button type="submit" className="btn btn-lb">
              Save Changes
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProfile;

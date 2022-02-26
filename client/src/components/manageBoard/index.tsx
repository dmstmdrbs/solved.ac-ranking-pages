import { useState } from "react";
import { Container, Modal } from "./styles";

const ManageBoard = () => {
  const [modalOnOff, setModalOnOff] = useState(false);

  const handleClickModal = () => setModalOnOff(!modalOnOff);

  return (
    <Container>
      <button onClick={handleClickModal}>팀원관리</button>
      {modalOnOff && <Modal></Modal>}
    </Container>
  );
};

export default ManageBoard;

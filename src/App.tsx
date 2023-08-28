import "./App.css";
import Form from "./components/Form";
import GroupButton from "./components/GroupButton";
import Modal from "./components/Modal";
import { GROUP_BUTTON_FORM } from "./constants/groupButton";



function App() {
  return (
    <>
      <Modal
        title="Add new product"
        footer={<GroupButton items={GROUP_BUTTON_FORM} />}
      >
        <Form />
      </Modal>
    </>
  );
}

export default App;

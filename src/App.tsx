import "./App.css";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Modal title="Add new product">
        <Form />
      </Modal>
    </>
  );
}

export default App;

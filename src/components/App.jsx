import { useState } from "react";
import { ModalAsk } from "./modalAsk/ModalAsk";
import { FormPicture } from "./FormPicture/FormPicture";
import { FormPost } from "./FormPost/FormPost";

function App() {
  const [secret, setSecret] = useState(true);

  return (
    <>
      {secret && <ModalAsk setsecret={setSecret} />}
      <p>Дані будуть відправлені на базу даних</p>
      <FormPost />
      <FormPicture />
    </>
  );
}

export default App;

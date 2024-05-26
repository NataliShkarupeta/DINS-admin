import { useState } from "react";
import { ModalAsk } from "./modalAsk/ModalAsk";
import { FormPost } from "./FormPost/FormPost";
import { P } from "./styles.styled";
import { FormPicture } from "./test/Test";


function App() {
  const [secret, setSecret] = useState(true);


  return (
    <>
      {secret && <ModalAsk setsecret={setSecret} />}
      <P>Дані будуть відправлені у базу даних </P>
      <FormPost />
    <FormPicture />
    </>
  );
}

export default App;

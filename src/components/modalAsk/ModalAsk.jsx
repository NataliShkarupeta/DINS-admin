import { Overlay, ModalContainer, Button } from "./ModalAsk.styled";

export const ModalAsk = ({ setsecret }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const secret = formData.get("text");

    if (secret.toUpperCase() === "MOYAVERA25") {
      return setsecret(false);
    } else {
      alert("secret key is not correct");
    }
  };
  return (
    <>
      <Overlay>
        <ModalContainer onSubmit={handelSubmit}>
          <p>Enter secret key</p>
          <input type="text" name="text" required />
          <Button type="submit">Enter</Button>
        </ModalContainer>
      </Overlay>
    </>
  );
};

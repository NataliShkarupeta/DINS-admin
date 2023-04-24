import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* max-width: 320px; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1200;
  outline: red;
`;

export const ModalContainer = styled.form`
  max-width: 320px;
  width: 320px;
  height: 280px;
  background-color: #ffffff;
  padding: 20px;
  text-align:center;

  position: relative;
  z-index: 1200;
`;
export const Button = styled.button`
  /* width: 20px;
  height: 20px; */
`;

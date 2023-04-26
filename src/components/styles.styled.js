import styled from "styled-components";

export const ImgPreview = styled.div`
  text-align: center;
  margin: 5px 15px;
  height: 500px;
  width: 500px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top: 5px solid gray;
  border-bottom: 5px solid gray;
`;
export const TitleBlock=styled.p`
margin-left:15px ;

`
export const Label= styled.label`
display: flex;
flex-direction: column;

`

export const P = styled.p`
text-align:center;
font-weight:600;
`
export const FileInput = styled.textarea`
  display: block;
  height: 200px;
  width: 500px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top: 5px solid gray;
  border-bottom: 5px solid gray;
`;

export const Form =styled.form`
border: 1px solid #000;
padding: 15px;
margin: 25px;

`

export const Wrap = styled.div`
  display: flex;
  /* flex-direction:column ; */
  gap: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: #f4ebeb;
`;
export const SubmitButton=styled.button`
  padding: 12px;
  margin-left: 10px;
  background: white;
  border: 4px solid lightgray;
  border-radius: 15px;
  font-weight: 700;
  font-size: 10pt;
  cursor: pointer;
  &:hover{
    background: #efefef}
`
import { SubmitButton, Form } from "../styles.styled";

export const FormPost=()=>{
    return (
      <Form>
        
        <label htmlFor="">
          Title
          <input type="text" />
        </label>
        <label htmlFor="">
          Descriptions
          <input type="text" />
        </label>
        <SubmitButton>Upload Post</SubmitButton>
      </Form>
    );
}
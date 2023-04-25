import {
  SubmitButton,
  Form,
  TitleBlock,
  FileInput,
  Wrap,
  Label,
} from "../styles.styled";

export const FormPost = () => {
  return (
    <>
      <TitleBlock> Створи новий пост</TitleBlock>
      <Form>
        <Wrap>
          <Label htmlFor="">
            <span>Title</span>

            <input type="text" />
          </Label>
          <label htmlFor="">
            Descriptions
            <FileInput type="text" />
          </label>
        </Wrap>

        <SubmitButton>Upload Post</SubmitButton>
      </Form>
    </>
  );
};

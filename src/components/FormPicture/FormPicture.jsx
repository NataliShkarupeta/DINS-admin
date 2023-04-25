import { useState } from "react";
import {
  ImgPreview,
  SubmitButton,
  Form,
  Wrap,
  FileInput,
  TitleBlock,
} from "../styles.styled";

export const FormPicture = () => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    <div>Please select an Image for Preview</div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> file
    console.log("handle uploading-", file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <TitleBlock> Завантажте картину</TitleBlock>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="">
          Title
          <input type="text" name="title" />
        </label>
        <Wrap>
          <label htmlFor="">
            Descriptions
            <FileInput type="text" name="descriptions"></FileInput>
          </label>
          <label htmlFor="">
            File
            <input
              type="file"
              name="fileImg"
              onChange={(e) => handleImageChange(e)}
            />
            <ImgPreview>
              <img src={imagePreviewUrl} alt="" width="500" />
            </ImgPreview>
          </label>
        </Wrap>

        <SubmitButton onClick={(e) => handleSubmit(e)}>
          Upload picture
        </SubmitButton>
      </Form>
    </>
  );
};

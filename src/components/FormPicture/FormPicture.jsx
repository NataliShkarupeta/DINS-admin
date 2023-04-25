import { useState } from "react";
import {
  ImgPreview,
  SubmitButton,
  Form,
  Wrap,
  FileInput,
  TitleBlock,
} from "../styles.styled";
import { v4 as uuidv4 } from "uuid";

export const FormPicture = () => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    <div>Please select an Image for Preview</div>
  );

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title1");
    const descriptions = formData.get("descriptions2");

    const newPicture = {
      title,
      descriptions,
      file: { ...file, imagePreviewUrl: imagePreviewUrl },
      id: uuidv4(),
      dateStamp: Date.now(),
    };

    console.log(newPicture);
    e.target.reset();
  };

  return (
    <>
      <TitleBlock> Завантаж картину</TitleBlock>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="">
          Title
          <input type="text" name="title1" />
        </label>
        <Wrap>
          <label htmlFor="">
            Descriptions
            <FileInput type="text" name="descriptions2"></FileInput>
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

        <SubmitButton type="submit">Upload picture</SubmitButton>
      </Form>
    </>
  );
};

import { useState } from "react";
import {
  // ImgPreview,
  SubmitButton,
  Form,
  Wrap,
  FileInput,
  TitleBlock,
} from "../styles.styled";

import { addPicture } from "../../service";

export const FormPicture = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [TitleEn, setTitleEn] = useState("");
  const [descriptionsEn, setDescriptionsEn] = useState("");
  // const [imagePreviewUrl, setImagePreviewUrl] = useState(
  //   <div>Please select an Image for Preview</div>
  // );

  // const handleImageChange = (e) => {
  //   e.preventDefault();

  //   let reader = new FileReader();

  //   let file = e.target.files[0];

  //   reader.onloadend = () => {
  //     setFile(file);
  //     setImagePreviewUrl(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.form);
    formData.append("fileImg", file);
    formData.append("title1", title);
    formData.append("descriptions", descriptions);
    formData.append("TitleEn", TitleEn);
    formData.append("descriptionsEn", descriptionsEn);

    addPicture(formData);
    console.log(formData);
    e.target.reset();
  };

  return (
    <>
      <TitleBlock> Завантаж картину</TitleBlock>
      <Form onSubmit={handleSubmit} enctype="multipart/form-data">
        <label htmlFor="">
          Title
          <input
            value={title}
            type="text"
            name="title1"
            onChange={(e) => {
              const { name, value } = e.target;
              if (name === "title1") setTitle(value);
            }}
          />
        </label>
        <label htmlFor="">
          TitleEn
          <input
            value={TitleEn}
            type="text"
            name="TitleEn"
            onChange={(e) => {
              const { name, value } = e.target;
              if (name === "TitleEn") setTitleEn(value);
            }}
          />
        </label>
        <Wrap>
          <label htmlFor="">
            Descriptions
            <FileInput
              type="text"
              name="descriptions"
              value={descriptions}
              onChange={(e) => {
                const { name, value } = e.target;
                if (name === "descriptions") setDescriptions(value);
              }}
            ></FileInput>
          </label>
          <label htmlFor="">
            DescriptionsEn
            <FileInput
              type="text"
              name="descriptionsEn"
              value={descriptionsEn}
              onChange={(e) => {
                const { name, value } = e.target;
                if (name === "descriptionsEn") setDescriptionsEn(value);
              }}
            ></FileInput>
          </label>
          <label htmlFor="">
            File
            <input
              type="file"
              name="fileImg"
              multiple
              onChange={(e) => {
                e.preventDefault();
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            {/* <ImgPreview>
              <img src={imagePreviewUrl} alt="" width="500" />
            </ImgPreview> */}
          </label>
        </Wrap>

        <SubmitButton type="submit">Upload picture</SubmitButton>
      </Form>
    </>
  );
};

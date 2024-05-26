import { useState } from "react";
import {
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
  const [inStock, setInStock] = useState("");
  const [inStockEn, setInStockEn] = useState("");
  const [size, setSize] = useState("");
  const [place, setplace] = useState("");
  const [placeEn, setplaceEn] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.form);
    formData.append("fileImg", file);
    formData.append("title1", title);
    formData.append("descriptions", descriptions);
    formData.append("TitleEn", TitleEn);
    formData.append("descriptionsEn", descriptionsEn);
    formData.append("inStock", inStock);
    formData.append("inStockEn", inStockEn);
    formData.append("size", size);
    formData.append("place", place);
    formData.append("placeEn", placeEn);

    addPicture(formData);
  
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <label htmlFor="">
              inStock
              <input
                value={inStock}
                type="text"
                name="inStock"
                onChange={(e) => {
                  const { name, value } = e.target;
                  if (name === "inStock") setInStock(value);
                }}
              />
            </label>
            <label htmlFor="">
              inStockEn
              <input
                value={inStockEn}
                type="text"
                name="inStockEn"
                onChange={(e) => {
                  const { name, value } = e.target;
                  if (name === "inStockEn") setInStockEn(value);
                }}
              />
            </label>
            <label htmlFor="">
              size
              <input
                value={size}
                type="text"
                name="size"
                onChange={(e) => {
                  const { name, value } = e.target;
                  if (name === "size") setSize(value);
                }}
              />
            </label>
            <label htmlFor="">
              place
              <input
                value={place}
                type="text"
                name="place"
                onChange={(e) => {
                  const { name, value } = e.target;
                  if (name === "place") setplace(value);
                }}
              />
            </label>
            <label htmlFor="">
              placeEn
              <input
                value={placeEn}
                type="text"
                name="placeEn"
                onChange={(e) => {
                  const { name, value } = e.target;
                  if (name === "placeEn") setplaceEn(value);
                }}
              />
            </label>
          </div>
        </Wrap>

        <SubmitButton type="submit">Upload picture</SubmitButton>
      </Form>
    </>
  );
};

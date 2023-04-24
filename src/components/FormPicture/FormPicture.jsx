import { useEffect, useState } from "react";
import { ImgPreview, SubmitButton, Form, Wrap } from "../styles.styled";

export const FormPicture = () => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    <div>Please select an Image for Preview</div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    console.log("reader", reader);
    let file = e.target.files[0];
    console.log("file", file);

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };



    reader.readAsDataURL(file);
    // console.log(reader.readAsDataURL());
  };
  

  useEffect(()=>{
   
     if (imagePreviewUrl) {
    <img src={imagePreviewUrl} alt="" />;
     } else {
       return
     }
    },[imagePreviewUrl])
    

  return (
    <>
      <p> Завантажте картину</p>
      <Form onSubmit={handleSubmit}>
        <Wrap>
          <label htmlFor="">
            Title
            <input type="text" />
          </label>
          <label htmlFor="">
            Descriptions
            <input type="text" />
          </label>
          <label htmlFor="">
            File
            <input type="file" onChange={(e) => handleImageChange(e)} />
          </label>
        </Wrap>

        <SubmitButton onClick={(e) => handleSubmit(e)}>
          Upload Image
        </SubmitButton>
        <ImgPreview>
          {" "}
          <img src={imagePreviewUrl} alt="" width='300' />
        </ImgPreview>
      </Form>
    </>
  );
};

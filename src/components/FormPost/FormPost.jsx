import {
  SubmitButton,
  Form,
  TitleBlock,
  FileInput,
  Wrap,
  Label,
} from "../styles.styled";
import { addPost } from "../../service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyYes = () => toast.success("Дані відправлені");
const notifyNo = () => toast.error("Щось не вийшло, спробуй ще раз");

export const FormPost = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const descriptions = formData.get("descriptions");
    const titleEn = formData.get("titleEn");
    const descriptionsEn = formData.get("descriptionsEn");

    const newPost = {
      title,
      descriptions,
      titleEn,
      descriptionsEn,
    };
    addPost(newPost)
      .then((res) => {
        if (res && res.status === 'success') {
          return notifyYes();
        } else {
          return notifyNo();
        }
      })

      .finally(e.target.reset());
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <TitleBlock>Створи новий пост</TitleBlock>
      <Form onSubmit={handelSubmit}>
        <Wrap>
          <Label htmlFor="">
            <span>Title</span>
            <input type="text" name="title" />
          </Label>
          <label htmlFor="">
            Descriptions
            <FileInput type="text" name="descriptions" />
          </label>
        </Wrap>
        <Wrap>
          <Label htmlFor="">
            <span>TitleEn</span>
            <input type="text" name="titleEn" />
          </Label>
          <label htmlFor="">
            DescriptionsEn
            <FileInput type="text" name="descriptionsEn" />
          </label>
        </Wrap>
        <SubmitButton type="submit">Upload Post</SubmitButton>
      </Form>
    </>
  );
};

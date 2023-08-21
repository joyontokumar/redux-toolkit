import * as Yup from "yup";
export const reactFormHookSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is required"),
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    language: Yup.string().required("language name is required"),
  });
};

import * as Yup from "yup";
export const reactFormHookSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is required"),
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    language: Yup.string().required("language name is required"),
  });
};
const WeirdExpressions = [
  "a othoba b",
  "b ebong c othoba d",
  "ebong ebong othoba othoba ebong",
  "((ebong) othoba ebong) ebong othoba",
  "(ebong othoba (ebong ebong ((othoba)othoba(ebong)))",
  "ebong",
];

import * as yup from "yup";

const formValidations = yup.object({
  email: yup.string().nullable().email('Geçerli email giriniz').required(),
  password: yup.string().min(5 , 'en az 5 karakter').required('Zorunlu alan'),
  confirmPassword: yup.string().oneOf([yup.ref("password")]),
});

export default formValidations;

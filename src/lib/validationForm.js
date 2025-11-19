// src/lib/validationForm.js
import { z } from "zod";

const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
const passwordError =
  "La password deve contenere almeno una maiuscola, una minuscola e un numero.";

export const FormSchema = z.object({
  email: z.string().email({ message: "Email non valida" }),
  firstName: z.string().min(1, { message: "Nome obbligatorio" }),
  lastName: z.string().min(1, { message: "Cognome obbligatorio" }),
  username: z.string().min(3, { message: "Username troppo corto (min 3)" }),
  password: z
    .string()
    .min(8, { message: "Password troppo corta (min 8 caratteri)" })
    .regex(passwordRegex, passwordError),
});

export const ConfirmSchema = FormSchema;

export const ConfirmSchemaLogin = z.object({
  email: z.string().email({ message: "Email non valida" }),
  password: z
    .string()
    .min(8, { message: "Password troppo corta (min 8 caratteri)" })
    .regex(passwordRegex, passwordError),
});

// Validazione singolo campo (per onChange / onBlur)
export function getFieldError(property, value) {
  const loginFields = ["email", "password"];
  const schema = loginFields.includes(property) ? ConfirmSchemaLogin : FormSchema;

  const result = schema.shape[property].safeParse(value);

  if (!result.success) {
    return result.error.issues.map((issue) => issue.message).join(", ");
  }

  return undefined;
}

// Validazione completa (per onSubmit)
export function getErrors(error) {
  return error.issues.reduce((all, issue) => {
    const path = issue.path.join("");
    const message = all[path] ? all[path] + ", " : "";
    all[path] = message + issue.message;
    return all;
  }, {});
}

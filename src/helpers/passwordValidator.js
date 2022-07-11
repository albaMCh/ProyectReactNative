export function passwordValidator(password) {
  if (!password) return "El password no puede estar vacío.";
  if (password.length < 6)
    return "El password debe contener al menos 6 caracteres.";
  return "";
}

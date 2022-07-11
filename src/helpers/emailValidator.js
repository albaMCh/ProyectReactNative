export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "El email no puede estar vacío.";
  if (!re.test(email)) return "El email introducido no es válido";
  return "";
}

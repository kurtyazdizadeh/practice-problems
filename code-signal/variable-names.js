function variableName(name) {
  const digits = /\d/;
  const illegalChars = /[^a-zA-Z0-9_]/;

  if (digits.test(name[0])) return false;
  if (illegalChars.test(name)) return false;

  return true;
}

export const getNameFromEmail = (email?: string) => {
  if (!email) return '';

  const [name] = email.split('@');
  return name;
};

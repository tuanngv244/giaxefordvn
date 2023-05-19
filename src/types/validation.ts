export const invalidPhone = (data?: string) => {
  if (!data) return true;
  const regex = new RegExp("^d+$");
  if (!regex.test(data)) return false;
  return true;
};

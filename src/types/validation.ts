export const invalidPhone = (data?: string) => {
  if (!data) return true;
  const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  if (!regex.test(data)) return false;
  return true;
};

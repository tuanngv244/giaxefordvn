export const formatCurrency = (number?: number) => {
  if (!number) return null;
  return new Intl.NumberFormat("vn-VN").format(number)?.replaceAll(",", ".");
};

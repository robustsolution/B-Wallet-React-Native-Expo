export const truncate = (str: string) => {
  if (!str) {
    return "";
  }
  return `${str.substring(0, 4)}...${str.substring(
    str.length - 4,
    str.length
  )}`;
};

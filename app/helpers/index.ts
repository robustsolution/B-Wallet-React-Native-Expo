import { DateTimeFormat } from "types";

export const truncate = (str: string) => {
  if (!str) {
    return "";
  }
  return `${str.substring(0, 4)}...${str.substring(
    str.length - 4,
    str.length
  )}`;
};

export const dateFormat = (date?: string) => {
  const format: DateTimeFormat = {
    month: "short",
    day: "numeric",
    year: "2-digit",
  };

  if (date) {
    return new Date(date).toLocaleDateString("en-US", format);
  }

  return new Date().toLocaleDateString("en-US", format);
};

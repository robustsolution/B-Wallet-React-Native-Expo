import { DateTimeFormat, TChains } from "types";
import { TOKENS } from "../constants/Dummies";

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

export const convertTokenToDollars = (price: number, token: TChains) => {
  if (!token || !price) {
    return Number(0).toFixed(2).toLocaleString();
  }
  const chain = TOKENS[token];

  const total = price * chain.priceUSD;
  return new Intl.NumberFormat().format(total);
};

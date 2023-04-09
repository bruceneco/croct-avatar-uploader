import hexRgb from "hex-rgb";

export const hexToComputedStyle = (hex: string) => {
  return hexRgb(hex, { format: "css" }).replaceAll(" ", ", ");
};

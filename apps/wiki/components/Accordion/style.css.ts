import { flex } from "@buma/style";
import { style } from "@vanilla-extract/css";

export const content = style({
  gap: "12px",
  ...flex.COLUMN_FLEX,
});

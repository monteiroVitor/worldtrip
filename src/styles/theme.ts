import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#000000", // Black
      "500": "#47585B", // Headings and Text - Dark
      "400": "#999999", // Info - Dark, and can be used with 50% opacity
      "200": "#DADADA", // Info - Light
      "100": "#F5F8FA", // Headings and Text - Light
      "50": "#FFFFFF", // Withe
    },
    yellow: {
      "500": "#FFBA08", // Highlight and can be used with 50% opacity
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.500",
      },
    },
  },
});

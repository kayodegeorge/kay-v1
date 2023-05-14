import localFont from "next/font/local";

export const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

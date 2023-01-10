export const AppColors = {
   blue: "rgb(29, 155, 240)",

   // Light -> Text
   "txt-color-medium-light": "rgb(15, 20, 25)",
   "txt-color-small-light": "rgb(83, 100, 113)",
   // Light -> Background
   "bg-main-light": "rgb(255, 255, 255)",
   // Dark -> Text
   "txt-color-medium-dark": "rgb(231, 233, 234)",
   "txt-color-small-dark": "rgb(113, 118, 123)",
   // Dark -> Background
   "bg-main-dark": "rgb(0, 0, 0)",
};

export const themeLight = {
   // Text
   txtColorMedium: AppColors["txt-color-medium-light"],
   txtColorSmall: AppColors["txt-color-small-light"],
   // Background
   bgMain: AppColors["bg-main-light"],
};
export const themeDark = {
   // Text
   txtColorMedium: AppColors["txt-color-medium-dark"],
   txtColorSmall: AppColors["txt-color-small-dark"],
   // Background
   bgMain: AppColors["bg-main-dark"],
};
export const themeBlue = {
   colorMain: AppColors["blue"],
};

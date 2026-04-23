// React Theme — extracted from https://speakeasybarberlounge.com
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
 *   };
 *   fonts: {
    body: string;
    mono: string;
 *   };
 *   fontSizes: {
    '0': string;
    '14': string;
    '15': string;
    '16': string;
    '20': string;
    '22': string;
    '32': string;
    '37': string;
    '38': string;
    '55': string;
    '18.72': string;
    '13.3333': string;
 *   };
 *   space: {
    '1': string;
    '30': string;
    '40': string;
    '50': string;
    '100': string;
    '230': string;
    '300': string;
 *   };
 *   radii: {
    sm: string;
 *   };
 *   shadows: {

 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#61ce70",
    "secondary": "#ffcc00",
    "accent": "#6ec1e4",
    "background": "#000000",
    "foreground": "#000000",
    "neutral50": "#333333",
    "neutral100": "#000000",
    "neutral200": "#7a7a7a",
    "neutral300": "#ffffff",
    "neutral400": "#494c4f",
    "neutral500": "#efefef"
  },
  "fonts": {
    "body": "'Arial', sans-serif",
    "mono": "'monospace', monospace"
  },
  "fontSizes": {
    "0": "0px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "20": "20px",
    "22": "22px",
    "32": "32px",
    "37": "37px",
    "38": "38px",
    "55": "55px",
    "18.72": "18.72px",
    "13.3333": "13.3333px"
  },
  "space": {
    "1": "1px",
    "30": "30px",
    "40": "40px",
    "50": "50px",
    "100": "100px",
    "230": "230px",
    "300": "300px"
  },
  "radii": {
    "sm": "3px"
  },
  "shadows": {},
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#61ce70",
      "light": "hsl(128, 53%, 74%)",
      "dark": "hsl(128, 53%, 44%)"
    },
    "secondary": {
      "main": "#ffcc00",
      "light": "hsl(48, 100%, 65%)",
      "dark": "hsl(48, 100%, 35%)"
    },
    "background": {
      "default": "#000000",
      "paper": "#000000"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#333333"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "600",
      "lineHeight": "32px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "500",
      "lineHeight": "20px"
    }
  },
  "shape": {
    "borderRadius": 3
  },
  "shadows": []
};

export default theme;

import { Dimensions } from "react-native";

const IDOL_WIDTH = 375;
const IDOL_HEIGHT = 812;

const { height, width } = Dimensions.get("window");

const getPixelsHeight = (size) => {
  const ratio = (100 * size) / IDOL_HEIGHT;
  return Math.ceil((ratio * height) / 100);
};

const getPixelsWidth = (size) => {
  const ratio = (100 * size) / IDOL_WIDTH;
  return Math.ceil((ratio * width) / 100);
};

export const pixels = {
  width: {
    5: getPixelsWidth(5),
    10: getPixelsWidth(10),
    14: getPixelsWidth(14),
    15: getPixelsWidth(15),
    16: getPixelsWidth(16),
    17: getPixelsWidth(17),
    20: getPixelsWidth(20),
    25: getPixelsWidth(25),
    30: getPixelsWidth(30),
    32: getPixelsWidth(32),
    35: getPixelsWidth(35),
    37: getPixelsWidth(37),
    40: getPixelsWidth(40),
    43: getPixelsWidth(43),
    50: getPixelsWidth(50),
    60: getPixelsWidth(60),
    70: getPixelsWidth(70),
    85: getPixelsWidth(85),
    90: getPixelsWidth(90),
    112: getPixelsWidth(112),
    110: getPixelsWidth(110),
    120: getPixelsWidth(120),
    240: getPixelsWidth(240),
    375: getPixelsWidth(375),
  },
  height: {
    5: getPixelsHeight(5),
    10: getPixelsHeight(10),
    14: getPixelsHeight(14),
    15: getPixelsHeight(15),
    16: getPixelsHeight(16),
    17: getPixelsHeight(17),
    20: getPixelsHeight(20),
    25: getPixelsHeight(25),
    30: getPixelsHeight(30),
    32: getPixelsHeight(32),
    35: getPixelsHeight(35),
    37: getPixelsHeight(37),
    40: getPixelsHeight(40),
    43: getPixelsHeight(43),
    50: getPixelsHeight(50),
    60: getPixelsHeight(60),
    70: getPixelsHeight(70),
    85: getPixelsHeight(85),
    90: getPixelsHeight(90),
    100: getPixelsHeight(100),
    110: getPixelsHeight(110),
    120: getPixelsHeight(120),
    240: getPixelsHeight(240),
    375: getPixelsWidth(375),
  },
};

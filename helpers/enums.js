var _ = require("lodash");

module.exports = {
  columnsClassMap: {
    1: "one column",
    2: "two column",
    3: "three column",
    4: "four column",
    5: "five column",
    6: "six column",
    7: "seven column",
    8: "eight column",
    9: "nine column",
    10: "ten column",
    11: "eleven column",
    12: "twelve column",
    13: "thirteen column",
    14: "fourteen column",
    15: "fifteen column",
    16: "sixteen column"
  },
  colorClassMap: {
    "red": "red",
    "orange": "orange",
    "yellow": "yellow",
    "olive": "olive",
    "green": "green",
    "teal": "teal",
    "blue": "blue",
    "violet": "violet",
    "purple": "purple",
    "pink": "pink",
    "brown": "brown"
  },
  reverseClassMap: {
    mobile: "mobile reversed ",
    tablet: "tablet reversed",
    computer: "computer reversed"
  },
  verticalAlignmentClassMap: {
    middle: "middle aligned",
    top: "top aligned",
    bottom: "bottom aligned"
  },
  textAlignmentClassMap: {
    left: "",
    right: "right aligned",
    center: "center aligned",
    justified: "justified"
  },
  visibleClassMap: {
    mobile: "mobile only",
    tablet: "tablet only",
    computer: "computer only",
    largeScreen: "large screen only",
    widescreen: "widescreen only"
  },
  widthClassMap: {
    1: "one wide",
    2: "two wide",
    3: "three wide",
    4: "four wide",
    5: "five wide",
    6: "six wide",
    7: "seven wide",
    8: "eight wide",
    9: "nine wide",
    10: "ten wide",
    11: "eleven wide",
    12: "twelve wide",
    13: "thirteen wide",
    14: "fourteen wide",
    15: "fifteen wide",
    16: "sixteen wide"
  },
  centeredClassMap: {
    true: "centered",
    false: ""
  },
  properKeys: function (obj) {
    return _.map(_.keys(obj), function (akey) {
      var properKey = parseInt(akey);
      if(properKey) {
        return properKey;
      }
      else {
        return akey;
      }
    });
  }
};
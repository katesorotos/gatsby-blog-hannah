import React from 'react';
import ThemeContextWrapper from './src/utils/themeContext';

// provide theme state to entire app
export const wrapRootElement = ({ element }) => (
  <ThemeContextWrapper>{element}</ThemeContextWrapper>
);

const $ = require("jquery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
    console.log("The answer is don't think about it!")
  });
}


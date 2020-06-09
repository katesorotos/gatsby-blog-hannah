import React from 'react';
import ThemeContextWrapper from './src/utils/ThemeContext';

// provide theme state to entire app
export const wrapRootElement = ({ element }) => (
  <ThemeContextWrapper>{element}</ThemeContextWrapper>
);


export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossOrigin="anonymous">
    </script>,
  ])
}
import { addDecorator } from "@storybook/react";
import GLOBAL_STYLE from "styles/global-styles.css";
import { createGlobalStyle } from "styled-components";

export const parameters = {
    actions: { argTypesRegex: "^[on,handle][A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const StorybookGlobals = createGlobalStyle`
  body {
    background-color: white;
  }

  .sb-show-main.sb-main-padded {
    padding: 16px
  }`;

addDecorator((Story) => (
    <>
        <GLOBAL_STYLE />
        <StorybookGlobals />
        {Story()}
    </>
));

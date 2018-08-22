import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SignInComponent from "../components/SignInComponent";

storiesOf("SignInComponent", module).add("render input layout", () => (
  <SignInComponent />
));

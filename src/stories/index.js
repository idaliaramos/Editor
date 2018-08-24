import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SignInComponent from "../components/SignInComponent";
import DocumentItem from '../components/DocumentItem'

storiesOf("SignInComponent", module).add("render input layout", () => (
  <SignInComponent />
));
storiesOf("DocumentItem", module).add("renders the single document", () => (
  <DocumentItem />
));

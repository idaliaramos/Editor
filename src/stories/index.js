import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SignInComponent from "../components/SignInComponent";
import DocumentItem from "../components/DocumentItem";
import EditorComponent from "../components/EditorComponent";

storiesOf("SignInComponent", module).add("render input layout", () => (
  <SignInComponent />
));
storiesOf("DocumentItem", module).add("renders the single document", () => (
  <DocumentItem />
));
storiesOf("Editor", module).add("renders the editor", () => (
  <EditorComponent />
));

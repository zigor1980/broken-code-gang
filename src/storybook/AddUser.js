import React from "react";
import { storiesOf } from "@storybook/react";
import { AddUser } from "../components/AddUser/AddUser";

storiesOf("AddUser", module)
    .add("no modifiers", () => (
        <AddUser />
    ));

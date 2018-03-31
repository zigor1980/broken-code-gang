import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { InstanceSummaryElement } from "../components/InstanceSummaryElement/InstanceSummaryElement";


storiesOf("InstanceSummaryElement", module)
    .add("with \"light\" modifier (for chat)", () => (
        <InstanceSummaryElement summary={{
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "BrokenCodeGang",
            description: "Да, зафиксирую информацию про завтра.\n" +
            "Ждём всех в 10.00. Не опаздывать!\n" +
            "ШРИкатон продлится до 18.00.\n" +
            "С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb",
            author: "Bibushik",
            descModifiers: "light",
        }}
      />
    ))
    .add("without modifier (for chats/contacts lists)", () => (
        <InstanceSummaryElement summary={{
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "BrokenCodeGang",
            description: "Да, зафиксирую информацию про завтра.\n" +
            "Ждём всех в 10.00. Не опаздывать!\n" +
            "ШРИкатон продлится до 18.00.\n" +
            "С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb",
            author: "Bibushik",
        }}
      />
    ));

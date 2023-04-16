import type {Meta, StoryObj} from "@storybook/react";

import AvatarUploader from "./AvatarUploader";

const meta: Meta<typeof AvatarUploader> = {
    title: "AvatarUploader",
    component: AvatarUploader,
    parameters: {
        controls: {
            exclude: ["onUpload"]
        },
    },

};

export default meta;
type Story = StoryObj<typeof AvatarUploader>;

export const Standard: Story = {};


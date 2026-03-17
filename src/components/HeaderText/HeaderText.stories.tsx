import type { Meta, StoryObj } from "@storybook/nextjs";
import HeaderText, { HeaderType } from "./HeaderText";

const meta: Meta<typeof HeaderText> = {
  title: "Components/HeaderText",
  component: HeaderText,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: [HeaderType.H1] },
    children: { control: "text" },
  },
  args: {
    type: HeaderType.H1,
    children: "Lorem ipsum dolor",
  },
};

export default meta;
type Story = StoryObj<typeof HeaderText>;

export const Light: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div className="bg-background p-6">
      <HeaderText {...args} />
    </div>
  ),
};

export const Dark: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div className="dark bg-background p-6">
      <HeaderText {...args} />
    </div>
  ),
};

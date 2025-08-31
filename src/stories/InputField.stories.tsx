import type { ComponentProps } from "react";
import { InputField } from "../components/InputField";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {fn} from "storybook/test"


type StoryProps = ComponentProps<typeof InputField>


const meta: Meta<StoryProps> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    onChange: fn()
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select"
      }
    },
    variant: {
      options: ["filled", "outlined", "ghost"],
      control: {
        type: "select"
      }

    },
    disabled: {
      control: {
        type: "boolean"
      }

    },
    invalid: {
      control: {
        type: "boolean"
      }

    }
  }

}

export default meta;

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This will be visible to others",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "You can’t type here",
    disabled: true,
  },
};



export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <InputField {...args} variant="filled" label="Filled" />
      <InputField {...args} variant="outlined" label="Outlined" />
      <InputField {...args} variant="ghost" label="Ghost" />
    </div>
  ),
};



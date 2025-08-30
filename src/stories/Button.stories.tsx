import type { ComponentProps } from "react";
import type {Meta, StoryObj} from "@storybook/react-vite"
import  { Button } from "../components/Button";

 type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string
 }

 const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        variant: {
            options:["primary" , "secondary"],
            control:{
                type: "select",
            },
        },
        size:{
            options:["sm" , "md" ,"lg"],
            control:{
                type: "select",
            },
        }
    },
   
 };
 export default meta;

 type Story = StoryObj<StoryProps>

 export const Primary: Story ={
    args:{
        buttonText: "Hello",
        variant: "primary",
        size: "md"
    },
    render:({buttonText , ...args})=>{
        return <Button {...args}>{buttonText}</Button>
    }
 }


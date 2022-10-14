import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
    children: ReactNode;
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputIconProps {
    children: ReactNode
}


function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className="bg-gray-200 flex items-center rounded gap-2 py-3 px-3 h-10 focus-within:ring-2 ring-green-700 group transition">
            {children}
        </div>
    )
}

TextInputRoot.displayName = "TextInput.Root";

function TextInputInput(props: TextInputInputProps) {

    return (
        <input className="bg-transparent items-center outline-none flex-1 text-gray-900 placeholder:text-gray-600 text-sm" {...props} />
    )
}

TextInputInput.displayName = "TextInput.Input";

function TextInputIcon({ children }: TextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-600 transition-colors group-focus-within:text-green-700">
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean
}

export function Button(props: ButtonProps) {

    const Comp = props.asChild ? Slot : 'button'
    return (
        <Comp
            className={
                clsx("bg-green-700 text-gray-200 py-2 px-2 h-10 rounded transition-colors hover:bg-green-800 font-semibold w-full ", {
                    "bg-gray-200 text-gray-600 hover:bg-gray-200": props.disabled
                })}>
            {props.children}
        </Comp>
    )
}
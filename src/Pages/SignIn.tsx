import axios from "axios"
import { Envelope, Lock } from "phosphor-react"
import { FormEvent, useState } from "react"
import { Button } from "../components/Button"
import { Checkbox } from "../components/Checkbox"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { TextInput } from "../components/TextInput"
import Logo from "../Logo"


export function SignIn() {

    const [isUserSignIn, setIsUserSignIn] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const response = await axios.post<{ message: string }>("/sessions")
        console.log(response.data.message);
        setIsUserSignIn(true)
    }
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center">

            <header className="flex flex-col items-center">
                <Logo />
                <Heading size="lg">
                    Ignite Lab
                </Heading>
                <Text size="md" className="text-gray-600 mt-3">
                    Faça login e comece a usar!
                </Text>
            </header>

            <form className="flex flex-col w-96 gap-6 mt-4" onSubmit={event => handleSubmit(event)}>
                {isUserSignIn && <Text className="text-gray-900">Login Realizado</Text>}
                <label className="flex flex-col gap-2" htmlFor="email">
                    <Text>Endereço de e-mail</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
                    </TextInput.Root>
                </label>

                <label className="flex flex-col gap-2" htmlFor="password">
                    <Text>
                        Sua Senha
                    </Text>
                    <TextInput.Root >
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input type="password" id="password" placeholder="********" />
                    </TextInput.Root>
                </label>

                <label htmlFor="remember" className="flex gap-2 items-center">
                    <Checkbox id="remember" />
                    <Text>Lembrar de mim por 30 dias</Text>
                </label>

                <Button type="submit">
                    Entrar na plataforma
                </Button>

                <footer className="flex flex-col items-center gap-3">
                    <Text className="text-gray-600 underline hover:text-green-700">
                        <a href="">Esqueceu sua senha?</a>
                    </Text>
                    <Text className="text-gray-600 underline hover:text-green-700">
                        <a href="">Não possui uma conta? Crie uma agora</a>
                    </Text>
                </footer>
            </form>
        </div>
    )
}

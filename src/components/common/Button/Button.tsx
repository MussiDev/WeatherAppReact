import { ButtonContainer } from "./Button.styled";
import { MouseEventHandler } from "react";

interface ButtonProps {
	data: {
		text: string;
	};
	events: {
		handleSubmit: MouseEventHandler<HTMLInputElement>;
	};
}

const Button = (props: ButtonProps) => {
	const { text } = props.data;
	return <ButtonContainer>{text}</ButtonContainer>;
};

export default Button;

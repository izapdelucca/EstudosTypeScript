// Importa FunctionComponent e ReactNode da biblioteca react
import { FunctionComponent, ReactNode } from "react";

// Define a interface ButtonProps que descreve as propriedades que o componente Button pode receber
interface ButtonProps {
  text?: string; // Propriedade opcional do tipo string que será exibida no botão
  onClick?: () => void; // Propriedade opcional, uma função que será chamada quando o botão for clicado
  children?: ReactNode; // Propriedade opcional que pode ser qualquer coisa que o React pode renderizar
}

// Define o componente funcional Button utilizando o tipo FunctionComponent com as propriedades descritas em ButtonProps
const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  // Retorna um elemento <div> que exibe o texto e chama a função onClick quando clicado
  return <div onClick={onClick}>{text}</div>;
};

// Exporta o componente Button para que ele possa ser importado e usado em outros arquivos
export default Button;

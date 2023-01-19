import { clsx } from 'clsx';

type ButtonProps = {
  buttonText: string
  disabled: boolean
  id: string
}

export const Button = ({ buttonText, disabled, id }: ButtonProps) => {
  return <button disabled={disabled} className={clsx("border-4 p-1 border-green-500 my-2", { "opacity-40 cursor-not-allowed": disabled })} id={id}>{buttonText}</button>
}
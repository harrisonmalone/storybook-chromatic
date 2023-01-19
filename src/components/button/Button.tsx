import { clsx } from 'clsx';

type ButtonProps = {
  buttonText: string
  disabled: boolean
}

export const Button = ({ buttonText, disabled }: ButtonProps) => {
  return <button disabled={disabled} className={clsx("border-4 p-1 border-green-500 my-2", { "opacity-40 cursor-not-allowed": disabled })}>{buttonText}</button>
}
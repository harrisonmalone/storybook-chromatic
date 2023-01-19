type ButtonProps = {
  buttonText: string
}

export const Button = ({ buttonText }: ButtonProps) => {
  return <button className="border-4 p-1 border-blue-500 my-2">{buttonText}</button>
}
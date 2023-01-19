export type CardProps = {
  headerText: string
  bodyText: string
}

export const Card = ({ headerText, bodyText }: CardProps) => {
  return (
    <div className="p-2 border-2 border-black my-2">
      <p className="text-xl">{headerText}</p>
      <p>{bodyText}</p>
    </div>
  )
}

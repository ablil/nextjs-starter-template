import { FC, InputHTMLAttributes, ReactNode } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  rightIcon?: ReactNode
  leftIcon?: ReactNode
}

const InputWithIcon: FC<Props> = ({ rightIcon, leftIcon, className, type, ...rest }) => {
  return (
    <div className={"input-with-icon flex items-center " + className}>
      <div className="ml-2">{leftIcon}</div>
      <input type={type ?? "text"} {...rest} className="border-none w-full" />
      <div className="mr-2">{rightIcon}</div>
    </div>
  )
}

export default InputWithIcon

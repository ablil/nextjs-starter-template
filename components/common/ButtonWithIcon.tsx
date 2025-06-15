import React, { FC, HtmlHTMLAttributes, PropsWithChildren, ReactNode } from "react"

type Props = HtmlHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    rightIcon?: ReactNode
    leftIcon?: ReactNode
  }

const ButtonWithIcon: FC<Props> = ({ children, rightIcon, leftIcon, className, ...rest }) => {
  return (
    <button {...rest} className={"with-icon " + className}>
      <div>{leftIcon}</div>
      {children}
      <div>{rightIcon}</div>
    </button>
  )
}

export default ButtonWithIcon

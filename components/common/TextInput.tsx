import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { FC, InputHTMLAttributes } from "react"

/* eslint-disable-next-line */
const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ type, className, ...rest }) => {
  return (
    <div className="flex items-center">
      <MagnifyingGlassIcon className="size-5 text-gray-500" />
      <input {...rest} type="text" className="transparent" />
    </div>
  )
}

export default TextInput

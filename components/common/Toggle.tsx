"use client"
import { FC, useState } from "react"

type Props = {
  checked?: boolean
  onChange?: () => void
}

const Toggle: FC<Props> = ({ checked, onChange }) => {
  const [_checked, setChecked] = useState(checked ?? false)

  const handleChange = () => {
    setChecked((old) => !old)
    if (onChange) onChange()
  }

  return (
    <>
      <input type="checkbox" hidden={true} checked={_checked} onChange={handleChange} />
      <div onClick={handleChange} className="toggle" data-checked={_checked}>
        <div className="toggle-inner"></div>
      </div>
    </>
  )
}

export default Toggle

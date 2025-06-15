import ButtonWithIcon from "@/components/common/ButtonWithIcon"
import { ArrowLeftEndOnRectangleIcon, ArrowRightCircleIcon } from "@heroicons/react/16/solid"
import React from "react"

const ComponentsPage = () => {
  return (
    <main className="grid grid-cols-3 gap-4 p-8">
      <div className="flex gap-4 flex-wrap">
        <button>no style</button>
        <button className="filled">click me</button>
        <button className="filled" disabled={true}>
          disabled button
        </button>
        <button className="transparent">transparent button</button>
        <button className="outlined">outlined button</button>
        <button className="outlined" disabled={true}>
          outlined disabled
        </button>

        <ButtonWithIcon rightIcon={<ArrowRightCircleIcon className="size-4" />} className="filled">
          sign in
        </ButtonWithIcon>
        <ButtonWithIcon
          leftIcon={<ArrowLeftEndOnRectangleIcon className="size-4" />}
          className="filled"
        >
          sign out
        </ButtonWithIcon>
        <ButtonWithIcon
          rightIcon={<ArrowRightCircleIcon className="size-4" />}
          className="outlined"
        >
          sign in
        </ButtonWithIcon>
        <ButtonWithIcon
          leftIcon={<ArrowLeftEndOnRectangleIcon className="size-4" />}
          className="outlined"
        >
          sign out
        </ButtonWithIcon>
        <ButtonWithIcon
          rightIcon={<ArrowRightCircleIcon className="size-4" />}
          className="transparent"
        >
          sign in
        </ButtonWithIcon>
        <ButtonWithIcon
          leftIcon={<ArrowLeftEndOnRectangleIcon className="size-4" />}
          className="transparent"
        >
          sign out
        </ButtonWithIcon>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="type here" />
      </div>
      <div>
        <h1>titles</h1>
      </div>
    </main>
  )
}

export default ComponentsPage

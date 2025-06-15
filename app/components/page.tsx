import ButtonWithIcon from "@/components/common/ButtonWithIcon"
import InputWithIcon from "@/components/common/InputWithIcon"
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid"
import React from "react"

const ComponentsPage = () => {
  return (
    <main className="p-12">
      <h1 className="uppercase text-xl">buttons</h1>
      <div className="flex gap-2 p-4 flex-wrap">
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
      <h1 className="uppercase text-xl">inputs</h1>
      <div className="flex gap-2 p-4 flex-wrap">
        <input type="text" placeholder="no style" className="" />
        <input type="text" placeholder="underlined" className="underlined" />
        <input type="text" placeholder="filled underlined" className="underlined filled" />
        <input type="text" placeholder="bordered" className="bordered" />
        <input type="text" placeholder="bordered filled" className="bordered filled" />

        <InputWithIcon
          placeholder="underlined left icon"
          className="underlined"
          leftIcon={<MagnifyingGlassIcon className="size-4" />}
        />
        <InputWithIcon
          placeholder="underlined right icon"
          className="underlined"
          rightIcon={<MagnifyingGlassIcon className="size-4" />}
        />
        <InputWithIcon
          placeholder="underlined filled left icon"
          className="underlined filled"
          leftIcon={<MagnifyingGlassIcon className="size-4" />}
        />
        <InputWithIcon
          placeholder="underlined filled right icon"
          className="underlined filled"
          rightIcon={<MagnifyingGlassIcon className="size-4" />}
        />
        <InputWithIcon
          placeholder="bordered left icon"
          className="bordered"
          leftIcon={<MagnifyingGlassIcon className="size-4" />}
        />
        <InputWithIcon
          placeholder="bordered right icon"
          className="bordered"
          rightIcon={<MagnifyingGlassIcon className="size-4" />}
        />
        <InputWithIcon
          placeholder="bordered filled left icon"
          className="bordered filled"
          leftIcon={<MagnifyingGlassIcon className="size-4" />}
        />
        <InputWithIcon
          placeholder="bordered filled right icion"
          className="bordered filled"
          rightIcon={<MagnifyingGlassIcon className="size-4" />}
        />
      </div>
      <div>
        <h1>titles</h1>
      </div>
    </main>
  )
}

export default ComponentsPage

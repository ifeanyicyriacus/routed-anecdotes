import { useState } from 'react'

export const useField = ({ type }) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onReset = () => {
    setValue('')
  }

  return {
    // name,
    type,
    value,
    onChange,
    onReset
  }
}

// // modules can have several named exports
// export const useAnotherHook = () => {
//   // ...
// }
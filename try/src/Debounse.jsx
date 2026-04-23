import { useRef, useState } from "react"

const Debounce = () => {
  const [query, setQuery] = useState("")
  const timerRef = useRef(null)

  function handleOnchange(value) {
    setQuery(value)

 clearTimeout(timerRef.current)

   timerRef.current = setTimeout(() => {
    console.log("Searching:", value)
  }, 900)

  }

  return (
    <input
      placeholder="Search..."
      value={query}
      onChange={(e) => handleOnchange(e.target.value)}
      type="text"
    />
  )
}
export default Debounce
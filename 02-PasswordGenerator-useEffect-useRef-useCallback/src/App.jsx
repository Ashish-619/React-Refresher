import { useCallback, useRef, useState, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "1234567890"
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    })
      .catch(err => console.error("Failed to copy text to clipboard:", err));
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='p-4 flex justify-center border bg-green-300 text-2xl'>
        Password Generator
      </div>
      <div className='flex justify-center items-center my-24'>
        <div className='p-4 flex flex-wrap bg-green-200 justify-center items-center w-2/4 h-52 rounded-lg'>
          <div>
            <div className='flex w-full justify-center'>
              <input
                type='text'
                readOnly
                placeholder='Password...'
                value={password}
                ref={passRef}
                className='p-2 outline-none rounded-tl-md rounded-bl-md w-full'
              />
              <button className='p-2 rounded-ee-md rounded-tr-md bg-green-400 hover:bg-green-500 transition' onClick={copyToClipboard}>{isCopied ? "Copied!" : "Copy"}</button>
            </div>
            <div className='flex flex-wrap p-3 w-full mt-12 px-4 gap-2'>
              <input
                type='range'
                min={6}
                max={30}
                value={length}
                id='range-id'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label htmlFor='range-id'>Length: {length}</label>
              <input
                type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id='chars'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='chars'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

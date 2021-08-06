import { useState } from 'react'

const PasswordGenerator = () => {
  // Characters
  const charactersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charactersLowercase = 'abcdefghijklmnopqrstuvwxyz'
  const charactersNumbers = '0123456789'
  const charactersSymbols = '!@#$%^&*(){}[]<>'
  // State
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(20)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  // Functions
  const handleGeneratePassword = (e) => {
    let characterList = ''
    if (includeUppercase) {
      characterList = characterList + charactersUppercase
    }
    if (includeLowercase) {
      characterList = characterList + charactersLowercase
    }
    if (includeNumbers) {
      characterList = characterList + charactersNumbers
    }
    if (includeSymbols) {
      characterList = characterList + charactersSymbols
    }

    setPassword(createPassword(characterList))
  }

  const createPassword = (characterList) => {
    let finalPassword = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      finalPassword = finalPassword + characterList.charAt(characterIndex)
    }
    return finalPassword
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
  }

  const handleCopyPassword = (e) => {
    copyToClipboard()
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='p-6 bg-white shadow-xl w-96 rounded-2xl'>
        <h2 className='text-2xl font-semibold text-center'>
          Password Generator
        </h2>
        <div className='flex mt-8'>
          <div className='flex items-center justify-center w-full h-12 text-lg font-semibold bg-gray-100 rounded-l-xl'>
            <span id='result' className='px-2 '>
              {password}
            </span>
          </div>
          <button
            className='flex items-center justify-center h-12 transition bg-blue-500 rounded-r-xl hover:bg-blue-600 w-14'
            onClick={handleCopyPassword}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='text-white h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
              />
            </svg>
          </button>
        </div>
        <div className='mt-8'>
          <div className='flex py-1 -my-0.5 justify-between items-center'>
            <label>Password length</label>
            <input
              className='py-1 rounded-xl'
              type='number'
              id='length'
              min='6'
              max='20'
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            ></input>
          </div>
          <div className='flex items-center justify-between py-2'>
            <label>Include uppercase</label>
            <input
              type='checkbox'
              id='uppercase'
              name='uppercase'
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            ></input>
          </div>
          <div className='flex items-center justify-between py-2'>
            <label>Include lowercase</label>
            <input
              type='checkbox'
              id='lowercase'
              name='lowercase'
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            ></input>
          </div>
          <div className='flex items-center justify-between py-2'>
            <label>Include numbers</label>
            <input
              type='checkbox'
              id='numbers'
              name='numbers'
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            ></input>
          </div>
          <div className='flex items-center justify-between py-2'>
            <label>Include symbols</label>
            <input
              type='checkbox'
              id='symbols'
              name='symbols'
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            ></input>
          </div>
        </div>
        <button
          id='generate'
          className='w-full py-3 mt-6 font-semibold text-white transition bg-blue-500 hover:bg-blue-600 rounded-xl'
          onClick={handleGeneratePassword}
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator

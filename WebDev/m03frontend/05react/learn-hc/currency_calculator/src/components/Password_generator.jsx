import React, { useCallback, useEffect, useRef, useState } from 'react'

function Password_generator() {

    const [length, setLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeCharacters, setIncludeCharacters] = useState(false);

    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = "";

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) str += "0123456789";
        if (includeCharacters) str += "!@#$%^&*(){}[]`~-+_";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);

    }, [length, includeNumbers, includeCharacters, setPassword]);


    useEffect ( () => {
        passwordGenerator();
    }, [length, includeNumbers, includeCharacters, passwordGenerator]);


    const passwordRef = useRef(null);

    const copyPasswordToClipboard = useCallback ( () => {
        passwordRef.current?.select();
        passwordRef.current.setSelectionRange(0, length)
        window.navigator.clipboard.writeText(password);
    },[password])



    return (
        <div className='bg-gray-200 m-0 h-64 py-4 text-center'>
            Password Generator

            <div className='w-full max-w-md mx-auto mt-3 shadow-md rounded-sm px-4 text-orange-300 bg-gray-700'>

                <div className='flex shadow-lg rounded-lg overflow-hidden pt-4 pb-1 px-1 mb-2'>
                    <input
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3 bg-gray-800 shadow-sm'
                        placeholder='password'
                        ref={passwordRef}
                        readOnly
                    />

                    <button onClick={copyPasswordToClipboard} className='outline-none  text-white px-3 py-0.5 shrink-0 bg-blue-600'>Copy </button>

                </div>

                <div className='flex text-sm gap-x-2 pb-4'>

                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label htmlFor=""> Length : {length} </label>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked = {includeNumbers}
                            id='numberInput'
                            onChange={ () => setIncludeNumbers ( (prev) => !prev)}
                        />
                        <label htmlFor="numberInput"> Numbers </label>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked = {includeCharacters}
                            id='characterInput'
                            onChange={ () => setIncludeCharacters( (prev) => !prev)}
                        />
                        <label htmlFor="characterInput"> Characters  </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Password_generator
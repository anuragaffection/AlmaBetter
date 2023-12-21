import React from 'react'

const container = `bg-gradient-to-t from-slate-900 to-gray-900 text-gray-200 p-4`
const wrapper = `flex flex-col gap-3 md:justify-center md:items-center my-3`
const title = `text-center text-yellow-400 text-2xl font-semibold`
const titleDesc = `text-center text-xl`
const contactForm = `flex flex-col gap-3 bg-gray-950 p-5 rounded-lg  md:w-3/4 `
const contactTitle = 'text-yellow-400 font-semibold ml-2'
const inputStyle = `bg-gray-700 h-12 p-3 rounded-lg`
const inputStyleTextArea = 'bg-gray-700 p-3 rounded-lg'
const sendButton = `bg-yellow-600 text-gray-900 h-12 rounded-lg hover:bg-yellow-400`


function Contact() {
    return (
        <>
            <div className={container}>
                <div className={wrapper}>
                    <div className={title}>Contact Us</div>
                    <div className={titleDesc}>Feel free to reach out to us for any queries or feedbacks </div>
                    <div className={contactForm}>
                        <div className={contactTitle}>Email us</div>
                        <input className={inputStyle} type="text" placeholder='Your Name' />
                        <input className={inputStyle} type="email" placeholder='Your Email' />
                        <textarea
                            className={inputStyleTextArea}
                            rows={4}
                            cols={50}
                            placeholder='Message'
                        >
                        </textarea>
                        <button className={sendButton}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
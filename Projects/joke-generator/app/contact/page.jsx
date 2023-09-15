import React from 'react'

export default function page() {

  return (

    <div className="container min-w-full p-8 bg-gray-700 text-white">

      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>


      <p className="text-lg leading-relaxed">
        We'd love to hear from you! If you have any questions, suggestions, or just want to say hello, please feel free to
        reach out to us. You can contact us through the following methods:
      </p>



      <div className="mt-6">

        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p className="text-lg leading-relaxed">
          You can send us an email at <a href="mailto:contact@jokegenerator.com" className="text-blue-500 hover:underline">contact@jokegenerator.com</a>. We'll do our best to respond to your inquiries promptly.
        </p>

      </div>



      <div className="mt-6">

        <h2 className="text-xl font-semibold mb-2">Social Media</h2>

        <p className="text-lg leading-relaxed">
          You can also connect with us on social media:
          <ul className="list-disc pl-6 mt-2">
            <li><a href="#" className="text-blue-500 hover:underline">Facebook</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Twitter</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Instagram</a></li>
          </ul>
        </p>

      </div>



      <div className="mt-6">

        <h2 className="text-xl font-semibold mb-2">Mailing Address</h2>

        <p className="text-lg leading-relaxed">
          If you prefer traditional mail, you can send us letters or packages to the following address:

          <address className="text-lg leading-relaxed mt-2">
            Joke Generator Inc.<br />
            123 Laughter Lane<br />
            Haha City, JOKE 12345<br />
            United States
          </address>

        </p>

      </div>



      <p className="text-lg leading-relaxed mt-6">
        We appreciate your feedback and look forward to connecting with you. Your support and suggestions help us make Joke Generator even better!
      </p>


    </div>
  )
}

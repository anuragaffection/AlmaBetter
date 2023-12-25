import React from 'react'

function AboutApp() {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md py-8 px-6">
                <h1 className="text-3xl font-bold mb-4">About Our Article App</h1>
                <p className="mb-6">
                    Welcome to our article app! This platform allows users to publish, manage, and explore their favorite articles.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
                <ul className="list-disc ml-6 mb-6">
                    <li>User can post their favorite articles</li>
                    <li>View articles published by other users</li>
                    <li>Create, edit, update, and delete their own articles</li>
                    <li>User profiles for managing articles and preferences</li>
                    <li>Styling with Tailwind CSS</li>
                    <li>Dark mode background by default</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Technologies used :</h2>
                <ul className="list-disc ml-6 mb-6">
                    <li>Frontend :Html, Css, React JSX, Tailwid CSS</li>
                    <li>Backend : Mongodb , Express js, mongoose </li>
                    <li>Deployed : vercel, render </li>
                    <li></li> 
                </ul>

                <p className="mb-6">
                    Our team is continuously working to enhance the user experience and add more features to make this app
                    even better.
                </p>
                <p>
                    For any inquiries or feedback, please contact us at <span className="underline">contact@articleapp.com</span>
                </p>
            </div>
        </div>
    )
}

export default AboutApp
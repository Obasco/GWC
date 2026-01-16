import React from 'react'
import { VerifiedIcon } from 'lucide-react'

const Verified = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center shadow">
            <VerifiedIcon className="w-16 h-16 text-black mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-green-600">Contact Submitted Successfully!</h1>
            <p className="text-lg text-gray-700">Thank you for reaching out to GrandWash. We have received your message and will get back to you shortly.</p>
        </div>
    </div>
    </section>
  )
}

export default Verified
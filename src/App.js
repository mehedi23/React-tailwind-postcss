import React from 'react'

const App = () => {
    return (
        <div className="md:p-6 h-40 p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 hover:bg-gray-100 transition duration-500 hover:shadow-none">
            <div className="flex-shrink-0">
                {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-gray-500">You have a new message!</p>
            </div>
        </div>
    )
}

export default App

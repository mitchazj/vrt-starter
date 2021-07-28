import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <div className="space-y-4 flex flex-col items-center">
                <div className="text-3xl font-bold bg-gray-100 rounded-lg px-8 py-6">{count}</div>
                <button className="" onClick={() => setCount(x => x + 1)}>
                    Click Me
                </button>
            </div>
        </div>
    )
}

export default App

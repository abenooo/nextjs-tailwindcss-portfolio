import { useState } from "react"

function Chat() {
  const [messages, setMessages] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userMessage = e.target.message.value

    setMessages([
      ...messages,
      {
        text: userMessage,
        sender: "user",
      },
    ])

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    })

    const data = await response.json()

    setMessages([
      ...messages,
      {
        text: userMessage,
        sender: "user",
      },
      {
        text: data.message,
        sender: "bot",
      },
    ])
  }

  return (
    <div>
      {/* <div className='flex flex-col h-full'>
        <div className='flex-1 overflow-y-auto'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-end mb-4 ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`flex items-center max-w-xs mx-2 ${
                  message.sender === "bot"
                    ? "ml-auto rounded-lg bg-gray-300"
                    : "mr-auto rounded-lg bg-blue-500"
                } p-2 text-sm`}
              >
                <p
                  className={`${
                    message.sender === "bot" ? "text-gray-800" : "text-white"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

<div className='flex flex-col h-full mx-20'> {/* Added margin */}
  <div className='flex-1 overflow-y-auto'>
    {messages.map((message, index) => (
      <div
        key={index}
        className={`flex items-end mb-4 ${
          message.sender === "bot" ? "justify-start" : "justify-end"
        }`}
      >
        <div
          className={`flex items-center max-w-xs mx-2 ${
            message.sender === "bot"
              ? "ml-auto rounded-lg bg-gray-300"
              : "mr-auto rounded-lg bg-blue-500"
          } p-2 text-sm`}
        >
          <p
            className={`${
              message.sender === "bot" ? "text-gray-800" : "text-white"
            }`}
          >
            {message.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      <form onSubmit={handleSubmit} className='flex px-4 py-6'>
        {/* <input name='message' /> */}
        <input
          name='message'
          className='flex-1 px-4 py-2 mr-4 text-gray-800 border border-gray-300 rounded-full focus:outline-none'
          placeholder='Type a message...'
        />

        <button
          className='inline-block px-6 py-2 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-0'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat

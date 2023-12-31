import React from "react";
import { useLocalStorage } from "usehooks-ts";

const App = () => {
  const [text] = useLocalStorage('text', '')

  if (text.length > 10) {
    throw new Error(`Invalid value ${text}`)
  }

  return (
    <section className="app-b">
      <div className="w-full h-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-56" src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="avatar" />

        <div className="py-5 text-center">
          <a href="#" className="block text-xl font-bold text-gray-800" role="link">App B</a>
          <span className="text-sm text-gray-700">Value from other app: {text}</span>
        </div>
      </div>
    </section>
  )
}

export default App;

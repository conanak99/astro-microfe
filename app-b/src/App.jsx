import React from "react";
import "./App.css";

const App = () => {
  // const [text] = useLocalStorage('text', '')

  return (
    <section className="app-b">
      <div className="w-full h-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-56" src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="avatar" />

        <div className="py-5 text-center">
          <a href="#" className="block text-xl font-bold text-gray-800" role="link">App B</a>
          {/* <span className="text-sm text-gray-700">{text}</span> */}
        </div>
      </div>
    </section>
  )
}

export default App;

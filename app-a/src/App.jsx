import React from "react";
import { useLocalStorage } from "usehooks-ts";

const App = () => {
  const [text, setText] = useLocalStorage('text', '')

  const broadcast = (operation) => {
    document.dispatchEvent(new CustomEvent("custom-evt", { detail: { operation } }))
  }

  return (
    <section className="app-a">
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-56" src="https://codelearnstorage.s3.amazonaws.com/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg" alt="avatar" />

        <div className="py-5 text-center">
          <a href="#" className="block text-xl font-bold text-gray-800" role="link">App A</a>
          <span className="text-sm text-gray-700">ReactJS App</span>


          <div className="px-4 py-2">
            <input type="text" placeholder="Sync value"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
          </div>

          <div className="px-4 pt-2 pb-0">
            <div class="flex overflow-hidden bg-white border divide-x">
              <button onClick={() => broadcast('up')} className="flex-1 px-4 py-2 text-sm font-medium text-gray-600">
                ⬆️ Increase
              </button>

              <button onClick={() => broadcast('down')} className="flex-1 px-4 py-2 text-sm font-medium text-gray-600">
                ⬇️ Decrease
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default App;

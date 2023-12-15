import { onMount, createSignal } from "solid-js";
import styles from "./App.module.css";



function App() {
  const [count, setCount] = createSignal(0);

  onMount(() => {
    document.addEventListener("custom-evt", (e) => {
      const operation = e.detail.operation

      if (operation === 'up') {
        setCount(count() + 1)
      } else {
        setCount(count() - 1)
      }
    })
  })


  return (
    <section className="app-c">
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-56" src="https://repository-images.githubusercontent.com/130884470/ad63fd00-7ab2-11ea-9c57-6c114391183a" alt="avatar" />

        <div className="py-5 text-center">
          <a href="#" className="block text-xl font-bold text-gray-800" role="link">App C</a>
          <span className="text-sm text-gray-700">Value: {count()}</span>
        </div>
      </div>
    </section>
  );
}

export default App;

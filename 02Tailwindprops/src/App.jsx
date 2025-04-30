import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const newArr=[1,2,3];

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-6'>Tailwind Css</h1> <br/>

     {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/18711559/pexels-photo-18711559/free-photo-of-portrait-of-elderly-man-in-turban.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
{/* <div class="relative max-w-sm mx-auto h-64 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="https://images.pexels.com/photos/31359948/pexels-photo-31359948/free-photo-of-vibrant-african-fashion-portrait-in-abuja-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt="Background"
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="relative z-10 bg-black bg-opacity-50 h-full p-6 flex flex-col justify-end">
    <h2 class="text-white text-2xl font-bold mb-2">Card Title</h2>
    <p class="text-white text-sm">This is a card with a full background image and overlay content.</p>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      view profile
    </button>
  </div>
</div> */}
<Card userName="shemma" btntext="visit me"/> <br/>
<Card userName="palak" btntext="click me"/><br/>

     
    </>
    
  )
}

export default App

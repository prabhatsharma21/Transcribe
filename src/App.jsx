import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='flex flex-col'>
      <section className='min-h-screen flex flex-col'>
      <header>
          <h1>Free<span className='text-blue-400'>Scribe</span></h1>
          <button>
            <p>New</p>
            <i class="fa-solid fa-plus"></i>
          </button>

        </header>
        <main className='flex-1'>

        </main>
      </section>

      <footer></footer>
     
     </div>
    </>
  )
}

export default App

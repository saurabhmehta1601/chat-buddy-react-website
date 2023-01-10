import Header from "./components/Header"

function App() {
  return (
    <div className="h-screen max-w-3xl mx-auto flex flex-col bg-purple-600 ">
      <Header />

      <main
        className=" max-w-2xl bg-slate-800 rounded-md flex-1 flex flex-col mb-4 self-center w-full"
      >
        <section className="min-h-[200px] p-4 text-white flex-1 ">
          <div className="w-full rounded-sm bg-slate-900 flex-1">this is chat section</div>
        </section>
        <form action="" className="flex bg-white rounded-b-md">
          <input type="text" className="w-full outline-none p-2 bg-transparent" />
          <button className="p-2">
            <img src="/assets/icon-send-message.png" width={32} height={32} />
          </button>

        </form>
      </main>
    </div>)
}

export default App

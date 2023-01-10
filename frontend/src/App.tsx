
function App() {
  return (
    <div className="h-screen max-w-3xl mx-auto">
      <header className="p-4 flex justify-between ">
        <h3 className="text-3xl text-white hover:cursor-pointer">CODEX BUDDY</h3>
        <span className="hover:cursor-pointer rounded-md bg-gray-500">
          <img src="/assets/github.png" alt="github" />
        </span>
      </header>

      <main className=" max-w-2xl bg-slate-800 rounded-md">
        <section className="min-h-[200px] p-4 text-white flex">
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

import reactLogo from '../assets/react.svg';


export default function Home() {
    return (
        <>
            <div className="size-full">
                <div className="flex items-center justify-center my-10">
                    <a href="https://vitejs.dev" target="_blank" className=" hover:bg-cyan">
                        <img src="/vite.svg" className=" w-20 h-20" alt="Vite logo" />
                    </a>
                    <a href="https://tauri.app" target="_blank">
                        <img src="/tauri.svg" className="w-20 h-20" alt="Tauri logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="w-20 h-20" alt="React logo" />
                    </a>
                </div>
                <h1 className="text-red-400 text-center my-auto">Welcome to Tauri!</h1>
                <h1 className="text-teal-500 text-center my-auto">Welcome to Tauri!</h1>
                <p className='my-3 text-center text-[--text-color]'>Click on the Tauri, Vite, and React logos to learn moreww.</p>
            </div>
        </>
    )
}
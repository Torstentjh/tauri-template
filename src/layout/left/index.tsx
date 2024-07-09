import { useNavigate } from "react-router-dom"
import { MenuOutlined } from "@ant-design/icons";
import { useWindow } from "../../hooks/useWindow";

export default function Left() {
    const navigate = useNavigate()
    const { createWebviewWindow } = useWindow()
    return (
        <>
            <div className="flex flex-col min-w-20 h-screen p-2 bg-[--left-bg-color] relative items-center" data-tauri-drag-region>
                <span className="text-[--text-color] cursor-pointer hover:text-red-400 my-5 select-none text-center" onClick={() => { navigate('/') }}>主页</span>
                <span className="text-[--text-color] text-center  text-nowrap select-none cursor-pointer overflow-x-hidden" onClick={() => { navigate('/f') }}>about</span>

                <div className="absolute bottom-3 flex justify-center">
                    <div className="hover:bg-[rgba(206,202,212,0.76)] p-2 rounded-md" onClick={async () => {
                        await createWebviewWindow('设置', 'setting', 'set', 600, 600)
                    }}>
                        <MenuOutlined style={{ color: '#7F8693', }} className="text-xl" />
                    </div>
                </div>
            </div>
        </>
    )
}
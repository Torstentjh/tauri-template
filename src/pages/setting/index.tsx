import { AlignLeftOutlined } from "@ant-design/icons";
import TopBar from "../../components/windows/TopBar";
import { useGlobalStore } from "../../stores";
// 这里写死的，后面功能多了再重写
export default function Setting() {
    const { darkMode, setDarkMode } = useGlobalStore();
    return (
        <>
            <div className='flex w-screen h-screen '>
                {/* 左边内容 */}
                <div className="flex flex-col h-screen w-1/5  bg-[--left-bg-color]" >
                    <p className="p-5 select-none text-[--text-color]" data-tauri-drag-region>设置</p>
                    <div className="flex flex-col m-2 bg-slate-600 rounded-xl" >
                        <div className="p-2">
                            <AlignLeftOutlined />
                            <span className="ml-3 text-sm text-[--text-color]">通用</span>
                        </div>
                    </div>
                </div>
                {/* 右边内容 */}
                <div className="flex-1 flex-col bg-[--content-bg-color]">
                    <TopBar />
                    <div className="mt-10 w-11/12 mx-auto">
                        <p className="text-[--text-color] text-lg ml-1">通用</p>
                        <div className="border border-gray-400 mt-1"></div>
                        <div className="my-5">
                            <p className="text-sm text-[--text-color]">外观设置</p>
                            <div className="p-2">
                                <span onClick={() => { setDarkMode(true) }} className="mx-5 cursor-pointer text-[--text-color]">暗色</span>
                                <span onClick={() => { setDarkMode(false) }} className="cursor-pointer text-[--text-color]">亮色</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
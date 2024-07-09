import { CloseOutlined, FullscreenExitOutlined, FullscreenOutlined, MinusOutlined } from '@ant-design/icons';
import { appWindow } from '@tauri-apps/api/window';
import { useRef, useState } from 'react';

export default function TopBar() {
    const restoreWindow = async () => {
        if (maxWindow) {
            setmaxWindow(false)
            await appWindow.unmaximize()
        } else {
            setmaxWindow(true)
            await appWindow.maximize()
        }
    }
    const [maxWindow, setmaxWindow] = useState<boolean>(false)
    return (
        <>
            <div className="flex justify-end items-center select-none p-1" data-tauri-drag-region>
                <div className="mx-1 p-1 cursor-pointer hover:bg-[rgba(206,202,212,0.76)]" onClick={() => {
                    appWindow.minimize()
                }}><MinusOutlined style={{ color: '#999999' }} /></div>
                <div className="mx-1 p-1 hover:bg-[rgba(206,202,212,0.76)] cursor-pointer" onClick={() => {
                    restoreWindow()
                }}>
                    {
                        maxWindow ? <FullscreenExitOutlined style={{ color: '#999999' }} /> : <FullscreenOutlined style={{ color: '#999999' }} />
                    }
                </div>
                <div className="mx-1 p-1 hover:bg-[rgba(165,57,40,0.76)] cursor-pointer" onClick={() => {
                    appWindow.close()
                }}>
                    <CloseOutlined style={{ color: '#999999' }} />
                </div>
            </div>
        </>
    )
}
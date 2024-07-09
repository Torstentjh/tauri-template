import { Outlet } from 'react-router-dom';
import TopBar from '../../components/windows/TopBar'
export default function Content() {
    return (
        <>
            <div className='flex flex-col flex-1 bg-[--content-bg-color] '>
                <TopBar></TopBar>
                <Outlet />
            </div>
        </>
    )
}
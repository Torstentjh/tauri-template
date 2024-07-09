import Left from './left';
import Content from './content';

export default function IndexPage() {
    return (
        <div className='flex size-full'>
            <Left />
            <Content />
        </div>
    );
}
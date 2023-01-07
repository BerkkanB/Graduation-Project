import { InfinitySpin } from 'react-loader-spinner'

function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <InfinitySpin
                width='200'
                color="#0275d8"
            />
        </div>
    );
}
export default Loading;
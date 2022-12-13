import {useState} from 'react'
import './App.scss'
import {QRCodeSVG} from 'qrcode.react';

function App() {

    const [url, setUrl] = useState<string>('https://www.frontendmentor.io/home')

    return (
        <div className="qrcode-container" role="main">
            <div className={'image-container'}>
                <QRCodeSVG value={url} bgColor={'transparent'} fgColor={'white'}/>
            </div>
            <div className={'url-input-container'}>
                <input value={url} type="text" onChange={e => setUrl(e.target.value)} placeholder='Enter url'/>
            </div>
            <h1>Improve your front-end skills by building projects</h1>
            <p>Enter url, generate qr code an scan it</p>
        </div>
    )
}

export default App

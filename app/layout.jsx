import '@styles/global.css'
import Nav from '@components/Nav'
import Provdier from '@components/Provider'

export const metadata = {
    title: "Promptopia",
    description: "Discovers and Share AI prompts"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provdier>
                    <div className='main'>
                        <div className='gradient'></div>
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provdier>
            </body>
        </html>
    )
}

export default RootLayout;
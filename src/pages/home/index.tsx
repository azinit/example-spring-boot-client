import React from 'react'

const HomePage = () => {
    const [user, setUser] = React.useState('...');

    React.useEffect(() => {
        fetch('http://localhost/api/home')
            .then(r => r.json())
            .then(data => {
                console.log('[200] [HOME] ', data)
                setUser(data.user)
            })
            .catch(err => {
                console.error('[ERR] [HOME] ', err)
                setUser('???')
            })
    }, [])
    return (
        <div className="home-page">
            <h1 style={{textAlign: 'center'}}>Home page</h1>
            <p>Hello, {user}</p>
        </div>
    )
}

export default HomePage

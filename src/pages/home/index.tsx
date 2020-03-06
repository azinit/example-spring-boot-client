import React from 'react'

const HomePage = () => {
    const [user, setUser] = React.useState('');

    React.useEffect(() => {
        fetch('http://localhost/api/home')
            .then(r => r.json())
            .then(data => {
                console.log('[200] [HOME] ', data)
                setUser(data.user)
            })
    }, [])
    return (
        <div className="home-page">
            <h1>It's my home page!</h1>
            <p>Hello, {user}</p>
        </div>
    )
}

export default HomePage

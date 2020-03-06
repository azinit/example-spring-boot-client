import React from 'react'

const TechPage = () => {
    const [techs, setTechs] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    let content;

    React.useEffect(() => {
        fetch('http://localhost/api/tech')
            .then(r => r.json())
            .then(data => {
                // add timeout for loading-component display
                setTimeout(() => {
                    console.log('[200] [TECHS] ', data)
                    setTechs(data)
                    setLoading(false)
                }, 1000)
            })
            .catch(err => {
                console.error('[ERR] [TECHS] ', err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        content = (
            <div style={{ textAlign: 'center'}}>... Loading ...</div>
        )
    } else {
        content = (
            <ul>
                {techs.length ? (
                    techs.map((tech: any, index: number) => (
                        <li key={index}>{tech.framework} ({tech.lang})</li>
                    ))
                ) : (
                        <li key={0} className="text-center">Список технологий пока пуст...</li>
                    )}
            </ul>
        )
    }

    return (
        <div className="tech-page">
            <h1 style={{ textAlign: 'center' }}>Technologies</h1>
            { content }
        </div >
    )
}

export default TechPage

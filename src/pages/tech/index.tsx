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

    return (
        <div className="tech-page">
            <h1 style={{ textAlign: 'center' }}>Technologies</h1>
            <React.Suspense fallback={
                <div style={{ textAlign: 'center' }}>... Loading ...</div>
            }>
                {loading ? (
                    <div style={{ textAlign: 'center' }}>... Loading ...</div>
                ) : (
                        <TechList techs={techs} />
                    )}
            </React.Suspense>
        </div >
    )
}

type PropsList = {
    techs: any[];
}

const TechList = ({ techs }: PropsList) => {
    if (!techs.length) {
        return (
            <li key={0} className="text-center">Список технологий пока пуст...</li>
        )
    }

    return (
        <ul>
            {techs.map((tech: any, index: number) => (
                <li key={index}>{tech.framework} ({tech.lang})</li>
            ))}
        </ul>
    )
}
export default TechPage

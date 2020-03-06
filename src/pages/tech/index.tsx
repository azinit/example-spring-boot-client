import React from 'react'

const TechPage = () => {
    const [techs, setTechs] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost/api/tech')
            .then(r => r.json())
            .then(data => {
                console.log('[200] [TECHS] ', data)
                setTechs(data)
            })
    }, [])

    return (
        <div className="tech-page">
            <ul>
                {techs ? (
                    techs.map((tech: any, index: number) => (
                        <li key={index}>{tech.framework} {tech.lang}</li>
                    ))
                ) : (
                        <li key={-1} className="text-center">Список технологий пока пуст...</li>
                    )}
            </ul>
        </div >
    )
}

export default TechPage

import React, {useState, useEffect} from 'react';

const pagination = () => {

    const [pagina, setPagina] = useState(0)
    const [info, setInfo] = useState({})
 
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        .then((response) => response.json())
        .then((data) =>{
          setInfo(data.info)})
    }, [pagina])
  console.log(info)

    useEffect(() => {
        const url = new URL(window.location)
        const params = new URLSearchParams(url.search)
        const page = params.get('page')
        setPagina(page)
    }, [])

    const addQueryParams = () => {
    const url = new URL(window.location)
        url.searchParams.set('page', parseInt(pagina) + 1)
        window.history.replaceState({}, '', url)
        setPagina(parseInt(pagina) + 1)
    }

    return (
        <div>
            <ul>
                <li>
                    
                    <button onClick={addQueryParams} >Next</button>
                </li>
            </ul>
        </div>    
    )
}
export default pagination;
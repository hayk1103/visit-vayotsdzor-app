import React, { useState, useEffect } from 'react'

const AboutUs = () => {
    // const [notes, setNotes] = useState([])
    // const [page, setPage] = useState(1)
    // const [perPage, setPerPage] = useState(20)
    // const [sort, setSort] = useState(1)

    // const getNotes = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(data => {
    //             const end = perPage * page
    //             const start = end - perPage
    //             let notes = data.slice(start, end)
    //             notes.sort((a, b) => {
    //                 if (a.title < b.title) return sort
    //                 if (a.title > b.title) return -1 * sort
    //                 return 0
    //             })
    //             setNotes(notes)
    //         })
    // }

    // useEffect(() => {
    //     getNotes()
    // }, [page, perPage, sort])

    return (
        <div>
             <div className="d-flex justify-content-center" id = "job1">
                    <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded" id="text1">
                        <div className="card-body">
                            <h1 className="font-weight-light">About as</h1>
                            <p className="lead">2019թ. մարտի 12-ին Վայոց ձորի մարզի Եղեգնաձոր քաղաքում Գյումրու տեխնոլոգիական կենտրոնը սկսեց ծրագրավորման դասընթացներ։ ԳՏՏԿ-ն առաջինն էր, որ նման ծրագրով և իր պրոֆեսիոնալ մասնագետներով եկավ Վայոց ձոր։ Դասընթացը տևեց 8 ամիս, որի շնորհիվ ուսանողները ստացան գերազանց գիտելիքներ և հնարավորություն ունեցան ստեղծել մի հարթակ, որից կօգտվեն մարզի բնակիչները։
                                Together we can achieve more! I'm a paragraph. Click here to add your own text and edit me. 
                                It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                                Feel free to drag and drop me anywhere you like on your page. </p>
                        </div>
                    </div>
                </div>
        </div>
    //     <div>
    //         <h1>About Us</h1>
    //         <select onChange={e => setPerPage(e.target.value)}>
    //             <option value={5}>5</option>
    //             <option value={10}>10</option>
    //             <option value={15}>15</option>
    //             <option value={20}>20</option>
    //         </select>
    //         <button
    //             style={{marginLeft: 10}}
    //             onClick={() => setSort(sort * -1)}>
    //                 {sort ? 'ASC' : 'DESC'}
    //         </button>
    //         <ul>
    //             {notes.map((note, i) => {
    //                 return (
    //                     <li key={`note-${i}`}>
    //                         {note.title}
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    //         {page > 1 && (
    //             <button onClick={() => setPage(page - 1)}>
    //                 Previous
    //             </button>
    //         )}
    //         <span style={{marginLeft: 10, marginRight: 10}}>
    //             {page}
    //         </span>
    //         <button onClick={() => setPage(page + 1)}>
    //             Next
    //         </button>
    //     </div>
    )
}

export default AboutUs
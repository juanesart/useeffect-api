import React, { useState } from 'react'
import { AuthorsContainer } from '../components/QuotesContainer';
import { useData } from '../hooks/useData'



export function HomePage() {

    const { userData } = useData();
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');
    
    const filteredResult = () => {
        if (search.length === 0)
            return userData.slice(currentPage, currentPage + 5);
        const filtered = userData.filter( character => (character.name).toUpperCase().includes(search.toUpperCase()));
        return filtered.slice(currentPage, currentPage + 5)
    }
    const nextPage = () => {
        if (userData.filter( character => character.name.includes(search)).length > currentPage +5)
            setCurrentPage(currentPage + 5);
    }
    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 5);
    }
    const onSearchChage = ({target}) => {
        setCurrentPage(0);
        setSearch(target.value);
    }

    return (
        <div className="mt-5">
            <nav className="navbar  bg-dark">
                <h1 style={{color: 'white'}}>HomePage</h1>
            </nav>
            
            <hr />
            <input 
                type="text"
                className="mb-3 form-control"
                placeholder="Search by name"
                value={search}
                onChange={onSearchChage}
            />
            <button className="btn btn-dark" onClick={prevPage}>
                Prev
            </button>
            &nbsp;
            <button className="btn btn-dark" onClick={nextPage}>
                Next
            </button>
            <table className="table">
                <thead>
                    <tr>                        
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quotes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredResult().map( character => (
                            <tr key={character.char_id}>
                                <th style={{width: 150}}>{character.name}</th>
                                <th>
                                    <img 
                                        src={character.img} 
                                        alt={character.name} 
                                        style={{width: 150, height: 150}}
                                    />
                                </th>
                                <th style={{width: 300}}>
                                    <AuthorsContainer nombre={character.name} />
                                </th>
                            </tr>                            
                        ))                        
                    }
                                                           
                </tbody>
            </table>            
        </div>
    )
}

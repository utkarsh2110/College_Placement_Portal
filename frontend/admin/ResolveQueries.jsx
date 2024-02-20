import './queries.css'
import { useEffect } from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize'
import { Button } from '@mui/material';
import { useState } from 'react';

export default function ResolveQueries() {

    const [queries, setQuery] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/queries", {
            method: "GET",
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp) => {
            if (!resp.ok) window.location = '/admin/login'
            resp.json().then((data) => {
                setQuery(data.queries)
            });

        })

    }, []);

    const displayQueries = () => {
        return queries.map((ele) => (
            <div className="query-card" key={ele._id}>
                <p className='query-text'> {ele.query}</p>
                <TextareaAutosize
                    maxRows={4}
                    minRows={4}
                    className='query-txtarea'
                    aria-label="maximum height"
                    placeholder="Answer to the query..."
                    id={ele._id}
                />
                <Button variant="contained" onClick={() => {
                    
                    fetch('http://localhost:3000/admin/queries', {
                        method: "POST",
                        body: JSON.stringify({
                            id: ele._id,
                            ans: document.getElementById(ele._id).value
    
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "bearer " + localStorage.getItem("token"),
                        }
                    }).then((resp) => {
                        if (resp.ok) window.location = '/admin/queries'
                        resp.json().then((data) => {
                        });
                    })

                }}  >Resolve QUERY</Button>
            </div>
        ));
    };

    return (
        <div className='main-query-container'>
            <h1 id='query-h1'>Queries</h1><br />
            <div className="queries">
                {displayQueries()}
            </div>
        </div>
    )
}
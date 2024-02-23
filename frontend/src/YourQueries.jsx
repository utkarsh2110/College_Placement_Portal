import './userQuery.css'
export default function YourQueries() {
    const storedQuery = JSON.parse(localStorage.getItem("query"));
    console.log(storedQuery)
    return (

        <div className="user-query-div">
            <h2 className='user-query-h1'>Your Queries</h2>
            <div className="user-grid">
                {storedQuery.map((element, index) => {
                    return (
                        <div className="user-query-template" key={index}>
                            <p className="user-query">{element.query.split("!@#anstoYourQuery")[0]}</p><br />
                            <p className="user-query-ans">ANS: {element.query.split("!@#anstoYourQuery")[1] || "YET TO BE RESOLVED"}</p>
                        </div>
                    )
                })
                }

            </div>








        </div>




    )
}
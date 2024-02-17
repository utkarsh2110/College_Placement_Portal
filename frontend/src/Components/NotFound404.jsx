import './NotFound404.css'

export default function NotFound404(){
    
    return(
        <div className="nf-404">


        <div className="nf-text">

            <h1 className='nf-tt'>404</h1>
            <p className='p-tt'>We're sorry, but the page you requested was not found.</p>
            <div>
                <button className='btn-404' onClick={()=>{window.location = '/'}}>Go Home</button>
                <button className='btn-404-2' onClick={()=>{window.location = '/contact'}}>Contact US</button>
            </div>
        </div>

        </div>
    )
}
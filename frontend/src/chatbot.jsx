import './chatbot.css'
import chabotIcon from './assets/chatbot.png'
import send from './assets/send.png'
import { useState } from 'react'

export default function Chatbot(){
const [chatbot, viewChatbot] = useState("none")

const view = ()=>{
    chatbot == "none"? viewChatbot("block"): viewChatbot("none");
}


return(
<>
<div className="chatbot" style={{display: chatbot}}>
    <div className="chatbox" id="chatbox">
        <div className="chatbot-titlebar">
            <nav className="chatbot-nav">
                <ul>
                    <li><img src={chabotIcon} height="35px" /></li>
                    <li id="placement-txt">Placement Pal</li>
                    <li className="btn-x" style={{cursor: "pointer"}}> x </li>
                </ul>
            </nav>
        </div>
        <div className="chatbot-text">

        </div>
        <div className="query-box">
            <input type="text" placeholder="Enter your query . . ." />
            <button><img src={send} width="20px" /></button>
        </div>
    </div>
</div>
 <button className='chatbot-button'><img src={chabotIcon} height="40px" style={{ cursor: "pointer" }} onClick={view}/></button>
 </>
)} 
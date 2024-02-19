import './chatbot.css'
import chabotIcon from './assets/chatbot.png'
import send from './assets/send.png'
import { useState } from 'react'
export default function Chatbot() {
    const [chatbot, viewChatbot] = useState("none")
    const [btnIcon, setbtnIcon] = useState(chabotIcon);
    const [overflow, setOverFlow] = useState("hidden")

    const view = () => {
        if (chatbot === "none") {
            viewChatbot("block")
        }
        else {
            viewChatbot("none");

        }
    }



    const location = window.location.pathname;

    if(!location.includes('/admin') && (location == '/home' ||location == '/cvbuilder' || location == '/preparation' || location == '/docs'))
    {
        return (
            <>
                <div className="chatbot" >
                    <div className="chatbox" id="chatbox" style={{ display: chatbot }}>
                        <div className="chatbot-titlebar">
                            <nav className="chatbot-nav">
                                <ul>
                                    <li className='nav-img'><img src={chabotIcon} height="40px" /></li>
                                    <li id="placement-txt">Placement Pal</li>
                                    <li className="btn-x" style={{ cursor: "pointer" }} onClick={view}> + </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="chatbot-text" style={{overflowY: overflow}}>
                            <p className='bot-text'>Hello 👋🏻 I am PlacementPal , How can I assist you today?</p>
                            <p className='user-text'>Hello</p>
                        </div>
                        <div className="query-box">
                            <input type="text" placeholder="Enter your query . . ." className='query-input' />
                            <button><img src={send} width="20px" /></button>
                        </div>
                    </div>
                </div>
                <button className='chatbot-button' onClick={view} ><img src={btnIcon} height="40px" style={{ cursor: "pointer", }}
                /></button>
            </>
        )
    
}}
import './chatbot.css'
import chabotIcon from './assets/chatbot.png'
import send from './assets/send.png'
import { useState } from 'react'
import down from './assets/down.svg'
export default function Chatbot() {
    const [chatbot, viewChatbot] = useState("none")
    const [btnIcon, setbtnIcon] = useState(chabotIcon);
    const [overflow, setOverFlow] = useState("scroll")
    const [prompt, setText] = useState("")
    const [reply, setReply] = useState (null)
    const view = () => {
        if (chatbot === "none") {
            viewChatbot("block")
            setbtnIcon(down)
        }
        else {
            viewChatbot("none");
            setbtnIcon(chabotIcon)
        }
    }
    // if(document.getElementById("pbox").childElementCount >=4){
    //     setOverFlow("scroll")
    // }
    



    const location = window.location.pathname;

    if (!location.includes('/admin') && (location == '/home' || location == '/cvbuilder' || location == '/preparation' || location == '/docs')) {
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
                        <div className="chatbot-text" id="pbox" style={{ overflowY: overflow }}>
                            <p className='bot-text'>Hello 👋🏻 I am PlacementPal , How can I assist you today?</p>
                            <p className='user-text'>Hello</p>
                            <p className='bot-text'>Hello 👋🏻 I am PlacementPal , How can I assist you today?</p>
                            <p className='user-text'>{prompt}</p>
                            <p className='bot-text'>{reply}</p>
                        </div>
                        <div className="query-box">
                            <input type="text" id="utext" placeholder="Enter your query . . ." className='query-input' onChange={(e) => { setText(e.target.value) }} />
                            <button><img src={send} width="20px" onClick={() => {
                                
                                if (prompt) {
                                    document.getElementById("utext").setAttribute("value", "");
                                    fetch('http://localhost:3000/chatbot', {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            prompt
                                        }),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    }).then((resp) => {
                                        resp.json().then(data => {
                                            if(data.reply){
                                                setReply(data.reply)
                                            }
                                        })
                                    })

                                }
                            }} /></button>
                        </div>
                    </div>
                </div>
                <button className='chatbot-button' style={{ zIndex: "50" }} onClick={view} ><img src={btnIcon} height="40px" style={{ cursor: "pointer", }} /></button>
            </>
        )

    }
}
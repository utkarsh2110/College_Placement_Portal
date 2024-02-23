import './chatbot.css'
import chabotIcon from './assets/chatbot.png'
import send from './assets/send.png'
import { useState } from 'react'
import down from './assets/down.svg'
import Avatar from "@mui/material/Avatar"
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
export default function Chatbot() {

    const [bottxt, setBotTxt] = useState(["Hello 👋🏻 I am PlacementPal , How can I assist you today?"])
    const [prompts, setPrompts] = useState([])

    const [msg, setMsg] = useState(null);


    const [chatbot, viewChatbot] = useState("none")

    const [btnIcon, setbtnIcon] = useState(chabotIcon);

    const [overflow, setOverFlow] = useState("scroll");

    const [disableBtn, setDisable] = useState(false);

    const [prompt, setText] = useState("")

    

   
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
   
    
    const chats = () => {
        const elements = [];
        const maxLength = Math.max(bottxt.length, prompts.length);
        for (let i = 0; i < maxLength; i++) {
            if (bottxt[i]) {
                elements.push(
                <div className='bot' key={`bot${i}`}>
                    <Avatar
                    sx={{bgcolor: "black", width: 24, height: 24, fontSize: 12}} 
                    src={chabotIcon}   
                    className='bot-avatar'
                    />
                    <p className='bot-text'>{bottxt[i]}</p>
                </div>
                );
            }
            if (prompts[i]) {
                elements.push(  
                    <div className='user' key={`user${i}`}>
                        <p className='user-text'>{prompts[i]}</p>
                        <Avatar
                        sx={{bgcolor: "black", width: 24, height: 24, fontSize: 12}} 
                        children={localStorage.getItem("init")}   
                        className='user-avatar'
                        />
                    </div>
                )
            }
        }
        return elements;
    }


    const location = window.location.pathname;

    if (!location.includes('/admin') && (location == '/home' || location == '/cvbuilder' || location == '/preparation' || location == '/docs'|| location == '/askAdmin' || location == '/faq' || location =='/queries')) {
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
                            {chats()}
                        </div>
                        <div className="query-box">
                            <input type="text" id="utext" placeholder="Enter your query . . ." value={msg} className='query-input' autoComplete='off' onChange={(e) => { setText(e.target.value) }} />
                            <button onClick={() => {
                                if (prompt) {
                                    setPrompts((prevValue) => [...prevValue, prompt]);
                                    setMsg("")
                                    setDisable(true)
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
                                                setBotTxt((prev)=>[...prev, data.reply])
                                                setMsg(null)
                                                setDisable(false)
                                            }
                                        })
                                    })

                                }
                            }} disabled={disableBtn}><img src={send} width="20px"  /></button>
                        </div>
                    </div>
                </div>
                <button className='chatbot-button' style={{ zIndex: "50" }} onClick={view} ><img src={btnIcon} height="40px" style={{ cursor: "pointer", }} /></button>
            </>
        )

    }
}
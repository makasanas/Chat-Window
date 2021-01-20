import React, { FunctionComponent, useContext, useState } from 'react';

import { ChatContext, Message } from '../../Context/ChatContext';

import './ChatBox.scss'

interface ChatBoxComponentProps { }

const ChatBox: FunctionComponent<ChatBoxComponentProps> = (props) => {
    const { sendMessage } = useContext(ChatContext);


    const [value, setValue] = useState<string>('')

    const handleChange = (value: string) => {
        setValue(value)
    }

    const handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
          clickSend();
        }
      }

    const clickSend = () => {
        const data: Message = {
            id: Math.floor((1 + Math.random()) * 0x1000000),
            messageText: value,
            type: 'send',
            timestamp: Date.now(),
            readType: 'delivered'
        }
        sendMessage(data)
        setValue('')
    }

    return (
        <div className="chat-header chat-box">
            <input className='chat-input' placeholder='Write Somthing...' value={value} onKeyDown={handleKeyDown} onChange={(e) => handleChange(e.target.value)} />
            <div className="chat-actions">
                <div className='search-item'>
                    <div className='icons'><i className="ri-emotion-happy-line"></i></div>
                </div>
                <div className='icons'><i className="ri-attachment-2"></i></div>
                <button className='btn' onClick={clickSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatBox;

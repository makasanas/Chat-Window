import React, { FunctionComponent, useState } from 'react';

import './ChatHeader.scss'

interface ChatHeaderComponentProps { }

const ChatHeader: FunctionComponent<ChatHeaderComponentProps> = (props) => {

    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const handleChange = (value: string) => {
        setValue(value)
    }

    const toggleSearch = () => {
        setIsSearch(!isSearch)
        setValue('')
    }

    return (
        <div className="chat-header">
            <div className="chat-name-info">
                <div className="name-letter">SM</div>
                <div className='chat-name'>
                    <p>Sanjay Makasana <br /><span>12 участников</span></p>
                </div>
            </div>
            <div className="chat-actions">
                <div className='search-item'>
                    <div className='icons' onClick={toggleSearch}><i className="ri-search-line"></i></div>
                    <input className={isSearch ? 'chat-input search-input' : 'chat-input'} placeholder='Search' value={value} onChange={(e) => handleChange(e.target.value)} />
                    {isSearch && <div className='icons' onClick={() => setValue('')}><i className="ri-close-line"></i></div>}
                </div>
                <div className='icons'><i className="ri-settings-3-line"></i></div>
            </div>
        </div>
    );
};

export default ChatHeader;

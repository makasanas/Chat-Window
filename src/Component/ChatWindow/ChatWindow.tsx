import React, { FunctionComponent, useContext, useEffect, useState } from 'react';

import { ChatContext, Message } from '../../Context/ChatContext';
import MessageItem from '../MessageItem/MessageItem';

import './ChatWindow.scss'

interface ChatWindowComponentProps { }

const ChatWindow: FunctionComponent<ChatWindowComponentProps> = (props) => {

    const { chatContextState } = useContext(ChatContext);

    const [chatWith, setChatWith] = useState<string>('');
    const [messageList, setMessageList] = useState<Message[]>([]);


    useEffect(() => {
        setChatWith(chatContextState.contactInfo.name)
        setMessageList(chatContextState.contactInfo.messages)
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [chatContextState])

    const getRepledMessage = (id: number): Message => {
        return messageList.find(message => message.id === id)!;
    }

    return (
        <div className="chat-window-content">
            {messageList.map((message, index) => (
                <div key={index}>
                    <MessageItem message={message} chatWith={chatWith} getRepledMessage={getRepledMessage} />
                </div>
            ))}

        </div>
    );
};

export default ChatWindow;

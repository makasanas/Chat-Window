import React, { FunctionComponent, useEffect, useState } from 'react';
import moment from "moment";

import './MessageItem.scss'
import { Message } from '../../Context/ChatContext';

interface MessageItemComponentProps {
    message: Message;
    chatWith: string;
    getRepledMessage: (id: number) => Message;
}

const MessageItem: FunctionComponent<MessageItemComponentProps> = (props) => {

    const [repliedMessage, setRepliedMessage] = useState<Message | null>(null)

    useEffect(() => {
        if (props.message.repliedId) {
            const messageData: Message = props.getRepledMessage(props.message.repliedId)
            setRepliedMessage(messageData)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.message])

    const formatTimestampToTimeOfDay = (timestamp: number) => {
        const a = moment.utc(timestamp).local();
        const b = a.clone().startOf("day");
        return formatTimeOfDay(a.diff(b, "seconds"));
    }

    const formatTimeOfDay = (timeOfDay: number) => {
        return moment.utc(timeOfDay * 1000).format("LT");
    }

    return (
        <div className={props.message.type === 'send' ? "message-info send" : "message-info"}>
            {props.message.type === 'receive' && <div className="name-letter">SM</div>}
            <div className='message-text'>
                {repliedMessage &&
                    <div className='replied-info'>
                        <p className='name'>Sanjay Makasana</p>
                        <p>{repliedMessage.messageText}</p>
                    </div>
                }
                <p>{props.message.messageText}</p>
                <div className='message-time'>{formatTimestampToTimeOfDay(props.message.timestamp)}
                    {props.message.readType &&
                        <div className={props.message.readType === 'read' ? 'icons read-icon' : 'icons'}>
                            {props.message.readType === 'read' ? <i className="ri-check-double-fill"></i> : <i className="ri-check-line"></i>}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MessageItem;

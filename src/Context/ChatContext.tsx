import React, { FunctionComponent } from "react";


const contactData: ContactInfo = {
    name: 'Sanjay Makasana',
    id: 190408090,
    messages: [
        {
            id: 19040870,
            messageText: 'Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.',
            type: 'receive',
            timestamp: 1611114659790,
        },
        {
            id: 190408089,
            messageText: 'Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.',
            type: 'send',
            timestamp: 1611118259983,
            repliedId: 19040870,
            readType: 'read'
        },
        {
            id: 190408090,
            messageText: 'Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.',
            type: 'receive',
            timestamp: 1611121859154,
        },
        {
            id: 190408090,
            messageText: 'Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.',
            type: 'send',
            timestamp: 1611121859235,
            readType: 'delivered'
        },

    ]
}

export interface Message {
    id: number;
    messageText: string;
    type: 'send' | 'receive';
    timestamp: number;
    repliedId?: number;
    readType?: 'delivered' | 'read';
    search?: boolean
}

export interface ContactInfo {
    name: string;
    id: number;
    messages: Message[];
}

export interface ChatContextState {
    isFetching: boolean;
    contactInfo: ContactInfo;
}

export interface ChatContextValue {
    chatContextState: ChatContextState;
    sendMessage: (data: Message) => void;
    searchMessage: (search: string) => void;
}

const initialState: ChatContextState = {
    isFetching: true,
    contactInfo: contactData,
};

const initialChatContextValue: ChatContextValue = {
    chatContextState: initialState,
    sendMessage: () => { },
    searchMessage: () => { },
};

const actions = {
    MESSAGE_SEND: "MESSAGE_SEND",
};

function reducer(
    state: ChatContextState,
    action: { type: string; payload?: any },
): ChatContextState {
    switch (action.type) {
        case actions.MESSAGE_SEND:
            return { ...state, contactInfo: action.payload };
        default:
            return state;
    }
}

export const ChatContext = React.createContext<ChatContextValue>(initialChatContextValue);

const ChatContextProvider: FunctionComponent = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const value = {
        chatContextState: state,
        sendMessage: async (data: Message) => {
            let contactData: ContactInfo = state.contactInfo;
            contactData.messages.push(data)
            dispatch({
                type: actions.MESSAGE_SEND,
                payload: contactData,
            });
        },
        searchMessage: async (search:string ) => {
            let contactData: ContactInfo = state.contactInfo;
            search = search.trim();
            if(search){
                contactData.messages.forEach((message:Message)=>{
                    if(message.messageText.includes(search)){
                        message.search = true;  
                    }else{
                        message.search = false;  
                    };
                });
            }else{
                contactData.messages.forEach((message:Message)=>{
                    message.search = false;  
                });
            }

            dispatch({
                type: actions.MESSAGE_SEND,
                payload: contactData,
            });
        },

    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;

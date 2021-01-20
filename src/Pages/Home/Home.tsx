import React, { FunctionComponent, Fragment } from 'react';
import ChatHeader from '../../Component/ChatHeader/ChatHeader';
import ChatWindow from '../../Component/ChatWindow/ChatWindow';
import ChatBox from '../../Component/ChatBox/ChatBox';

import './Home.scss';

interface HomeComponentProps { }

const Home: FunctionComponent<HomeComponentProps> = (props) => {
  return (
    <Fragment>
      <div className='chat-window'>
        <ChatHeader />
        <ChatWindow />
        <ChatBox />
      </div>
    </Fragment>
  );
};

export default Home;

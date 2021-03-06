import Menu from './lib/component/menu';
import MenuList from './lib/component/menuList';
import SubMenu from './lib/component/submenu';
import Template1 from './lib/component/template1';
import Template2 from './lib/component/template2';
import MiniSidebar from './lib/component/miniSidebar';

import Dashboard from './lib/component/assets/icons/dashboard.svg';
import Notification from './lib/component/assets/icons/notification.svg';
import SomeIcon from './lib/component/assets/icons/some-icon.svg';
import Avatar from './lib/component/assets/icons/avatar.svg';

import MentionBox from './lib/component/mentionBox';
import MentionContent from './lib/component/mentionContent';
import mentions from "./lib/component/assets/js/mentions"
import { useState } from 'react';
import MentionText from './lib/component/mentionText';

function App() {

  const [message, setMessage] = useState(MentionText())
  const [messageList, setMessageList] = useState([])

  const onMentionBoxChangeHandler = (editorState, mentionedUsers) => {
    setMessage(editorState)
  }

  const sendMessageHandler = () => {
    const msgList = [...messageList, message]
    setMessageList(msgList)
    setMessage(MentionText())
  }

  const messageListUI = () => {
    let msgListUI = []
    for (let i = 0; i < messageList.length; i++) {
      const el = messageList[i];
      msgListUI.push(
        <MentionContent key={i} content={el} />
      )
    }

    return msgListUI
  }

  return (
    <div className="App">
      <Template1
        miniSidebar={
          <MiniSidebar>
            <a href="/">
              <img src={Dashboard} alt="Dashboard" width="45px" style={{ margin: '10px' }} />
            </a>
            <a href="/notification">
              <img src={Notification} alt="Notification" width="45px" style={{ margin: '10px' }} />
            </a>
            <a href="/some-icon">
              <img src={SomeIcon} alt="" width="45px" style={{ margin: '10px' }} />
            </a>
          </MiniSidebar>
        }

        profile={
          <a href="/some-icon">
              <img src={Avatar} alt="avatar" />
          </a>
        }

        module={[
          {
            title: "Penjualan",
            url: "/sales"
          },
          {
            title: "Pengadaan",
            url: "/pengadaan"
          }
        ]}

        mainSidebar={
          <MenuList>
            <Menu url="/" content={
              <a href="/">Inquiry</a>
            } />
            <Menu url="/sample-1" content={
              <a href="/sample-1">Quotation</a>
            } />
            <Menu url="#" content={
              <a href="#">Purchase Order</a>
            }>
              <SubMenu url="/okoko/submenu-1">
                <a href='/okoko/submenu-1'>
                  Submenu 1
                </a>
              </SubMenu>
              <SubMenu url="/okoko/submenu-2">
                <a href='/okoko/submenu-2'>
                  Submenu 2
                </a>
              </SubMenu>
            </Menu>
          </MenuList>
        }

        content={
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Vertical Layout with Navbar</h3>
                  <p className="text-subtitle text-muted">Navbar will appear in top of the page.</p>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first">
                  <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Layout Vertical Navbar
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Example Content</h4>
                </div>
                <div className="card-body">
                  { messageListUI() }
                  
                  <MentionBox 
                    value={message}
                    suggestionData={mentions}
                    onChange={(editorState, mentionedUsers) => onMentionBoxChangeHandler(editorState, mentionedUsers)}
                  />
                  <button onClick={sendMessageHandler}>Send</button>
                </div>
              </div>
            </section>
          </div>
        }
      />
    </div>
  );
}

export default App;

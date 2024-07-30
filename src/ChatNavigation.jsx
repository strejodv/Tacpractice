import Profile from './assets/Profile.jpg'



function ChatNavigation () {
  

    return (
    <>  
    <div className="top-content">
        <h4>TacPractice</h4>
        <nav className="nav-whole">
            <ul className="nav-items">
                <span>More Info</span>
                Help
                <button>What is non-vilence communication?</button>
            </ul>
            <p className="profile-pic-name">The future user</p>
            <img  className="profile-img" src={Profile}></img>
        </nav>
    </div>
    <div className="chat-wrapper">
        <div className="wrapper-content">
            <div className="menu-chat">
                <h1>TAC Trainer</h1>
                <button className="start-button">Start Practice Section</button>
            </div>
            <div >
            <p></p>
            </div>
        </div>
    </div>
    </>
    )
  }
  
  export default ChatNavigation
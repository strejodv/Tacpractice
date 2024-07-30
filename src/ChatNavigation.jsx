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
            <h1>Stefano Trejo</h1>
        </div>
    </div>
    </>
    )
  }
  
  export default ChatNavigation
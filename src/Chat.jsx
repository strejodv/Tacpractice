import Profile from './assets/Profile.jpg'



function ChatPage () {
  

    return (
    <>  
    <div className="top-content">
        <h4>TacPractice</h4>
        <nav>
            <ul className="nav-items">
                <span>More Info</span>
                Help
                <button>What is non-vilence communication?</button>
                <p className="profile-pic-name">Stefano T</p>
                <img  className="profile-img" src={Profile}></img>
            </ul>
            
        </nav>
    </div>
    </>
    )
  }
  
  export default ChatPage
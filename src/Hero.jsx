import Pet from './assets/Pet.png';


function HeroSection () {
  

    return (
    <>  
    <nav className="hero-nav">
        <h3>TACPractice</h3>
    </nav>
    <div className="hero-section">
        <div className="left-section">
            <h1>Enhance Your Communication Skills With AI</h1>
                <div>
                    <button>Start</button><button>More Info</button>
                </div>
                    <input className="username-input" input type="text" placeholder="Please type your name and press 'Start'" id="username" name="username" required></input>
                        <p>Non-violent Communication Training for Future Police Officers</p>
        </div>
                <div className="hero-pet">
                    <img  className="hero-pet" src={Pet}></img>
                </div>
    </div>
    <footer><p className="hero-footer">StefanoTrejo made by</p></footer>
    </>
    )
  }
  
  export default HeroSection
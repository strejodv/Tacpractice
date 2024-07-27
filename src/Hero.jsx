import Pet from './assets/Pet.png';


function HeroSection () {
  

    return (
    <>  
    <nav className="hero-nav">
        <p><b>TAC</b>Practice</p>
    </nav>
    <div className="hero-section">
        <div className="left-section">
            <h1>Improve Your <br></br>Dialogue with AI</h1>
                <div>
                        <input className="username-input" input type="text" placeholder="Please type your name and press '' Star ''." id="username" name="username" required></input>
                </div>
                        <button>Start</button><button>More info</button>
                        <p>Discover the power of non-violent communication in our <br></br>training for future police officers—and anyone passionate <br></br>about fostering understanding and peace!</p>
        </div>
                <div className="pet-div">
                    <img  className="hero-pet" src={Pet}></img>
                </div>
    </div>
    </>
    )
  }
  
  export default HeroSection
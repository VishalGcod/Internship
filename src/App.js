import logo from './logo.svg';
import './App.css';
import Img from './YouTube-Logo.wine.png'
import Img2 from './dropdown.png'
import Img3 from './login.png'
function App() {
  return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className="header">
            <div className="sub-drop"><i class="fa-solid fa-bars"></i></div>
            <div className="head-logo"><img src={Img} alt="ytb-logo"></img></div>
            <div className="head-search">
              <input type="search" placeholder='search'></input>
              <button>search</button>
              </div>
            <div className="v-search">voice search</div>
            <div className="rec-vid">record video</div>
            <div className="vid-notify">notification</div>
            <div className="acc-login"><i class="fa fa-user"></i></div>
          </div>
          <div className="sub-header">
            <div className="sub-all">all</div>
            <div className="sub-music">music</div>
            <div className="sub-games">games</div>
            <div className="sub-sports">sports</div>
            <div className="sub-funny">funny</div>
            <div className="sub-cats">cats</div>
            <div className="sub-horror">horror</div>
          </div>
          <div className="left-nav">
            <div>home</div>
            <div>shorts</div>
            <div>subscriptions</div>
            <div>______________</div>
            <div>library</div>
            <div>history</div>
            <div>watch later</div>
            <div>liked videos</div>
            <div>______________</div>
            <div>music</div>
            <div>sport</div>
            <div>gaming</div>
            <div>movies</div>
          </div>
         
          <div className="grid-columns">
            <div className='f-grid'>first grid</div>
            <div className='s-grid'>second grid</div>
            <div className='t-grid'>third grid</div>
          </div>
          <div className="grid-columns2">
            <div className='f-grid2'>first grid</div>
            <div className='s-grid2'>second grid</div>
            <div className='t-grid2'>third grid</div>
          </div>

      </div>
  );
}

export default App;

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <>
      <header className="navbar fixed-top">
        <div className="left">
          <span className="navbar-brand" href="#">
            WIX
          </span>
          <span className="nav-link">
            <i class="fa-solid fa-tv"></i>
          </span>
          <span className="nav-link">
            <i className="fa-solid fa-mobile-screen"></i>
          </span>
        </div>
        <div className="right">
          <span>Нажмите Редактировать, чтобы создать ваш сайт!</span>
          <span className="nav-link">Подробнее</span>
          <button className="btn btn-primary">Редактировать</button>
        </div>
      </header>

      <div className="icons">
        <p className="twitter">
          <i className="fa-brands fa-twitter "></i>
        </p>
        <p className="facebook">
          <i className="fa-brands fa-facebook-f "></i>
        </p>
      </div>

      <div className="heroNavbar">
        <div className="navbar">
          <h2 className="title">K. Griffith</h2>
          <ul className="list">
            <li className="item">Appearances</li>
            <li className="item">books</li>
            <li className="item">news</li>
            <li className="item">about</li>
            <li className="item">contact</li>
          </ul>
        </div>
        <hr />
      </div>

      <div className="avatar">
        <img src={img2} alt="avatar-img" />
        <div className="avatar-info">
          <h2 className="avatar-title">Kayla Griffith</h2>
          <p className="avatar-subtitle">Award Winning Author</p>
        </div>
      </div>

      <div className="bg-swen">
        <div className="section-swen">
          <div className="info">
            <span className="toptitle">New Release</span>
            <h3 className="title">The Swan Isle (2023)</h3>
            <p className="text">
              "I'm a paragraph. Click here to add your own text and edit me.
              It's easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. I'm a great place for
              you to tell a story and let your users know a little more about
              you."
            </p>
            <p className="subtitle">Order Now</p>
            <ul className="list">
              <li className="item">Amazon</li>
              <li className="item">Google</li>
              <li className="item">iBooks</li>
            </ul>
          </div>
          <img src={img1} alt="img1" className="swen-img" />
        </div>
      </div>

      <div className="section-praise">
        <h2 className="title">Praise & Reviews</h2>
        <ul className="list">
          <li className="item">
            <span class="handle">
              <i className="fa-solid fa-quote-left"></i>
            </span>
            <p className="text">
              "I'm a paragraph. Click here to add your own text and edit me.
              It's easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. I'm a great place for
              you to tell a story and let your users know a little more about
              you."
            </p>
            <p className="subtitle">
              'Swan Isle' is Griffith's best writing yet” The Times Book Review
            </p>
          </li>
          <li className="item">
            <span class="handle">
              <i className="fa-solid fa-quote-left"></i>
            </span>
            <p className="text">
              "I'm a paragraph. Click here to add your own text and edit me.
              It's easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. I'm a great place for
              you to tell a story and let your users know a little more about
              you."
            </p>
            <p className="subtitle">
              'Swan Isle' is Griffith's best writing yet” The Times Book Review
            </p>
          </li>
          <li className="item">
            <span class="handle">
              <i className="fa-solid fa-quote-left"></i>
            </span>
            <p className="text">
              "I'm a paragraph. Click here to add your own text and edit me.
              It's easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. I'm a great place for
              you to tell a story and let your users know a little more about
              you."
            </p>
            <p className="subtitle">
              'Swan Isle' is Griffith's best writing yet” The Times Book Review
            </p>
          </li>
        </ul>
      </div>

      <div className="section-see">
        <h2 className="title">See Upcoming Appearances</h2>
        <p className="description">
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy.
        </p>
        <ul className="list">
          <li className="item">
            <p class="text">
              "January 18th 2023, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST"
            </p>
            <button className="join">join</button>
          </li>
          <li className="item">
            <p class="text">
              "January 18th 2023, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST"
            </p>
            <button className="join">join</button>
          </li>
          <li className="item">
            <p class="text">
              "January 18th 2023, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST"
            </p>
            <button className="join">join</button>
          </li>
        </ul>
        <div className="about">
          <img src={img3} alt="img" className="avatar-img" />
          <h2 className="title">About Kayla Griffith</h2>
          <p class="text">
            "I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I'm a great place for you to
            tell a story and let your users know a little more about you."
          </p>
          <button className="read">Read More</button>
        </div>
        <p className="footer">
          © 2023 by K.Griffith. Proudly created with Wix.com
        </p>
      </div>
    </>
  );
}

export default App;

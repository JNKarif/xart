import "./App.css";
import video from "./assets/Video/homepage_video.mp4";
import logo from "./assets/Logo/X ART LOGO.png";
import aboutPic from "./assets/About pictures/about.jpeg";
import posterPic from "./assets/About pictures/poster.png";

function App() {
  return (
    <div>
      <div
        className="navbar py-4 backdrop-opacity-20 backdrop-invert fixed top-0 w-full "
        style={{ backgroundColor: "transparent" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 ">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="w-20 ml-40">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mr-40">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>Design</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>

      <div className="w-3/4 h-1/5 mx-auto">
        <video src={video} autoPlay muted loop></video>
      </div>

      <div className="w-3/4 mx-auto">
        <div class="grid grid-cols-10 gap-4">
          <div class="col-span-7">
            <img src={aboutPic} alt="Image 1" className="h-3/5" />
          </div>
          <div class="col-span-3">
            <img src={posterPic} alt="Image 2" className="h-3/5" />
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto">
        <p>
          招聘 名稱:區議會活動-臨時幹事(已結束招聘) 要求:大 專 學 歷 以 上， 須
          熟 悉 舉 辦活動。
          <br />
          工作時數:80小時(11/2020-1/2021) 時薪:$120 地點:北區
          有意者請把資料電郵至xartlimited@xartlimited.com
        </p>
      </div>
    </div>
  );
}

export default App;

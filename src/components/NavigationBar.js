import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../logos/Logo.svg";
import { ReactComponent as Community } from "../logos/icon-communities.svg";
import { ReactComponent as History } from "../logos/icon-history.svg";
import { ReactComponent as Home } from "../logos/icon-home.svg";
import { ReactComponent as Msg } from "../logos/icon-msg.svg";
import { ReactComponent as Privacy } from "../logos/icon-privacy.svg";
import { ReactComponent as Profile } from "../logos/icon-profile.svg";
import { ReactComponent as Setting } from "../logos/icon-setting.svg";
import { ReactComponent as Support } from "../logos/icon-support.svg";
import { ReactComponent as Task } from "../logos/icon-tasks.svg";
import { ReactComponent as Pencil } from "../logos/pencil-svgrepo-com.svg";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <aside className="w-60 h-full fixed z-10 left-0 sm:top-0 overflow-x-hidden bg-gradient-to-b from-gradient-purple to-gradient-blue p-5 text-white font-bold  ">
        <div className="block">
          <div className="flex w-full h-[20%] items-center justify-center mb-5">
            <Logo />
            <span className="text-3xl ml-2">
              Seneca<br></br> Community
            </span>
          </div>
          <nav className="w-full flex-none h-[50%] text-2xl">
            <ul className="flex flex-col space-y-5">
              <li>
                <a
                  href="#"
                  className="flex flex-row space-x-5 items-center w-full"
                >
                  <Home />
                  <Link to="/Main">Home</Link>
                </a>
              </li>
              {user && (
                <li>
                  <a
                    href="#"
                    className="flex flex-row space-x-5 items-center w-full"
                  >
                    <Profile />
                    <Link to="/profile">Profile</Link>
                  </a>
                </li>
              )}

              <li>
                <a
                  href="#"
                  className="flex flex-row space-x-5 items-center w-full"
                >
                  <Msg />
                  <Link to="/communityForums">Community Forum</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row space-x-5 items-center w-full"
                >
                  <History />
                  <Link to="/fleaMarkets">Flea Market</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row space-x-5 items-center w-full"
                >
                  <Community />
                  <Link to="/roommateFindForum">Find Roommates</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row space-x-5 items-center w-full"
                >
                  <Task />
                  <Link to="/jobForums">Job Forum</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row space-x-5 items-center w-full"
                >
                  <Pencil />
                  <Link to="/educationalMaterials">Educational Material</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row space-x-5 items-center w-full"
                >
                  <Task />
                  <Link to="/lectureEvaluations">Lecture Evaluation</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row space-x-5 items-center w-full"
                >
                  <Msg />
                  <Link to="/chat">Chat</Link>
                </a>
              </li>
            </ul>
          </nav>

          <nav className="w-full mt-24 flex flex-col space-y-3 text-2xl">
            <a href="#" className="flex flex-row space-x-5 items-center w-full">
              <Setting />
              <span>Setting</span>
            </a>
            <a href="#" className="flex flex-row space-x-5 items-center w-full">
              <Support />
              <span>Support</span>
            </a>
            <a href="#" className="flex flex-row space-x-5 items-center w-full">
              <Privacy />
              <span>Privacy</span>
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default NavigationBar;

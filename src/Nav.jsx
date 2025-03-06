import { useState } from 'react';

const navOptions = {
  "About Me": "about_me",
  "Project": "project",
  "Resume": "resume",
};

const navLinks = {
  linked_in: {
    name: "Linked In",
    key: "linked_in",
    url: "https://www.linkedin.com/in/natalia-linn"
  },
  github: {
    name: "GitHub",
    key: "github",
    url: "https://github.com/yoitsnatalia"
  }
}

function Nav(props) {
    const [navSelect, setNavSelect] = useState("");

    // keep track of which nav option is active
    const getNavSelectClass = (navOption) => {
      return navSelect === navOption ? "m-5 italic underline cursor-pointer" : "m-5 hover:italic hover:underline cursor-pointer";
    }

    return (
        <div className="flex flex-col relative justify-center items-center text-5xl text-orange-100">
          <ul className="text-center">
            {/* Nav Options */}
            {Object.keys(navOptions).map(option => (
              <li className={getNavSelectClass(navOptions[option])} key={navOptions[option]} onClick={() => setNavSelect(navOptions[option])}>{option}</li>
            ))}
            {/* Nav External Links */}
            {Object.keys(navLinks).map(link => (
              <li className="m-5 cursor-pointer text-cyan-100 hover:italic hover:underline" key={navLinks[link]['key']}><a href={navLinks[link]['url']} target="_blank" rel="noopener noreferrer">{navLinks[link]['name']}</a></li>
            ))}
          </ul>
        </div>
    )
}

export default Nav;
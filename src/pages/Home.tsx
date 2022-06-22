import React, { useContext } from "react";
import { Title, Description, Electron } from "components/";
import { ContextApp } from "stateManager/store";
import { useResizeWindow } from "hooks/useResizeWindow";
import { checkMedia } from "utils/checkMedia";
import { TABLET_MEDIA } from "const";

const Home: React.FC = () => {
  const {
    state: { isRu, isLight, width },
  } = useContext(ContextApp);
  useResizeWindow();
  return (
    <>
      <div className="wrapper-home">
        <div className="wrapper-home__intro">
          <Title lang={isRu} />
          <Description lang={isRu} />
          <ul className="home__list">
            <li className="home__list-item">
              <a
                href="https://blog.maksim-semenov.ru/"
                className="home__list-link"
                title="Blog"
                target="_blank"
                rel="noreferrer"
              >
                {isRu ? "Портфолио" : "Portfolio"}
              </a>
            </li>
            <li className="home__list-item">
              <a
                href="https://www.codewars.com/users/percuciat"
                className="home__list-link"
                target="_blank"
                rel="noopener noreferrer"
                title="CodeWars"
              >
                CodeWars
              </a>
            </li>
            <li className="home__list-item">
              <a
                href="mailto:zerob.rob@yandex.ru"
                className="home__list-link"
                title="E-mail"
              >
                E-mail
              </a>
            </li>
          </ul>
        </div>
        {checkMedia(width, TABLET_MEDIA.name) && <Electron theme={isLight} />}
      </div>
    </>
  );
};

export default Home;

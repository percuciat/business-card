import React, { useContext } from 'react';
import Title from "../components/Title";
import Description from "../components/Description";
import Electron from "../components/Electron";
import Canvas from "../components/Canvas";
import { ContextApp } from "../stateManager/store";

type DrawComponentProps = {
    ctx: any;
    fillStyle: string;
    beginPath(): object;
    arc(...numberArray: number[]): number;
    fill(): object;
    width : number | string;
    height : number | string;
    canvas: any;
    clearRect(...numberArray: number[]): number
}

const Home: React.FC = () => {

    const draw = (ctx: DrawComponentProps, frameC: number ) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(50, 100, 20*Math.sin(frameC*0.05)**2, 0, 2*Math.PI);
        ctx.fill();
    };

    const width = window.matchMedia("(min-width: 767px)");

    const {state: {isRu, isLight}} = useContext(ContextApp);

    return <>
        <div className="wrapper-home">
            <div className="wrapper-home__intro">
                <Title lang={isRu}/>
                <Description lang={isRu}/>
                <ul className="home__list">
                    <li className="home__list-item">
                        <a href="https://web-semenov.netlify.app/" className="home__list-link" title="Blog" target="_blank" rel="noreferrer">
                            {
                                isRu ? 'Мой блог' : 'My blog'
                            }
                        </a>
                    </li>
                    <li className="home__list-item">
                        <a href="https://www.codewars.com/users/percuciat" className="home__list-link" target="_blank" rel="noopener noreferrer" title="CodeWars">CodeWars</a>
                    </li>
                    <li className="home__list-item">
                        <a href="mailto:zerob.rob@yandex.ru" className="home__list-link" title="E-mail">E-mail</a>
                    </li>
                </ul>
            </div>
            {
                    width.matches
                        ? <Electron theme={isLight}/>
                        : <></>
            }
        </div>
        {/*<Canvas draw={draw}/>*/}
    </>
};



export default Home;

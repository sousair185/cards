import './App.css'

import angular from "./assets/angular-logo.svg"
import js from "./assets/js-logo.svg"
import node from "./assets/node-logo.svg"
import reactlogo from "./assets/react-logo.svg"
import ts from "./assets/ts-logo.svg"
import vue from "./assets/vue-logo.svg"

const angulartxt = "Angular é uma plataforma e um conjunto de ferramentas para construir aplicativos usando HTML, CSS e principalmente JavaScript. Ele foi criado pelos desenvolvedores do Google e tem alguns elementos básicos que tornam a construção de aplicativos interessante. É como se fosse um conjunto de blocos de construção que ajudam a criar aplicativos legais e divertidos! 😊"
const jstxt = "JavaScript é uma linguagem de programação que permite que você crie coisas legais e interativas em sites. É como se fosse uma caixa de ferramentas que ajuda a construir coisas divertidas e interessantes na internet. Por exemplo, quando você clica em um botão em um site e algo acontece, é provável que o JavaScript esteja por trás disso. 😊"
const nodetxt = "Node.js é um ambiente de execução JavaScript que permite que você execute aplicativos desenvolvidos com a linguagem de forma autônoma, sem depender de um navegador. Com ele, é possível criar praticamente qualquer tipo de aplicação web, desde servidores para sites estáticos e dinâmicos, até APIs e sistemas baseados em microserviços. É como se fosse uma caixa de ferramentas que ajuda a construir coisas legais e interessantes na internet, mas sem precisar de um navegador para isso. 😊"
const reacttxt = "React é uma biblioteca JavaScript criada pelo Facebook em 2011 para desenvolver interfaces de usuário (UIs). É como se fosse uma caixa de ferramentas que ajuda a construir coisas legais e interessantes na internet, mas especificamente para criar a parte que o usuário vê e interage em um aplicativo. 😊"
const tstxt = "TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem. É como se fosse uma caixa de ferramentas que ajuda a construir coisas legais e interessantes na internet, mas com algumas ferramentas extras que tornam o trabalho mais fácil. 😊"
const vuetxt = "Vue é um framework JavaScript open source criado em 2014 por Evan You para desenvolver interfaces de usuário (UIs). É como se fosse uma caixa de ferramentas que ajuda a construir coisas legais e interessantes na internet, mas especificamente para criar a parte que o usuário vê e interage em um aplicativo. 😊"

function App() {
 
  return (
    <>
     <div className="centralizar">
        <div className='box'>
        <div className='circulo'>
          <div className='text'>
            <h1>Angular</h1>
            <p>{angulartxt}</p>
            <a href="#" className="btn">Saiba Mais</a>
          </div>
        </div>
          <img src={angular} alt=''/>
        </div>
        <div className='box'>
        <div className='circulo'>
          <div className='text'>
            <h1>JavaScript</h1>
            <p>{jstxt}</p>
            <a href="#" className="btn">Saiba Mais</a>
          </div>
        </div>
          <img src={js} alt=''/>
        </div>
        <div className='box'>
        <div className='circulo'>
          <div className='text'>
            <h1>NodeJs</h1>
            <p>{nodetxt}</p>
            <a href="#" className="btn">Saiba Mais</a>
          </div>
        </div>
          <img src={node} alt=''/>
        </div>
        <div className='box'>
        <div className='circulo'>
          <div className='text'>
            <h1>React</h1>
            <p>{reacttxt}</p>
            <a href="#" className="btn">Saiba Mais</a>
          </div>
        </div>
          <img src={reactlogo} alt=''/>
        </div>
        <div className='box'>
        <div className='circulo'>
          <div className='text'>
            <h1>TypeScript</h1>
            <p>{tstxt}</p>
            <a href="#" className="btn">Saiba Mais</a>
          </div>
        </div>
          <img src={ts} alt=''/>
        </div>
        <div className='box'>
        <div className='circulo'>
          <div className='text'>
            <h1>Vue</h1>
            <p>{vuetxt}</p>
            <a href="#" className="btn">Saiba Mais</a>
          </div>
        </div>
          <img src={vue} alt=''/>
        </div>
    </div>
    </>
  )
}

export default App

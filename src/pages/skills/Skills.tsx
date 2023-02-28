//Styles
import './Skills.css'
//Icons 
import jsIcon from '../../assets/png/jc-icon.png'
import tsIcon from '../../assets/png/type-icon.png'
import htmlIcon from '../../assets/png/html-icon.png'
import cssIcon from '../../assets/png/css-icon.png'
import reactIcon from '../../assets/png/react-icon.png'
import reduxIcon from '../../assets/png/redux-icon.png'
import angularIcon from '../../assets/png/angular-icon.png'
import expressIcon from '../../assets/png/express-icon.png'
import nodeIcon from '../../assets/png/node-icon.png'
import sqlIcon from '../../assets/png/sql-icon.png'
import phIcon from '../../assets/png/ph-icon.png'
import productImage from '../../assets/png/produc-image.png'
import ideaImage from '../../assets/png/idea-image.png'
import feedbackImage from '../../assets/png/feedback-image.png'

const Skills = () => {

    return(
        <div className="about__me flex flex-col lg:flex-row items-center p-0 lg:p-3" id="habilidades">

            <ul className="habilidades-containers flex flex-col gap-2 sm:w-2/6 items-center">
                <li>
                    <span className="techs-title animate-pulse">Tecnologias:</span>
                </li>
                <li className="techs-containers javascript">
                    <img className="techs-icon" alt="javascrip-icon" src={jsIcon}/>
                    <span>Javascript</span>
                </li>
                <li className="techs-containers typescript">
                    <img className="techs-icon" alt="typescript-icon" src={tsIcon}/>
                    <span>TypeScript</span>
                </li>
                <li className="techs-containers html-">
                     <img className="techs-icon" alt="html-icon" src={htmlIcon}/>
                    <span>HTML</span>
                </li>
    
                <li className="techs-containers css-">
                    <img className="techs-icon" alt="html-icon" src={cssIcon}/>
                    <span>CSS</span>
                </li>
                <li className="techs-containers react">
                    <img className="techs-icon" alt="react-icon" src={reactIcon}/>
                    <span>React</span>
                </li>
                <li className="techs-containers redux">
                    <img className="techs-icon" alt="redux-icon" src={reduxIcon}/>
                    <span>Redux</span>
                </li>
                <li className="techs-containers angular">
                    <img className="techs-icon" alt="angular-icon" src={angularIcon}/>
                    <span>Angular</span>
                </li>
    
                <li className="techs-containers express">
                    <img className="techs-icon" alt="express-icon" src={expressIcon}/>
                    <span>Express</span>
                </li>
                <li className="techs-containers node">
                    <img className="techs-icon" alt="express-icon" src={nodeIcon}/>
                    <span>Node</span>
                </li>

                <li className="techs-containers sql">
                    <img className="techs-icon" alt="sql-icon" src={sqlIcon}/>
                    <span>SQL</span>
                </li>
                <span className="techs-subtitle animate-pulse">
                     Software
                </span>
                <li className="techs-containers ph-">
                    <img className="techs-icon h-8 h-8" alt="sql-icon" src={phIcon}/>
                    <span className="relative right-5">Photoshop</span>
                </li>
            </ul>

            <div className="habilidades-containers w-full">
                            
                <span className="habilidades__title animate-pulse">Habilidades</span>

                <div className=" flex flex-row w-full items-center text-start">
                    <img alt="idea-image" className="idea-image" src={productImage}/>
                    <span className="w-96 text-sm lg:text-2xl habilidades-text">Capacidad de encarar proyectos sin necesidad de una constante supervisión. Trabajo cumpliento fechas de entregas y features del proyecto.</span>
                </div>

                <div className="flex flex-row w-full items-center text-end justify-end">
                    <span className="w-96 text-sm lg:text-2xl habilidades-text">Aportar ideas frescas que puedan mejorar tiempos, costos o algun otro ámbito de producción</span>
                    <img  alt="idea-image" className="idea-image" src={ideaImage}/>
                </div>
                <div className="flex flex-row w-full items-center">
                    <img alt="idea-image" className="idea-image" src={feedbackImage}/>
                    <span className="w-96 text-sm lg:text-2xl habilidades-text">Acostumbrado a trabajar con feedback para mejorar en lo que sea posible mejorar.</span>
                </div>
            </div>
                        
        </div>      
    )
}


export default Skills;
//Styles
import './formation.css'
//Icons
import iicoIcon from '../../assets/png/iico-icon.png'
import henryIcon from '../../assets/png/henry-icon.png'
import openEnglishIcon from '../../assets/png/open-english-icon.png'
import clanFestIcon from '../../assets/png/clan-fest-icon.png'
import betterIcon from '../../assets/png/better-icon.png'
import gitIcon from '../../assets/png/git-icon.png'
import visitIcon from '../../assets/png/visit-icon.png'
import linkedinIcon from '../../assets/png/linkedin-icon.png'

const Formation = () => {

    return(
        <div className="flex flex-col lg:flex-row  justify-start p-3 h-full w-full" id="formacion">

                
        <div className="w-full lg:w-1/3 flex flex-col items-center px-4">
            <span className="formacion-title animate-pulse">Formación</span>

            <div className="formation-card iico h-64 flex flex-row p-6 mb-5 transition-all">
                <div className="w-1/3 flex items-center justify-center">
                    <img alt="secundaria-icon" src={iicoIcon} className="w-32 h-18"/>
                </div>
                
                <div className="formation__card__texts flex flex-col w-2/3 justify-center">
                    <span className="formacion-subtitle">INSTITUTO INDUSTRIAL CRISTO OBRERO</span>
                    <span>Título: <span className="formacion-highlight">Tecnico Electromecánico</span></span>
                    <span>Especializado en dibujo técnico, ingenieria, diseño y producción.</span>
                    <span className="formacion-highlight">Enero 2009 - Noviembre 2016</span>
                </div>
            </div>

            <div className="formation-card henry h-64 flex flex-row p-6 mb-5 transition-all">
                <div className="w-1/3 flex items-center justify-center">
                    <img alt="bootcamp-icon" src={henryIcon} className="w-32 h-18"/>
                </div>
                
                <div className="formation__card__texts flex flex-col w-2/3 justify-center">
                    <span className="formacion-subtitle">Henry Bootcamp</span>
                    <span>Título: <span className="formacion-highlight">FullStack Developer</span></span>
                    <span>Especializado en HTML CSS REACT NODE EXPRESS SQL Metodologias agiles, trabajo en equipo.</span>
                    <span className="formacion-highlight">Junio 2021 - Octubre 2021</span>
                </div>
            </div>

            <div className="formation-card open-english h-64 flex flex-row p-6 transition-all">
                <div className="w-1/3 flex items-center justify-center">
                    <img alt="open-english-icon" src={openEnglishIcon} className="w-32 h-18"/>
                </div>
                
                <div className="formation__card__texts flex flex-col w-2/3 justify-center">
                    <span className="formacion-subtitle">Clases Open English</span>
                    <span>Especializado en ingles conversacional, gramática y pronunciación.</span>
                    <span className="formacion-highlight">Enero 2022 - Actualidad</span>
                </div>
            </div>

        </div>

        <div className="w-full lg:w-2/3  flex flex-col items-center px-4">
            <span className="formacion-title animate-pulse">Experiencia</span>

            <div className="formation-card clan-fest flex flex-row p-6 transition-all mb-5">
                <div className="w-1/3 flex items-center justify-center">
                    <img alt="clan-fest-icon" src={clanFestIcon} className="w-48 h-18"/>
                </div>
                
                <div className="formation__card__texts flex flex-col w-2/3 justify-center">
                    <span className="formacion-subtitle">Proyecto académico ClanFest</span>
                    <span>Proyecto grupal realizado por medio de metodologías ágiles, que consta en una plataforma web para crear, localizar, adquirir y vender entradas a eventos</span>
                    <span><span className="formacion-highlight">Tecnologias:</span> Typescript / React / Redux / NodeJS / Express / MongoDB / Mongoose / Socket.io</span>
                    <span>Agosto 2021 - Septiembre 2021</span>
                    <div className="flex flex-row gap-2">
                        <div className="formation-button" onClick={()=> window.open("https://jolly-booth-281355.netlify.app/", "_blank")}>
                            <img alt="visit-icon" className="w-5 h-5" src={visitIcon}/>
                            <span>Visitar</span>
                        </div>
                        <div className="formation-button" onClick={()=> window.open("https://github.com/NaniBM/ClanFest-API", "_blank")}>
                            <img alt="git-icon" className="w-5 h-5 ml-2" src={gitIcon}/>
                            <span>Backend</span>
                        </div>
                        <div className="formation-button" onClick={()=> window.open("https://github.com/christopherBryan1996/PF", "_blank")}>
                            <img alt="git-icon" className="w-5 h-5 mr.2" src={gitIcon}/>
                            <span>FrontEnd</span>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className="formation-card clan-fest flex flex-row p-6 transition-all">
                <div className="w-1/3 flex items-center justify-center">
                    <img alt="clan-fest-icon" src={betterIcon} className="w-48 h-18"/>
                </div>

                <div className="formation__card__texts flex flex-col w-2/3 justify-center">
                    <span className="formacion-subtitle">FrontEnd Developer</span>
                    <span>-Desarrollar y editar Landing Pages</span>
                    <span>-Desarrollar app web para administrar sistema médico.</span>
                    <span>-Desarrollar web app de atencion y gestión médica</span>
                    <span>-Responsable de encarar las tareas propuestas por el lider técnico de manera individual.</span>
                    <span><span className="formacion-highlight">Tecnologias:</span> Typescript / React / Redux / Angular / Tailwind</span>
                    <span>Abril 2022 - Actualidad</span>
                    <div className="flex flex-row gap-2">
                        <div className="formation-button" onClick={()=> window.open("https://www.bettertechnologies.world/en", "_blank")}>
                            <img alt="visit-icon" className="w-5 h-5" src={visitIcon}/>
                            <span>Visitar</span>
                        </div>
                        <div className="formation-button" onClick={()=> window.open("https://www.linkedin.com/company/bettertechnologies/", "_blank")}>
                            <img alt="git-icon" className="w-5 h-5 mr-2" src={linkedinIcon}/>
                            <span>Linkedin</span>
                        </div>

                    </div>
                </div>
            </div>

            
        </div>

    </div>
    )
}



export default Formation;
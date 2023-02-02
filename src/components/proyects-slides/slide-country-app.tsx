import { useState } from 'react';

//Styles
import './proyects-slides.css'
//Components
import TechJs from '../tech-capsules/tech-js';
import TechNode from '../tech-capsules/tech-node';
import TechExpress from '../tech-capsules/tech-express';
import TechReact from '../tech-capsules/tech-react';
import TechCss from '../tech-capsules/tech-css';
import gitIcon from '../../assets/png/git-icon.png';
import playIcon from '../../assets/png/play-icon.png'
import ModalVideoPlayer from '../modal/modal-videoplayer';
import TechSql from '../tech-capsules/tech-sql';
//Images and icons
import codeicon from '../../assets/png/code-logo.png';
import TechTs from '../tech-capsules/tech-ts';
import TechRedux from '../tech-capsules/tech-redux';



const SlideCountryApp = (props:any) => {
    
    const URL='https://www.youtube.com/embed/zlvxVBYVc38';
    const REPOSITORY_URL='https://github.com/Janku98/ProyectoIndividual-Countries'


    const [openVideo, setOpenVideo] = useState(false);


    const closeModal = ():void  => {
        setOpenVideo(false)
    }

    const openModal = ():void  => {
        console.log("ass")
        setOpenVideo(true)
    }

    const openRepository = (url:string):void => {
        window.open(url, '_blank')?.focus();
    }


    return(
        <div className='h-full w-full flex flex-col slide-backgrounds p-4'>
            <div className='w-full  flex justify-center '>
                <span className='tittle-card'>Country App</span>
            </div>

            <div className='flex flex-col w-full h-full '>
                <div className='flex items-center mb-4'>
                    <img alt='proyect-image' src={codeicon}/>
                    <ul className='text-card'>
                        <li>
                            -Consta de base de datos, backend y frontend.
                        </li>
                        <li>
                            -Consume una API wiki sobre paises e llena su propia base de datos con los datos de la API.
                        </li>
                        <li>
                            -Crea modelos en la base de datos por cada pais para poder agregar actividades turisticas en cada uno.
                        </li>
                        <li>
                            -Search bar y filtros de busqueda
                        </li>
                        
                    </ul>
                </div>
                <div className='flex flex-col w-full justify-center mb-4'>
                    <span className='subtittle-card'>Tecnologias:</span>
                    <div className='flex flex-row w-full flex-wrap gap-2'>                      
                        <TechTs></TechTs>
                        <TechJs></TechJs>
                        <TechNode></TechNode>
                        <TechExpress></TechExpress>
                        <TechSql></TechSql>
                        <TechReact></TechReact>
                        <TechRedux></TechRedux>
                        <TechCss></TechCss>
                    </div>
                    
                </div>

                <div className='flex flex-row items-center w-full justify-center mb-4'>
                    <div className='flex flex-row items-center justify-center mr-4'>
                        <span>Repositorios: </span> 

                        <div className="formation-button" onClick={()=>openRepository(REPOSITORY_URL)}>
                            <img alt="git-icon" className="w-5 h-5 mr.2" src={gitIcon}/>
                            <span>Repositorio</span>
                        </div>
                    </div>


                    <div className='flex flex-row items-center justify-center'>
                        <span>Ver video aquí: </span> 
                        <div onClick={openModal} className="formation-button ml-2">
                            <img alt="visit-icon" className="w-5 h-5" src={playIcon}/>
                            <span>Ver</span>
                            
                        </div>
                    </div>
                    
                </div>

            </div>
            <ModalVideoPlayer openState={openVideo} closeModal={closeModal} url={URL}></ModalVideoPlayer>
        </div>
    )
}


export default SlideCountryApp;
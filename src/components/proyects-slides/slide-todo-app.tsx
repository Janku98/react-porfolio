import { useState } from 'react';

//Styles
import './proyects-slides.css'
//Components
import TechReact from '../tech-capsules/tech-react';
import TechCss from '../tech-capsules/tech-css';
import gitIcon from '../../assets/png/git-icon.png';
import playIcon from '../../assets/png/play-icon.png'
import ModalVideoPlayer from '../modal/modal-videoplayer';
//Images and icons
import codeicon from '../../assets/png/code-logo.png';
import TechTs from '../tech-capsules/tech-ts';
import TechHtml from '../tech-capsules/tech-html';



const SlideToDoApp = (props:any) => {

    const URL='https://www.youtube.com/embed/Px_TNH7IQrk';
    const REPOSITORY_URL='https://github.com/Janku98/ClientBillSystem'


    const [openVideo, setOpenVideo] = useState(false);


    const closeModal = ():void  => {
        setOpenVideo(false)
    }

    const openModal = ():void  => {
        setOpenVideo(true)
    }

    const openRepository = (url:string):void => {
        window.open(url, '_blank')?.focus();
    }


    return(
        <div className='h-full w-full flex flex-col slide-backgrounds p-4'>
            <div className='w-full  flex justify-center '>
                <span className='tittle-card'>ToDo App</span>
            </div>

            <div className='flex flex-col w-full h-full '>
                <div className='flex flex-col sm:flex-row items-center mb-4'>
                    <img alt='proyect-image' src={codeicon}/>
                    <ul className='text-card'>
                        <li>
                            -FrontEnd con React utilizando custom hooks y useState
                        </li>
                        <li>
                            -Utiliza MaterialUI para los componentes
                        </li>
                        <li>
                            -Guarda tus ToDos en el LocalStorage
                        </li>                        
                    </ul>
                </div>
                <div className='flex flex-col w-full justify-center items-center mb-4'>
                    <span className='subtittle-card'>Tecnologias:</span>
                    <div className='flex flex-row justify-center w-full flex-wrap gap-2'>                      
                        <TechTs></TechTs>
                        <TechHtml></TechHtml>
                        <TechReact></TechReact>
                        <TechCss></TechCss>
                    </div>
                    
                </div>

                <div className='flex flex-col sm:flex-row items-center w-full justify-center mb-4 gap-2'>
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


export default SlideToDoApp;
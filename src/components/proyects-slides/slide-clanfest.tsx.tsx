import './proyects-slides.css'
import clanfestIcon from '../../assets/png/clan-fest-icon.png';
import TechJs from '../tech-capsules/tech-js';
import TechTs from '../tech-capsules/tech-ts';
import TechNode from '../tech-capsules/tech-node';
import TechExpress from '../tech-capsules/tech-express';
import TechMongo from '../tech-capsules/tech-mongo';
import TechReact from '../tech-capsules/tech-react';
import TechRedux from '../tech-capsules/tech-redux';
import TechCss from '../tech-capsules/tech-css';
import gitIcon from '../../assets/png/git-icon.png';
import visitIcon from '../../assets/png/visit-icon.png'
import playIcon from '../../assets/png/play-icon.png'
import ModalVideoPlayer from '../modal/modal-videoplayer';
import { useState } from 'react';



const SlideClanFest = (props:any) => {

    const URL='https://www.youtube.com/embed/1vr9s8Pg4JQ';


    const [openVideo, setOpenVideo] = useState(false);


    const closeModal = () => {
        setOpenVideo(false)
    }

    const openModal = () => {
        console.log("ass")
        setOpenVideo(true)
    }


    return(
        <div className='h-full w-full flex flex-col slide-backgrounds p-4'>
            <div className='w-full flex justify-center '>
                <span className='tittle-card'>ClanFest</span>
            </div>

            <div className='flex flex-col w-full h-full '>
                <div className='flex flex-col sm:flex-row items-center mb-4'>
                    <img alt='proyect-image' src={clanfestIcon}/>
                    <ul className='text-card'>
                        <li>
                            -App desarrollada en grupo mediante metodologías ágiles (7 personas)
                        </li>
                        <li>
                            -Consta de base de datos, backend y frontend
                        </li>
                        <li>
                            -Permite registrarte como usuarios, crear eventos que otros usuarios pueden ver, vender entradas, asignar roles, entre más features
                        </li>
                        <li>
                            -Mercado Pago API
                        </li>
                        <li>
                            -Posee Admin Login para poder gestionar usuarios, eventos, tickets y transacciones
                        </li>
                        
                    </ul>
                </div>
                <div className='flex flex-col w-full justify-center items-center mb-4'>
                    <span className='tittle-card'>Tecnologias:</span>
                    <div className='flex flex-row justify-center w-full flex-wrap gap-2'>
                        
                        <TechJs></TechJs>
                        <TechTs></TechTs>
                        <TechNode></TechNode>
                        <TechExpress></TechExpress>
                        <TechMongo></TechMongo>
                        <TechReact></TechReact>
                        <TechRedux></TechRedux>
                        <TechCss></TechCss>
                    </div>
                    
                </div>

                <div className='flex flex-col sm:flex-row items-center w-full justify-center mb-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-2 mr-4'>
                        <span>Repositorios: </span> 
                        <div className="formation-button w-full sm:w-fit mx-2" onClick={()=> window.open("https://github.com/NaniBM/ClanFest-API", "_blank")}>
                            <img alt="git-icon" 
                                className="w-5 h-5 ml-2" 
                                src={gitIcon}/>
                            <span>Backend</span>
                        </div>
                        <div className="formation-button w-full sm:w-fit" onClick={()=> window.open("https://github.com/christopherBryan1996/PF", "_blank")}>
                            <img alt="git-icon" 
                                className="w-5 h-5 mr.2" 
                                src={gitIcon}/>
                            <span>FrontEnd</span>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center justify-center mr-4'>
                        <span>Sitio: </span> 
                        <div className="formation-button w-full sm:w-fit ml-2" onClick={()=> window.open("https://jolly-booth-281355.netlify.app/", "_blank")}>
                            <img alt="visit-icon" className="w-5 h-5" src={visitIcon}/>
                            <span>Visitar</span>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center justify-center'>
                        <span>Ver video aquí: </span> 
                        <div onClick={openModal} className="formation-button w-full sm:w-fit ml-2">
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


export default SlideClanFest;
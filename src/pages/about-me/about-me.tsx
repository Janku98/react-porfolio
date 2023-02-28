//Styles
import './about-me.css'
//Images and icons
import cvImage from '../../assets/png/cv-icon.png'
import cv from '../../assets/files/cv.pdf'

const AboutMe = () => {

    return(
        <div className="about__me flex flex-col items-center px-20 justify-center" id="about-me">

            <div className="flex flex-row">
                <div className="text-white flex flex-col h-full justify-center">
                    <span className="title_1">
                        Hola mundo!
                    </span>
                    <span className="title_2">
                        Soy Facundo Jankunas
                    </span>
                    <span className="title_1">
                         FullStack Developer
                    </span>

                    <div className='h-2 sm:h-5'></div>

                    <span className="sub__title">
                        Con cariño hacia el FrontEnd
                    </span>
                    <span className="sub__title">
                        Trabajo mejor con tú FeedBack
                    </span>

                    <a href={cv} download>
                        <div className='cv-button mt-5'>
                            <img alt='curriculum-image' src={cvImage} className='h-7 w-7 mr-2'/>
                            <span className="cv-title">Descargar mi Curriculum</span>
                        </div>
                    </a>
                    
                </div>

            </div>


        </div>
    )
}

export default AboutMe;
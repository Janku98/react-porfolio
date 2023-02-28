//styles
import './contact.css'
//images and icons
import linkedinIcon from '../../assets/png/linkedin-icon.png';
import wppIcon from '../../assets/png/wpp-icon.png';
import emailIcon from '../../assets/png/email-icon.png';
import gitIcon from '../../assets/png/git-icon.png';

const Contact = () => {
    return(
        <div className='flex flex-col p-4 contact'>
            <div className='flex flex-row items-center justify-center h-2/6'>
                <span className='contact-title'>Contáctame</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-5'>

                <div className='items-center w-full h-20 rounded-2xl contact-card-hover'
                    onClick={()=> window.open("https://www.linkedin.com/in/facundo-jankunas/", "_blank")}>
                    <img alt='linkedin-profile' src={linkedinIcon} className='w-6 h-6 lg:w-10 lg:h-10 mr-5'/>
                    <span className='contact-card-title'>Ir a mi Linkedin</span>
                </div>

                <div className='items-center w-full h-20 rounded-2xl contact-card'>
                    <img alt='tel-icon' src={wppIcon} className='w-6 h-6 lg:w-10 lg:h-10 mr-5'/>
                    <span className='contact-card-title'>Cel/Wpp: (+54)351 5959721</span>
                </div>

                <div className='items-center w-full h-20 rounded-2xl contact-card'>
                    <img alt='email-icon' src={emailIcon} className='w-6 h-6 lg:w-10 lg:h-10 mr-5'/>
                    <span className='contact-card-title'>facundojankunas@hotmail.com.ar</span>
                </div>

                <div className='items-center w-full h-20 rounded-2xl contact-card-hover'
                onClick={()=> window.open("https://github.com/Janku98", "_blank")}>
                    <img alt='git-profile' src={gitIcon} className='w-6 h-6 lg:w-10 lg:h-10 mr-5'/>
                    <span className='contact-card-title'>Ir a mi GitHub</span>
                </div>
            </div>
        </div>
    )
}


export default Contact;
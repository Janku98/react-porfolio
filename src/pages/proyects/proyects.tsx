import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './proyects.css'
import Slider from "react-slick";
import SlideClanFest from "../../components/proyects-slides/slide-clanfest.tsx";
import SlideBillSystem from "../../components/proyects-slides/slide-bill-system";
import SlideCountryApp from "../../components/proyects-slides/slide-country-app";


const Proyects = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };


    return(
        <div className="proyects p-5 flex  flex-col h-full w-full">
            <div className="flex sm:h-1/6 w-full items-center">
                <span className="formacion-title animate-pulse">Proyectos</span>
            </div>
            <div className="flex justify-center sm:items-center w-full h-5/6 rounded-2xl mb-5">
                <Slider className="w-11/12 h-3/5" {...settings}>     
                    <SlideClanFest>
                    </SlideClanFest>
                    <SlideBillSystem>
                    </SlideBillSystem>
                    <SlideCountryApp>
                    </SlideCountryApp>
                </Slider>
            </div>
          
        </div>
    )
}


export default Proyects;
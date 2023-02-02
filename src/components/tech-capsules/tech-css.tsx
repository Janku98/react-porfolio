import cssIcon from '../../assets/png/css-icon.png'

const TechCss =  (props:any) => {
    return(
        <div className="techs-containers css-">
           <img className="techs-icon" alt="html-icon" src={cssIcon}/>
            <span>CSS</span>
        </div>
    )
}

export default TechCss;
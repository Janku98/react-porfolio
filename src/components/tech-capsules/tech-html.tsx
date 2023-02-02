import htmlIcon from '../../assets/png/html-icon.png'
const TechHtml =  (props:any) => {
    return(
        <div className="techs-containers html-">
           <img className="techs-icon" alt="html-icon" src={htmlIcon}/>
            <span>HTML</span>
        </div>
    )
}

export default TechHtml;
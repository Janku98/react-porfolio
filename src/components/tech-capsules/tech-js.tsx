import jsIcon from '../../assets/png/jc-icon.png'

const TechJs =  (props:any) => {
    return(
        <div className="techs-containers javascript">
           <img className="techs-icon" alt="javascrip-icon" src={jsIcon}/>
            <span>Javascript</span>
        </div>
    )
}

export default TechJs;
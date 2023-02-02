import angularIcon from '../../assets/png/angular-icon.png'

const TechAngular =  (props:any) => {
    return(
        <div className="techs-containers angular">
            <img className="techs-icon" alt="angular-icon" src={angularIcon}/>
            <span>Angular</span>
        </div>
    )
}

export default TechAngular;
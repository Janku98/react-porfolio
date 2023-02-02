import reduxIcon from '../../assets/png/redux-icon.png'
const TechRedux =  (props:any) => {
    return(
        <div className="techs-containers redux">
            <img className="techs-icon" alt="redux-icon" src={reduxIcon}/>
            <span>Redux</span>
        </div>

    )
}

export default TechRedux;
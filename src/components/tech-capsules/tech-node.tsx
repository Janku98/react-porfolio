import nodeIcon from '../../assets/png/node-icon.png'
const TechNode=  (props:any) => {
    return(
        <div className="techs-containers node">
            <img className="techs-icon" alt="express-icon" src={nodeIcon}/>
            <span>Node</span>
        </div>

    )
}

export default TechNode;
import reactIcon from '../../assets/png/react-icon.png'

const TechReact =  (props:any) => {
    return(
        <div className="techs-containers react">
            <img className="techs-icon" alt="react-icon" src={reactIcon}/>
            <span>React</span>
        </div>

    )
}

export default TechReact;
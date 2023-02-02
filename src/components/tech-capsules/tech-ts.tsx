import tsIcon from '../../assets/png/type-icon.png'

const TechTs =  (props:any) => {
    return(
        <div className="techs-containers typescript">
           <img className="techs-icon" alt="typescript-icon" src={tsIcon}/>
            <span>TypeScript</span>
        </div>
    )
}

export default TechTs;
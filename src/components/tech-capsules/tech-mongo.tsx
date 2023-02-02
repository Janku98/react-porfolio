import mongoIcon from '../../assets/png/mongo-icon.png'
const TechMongo =  (props:any) => {
    return(
        <div className="techs-containers mongo">
           <img className="techs-icon" alt="html-icon" src={mongoIcon}/>
            <span>MongoDB</span>
        </div>
    )
}

export default TechMongo;
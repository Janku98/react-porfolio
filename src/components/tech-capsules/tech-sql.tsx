import sqlIcon from '../../assets/png/sql-icon.png'
const TechSql=  (props:any) => {
    return(
        <div className="techs-containers sql">
            <img className="techs-icon" alt="sql-icon" src={sqlIcon}/>
            <span>SQL</span>
        </div>


    )
}

export default TechSql;
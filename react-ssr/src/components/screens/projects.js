import {config} from "../../configs/config";


const Projects = props => {
    let data = config.localdata.PROJECTS

    const displayProjectDetails = arr => {
        return arr.map((row, i) => {
            let {name, desc} = row
            return <div key={'inside-proj-row' + i} className='margin-rl'>
                <h3>{name}</h3>
                <p className='margin-rl'>{desc}</p>
            </div>
        })
    }
    const display = () => {
        let keys = Object.keys(data)
        let values = Object.values(data)
        return keys.map((name, i) => {
            let obj = values[i]
            let isString = typeof obj === "string"
            let isObject = typeof obj === "object"
            let isLen = obj.length > 0
            if (!isLen) return null
            return <div key={'proj_' + i}>
                <h1>{name}</h1>
                {isString === true
                    ? <p>{obj}</p>
                    : isObject && isLen
                        ? displayProjectDetails(obj)
                        : null
                }
            </div>
        })
    }
    return <div className={'margin-ud'}>{display()}</div>
}
export default Projects
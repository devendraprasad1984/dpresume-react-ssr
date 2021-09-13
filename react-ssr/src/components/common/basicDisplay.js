import HtmlComponent from "./htmlComponent";


const BasicDisplay = ({list, tag, className}) => {
    const display = () => {
        if (list === undefined) return null
        if (list.length === 0) return null
        return list.map((row, index) => {
            return <div key={'key-' + index}><HtmlComponent text={row}/></div>
        })
    }
    return <div className={className}>
        <div className='bl xprimary'>{tag||''}</div>
        {display()}
    </div>
}

export default BasicDisplay

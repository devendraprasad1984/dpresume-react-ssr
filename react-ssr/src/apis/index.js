import {config} from "../configs/config";


export default function get(uri, callback) {
    const header = config.header()
    fetch(uri, header)
        .then(res => {
            console.log('res', res)
            return res.json()
        })
        .then(data => callback({data}))
        .catch(err => callback({error: err})
        )
}
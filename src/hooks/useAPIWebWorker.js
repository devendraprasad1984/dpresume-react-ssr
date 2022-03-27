import {useEffect, useState} from "react";
import workerFactory from "../webworkers/webWorkerFactory_Builder";

const pullFromApiWorker = workerFactory()() //for UI performance, moving some api handling running in parallel other than main thread and
// syncing up via event onmessage and postMessage of web worker

const useAPIWebWorker = (url) => {
    const [data, setData] = useState([]);
    const [time, setTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if(!data) return
        //mounting
        setLoading(true);
        pullFromApiWorker.postMessage({uri: url})
        pullFromApiWorker.onmessage = (res) => {
            let apiData= res.data
            if (apiData.error !== undefined) {
                setError({error: apiData.error});
                setTime(t=>apiData.time)
            }
            else {
                setData(apiData.data === null ? [] : apiData.data);
                setLoading(false);
                setTime(t=>apiData.time)
            }
        }
        return () => {
            //unmounting
            setLoading(false);
        };
    }, []);
    return {data, loading, error, time};
};
export default useAPIWebWorker;

import {useEffect, useState} from "react";
import axios from "../axios";

type useQueryParam = {
    url : string
}
const useQuery = ({url}: useQueryParam) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async() => {
            const response =  await axios.get(url);
            setData(response.data);
        })();
    },[]);

    return [data];
}

export default useQuery;
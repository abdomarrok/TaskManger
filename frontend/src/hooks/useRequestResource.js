import axios from "axios";
import { useState, useCallback } from "react";

export default function useRequestResource({ endpoint }) {
    const [resourceList, setResourceList] = useState({
        results: [],
    });
    const getResourceList = useCallback(() => {
        axios
            .get(`/api/${endpoint}/`)
            .then((res) => {
                setResourceList({ results: res.data });
            })
            .catch((err) => {
                console.error(err);
            });
    }, [endpoint]);

    const addResource = useCallback(
        (values, seccessCallback) => {
            axios
                .post(`/api/${endpoint}/`, values)
                .then(() => {
                    if (seccessCallback) {
                        seccessCallback();
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        [endpoint],
    );

    return { resourceList, getResourceList, addResource };
}

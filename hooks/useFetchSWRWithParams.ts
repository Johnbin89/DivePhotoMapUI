import { useState, useEffect } from 'react';
import useSWR from "swr";
import {Url} from "next/dist/shared/lib/router/router";

const useFetchSWRWithParams = (url: any, args: any) => {
        /* examples args passed
        {
            key2: someVariable,
        }
        */

    function objToQueryString(obj: { [x: string]: string | number | boolean; }) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    const queryString = objToQueryString(args);
    const fetcher = async (url: any) => {        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('An error occurred while fetching the data.');
        }
        return response.json();
    };

    const { data, ...restSWR } = useSWR(
        `${url}?${queryString}`,
        fetcher
    );

    return { data, ...restSWR };
};

export default useFetchSWRWithParams;
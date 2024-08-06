import { useState, useEffect } from 'react';
import useSWR from "swr";
import {Url} from "next/dist/shared/lib/router/router";

const useFetchSWRWithParams = (url: string, args: any) => {

    const fetcher = async (url: string, args: any) => {
        function objToQueryString(obj: { [x: string]: string | number | boolean; }) {
            const keyValuePairs = [];
            for (const key in obj) {
                keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
            return keyValuePairs.join('&');
        }

        /* examples args passed
        {
            key2: someVariable,
        }
         */
        const queryString = objToQueryString(args);
        const response = await fetch(`${url}?${queryString}`);


        if (!response.ok) {
            throw new Error('An error occurred while fetching the data.');
        }
        return response.json();
    };

    const { data, ...restSWR } = useSWR(
        [url, args] ,
        fetcher
    );

    return { data, ...restSWR };
};

export default useFetchSWRWithParams;
import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // emptry array incase comes prog should not crash, thats why empty {} given
    useEffect(() => {
        fetch(`https://currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
 
    return data
   

}

export default useCurrencyInfo;


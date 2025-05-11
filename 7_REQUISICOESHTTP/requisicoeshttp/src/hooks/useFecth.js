import { useState, useEffect } from "react";

//4 - Custom Hook

export const useFetch = (url) => {

    const [data, setData] = useState(null);

    //Aula 5 - Refatorando POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - LOADING
    const [loading, setLoading] = useState(false)

    //7 - TRATANDO ERROS
    const [error, setError] = useState(null);

    const [itemID, setItemID] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
              }
            )

            setMethod(method);
        }
        else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                }
              }
            )

            setMethod(method);
            setItemID(data);
        }
            
    }

    useEffect(() => {

        const fetchData = async() => {

            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            }
            catch(error){
                setError("Houve algum erro ao carregar dados!")
            }
           
            setLoading(false);
        }

        fetchData();
    }, [url, callFetch]);


    //5 - Refatorando post
    useEffect(() => {

        const httpRequest = async() => {

            let json;

             if(method === 'POST'){

                let fetchOptions = [url, config];
                
                const res = await fetch(...fetchOptions);
                json = await res.json();
            }
            else if(method === 'DELETE'){

                const deleteURL = `${url}/${itemID}`
                
                
                const res = await fetch(deleteURL, config);
                json = await res.json();
                
            }
            setCallFetch(json);
        }
      
        httpRequest();

    }, [config, method, url]);
    
    return { data , httpConfig, loading, error};
}
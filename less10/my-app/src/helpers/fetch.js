
export const fetchGet = async (url) => {
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson
}



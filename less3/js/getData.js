const getData = async (url) => {

    const element = await fetch(url);
    const elementJson = await element.json();

    localStorage.setItem('menu', JSON.stringify(elementJson));
}

export default getData;
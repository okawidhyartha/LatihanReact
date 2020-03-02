async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origins",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}

export {postData, getData};
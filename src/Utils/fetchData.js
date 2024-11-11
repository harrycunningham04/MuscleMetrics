export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': '3ca18b44e9mshf2b9c760b76a754p1e82abjsn39a4e2581103'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
export const api = async params => {
    return await fetch(`/api${params}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
}
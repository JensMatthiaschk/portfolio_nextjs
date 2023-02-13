
export const postEmail = async (data) => {
    const res = await fetch("/api/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json;"
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
    if (!res.ok) {
        return res

    } else {
        return res
    }
};
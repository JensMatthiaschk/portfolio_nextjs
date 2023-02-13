export const postEmail = async (data) => {
    const res = await fetch(import.meta.env.VITE_EMAIL_API + "/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
    if (!res.ok) {
        console.log("Sending email failed", res.json())
        return res

    } else {
        console.log("Sent email successfully", res)
        return res
    }
};
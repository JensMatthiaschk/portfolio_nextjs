
const textRotate = () => {
    const text = document.querySelector('text p');
    text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style="transform:rotate(${i * 5}deg)">${char}</span>`).join("")
}

export default textRotate
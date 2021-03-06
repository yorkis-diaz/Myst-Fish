function submitScore(ref, score, resetGame) {
    let name = ""
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    inputName.type = 'text' 
    inputName.placeholder = 'Enter Name And Press Enter'
    form.appendChild(inputName)
    form.className = "score-form"
    let error = document.createElement("h3");
    error.innerText = "Name Must Be 3 Characters";
    form.addEventListener('submit', e =>  {
        e.preventDefault();
        if (e.currentTarget.children[0].value.length >= 4) {
            if (!form.children[1]) form.appendChild(error);
        } else {
            name = e.currentTarget.children[0].value;
            const data = {
                name: name,
                score: score
            }
            ref.push(data).then(() => {
                resetGame()
            })
        }
    })
    return form
}


export default submitScore;
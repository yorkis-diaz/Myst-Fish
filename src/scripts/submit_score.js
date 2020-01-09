function submitScore(ref, score) {
    let name = ""
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    inputName.type = 'text' 
    inputName.placeholder = 'Enter A Name'
    form.appendChild(inputName)
    form.className = "score-form"
    form.addEventListener('submit', e =>  {
        e.preventDefault();
        name = e.currentTarget.children[0].value;
        const data = {
            name: name,
            score: score
        }
        ref.push(data).then(() => {
            window.location.reload()
        })
    })
    return form
}


export default submitScore;
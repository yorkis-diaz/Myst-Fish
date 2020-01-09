function submitScore(ref, score) {
    debugger
    let name = ""
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    const submit = document.createElement('button')
    inputName.type = 'text' 
    inputName.placeholder = 'Enter Name'
    form.appendChild(inputName)
    form.appendChild(submit)

    // inputName.addEventListener('change', (e) => {
    //     debugger
    //     e.preventDefault();
    //     name = e.currentTarget.value
    // })
    form.addEventListener('submit', e =>  {
        debugger
        e.preventDefault();
        name = e.currentTarget.children[0].value;
        const data = {
            name: name,
            score: score
        }
        ref.push(data)
    })
    debugger
    // form.addEventListener('submit', 
    return form
}


export default submitScore;
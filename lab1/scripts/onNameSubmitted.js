onNameSubmitted = (e) => {
    alert(`Hello, ${e.target.value}`)
    e.currentTarget.value = '';
}

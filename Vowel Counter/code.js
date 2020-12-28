function checkVowel(){
    let text = document.getElementById('inputText')
    let vowels = ['a','e','i','o','u']
    let totalVowels = 0

    if (text.value != ''){
    for(let i= 0; i < text.value.length ; i++) {
        if(vowels.indexOf(text.value[i]) != -1){
            totalVowels ++
        }
    }
    alert("There are " + totalVowels + " vowels!")
    text.value = ''
}
else {
    alert ('For the last time, fill all the fields!')
}
}

const button = document.querySelector('button')
button.addEventListener('click', checkVowel)
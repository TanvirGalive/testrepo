window.onload = function() {
    const inp = document.getElementById('inp')
    const namelist = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveAtTry = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')
}

const participantNames = []
inp.addEventListener('keypress', function(event)){
    if(event.key == 'Enter'){
        let newNames = event.target.value.split(',')
        if(newNames[0]!= ''){
            newNames.forEach(name == {
                participantNames.push(name)
            })
        }
    }
}
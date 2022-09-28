



// .then(data=>document.getElementsByTagName('input').value=data);


// document.getElementById('8Ball').onclick=click;
// function click(){
//     fetch('/8ball')
// .then(respose=>respose.text())
// .then(data => {
//     document.querySelector('#i').value=data
// });
// }

document.querySelector('#i').addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        fetch('/8ball')
            .then(r => r.text())
            .then(r => {

                document.querySelector('#i').value = r;
                document.querySelector('#i').blur();
                document.querySelector('#i').focus();
            })
            .catch(e => console.log(e))
    }
})

document.querySelector('#i').addEventListener('focus', function(e) {
    this.select();
})
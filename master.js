let allError = [...document.getElementsByClassName('errorReq')]
allError.map((item) => {
    item.style.cssText = 'transform:scale(0)'

})

let inp = document.getElementsByTagName('input')
for (i = 0; i < inp.length; i++) {
    let username = document.getElementById('username')
    let password = document.getElementById('password')


    inp[i].addEventListener('input', function () {
        if (this.getAttribute('id') == username.getAttribute('id')) {
            this.nextElementSibling.style.cssText = 'transform:scale(0)'
            if (this.value.search(/[ا-ی]/i) != -1 || (this.value.search(/[0-9]/)) != -1) {
                this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
            }
        }



        if(this.getAttribute('id') == password.getAttribute('id')){
            this.nextElementSibling.style.cssText = 'transform:scale(0)'
            if(((this.value.length) <= 8) || (this.value.search(/[0-9]/) == -1) || (this.value.search(/[ا-ی]/) == -1)  ){
                this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
            }
        }














    })

}



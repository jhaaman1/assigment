
    function create(n,m,e,p){
        this.name = n;
        this.mobile = m;
        this.email = e;
        this.password = p;
    }

    let arr = JSON.parse(localStorage.getItem('details'))

    function getDetails(){
        event.preventDefault();
        
        let form = document.getElementById('form');

        let name = document.querySelector('#name').value;

        let mobile = document.querySelector('#contact').value;

        let email = document.querySelector('#email').value;

        let password = document.querySelector('#password').value;

        let res = new create(name,mobile,email,password);

        if(name === '' || mobile === '' || email === '' || password === ''){
                return alert('Enter all Valid Credentials')
            }

        for(let i=0; i<arr.length; i++){
            if(arr[i].email === email){
                return alert('User already Exist');
            }
        }

        arr.push(res);
        localStorage.setItem('details',JSON.stringify(arr))
        document.querySelector('input').value = null;
        alert('Signup Sucessful');
        window.location.href = 'login.html';
        
    }
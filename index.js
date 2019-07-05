var getNumber = document.getElementById('submit').addEventListener('click', function(){
    var n1 = document.getElementById('input').value;
    console.log(n1);

    function checkNum(){
        var fizzBuzz;
        if(n1 % 3 === 0 && n1 % 5 === 0 && n1 != 0){
            fizzBuzz = document.getElementById('output').innerHTML = 'FizzBuzz';
        } else if(n1 % 3 === 0 && n1 != 0){
            fizzBuzz = document.getElementById('output').innerText = 'Fizz';
        } else if (n1 % 5 === 0 && n1 != 0){
            fizzBuzz = document.getElementById('output').innerText = 'Buzz';
        } else {
            return alert("Try Again!");
        }
    }
    checkNum();

    var clearBtn = document.getElementById('clear').addEventListener('click', function(){
        var clear1, clear2;
        clear1 = document.getElementById('output').innerText = '';
        clear2 = document.getElementById('input').value = '';
    });
});

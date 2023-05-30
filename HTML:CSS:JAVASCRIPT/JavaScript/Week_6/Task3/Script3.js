function equal(){
    var task1=document.getElementById("Money").value
    var task2=document.getElementById("perc").value
    var task3=document.getElementById("year").value
    a=1+(task2/100)
    b=a**task3
    console.log(a)
    console.log(b)
    var result =task1*b
    document.getElementById("equall").placeholder=parseInt(result/1)
    }
    setInterval(equal,100)
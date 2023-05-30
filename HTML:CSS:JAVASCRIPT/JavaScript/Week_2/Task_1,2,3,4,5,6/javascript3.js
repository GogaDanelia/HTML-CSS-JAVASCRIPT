function my_num_t(num,met=true){
    if(met){
        return Math.ceil(num)
    }
}

function my_num_f(num,met=true){
    if(met){
        return Math.floor(num)
    }
}

function my_num_r(num){
        return Math.round(num)
}

function my_num_t_f(num,met=true){
    if(met){
        return Math.ceil(num)
    }
    else{
        return Math.floor(num)
    }
}

function number_random_2(){
    result=""
    start=5
    end=50
        result +=Math.random(start,end)*10
    return result
}

function number_random(start, end, times = 1){
    result=""
    for (i = 0; i < times; i++){
        result += (Math.random() * (end - start + 1) + start)
    }
    return result
}


   

var randomWeekDay = function(){
    var RandomWeek = Math.round(Math.random()*7)
if(RandomWeek === 1){
    document.write('monday')
}else if(RandomWeek === 2){
    document.write('tuesday')
}else if(RandomWeek === 3){
    document.write('wednesday')
}else if(RandomWeek === 4){
    document.write('thursday')
}else if(RandomWeek === 5){
    document.write("friday")
}else if(RandomWeek === 6){
    document.write('Saturday')
}else{
    document.write('Sunday')
}
}

function range(start, end) {
    if(end - start === 2) {
    return [start + 1];
    }
    else {
    let list = range(start, end - 1);
    list.push(end - 1);
    return list;
    }
}
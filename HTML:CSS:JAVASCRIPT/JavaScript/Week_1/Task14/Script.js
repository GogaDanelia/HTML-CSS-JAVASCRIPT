const solution = (m, n) => {
    let start = m >= n ? n : m
    const end = m >= n ? m : n
    while (start <= end) {
      console.log(start)
      start++
    }
}
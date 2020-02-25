function mesmosCaracteres(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    if (str1.length <= str2.length) {
        for (let i in str1) {
            if ( str2.search(str1[i])  != -1 ) {
                continue
            } else {
                return false
            }
        }
    } else {
        for ( let i in str2) {
            if ( str1.serach(str2[i]) != -1 ) {
                continue
            }
            else {
                return false
            }
        }
    }
    return true
}

console.log(mesmosCaracteres('ABC', 'cba'))
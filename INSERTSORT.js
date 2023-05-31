function sort(tab) {
    let len = tab.length;       
    let tmp, i, j;                  
    for(i = 1; i < len; i++) { 
      tmp = tab[i]
      j = i - 1
      while (j >= 0 && tab[j] > tmp) {
        tab[j+1] = tab[j]
        j--
      }
      tab[j+1] = tmp
    }
    return tab
  }

  let tab = [20,2,45,2,63,8,0,9];
  sort(tab);
  console.log(tab);
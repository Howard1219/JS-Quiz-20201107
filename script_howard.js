function printStars(count) {
  let str = '';
  let i, j;

  for(i = 1; i <= count; i++) {
    for(j = 1; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

// 請參考 printStars，
// 並完成 printStars2，使其執行時結果如圖： https://imgur.com/56BptSu
function printStars2(count) {
  // todo...
  let str = '';
  let i, j;
  
  for(i = 1; i <= count; i++) {
	for(j = 1; j <= count; j++) {
	  if(j <= (count - i))
	  {
		str += ' ';
	  }
	  else
	  {
		str += '*';
	  }
	}
	str += '\n';
  }
  console.log(str);
}

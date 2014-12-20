function compress(str) {
  var repeat = 1;
  var result = str.charAt(0);
  var prev = result;

  for( var i =1; i < str.length; i++ ) {

    if( str.charAt(i) === prev ) {
      repeat++;
    } else {
      if (repeat > 1) result += repeat;
      result += str.charAt(i);
      repeat = 1;
    }

    prev = str.charAt(i);

  }

  console.log(str, ' > ', result);

}

var test1 = "hello world, hello git";
var test2 = "helloooooooo";

compress(test1);
compress(test2);

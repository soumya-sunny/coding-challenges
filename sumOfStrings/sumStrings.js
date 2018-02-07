  function sumStrings(a, b) {

      var carry = 0;
      var count = 1;
      var sum = '';
      var safe_length = Number.MAX_SAFE_INTEGER.toString().length - 1;
      var len = a.length || b.length;
      var q = Math.ceil(len / safe_length);
      while (q >= count) {
          var a_n = a.slice(-safe_length * count, -(count - 1) * safe_length != 0 ? -(count - 1) * safe_length : undefined);
          var b_n = b.slice(-safe_length * count, -(count - 1) * safe_length != 0 ? -(count - 1) * safe_length : undefined);
          if (('' + sum).length > safe_length) {
              carry = Number(('' + sum).slice(0, 1));
              sum = sum.slice(1);
          }
          sum = (+a_n + +b_n + +carry) + sum;
          count++;
      }     
      return sum;

  }
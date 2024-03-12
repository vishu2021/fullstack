let amount = 100;
let money = "100";
let floatValue = "99.5";
/* Comments Start Here
!   - Convert string to number
^   amount = parseInt(amount);
^   amount = +amount;
^   amount = Number(amount)

!    - Convert number to string
^   money = money.toString();
^   money = String(money);

!   - Change string to decimal
Comments End Here */
floatValue = parseFloat(floatValue);
console.log(floatValue);
// 99.5

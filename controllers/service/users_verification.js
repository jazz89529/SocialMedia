//驗證token及透過token來反推id
const jwt = require('jsonwebtoken');


//進行token驗證
//token發生錯誤或過期就會回傳false。反之，則回傳反推過後的id值
module.exports = function verifyToken(token) {
  let tokenResult = '';
  const time = Math.floor(Date.now() /1000);
  return new Promise((resolve, reject) => {
    //判斷token是否正確
    jwt.verify(token, 'secret', function(err, decoded) {
      if(err) {
        tokenResult = false;
        console.log("if err:" + tokenResult);
        resolve(tokenResult);

        //token過期判斷
      } else if(decoded.exp <= time) {
        tokenResult = false;
        console.log("if expired:" + tokenResult);
        resolve(tokenResult);

      } else {
        tokenResult = decoded.data;
        console.log("if success:" + tokenResult);
        resolve(tokenResult);
      }
    })
  });
}

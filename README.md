# MongoDB_MVC_example
## API測試(1)-註冊
  •	HTTP Method: POST
  
  •	URL:http://localhost:3000/insert
  
  •	Body(x-www-form-urlencoded):  
  
    o name: test
    o password: test 
    o email: test@gmail.com
    
## API測試(2)-登入
  •	HTTP Method: POST
  
  •	URL:http://localhost:3000/login
  
  •	Body(x-www-form-urlencoded):
  
    o name: test
    o password: test 
    o email: test@gmail.com
    
  •	於headers中取的token
## API測試(3)-修改
  •	HTTP Method: PUT
  
  •	URL:http://localhost:3000/update
  
  •	Headers:
  
    o Content-Type: application/x-www-form-urlencoded
    o token: 貼上登入取得的token
    
  •	Body(x-www-form-urlencoded):
  
    o name: test
    o password: test123
    o email: test@gmail.com
 ## API測試(4)-上傳圖片
  •	HTTP Method: POST
  
  •	URL:http://localhost:3000/upload
    
  •	Body(form-):
  
    o name: test
    o password: test123
    o img: 選擇欲上傳的檔案
 

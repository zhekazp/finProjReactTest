import { useState } from 'react'


function App() {
  const reklama=["kupon ostalos 10","skidka  ot 10 do 15%","skidka","kupon"]
  const [st, setSt] = useState({display:"none",width:"100%"})
  const handleClick=()=>{
    st.display === "none"?   setSt({display:"block",width:"100%"}):setSt({display:"none",width:"100%"});
  }
  //получаем токен администратора
  const getToken=()=>{
    fetch("http://localhost:8080/api/user/auth", {
    
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:"admin@company.com",
            password:"Сochort40."}),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  //вставляем ссылку из почту
  const code="?id=4&code=8dabe6cb-09b2-492d-aabb-9305c027b9b9";
  const getConf=()=>{
    fetch("http://localhost:8080/api/user/confirmation"+code,)
      .then(res => res.json())
      .then(data => console.log(data));
  }
  //регистрируем нового пользователя
  const registration=()=>{
          "http://localhost:8080/api/user/auth"
    fetch("http://localhost:8080/api/user/registration",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name:"nickName",
        //вставляем свой email для теста регистрации
        email:"",
            password:"Сochort40."}),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  return (
    <>
    <div style={{backgroundColor:"wheat",height:"80px",width:"100vw"}}>
         <h3>В этом разделе вы можете получить скидку на товары услуги, получить подарочный сертификат, .... от наших работодателей</h3>
                
    </div>
    <div style={{margin:"20px 0",backgroundColor:"wheat",width:"100vw"}}>
         <h3 onClick={()=>handleClick()}>УЗНАТЬ О РЕКЛАМЕ КЛИК</h3> 
         <div style={st}>
          <h3>Если хотите разместить вашу рекламу переходите в раздел ЛИНК - контакты
            и отправляйте запрос администратору
          </h3>
         </div>
    </div>
    <h2>Тут показываем всегда разные обьявления полученные от бека, первое всегда наше -команда програмистов сделант сайт-
      т по клику можно получить например разный процент скидки и т.д.
    </h2>
    {reklama.map(
      (item)=>
        <>
        <div style={{margin:"20px 20px",backgroundColor:"wheat",width:"100vw", height:"120px"}}>
            {item}
        </div>
      </>
    )}
    <h2>Тут демо апи
    </h2>

    <button onClick={()=>{registration()}}>regisrtration</button>
    <button onClick={()=>{getConf()}}>confirmation</button>
    <button onClick={()=>{getToken()}}>get token</button>
    </>
  )
  
}

export default App

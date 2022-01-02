'use strict';
// backend 대용 데이터 처리 
const users ={
    id: ["홍길동", "이길동", "박길동"],
    pw: ["1234", "1234", "1234"]
}

const output = {
    world : (req, res)=>{
        res.render("home/index");
    },
    login : (req, res)=>{
        res.render("home/login");
    }
}

const process = {
    login:(req, res)=>{
        //console.log(req.body); 
        // 인증 절차 만들기 
        const id = req.body.id, 
              pw = req.body.pw;
        //console.log(id, pw);

        if( users.id.includes(id)){
            const idx = users.id.indexOf(id);

            if(users.pw[idx] == pw){
                return res.json({
                    success:true,
                }) // 로그인이 성공한다면 true를 반환
            }
        } // end if

        return res.json({
            success:false,
            msg:"아이디 또는 비밀번호를 확인하십시오."
        })
    }
}
module.exports = {  output, process };
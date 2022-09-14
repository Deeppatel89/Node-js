const reqFilter = (req,res,next) =>{
    if(!req.query.age){
      res.send('Please,Provide your age')
    }else if(req.query.age < 18){
      res.send('you can not accsess this page')
    }
    else{
      next();
    }
    
}

module.exports = reqFilter
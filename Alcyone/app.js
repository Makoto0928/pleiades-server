// var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');



const bodyParser = require("body-parser")
const multer = require("multer")


const app = express();
app.use(bodyParser.json())



const Storage = multer.diskStorage({

  destination: function(req,file,cb){
    cb(null,"images")
  },
  filename: function(req,file,cb){
    cb(null,file.originalname)
  }


})


const upload = multer({storage:Storage});

// app.get("/",(req,res) => {
//   res.status(200).send("You can post to /api/upload.")
// })




// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


app.listen(3001,()=>{
  console.log("App running on http://localhost:3001")
  
})

app.post("/",upload.single("image"),function(req,res,next){
  const file = req.file;
  const meta = req.body;

  console.log(file,meta);

  // const req_file_json = JSON.stringify(req.file);

  res.status(200).json({"msg":"upload"})


  // res.json({"result":"success"});

})



// app.post("/",function(req,res){

//   console.log("BODY: ",req.body);
//   console.log(req.body.name);

//   res.send("POST request to the homepage.");



//   // console.log(req.body);
// })



module.exports = app;

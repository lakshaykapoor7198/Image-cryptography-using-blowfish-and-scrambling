var express = require('express');
var router = express.Router();
var multer = require('multer');
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function (req, res) {
	res.render('home', { data: false });
});

router.get('/show', (req, res) => {
	res.render('home1', { data: true, sent: req.app.locals.st });
});

router.post('/post', (req, res) => {
	if (req.files[0]) {
		var imagename = req.files[0].filename;
		originalname = req.files[0].originalname;
	}
	else {
		imagename = "noimage.png";
		originalimage = "noimage.png";
	}
	i = imagename + ".png";
	o = originalname;
	console.log(o);
	var options = {
		args: [o]
	};

	setTimeout(() =>
		PythonShell.run('./public/images/draft1.py', options, function (err, results) {
			if (err) throw err;
			// results is an array consisting of messages collected during execution 
			console.log('results: %j', results);
		}), 2000)
	req.app.locals.st = o;
	res.redirect('/show');



})



module.exports = router;

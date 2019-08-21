const Joi = require('@hapi/joi');
const express = require('express');
const app = express();


//app.use to use middleware
app.use(express.json());

    //app.post();
    //app.put();
    //app.delete();
    //call back function gets called
    //'/' is the url
    // () => {} function we call when we get a request
    //req is a request
    //res is the response we give

/*
app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/api/courses', (req, res) => {
    res.send([
        1,2,3
    ])
});

//to get a single course

const courses = [
    { id: 1, name: 'courses'},
    { id: 2, name: 'courses'},
    { id: 3, name: 'courses'}
]

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params); 
});

//?sortBy=name query string parameters

app.get('/api/posts/:id/:month/:year', (req, res) => {
    //res.send(req.params.id.month.year); 
    //res.send(req.params.id.month); 
    //res.send(req.params.id); 
    res.send(req.params); 
    //res.send(req.query); http://localhost:5000/api/posts/1/01/2019?sortBy=name
});
*/
//we need to use the environment variable which is set outside of the application
// PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});



app.get('/', (req, res) => {
    res.send('Hello World')
});


const courses = [
    { id: 1, name: 'courses'},
    { id: 2, name: 'courses1'},
    { id: 3, name: 'courses1'}
];

app.get('/api/courses', (req, res) => {
    res.send(courses); 
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => { 
        c.id === parseInt(req.params.id)
    })
    if(!course) {
        res.status(404).send('The course was not found')
    } else {
        res.send(course)
    }
});

//this will post a new course
app.post('/api/courses', (req, res) => {
    const course = {
        id: course.lenght + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course)
});

//if !course means that if a course was not found it needs to return a 404 error
//404 means resource not found

////input validation

app.post('/api/courses', (req, res) => {
    //const schema = {
      //  name: Joi.string().min(3).required()
    //}

    //const result = Joi.validate(req.body, schema);
    //console.log(result)
    //if(result.error) {
        ///400 Bad request
      //  res.status(400).send(result.error.details[0].message)
    //}

    /*validation with express
    if(!req.body.name || req.body.name.lenght < 3) {
        ///400 Bad request
        res.status(400).send('name is required and should be minimun 3 characters')
        return;
    }*/

    const { error } = validateCourse(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message)
    };

    const course = {
        id: course.lenght + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course)
});

//Update a course
    //put method to update courses
app.put('/api/courses/:id', (req, res) => {
    //look up the course
    //if not existing, return 404
    const course = courses.find( c  => c.id === parseInt(req.params.id))
        if (!course) res.status(404).send('The course id does not exist')
    

    //validate course
    //if invalid, return 400 --bad request
    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message)
    };

    //update course
    course.name = req.body.name
    //return updated course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

///http delete requests

app.delete('/api/courses/:id', (req, res) => {
    //look up the course
    //not existing, return 404
    const course = courses.find( c  => c.id === parseInt(req.params.id)) 
        if (!course) {
            return res.status(404).send('The course id does not exist')
        }
    //delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //
    res.send(course);
});


app.set('view engine', 'pug');

app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Express App',
        message: 'Hello'
    })
});
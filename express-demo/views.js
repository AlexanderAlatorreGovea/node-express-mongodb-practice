//npm i pug
//interacts with views.js

const app = express();

app.set('view engine', 'pug');

app.set('views', './views');


///this will render what is in views/index.pug
    //will return Hello
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Express App',
        message: 'Hello'
    })
});
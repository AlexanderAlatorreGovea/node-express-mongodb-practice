//middleware function
//we can pass array and objects with this

app.use(express.urlencoded({ extended: true })) //key=value&key=value

//we create our static assets in public
//we can serve static content from the root of the file
//so we created localhost: 3000/readme.txt
app.use(express.static('public'));
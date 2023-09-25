const express = require ('express')
const app = express()

app.get ('/', (req, res) => res.$(document).ready(function(){
    $('.mais-btn').on('click', function(){
        $(this).parent().parent().find(".sinopse").toggleClass("active");
    });
}))
app.listen (3000, () => console.log('server ready'))





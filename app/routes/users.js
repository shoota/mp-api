// @URLMapping ('/users')
module.exports = {
    index: function(req, res){
        res.send('this is users');
    },

    show: function(req, res){
        res.send(req.params.user);
    },

    edit: function(req, res){
        res.send(403);
    }
};
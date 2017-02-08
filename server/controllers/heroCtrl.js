// Require DB
var db = require('./../massive');
// Show functions added to the db
console.log(Object.keys(db));
// console.log(Object.keys(db.init));
// console.log(Object.keys(db.hero));


// Init Table if doesn't exist
db.init.createHeroTable([], function(err, results){
  if (err){
    console.error(err);
  } else {
    console.log("Initialized Hero Table");
  }
})
// export Controller
module.exports = {
  create:function(req, res, next){
    db.hero.create_hero([
      req.body.name,
      req.body.origin,
      req.body.hometown,
      req.body.imageUrl
    ], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }else{

        res.send(results)
      }
    })
  },
  getHeroes:function(req, res){
    db.hero.read_heroes([], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results);
    })
  },
  getHero:function(req, res){
    db.hero.read_hero([req.params.heroId],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0){
        return res.status(404).send("No Hero Found")
      }
      return res.send(results[0]);
    })
  },
  update:function(req, res){
    db.hero.update_hero([
      req.params.heroId,
      req.body.name,
      req.body.origin,
      req.body.hometown,
      req.body.imageUrl
    ],
    function(err, results){
      if(err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results[0]);
    })
  },
  delete:function(req, res){
    db.hero.delete_hero([req.params.heroId], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0){
        return res.status(404).send("Hero Not Found");
      }
      res.send('Hero ' + results[0].name + ' is dead.');
    })
  }
}

var express = require('express');
var data = require('../data.json');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('home', {engagement: data.engagement});
});

router.get('/:engagement', function(req, res) {
  var query = req.params.engagement;
  var list = [];
  //Determine what issues have this type of engagement
  data.resources.forEach(function(resource) {
    if (resource.engagement.toLowerCase() == query) {
      var url = resource.issue
                .toLowerCase()
                .replace(/ /g,'-');
      var issue = {name: resource.issue, link: url}
      list.push(issue);
    }
  });
  res.render('issue', {issues: list, engagement: query})
});

router.get('/:engagement/:issue', function(req, res) {
  var issueQuery = req.params.issue;
  var engagementQuery = req.params.engagement
                        .replace(/-/g,' ');
  var list = [];
  data.resources.forEach(function(resource){
    if (issueQuery == resource.issue.toLowerCase() && engagementQuery == resource.engagement.toLowerCase()) {
      list.push(resource);
    }
  });
    res.render('list', {resources: list});
});

router.get('*', function(req, res) {
  res.send('Nothing to see here!');
});

module.exports = router;

var express = require('express');
var data = require('../data.json');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('home', {engagement: data.engagement});
});

router.get('/:engagement', function(req, res) {
  var query = req.params.engagement;
  var list = [];
  var uniqueList = [];
  //Determine what issues have this type of engagement
  data.resources.forEach(function(resource) {
    if (resource.engagement.toLowerCase() == query) {
      var url = resource.issue
                .toLowerCase()
                .replace(/ /g,'-');
      var issueName = resource.issue;
      list.push(issueName);
    }
  });

  list.filter(function(el, index, self) {
    return self.indexOf(el) == index;
  }).forEach(function(issue) {
    var url = issue
              .toLowerCase()
              .replace(/ /g,'-');
    var issueData = {name: issue, link: url};
    uniqueList.push(issueData);
  });

  res.render('issue', {issues: uniqueList, engagement: query})
});

router.get('/:engagement/:issue', function(req, res) {
  var issueQuery = req.params.issue
                   .replace(/-/g,' ');
  var engagementQuery = req.params.engagement
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

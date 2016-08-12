"use strict";
let _ = require('lodash');

var dummyData = [{"id":1,"first_name":"Thomas","last_name":"Stanley","email":"tstanley0@g.co"},
{"id":2,"first_name":"Keith","last_name":"Kim","email":"kkim1@usgs.gov"},
{"id":3,"first_name":"Donald","last_name":"Johnston","email":"djohnston2@globo.com"},
{"id":4,"first_name":"Jennifer","last_name":"Thomas","email":"jthomas3@sphinn.com"},
{"id":5,"first_name":"William","last_name":"Evans","email":"wevans4@prlog.org"},
{"id":6,"first_name":"Kathy","last_name":"Perkins","email":"kperkins5@nifty.com"},
{"id":7,"first_name":"Bonnie","last_name":"Gardner","email":"bgardner6@ovh.net"},
{"id":8,"first_name":"Charles","last_name":"Martin","email":"cmartin7@t-online.de"},
{"id":9,"first_name":"Ernest","last_name":"Flores","email":"eflores8@live.com"},
{"id":10,"first_name":"Lawrence","last_name":"Wilson","email":"lwilson9@networksolutions.com"},
{"id":11,"first_name":"Jacqueline","last_name":"Cunningham","email":"jcunninghama@independent.co.uk"},
{"id":12,"first_name":"Sarah","last_name":"Long","email":"slongb@wikia.com"},
{"id":13,"first_name":"Kenneth","last_name":"Wells","email":"kwellsc@delicious.com"},
{"id":14,"first_name":"Randy","last_name":"Boyd","email":"rboydd@narod.ru"},
{"id":15,"first_name":"Raymond","last_name":"Gray","email":"rgraye@nih.gov"},
{"id":16,"first_name":"Cynthia","last_name":"Morris","email":"cmorrisf@indiegogo.com"},
{"id":17,"first_name":"Richard","last_name":"Lawrence","email":"rlawrenceg@narod.ru"},
{"id":18,"first_name":"Matthew","last_name":"Ramirez","email":"mramirezh@wufoo.com"},
{"id":19,"first_name":"Michelle","last_name":"Grant","email":"mgranti@fotki.com"},
{"id":20,"first_name":"Betty","last_name":"Kennedy","email":"bkennedyj@diigo.com"},
{"id":21,"first_name":"Lori","last_name":"Cole","email":"lcolek@nytimes.com"},
{"id":22,"first_name":"Benjamin","last_name":"Snyder","email":"bsnyderl@npr.org"},
{"id":23,"first_name":"Tina","last_name":"Peterson","email":"tpetersonm@yale.edu"},
{"id":24,"first_name":"Howard","last_name":"Olson","email":"holsonn@salon.com"},
{"id":25,"first_name":"Matthew","last_name":"Reid","email":"mreido@nasa.gov"},
{"id":26,"first_name":"Julie","last_name":"Mason","email":"jmasonp@nytimes.com"},
{"id":27,"first_name":"Lois","last_name":"Lane","email":"llaneq@pagesperso-orange.fr"},
{"id":28,"first_name":"Jimmy","last_name":"Fox","email":"jfoxr@house.gov"},
{"id":29,"first_name":"Christina","last_name":"Perez","email":"cperezs@feedburner.com"},
{"id":30,"first_name":"Sharon","last_name":"Montgomery","email":"smontgomeryt@alexa.com"},
{"id":31,"first_name":"Tammy","last_name":"Grant","email":"tgrantu@craigslist.org"},
{"id":32,"first_name":"Victor","last_name":"Daniels","email":"vdanielsv@ucoz.ru"},
{"id":33,"first_name":"Billy","last_name":"Reed","email":"breedw@tinyurl.com"},
{"id":34,"first_name":"Kathy","last_name":"Pierce","email":"kpiercex@amazon.co.uk"},
{"id":35,"first_name":"Frank","last_name":"Taylor","email":"ftaylory@wikia.com"},
{"id":36,"first_name":"Kathy","last_name":"Morris","email":"kmorrisz@si.edu"},
{"id":37,"first_name":"Judy","last_name":"Stephens","email":"jstephens10@wsj.com"},
{"id":38,"first_name":"Eric","last_name":"Ryan","email":"eryan11@miibeian.gov.cn"},
{"id":39,"first_name":"Harry","last_name":"Austin","email":"haustin12@ucla.edu"},
{"id":40,"first_name":"Denise","last_name":"Knight","email":"dknight13@yelp.com"},
{"id":41,"first_name":"Janice","last_name":"Gilbert","email":"jgilbert14@ox.ac.uk"},
{"id":42,"first_name":"Daniel","last_name":"Gilbert","email":"dgilbert15@businessinsider.com"},
{"id":43,"first_name":"Judy","last_name":"Morris","email":"jmorris16@about.me"},
{"id":44,"first_name":"Cynthia","last_name":"Hudson","email":"chudson17@trellian.com"},
{"id":45,"first_name":"Denise","last_name":"Perkins","email":"dperkins18@tripod.com"},
{"id":46,"first_name":"Antonio","last_name":"Grant","email":"agrant19@tripadvisor.com"},
{"id":47,"first_name":"Katherine","last_name":"Nelson","email":"knelson1a@bing.com"},
{"id":48,"first_name":"Lois","last_name":"Jenkins","email":"ljenkins1b@engadget.com"},
{"id":49,"first_name":"Edward","last_name":"Robinson","email":"erobinson1c@shareasale.com"},
{"id":50,"first_name":"Ryan","last_name":"Owens","email":"rowens1d@columbia.edu"},
{"id":51,"first_name":"Doris","last_name":"White","email":"dwhite1e@upenn.edu"},
{"id":52,"first_name":"Martin","last_name":"Kennedy","email":"mkennedy1f@ted.com"},
{"id":53,"first_name":"Lois","last_name":"Anderson","email":"landerson1g@amazon.co.jp"},
{"id":54,"first_name":"Beverly","last_name":"Mason","email":"bmason1h@bizjournals.com"},
{"id":55,"first_name":"Anna","last_name":"Burke","email":"aburke1i@sitemeter.com"},
{"id":56,"first_name":"Marie","last_name":"James","email":"mjames1j@com.com"},
{"id":57,"first_name":"Jeremy","last_name":"Spencer","email":"jspencer1k@uiuc.edu"},
{"id":58,"first_name":"Edward","last_name":"Brown","email":"ebrown1l@sun.com"},
{"id":59,"first_name":"Kimberly","last_name":"Carpenter","email":"kcarpenter1m@zdnet.com"},
{"id":60,"first_name":"Gloria","last_name":"Fowler","email":"gfowler1n@go.com"},
{"id":61,"first_name":"Angela","last_name":"Ray","email":"aray1o@patch.com"},
{"id":62,"first_name":"Susan","last_name":"Lane","email":"slane1p@networksolutions.com"},
{"id":63,"first_name":"Nicholas","last_name":"Black","email":"nblack1q@lycos.com"},
{"id":64,"first_name":"Antonio","last_name":"Turner","email":"aturner1r@eventbrite.com"},
{"id":65,"first_name":"Diana","last_name":"Gilbert","email":"dgilbert1s@berkeley.edu"},
{"id":66,"first_name":"Steve","last_name":"Gonzalez","email":"sgonzalez1t@nhs.uk"},
{"id":67,"first_name":"Russell","last_name":"Ellis","email":"rellis1u@bandcamp.com"},
{"id":68,"first_name":"Kevin","last_name":"Weaver","email":"kweaver1v@sohu.com"},
{"id":69,"first_name":"Irene","last_name":"Kim","email":"ikim1w@amazonaws.com"},
{"id":70,"first_name":"Scott","last_name":"Gomez","email":"sgomez1x@archive.org"},
{"id":71,"first_name":"Eric","last_name":"Moreno","email":"emoreno1y@webs.com"},
{"id":72,"first_name":"Adam","last_name":"Murray","email":"amurray1z@ask.com"},
{"id":73,"first_name":"Angela","last_name":"Butler","email":"abutler20@opensource.org"},
{"id":74,"first_name":"David","last_name":"Ray","email":"dray21@yandex.ru"},
{"id":75,"first_name":"Dorothy","last_name":"Alexander","email":"dalexander22@shareasale.com"},
{"id":76,"first_name":"Lillian","last_name":"Garza","email":"lgarza23@weebly.com"},
{"id":77,"first_name":"Marilyn","last_name":"Mason","email":"mmason24@shop-pro.jp"},
{"id":78,"first_name":"Melissa","last_name":"Green","email":"mgreen25@surveymonkey.com"},
{"id":79,"first_name":"Elizabeth","last_name":"Bryant","email":"ebryant26@github.io"},
{"id":80,"first_name":"Larry","last_name":"Castillo","email":"lcastillo27@hexun.com"},
{"id":81,"first_name":"Emily","last_name":"Tucker","email":"etucker28@geocities.jp"},
{"id":82,"first_name":"Roger","last_name":"Woods","email":"rwoods29@mediafire.com"},
{"id":83,"first_name":"Denise","last_name":"Hansen","email":"dhansen2a@adobe.com"},
{"id":84,"first_name":"Ruby","last_name":"Rivera","email":"rrivera2b@vk.com"},
{"id":85,"first_name":"Gary","last_name":"Perry","email":"gperry2c@oaic.gov.au"},
{"id":86,"first_name":"Doris","last_name":"Ford","email":"dford2d@live.com"},
{"id":87,"first_name":"Anna","last_name":"Elliott","email":"aelliott2e@jiathis.com"},
{"id":88,"first_name":"Samuel","last_name":"Medina","email":"smedina2f@constantcontact.com"},
{"id":89,"first_name":"Julie","last_name":"Banks","email":"jbanks2g@fastcompany.com"},
{"id":90,"first_name":"Kathleen","last_name":"Reyes","email":"kreyes2h@techcrunch.com"},
{"id":91,"first_name":"Melissa","last_name":"Campbell","email":"mcampbell2i@naver.com"},
{"id":92,"first_name":"Samuel","last_name":"Collins","email":"scollins2j@topsy.com"},
{"id":93,"first_name":"Frances","last_name":"Barnes","email":"fbarnes2k@bbc.co.uk"},
{"id":94,"first_name":"Juan","last_name":"Bowman","email":"jbowman2l@unc.edu"},
{"id":95,"first_name":"Tina","last_name":"Coleman","email":"tcoleman2m@google.com.hk"},
{"id":96,"first_name":"Robin","last_name":"Wright","email":"rwright2n@irs.gov"},
{"id":97,"first_name":"Ralph","last_name":"Coleman","email":"rcoleman2o@google.com.hk"},
{"id":98,"first_name":"Helen","last_name":"Montgomery","email":"hmontgomery2p@statcounter.com"},
{"id":99,"first_name":"George","last_name":"Thompson","email":"gthompson2q@marketwatch.com"},
{"id":100,"first_name":"Benjamin","last_name":"Henry","email":"bhenry2r@baidu.com"}

];


/**
 * - Parse Db
 * - NOT part of main algorithm
 * - takes a collection of people and randomly generates preferences for them
 * - used for testing
 */
function parseDb(db) {
  let output = {};
  let i = 0;
  // until everyone has generated preferences
  while(i < db.length) {
    // init person preference object
    output[db[i].id] = {
      name: db[i].first_name + " " +  db[i].last_name,
      id: db[i].id,
      choices: []
    };	
    // generate a rank for every other person (j reps ids, so start at 1)
    // keep track of unique/used weights
    let usedPrefs = [];
    for (let j = 1; j < db.length + 1; j++) {
      if(j != db[i].id) {
        let randomPref;
        // used to keep track of unique preferences (nodups)
        let newPref = false;
        while(!newPref) {
          randomPref = Math.floor(Math.random()* db.length);
          if(usedPrefs.indexOf(randomPref) == -1) {
            usedPrefs.push(randomPref);
            newPref = true;
          } 
        }
        // create new match and preference weight
        output[db[i].id].choices.push({
          id: j,
          strength: randomPref
        });
      }
    };
    output[db[i].id].choices = _.orderBy(output[db[i].id].choices,['strength'],['desc']);

    i++;
  };	
  return output; 
}


module.exports = parseDb(dummyData);
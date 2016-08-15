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
    output[db[i].id].choices = _.orderBy(output[db[i].id].choices,['strength'],['desc']);git 
    i++;
  };	

  return output; 
}




//module.exports = parseDb(dummyData);


let staticDb = {
  "1": {
    "email": "jpopolo@actionnewengland.org",
    "choices": [
      {
        "id": 32,
        "strength": 117
      },
      {
        "id": 28,
        "strength": 115
      },
      {
        "id": 67,
        "strength": 114
      },
      {
        "id": 7,
        "strength": 113
      },
      {
        "id": 19,
        "strength": 112
      },
      {
        "id": 108,
        "strength": 111
      },
      {
        "id": 47,
        "strength": 109
      },
      {
        "id": 12,
        "strength": 108
      },
      {
        "id": 71,
        "strength": 107
      },
      {
        "id": 61,
        "strength": 106
      },
      {
        "id": 70,
        "strength": 105
      },
      {
        "id": 80,
        "strength": 104
      },
      {
        "id": 52,
        "strength": 103
      },
      {
        "id": 72,
        "strength": 102
      },
      {
        "id": 48,
        "strength": 100
      },
      {
        "id": 102,
        "strength": 99
      },
      {
        "id": 50,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 75,
        "strength": 96
      },
      {
        "id": 95,
        "strength": 95
      },
      {
        "id": 44,
        "strength": 94
      },
      {
        "id": 25,
        "strength": 93
      },
      {
        "id": 110,
        "strength": 92
      },
      {
        "id": 11,
        "strength": 91
      },
      {
        "id": 59,
        "strength": 90
      },
      {
        "id": 41,
        "strength": 89
      },
      {
        "id": 103,
        "strength": 88
      },
      {
        "id": 63,
        "strength": 87
      },
      {
        "id": 78,
        "strength": 86
      },
      {
        "id": 27,
        "strength": 85
      },
      {
        "id": 60,
        "strength": 84
      },
      {
        "id": 33,
        "strength": 83
      },
      {
        "id": 35,
        "strength": 82
      },
      {
        "id": 85,
        "strength": 81
      },
      {
        "id": 16,
        "strength": 80
      },
      {
        "id": 2,
        "strength": 79
      },
      {
        "id": 13,
        "strength": 78
      },
      {
        "id": 86,
        "strength": 77
      },
      {
        "id": 101,
        "strength": 76
      },
      {
        "id": 20,
        "strength": 74
      },
      {
        "id": 43,
        "strength": 73
      },
      {
        "id": 30,
        "strength": 72
      },
      {
        "id": 5,
        "strength": 71
      },
      {
        "id": 23,
        "strength": 70
      },
      {
        "id": 68,
        "strength": 69
      },
      {
        "id": 9,
        "strength": 68
      },
      {
        "id": 106,
        "strength": 67
      },
      {
        "id": 15,
        "strength": 66
      },
      {
        "id": 79,
        "strength": 65
      },
      {
        "id": 91,
        "strength": 64
      },
      {
        "id": 73,
        "strength": 63
      },
      {
        "id": 58,
        "strength": 62
      },
      {
        "id": 112,
        "strength": 61
      },
      {
        "id": 49,
        "strength": 60
      },
      {
        "id": 26,
        "strength": 59
      },
      {
        "id": 98,
        "strength": 58
      },
      {
        "id": 45,
        "strength": 57
      },
      {
        "id": 64,
        "strength": 56
      },
      {
        "id": 109,
        "strength": 55
      },
      {
        "id": 69,
        "strength": 54
      },
      {
        "id": 55,
        "strength": 53
      },
      {
        "id": 54,
        "strength": 52
      },
      {
        "id": 34,
        "strength": 51
      },
      {
        "id": 24,
        "strength": 50
      },
      {
        "id": 39,
        "strength": 49
      },
      {
        "id": 104,
        "strength": 48
      },
      {
        "id": 40,
        "strength": 47
      },
      {
        "id": 46,
        "strength": 46
      },
      {
        "id": 53,
        "strength": 45
      },
      {
        "id": 36,
        "strength": 44
      },
      {
        "id": 3,
        "strength": 43
      },
      {
        "id": 65,
        "strength": 42
      },
      {
        "id": 14,
        "strength": 41
      },
      {
        "id": 57,
        "strength": 40
      },
      {
        "id": 66,
        "strength": 39
      },
      {
        "id": 4,
        "strength": 38
      },
      {
        "id": 17,
        "strength": 37
      },
      {
        "id": 37,
        "strength": 36
      },
      {
        "id": 8,
        "strength": 35
      },
      {
        "id": 21,
        "strength": 34
      },
      {
        "id": 82,
        "strength": 33
      },
      {
        "id": 31,
        "strength": 32
      },
      {
        "id": 74,
        "strength": 31
      },
      {
        "id": 18,
        "strength": 30
      },
      {
        "id": 56,
        "strength": 29
      },
      {
        "id": 10,
        "strength": 28
      },
      {
        "id": 29,
        "strength": 27
      },
      {
        "id": 111,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 1
  },
  "2": {
    "email": "sharon.sappington@wsbdc.org",
    "choices": [
      {
        "id": 95,
        "strength": 117
      },
      {
        "id": 80,
        "strength": 116
      },
      {
        "id": 52,
        "strength": 115
      },
      {
        "id": 50,
        "strength": 113
      },
      {
        "id": 47,
        "strength": 112
      },
      {
        "id": 71,
        "strength": 111
      },
      {
        "id": 59,
        "strength": 110
      },
      {
        "id": 78,
        "strength": 109
      },
      {
        "id": 16,
        "strength": 108
      },
      {
        "id": 20,
        "strength": 106
      },
      {
        "id": 28,
        "strength": 105
      },
      {
        "id": 32,
        "strength": 104
      },
      {
        "id": 23,
        "strength": 103
      },
      {
        "id": 102,
        "strength": 102
      },
      {
        "id": 42,
        "strength": 101
      },
      {
        "id": 79,
        "strength": 100
      },
      {
        "id": 12,
        "strength": 99
      },
      {
        "id": 75,
        "strength": 98
      },
      {
        "id": 61,
        "strength": 97
      },
      {
        "id": 25,
        "strength": 96
      },
      {
        "id": 70,
        "strength": 95
      },
      {
        "id": 11,
        "strength": 94
      },
      {
        "id": 54,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 46,
        "strength": 91
      },
      {
        "id": 103,
        "strength": 90
      },
      {
        "id": 3,
        "strength": 89
      },
      {
        "id": 27,
        "strength": 88
      },
      {
        "id": 82,
        "strength": 87
      },
      {
        "id": 19,
        "strength": 86
      },
      {
        "id": 33,
        "strength": 85
      },
      {
        "id": 35,
        "strength": 84
      },
      {
        "id": 85,
        "strength": 83
      },
      {
        "id": 13,
        "strength": 82
      },
      {
        "id": 72,
        "strength": 81
      },
      {
        "id": 51,
        "strength": 80
      },
      {
        "id": 101,
        "strength": 79
      },
      {
        "id": 48,
        "strength": 77
      },
      {
        "id": 43,
        "strength": 76
      },
      {
        "id": 30,
        "strength": 75
      },
      {
        "id": 67,
        "strength": 74
      },
      {
        "id": 106,
        "strength": 73
      },
      {
        "id": 15,
        "strength": 72
      },
      {
        "id": 88,
        "strength": 71
      },
      {
        "id": 49,
        "strength": 70
      },
      {
        "id": 44,
        "strength": 69
      },
      {
        "id": 26,
        "strength": 68
      },
      {
        "id": 98,
        "strength": 67
      },
      {
        "id": 109,
        "strength": 66
      },
      {
        "id": 1,
        "strength": 65
      },
      {
        "id": 55,
        "strength": 64
      },
      {
        "id": 110,
        "strength": 63
      },
      {
        "id": 34,
        "strength": 62
      },
      {
        "id": 39,
        "strength": 61
      },
      {
        "id": 7,
        "strength": 60
      },
      {
        "id": 40,
        "strength": 59
      },
      {
        "id": 41,
        "strength": 58
      },
      {
        "id": 53,
        "strength": 57
      },
      {
        "id": 36,
        "strength": 56
      },
      {
        "id": 63,
        "strength": 55
      },
      {
        "id": 57,
        "strength": 54
      },
      {
        "id": 66,
        "strength": 53
      },
      {
        "id": 37,
        "strength": 52
      },
      {
        "id": 8,
        "strength": 51
      },
      {
        "id": 60,
        "strength": 50
      },
      {
        "id": 18,
        "strength": 49
      },
      {
        "id": 10,
        "strength": 48
      },
      {
        "id": 29,
        "strength": 47
      },
      {
        "id": 86,
        "strength": 46
      },
      {
        "id": 96,
        "strength": 45
      },
      {
        "id": 108,
        "strength": 44
      },
      {
        "id": 5,
        "strength": 42
      },
      {
        "id": 68,
        "strength": 41
      },
      {
        "id": 9,
        "strength": 40
      },
      {
        "id": 91,
        "strength": 39
      },
      {
        "id": 73,
        "strength": 38
      },
      {
        "id": 58,
        "strength": 37
      },
      {
        "id": 99,
        "strength": 36
      },
      {
        "id": 112,
        "strength": 35
      },
      {
        "id": 100,
        "strength": 34
      },
      {
        "id": 93,
        "strength": 33
      },
      {
        "id": 45,
        "strength": 32
      },
      {
        "id": 64,
        "strength": 31
      },
      {
        "id": 38,
        "strength": 30
      },
      {
        "id": 69,
        "strength": 29
      },
      {
        "id": 24,
        "strength": 28
      },
      {
        "id": 84,
        "strength": 27
      },
      {
        "id": 90,
        "strength": 26
      },
      {
        "id": 89,
        "strength": 25
      },
      {
        "id": 65,
        "strength": 24
      },
      {
        "id": 14,
        "strength": 23
      },
      {
        "id": 77,
        "strength": 22
      },
      {
        "id": 4,
        "strength": 21
      },
      {
        "id": 17,
        "strength": 20
      },
      {
        "id": 21,
        "strength": 19
      },
      {
        "id": 31,
        "strength": 18
      },
      {
        "id": 87,
        "strength": 17
      },
      {
        "id": 74,
        "strength": 16
      },
      {
        "id": 83,
        "strength": 15
      },
      {
        "id": 97,
        "strength": 14
      },
      {
        "id": 81,
        "strength": 13
      },
      {
        "id": 92,
        "strength": 12
      },
      {
        "id": 76,
        "strength": 11
      },
      {
        "id": 56,
        "strength": 10
      },
      {
        "id": 111,
        "strength": 9
      },
      {
        "id": 62,
        "strength": 8
      },
      {
        "id": 22,
        "strength": 7
      },
      {
        "id": 107,
        "strength": 6
      },
      {
        "id": 105,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 2
  },
  "3": {
    "email": "monica.alcoz@utsa.edu",
    "choices": [
      {
        "id": 78,
        "strength": 119
      },
      {
        "id": 95,
        "strength": 117
      },
      {
        "id": 54,
        "strength": 116
      },
      {
        "id": 52,
        "strength": 115
      },
      {
        "id": 102,
        "strength": 113
      },
      {
        "id": 47,
        "strength": 112
      },
      {
        "id": 79,
        "strength": 111
      },
      {
        "id": 44,
        "strength": 110
      },
      {
        "id": 98,
        "strength": 109
      },
      {
        "id": 80,
        "strength": 108
      },
      {
        "id": 82,
        "strength": 107
      },
      {
        "id": 16,
        "strength": 106
      },
      {
        "id": 101,
        "strength": 105
      },
      {
        "id": 48,
        "strength": 103
      },
      {
        "id": 50,
        "strength": 102
      },
      {
        "id": 75,
        "strength": 101
      },
      {
        "id": 110,
        "strength": 100
      },
      {
        "id": 104,
        "strength": 99
      },
      {
        "id": 103,
        "strength": 98
      },
      {
        "id": 35,
        "strength": 97
      },
      {
        "id": 13,
        "strength": 96
      },
      {
        "id": 51,
        "strength": 95
      },
      {
        "id": 20,
        "strength": 93
      },
      {
        "id": 28,
        "strength": 92
      },
      {
        "id": 43,
        "strength": 91
      },
      {
        "id": 32,
        "strength": 90
      },
      {
        "id": 23,
        "strength": 89
      },
      {
        "id": 15,
        "strength": 88
      },
      {
        "id": 42,
        "strength": 87
      },
      {
        "id": 88,
        "strength": 86
      },
      {
        "id": 58,
        "strength": 85
      },
      {
        "id": 49,
        "strength": 84
      },
      {
        "id": 71,
        "strength": 83
      },
      {
        "id": 61,
        "strength": 82
      },
      {
        "id": 26,
        "strength": 81
      },
      {
        "id": 25,
        "strength": 80
      },
      {
        "id": 70,
        "strength": 79
      },
      {
        "id": 11,
        "strength": 78
      },
      {
        "id": 34,
        "strength": 77
      },
      {
        "id": 59,
        "strength": 76
      },
      {
        "id": 46,
        "strength": 75
      },
      {
        "id": 36,
        "strength": 74
      },
      {
        "id": 27,
        "strength": 73
      },
      {
        "id": 66,
        "strength": 72
      },
      {
        "id": 37,
        "strength": 71
      },
      {
        "id": 8,
        "strength": 70
      },
      {
        "id": 19,
        "strength": 69
      },
      {
        "id": 60,
        "strength": 68
      },
      {
        "id": 97,
        "strength": 67
      },
      {
        "id": 2,
        "strength": 66
      },
      {
        "id": 10,
        "strength": 65
      },
      {
        "id": 29,
        "strength": 64
      },
      {
        "id": 96,
        "strength": 63
      },
      {
        "id": 105,
        "strength": 62
      },
      {
        "id": 30,
        "strength": 60
      },
      {
        "id": 67,
        "strength": 59
      },
      {
        "id": 106,
        "strength": 58
      },
      {
        "id": 12,
        "strength": 57
      },
      {
        "id": 109,
        "strength": 56
      },
      {
        "id": 55,
        "strength": 55
      },
      {
        "id": 24,
        "strength": 54
      },
      {
        "id": 39,
        "strength": 53
      },
      {
        "id": 7,
        "strength": 52
      },
      {
        "id": 40,
        "strength": 51
      },
      {
        "id": 53,
        "strength": 50
      },
      {
        "id": 63,
        "strength": 49
      },
      {
        "id": 57,
        "strength": 48
      },
      {
        "id": 31,
        "strength": 47
      },
      {
        "id": 74,
        "strength": 46
      },
      {
        "id": 18,
        "strength": 45
      },
      {
        "id": 33,
        "strength": 44
      },
      {
        "id": 85,
        "strength": 43
      },
      {
        "id": 86,
        "strength": 42
      },
      {
        "id": 72,
        "strength": 41
      },
      {
        "id": 22,
        "strength": 40
      },
      {
        "id": 108,
        "strength": 39
      },
      {
        "id": 5,
        "strength": 37
      },
      {
        "id": 68,
        "strength": 36
      },
      {
        "id": 9,
        "strength": 35
      },
      {
        "id": 91,
        "strength": 34
      },
      {
        "id": 73,
        "strength": 33
      },
      {
        "id": 99,
        "strength": 32
      },
      {
        "id": 112,
        "strength": 31
      },
      {
        "id": 100,
        "strength": 30
      },
      {
        "id": 93,
        "strength": 29
      },
      {
        "id": 45,
        "strength": 28
      },
      {
        "id": 64,
        "strength": 27
      },
      {
        "id": 38,
        "strength": 26
      },
      {
        "id": 69,
        "strength": 25
      },
      {
        "id": 1,
        "strength": 24
      },
      {
        "id": 84,
        "strength": 23
      },
      {
        "id": 90,
        "strength": 22
      },
      {
        "id": 41,
        "strength": 21
      },
      {
        "id": 89,
        "strength": 20
      },
      {
        "id": 65,
        "strength": 19
      },
      {
        "id": 14,
        "strength": 18
      },
      {
        "id": 77,
        "strength": 17
      },
      {
        "id": 4,
        "strength": 16
      },
      {
        "id": 17,
        "strength": 15
      },
      {
        "id": 21,
        "strength": 14
      },
      {
        "id": 87,
        "strength": 13
      },
      {
        "id": 83,
        "strength": 12
      },
      {
        "id": 81,
        "strength": 11
      },
      {
        "id": 92,
        "strength": 10
      },
      {
        "id": 76,
        "strength": 9
      },
      {
        "id": 56,
        "strength": 8
      },
      {
        "id": 111,
        "strength": 7
      },
      {
        "id": 62,
        "strength": 6
      },
      {
        "id": 107,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 3
  },
  "4": {
    "email": "omar.llamas@promexico.gob.mx",
    "choices": [
      {
        "id": 61,
        "strength": 116
      },
      {
        "id": 78,
        "strength": 115
      },
      {
        "id": 48,
        "strength": 113
      },
      {
        "id": 70,
        "strength": 112
      },
      {
        "id": 110,
        "strength": 111
      },
      {
        "id": 52,
        "strength": 110
      },
      {
        "id": 101,
        "strength": 109
      },
      {
        "id": 28,
        "strength": 107
      },
      {
        "id": 67,
        "strength": 106
      },
      {
        "id": 32,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 50,
        "strength": 103
      },
      {
        "id": 47,
        "strength": 102
      },
      {
        "id": 79,
        "strength": 101
      },
      {
        "id": 12,
        "strength": 100
      },
      {
        "id": 75,
        "strength": 99
      },
      {
        "id": 95,
        "strength": 98
      },
      {
        "id": 71,
        "strength": 97
      },
      {
        "id": 44,
        "strength": 96
      },
      {
        "id": 98,
        "strength": 95
      },
      {
        "id": 80,
        "strength": 94
      },
      {
        "id": 54,
        "strength": 93
      },
      {
        "id": 7,
        "strength": 92
      },
      {
        "id": 103,
        "strength": 91
      },
      {
        "id": 63,
        "strength": 90
      },
      {
        "id": 82,
        "strength": 89
      },
      {
        "id": 19,
        "strength": 88
      },
      {
        "id": 60,
        "strength": 87
      },
      {
        "id": 86,
        "strength": 86
      },
      {
        "id": 72,
        "strength": 85
      },
      {
        "id": 108,
        "strength": 84
      },
      {
        "id": 20,
        "strength": 82
      },
      {
        "id": 43,
        "strength": 81
      },
      {
        "id": 30,
        "strength": 80
      },
      {
        "id": 5,
        "strength": 79
      },
      {
        "id": 23,
        "strength": 78
      },
      {
        "id": 68,
        "strength": 77
      },
      {
        "id": 9,
        "strength": 76
      },
      {
        "id": 106,
        "strength": 75
      },
      {
        "id": 15,
        "strength": 74
      },
      {
        "id": 42,
        "strength": 73
      },
      {
        "id": 91,
        "strength": 72
      },
      {
        "id": 73,
        "strength": 71
      },
      {
        "id": 58,
        "strength": 70
      },
      {
        "id": 112,
        "strength": 69
      },
      {
        "id": 49,
        "strength": 68
      },
      {
        "id": 26,
        "strength": 67
      },
      {
        "id": 45,
        "strength": 66
      },
      {
        "id": 64,
        "strength": 65
      },
      {
        "id": 25,
        "strength": 64
      },
      {
        "id": 109,
        "strength": 63
      },
      {
        "id": 69,
        "strength": 62
      },
      {
        "id": 1,
        "strength": 61
      },
      {
        "id": 55,
        "strength": 60
      },
      {
        "id": 11,
        "strength": 59
      },
      {
        "id": 34,
        "strength": 58
      },
      {
        "id": 59,
        "strength": 57
      },
      {
        "id": 24,
        "strength": 56
      },
      {
        "id": 39,
        "strength": 55
      },
      {
        "id": 104,
        "strength": 54
      },
      {
        "id": 40,
        "strength": 53
      },
      {
        "id": 41,
        "strength": 52
      },
      {
        "id": 46,
        "strength": 51
      },
      {
        "id": 53,
        "strength": 50
      },
      {
        "id": 36,
        "strength": 49
      },
      {
        "id": 3,
        "strength": 48
      },
      {
        "id": 65,
        "strength": 47
      },
      {
        "id": 27,
        "strength": 46
      },
      {
        "id": 14,
        "strength": 45
      },
      {
        "id": 57,
        "strength": 44
      },
      {
        "id": 66,
        "strength": 43
      },
      {
        "id": 17,
        "strength": 42
      },
      {
        "id": 37,
        "strength": 41
      },
      {
        "id": 8,
        "strength": 40
      },
      {
        "id": 21,
        "strength": 39
      },
      {
        "id": 31,
        "strength": 38
      },
      {
        "id": 74,
        "strength": 37
      },
      {
        "id": 18,
        "strength": 36
      },
      {
        "id": 33,
        "strength": 35
      },
      {
        "id": 35,
        "strength": 34
      },
      {
        "id": 85,
        "strength": 33
      },
      {
        "id": 56,
        "strength": 32
      },
      {
        "id": 16,
        "strength": 31
      },
      {
        "id": 2,
        "strength": 30
      },
      {
        "id": 10,
        "strength": 29
      },
      {
        "id": 29,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 13,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 4
  },
  "5": {
    "email": "ashley.zuelke@trade.gov",
    "choices": [
      {
        "id": 19,
        "strength": 116
      },
      {
        "id": 48,
        "strength": 113
      },
      {
        "id": 28,
        "strength": 112
      },
      {
        "id": 67,
        "strength": 111
      },
      {
        "id": 32,
        "strength": 110
      },
      {
        "id": 102,
        "strength": 109
      },
      {
        "id": 50,
        "strength": 108
      },
      {
        "id": 47,
        "strength": 107
      },
      {
        "id": 12,
        "strength": 106
      },
      {
        "id": 75,
        "strength": 105
      },
      {
        "id": 95,
        "strength": 104
      },
      {
        "id": 71,
        "strength": 103
      },
      {
        "id": 61,
        "strength": 102
      },
      {
        "id": 44,
        "strength": 101
      },
      {
        "id": 98,
        "strength": 100
      },
      {
        "id": 70,
        "strength": 99
      },
      {
        "id": 55,
        "strength": 98
      },
      {
        "id": 110,
        "strength": 97
      },
      {
        "id": 80,
        "strength": 96
      },
      {
        "id": 7,
        "strength": 95
      },
      {
        "id": 104,
        "strength": 94
      },
      {
        "id": 103,
        "strength": 93
      },
      {
        "id": 63,
        "strength": 92
      },
      {
        "id": 78,
        "strength": 91
      },
      {
        "id": 60,
        "strength": 90
      },
      {
        "id": 74,
        "strength": 89
      },
      {
        "id": 85,
        "strength": 88
      },
      {
        "id": 52,
        "strength": 87
      },
      {
        "id": 56,
        "strength": 86
      },
      {
        "id": 86,
        "strength": 85
      },
      {
        "id": 72,
        "strength": 84
      },
      {
        "id": 51,
        "strength": 83
      },
      {
        "id": 108,
        "strength": 82
      },
      {
        "id": 101,
        "strength": 81
      },
      {
        "id": 20,
        "strength": 79
      },
      {
        "id": 43,
        "strength": 78
      },
      {
        "id": 30,
        "strength": 77
      },
      {
        "id": 23,
        "strength": 76
      },
      {
        "id": 68,
        "strength": 75
      },
      {
        "id": 9,
        "strength": 74
      },
      {
        "id": 106,
        "strength": 73
      },
      {
        "id": 15,
        "strength": 72
      },
      {
        "id": 42,
        "strength": 71
      },
      {
        "id": 79,
        "strength": 70
      },
      {
        "id": 91,
        "strength": 69
      },
      {
        "id": 73,
        "strength": 68
      },
      {
        "id": 58,
        "strength": 67
      },
      {
        "id": 112,
        "strength": 66
      },
      {
        "id": 49,
        "strength": 65
      },
      {
        "id": 26,
        "strength": 64
      },
      {
        "id": 45,
        "strength": 63
      },
      {
        "id": 64,
        "strength": 62
      },
      {
        "id": 25,
        "strength": 61
      },
      {
        "id": 109,
        "strength": 60
      },
      {
        "id": 69,
        "strength": 59
      },
      {
        "id": 1,
        "strength": 58
      },
      {
        "id": 11,
        "strength": 57
      },
      {
        "id": 54,
        "strength": 56
      },
      {
        "id": 34,
        "strength": 55
      },
      {
        "id": 59,
        "strength": 54
      },
      {
        "id": 24,
        "strength": 53
      },
      {
        "id": 39,
        "strength": 52
      },
      {
        "id": 40,
        "strength": 51
      },
      {
        "id": 41,
        "strength": 50
      },
      {
        "id": 46,
        "strength": 49
      },
      {
        "id": 53,
        "strength": 48
      },
      {
        "id": 36,
        "strength": 47
      },
      {
        "id": 3,
        "strength": 46
      },
      {
        "id": 65,
        "strength": 45
      },
      {
        "id": 27,
        "strength": 44
      },
      {
        "id": 14,
        "strength": 43
      },
      {
        "id": 57,
        "strength": 42
      },
      {
        "id": 66,
        "strength": 41
      },
      {
        "id": 4,
        "strength": 40
      },
      {
        "id": 17,
        "strength": 39
      },
      {
        "id": 37,
        "strength": 38
      },
      {
        "id": 8,
        "strength": 37
      },
      {
        "id": 21,
        "strength": 36
      },
      {
        "id": 82,
        "strength": 35
      },
      {
        "id": 31,
        "strength": 34
      },
      {
        "id": 18,
        "strength": 33
      },
      {
        "id": 33,
        "strength": 32
      },
      {
        "id": 35,
        "strength": 31
      },
      {
        "id": 16,
        "strength": 30
      },
      {
        "id": 2,
        "strength": 29
      },
      {
        "id": 10,
        "strength": 28
      },
      {
        "id": 29,
        "strength": 27
      },
      {
        "id": 111,
        "strength": 26
      },
      {
        "id": 13,
        "strength": 25
      },
      {
        "id": 22,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 5
  },
  "6": {
    "email": "aerlinger@americancouncils.org",
    "choices": [
      {
        "id": 19,
        "strength": 115
      },
      {
        "id": 32,
        "strength": 113
      },
      {
        "id": 98,
        "strength": 112
      },
      {
        "id": 55,
        "strength": 111
      },
      {
        "id": 85,
        "strength": 110
      },
      {
        "id": 51,
        "strength": 109
      },
      {
        "id": 48,
        "strength": 107
      },
      {
        "id": 28,
        "strength": 106
      },
      {
        "id": 67,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 15,
        "strength": 103
      },
      {
        "id": 50,
        "strength": 102
      },
      {
        "id": 47,
        "strength": 101
      },
      {
        "id": 79,
        "strength": 100
      },
      {
        "id": 12,
        "strength": 99
      },
      {
        "id": 75,
        "strength": 98
      },
      {
        "id": 95,
        "strength": 97
      },
      {
        "id": 71,
        "strength": 96
      },
      {
        "id": 61,
        "strength": 95
      },
      {
        "id": 44,
        "strength": 94
      },
      {
        "id": 70,
        "strength": 93
      },
      {
        "id": 110,
        "strength": 92
      },
      {
        "id": 80,
        "strength": 91
      },
      {
        "id": 54,
        "strength": 90
      },
      {
        "id": 7,
        "strength": 89
      },
      {
        "id": 104,
        "strength": 88
      },
      {
        "id": 103,
        "strength": 87
      },
      {
        "id": 63,
        "strength": 86
      },
      {
        "id": 78,
        "strength": 85
      },
      {
        "id": 82,
        "strength": 84
      },
      {
        "id": 60,
        "strength": 83
      },
      {
        "id": 52,
        "strength": 82
      },
      {
        "id": 86,
        "strength": 81
      },
      {
        "id": 72,
        "strength": 80
      },
      {
        "id": 108,
        "strength": 79
      },
      {
        "id": 101,
        "strength": 78
      },
      {
        "id": 23,
        "strength": 76.5
      },
      {
        "id": 105,
        "strength": 75.5
      },
      {
        "id": 5,
        "strength": 74.5
      },
      {
        "id": 8,
        "strength": 73.5
      },
      {
        "id": 20,
        "strength": 72.5
      },
      {
        "id": 41,
        "strength": 71.5
      },
      {
        "id": 38,
        "strength": 70.5
      },
      {
        "id": 106,
        "strength": 69.5
      },
      {
        "id": 43,
        "strength": 68.5
      },
      {
        "id": 107,
        "strength": 67.5
      },
      {
        "id": 1,
        "strength": 66.5
      },
      {
        "id": 30,
        "strength": 65.5
      },
      {
        "id": 34,
        "strength": 64.5
      },
      {
        "id": 96,
        "strength": 63.5
      },
      {
        "id": 62,
        "strength": 62.5
      },
      {
        "id": 111,
        "strength": 61.5
      },
      {
        "id": 29,
        "strength": 60.5
      },
      {
        "id": 56,
        "strength": 59.5
      },
      {
        "id": 92,
        "strength": 58.5
      },
      {
        "id": 81,
        "strength": 57.5
      },
      {
        "id": 18,
        "strength": 56.5
      },
      {
        "id": 87,
        "strength": 55.5
      },
      {
        "id": 17,
        "strength": 54.5
      },
      {
        "id": 66,
        "strength": 53.5
      },
      {
        "id": 57,
        "strength": 52.5
      },
      {
        "id": 27,
        "strength": 51.5
      },
      {
        "id": 65,
        "strength": 50.5
      },
      {
        "id": 36,
        "strength": 49.5
      },
      {
        "id": 46,
        "strength": 48.5
      },
      {
        "id": 90,
        "strength": 47.5
      },
      {
        "id": 84,
        "strength": 46.5
      },
      {
        "id": 59,
        "strength": 45.5
      },
      {
        "id": 25,
        "strength": 44.5
      },
      {
        "id": 100,
        "strength": 43.5
      },
      {
        "id": 93,
        "strength": 42.5
      },
      {
        "id": 49,
        "strength": 41.5
      },
      {
        "id": 99,
        "strength": 40.5
      },
      {
        "id": 88,
        "strength": 39.5
      },
      {
        "id": 91,
        "strength": 38.5
      },
      {
        "id": 68,
        "strength": 37.5
      },
      {
        "id": 74,
        "strength": 36.5
      },
      {
        "id": 24,
        "strength": 35.5
      },
      {
        "id": 77,
        "strength": 34.5
      },
      {
        "id": 9,
        "strength": 33.5
      },
      {
        "id": 42,
        "strength": 32.5
      },
      {
        "id": 73,
        "strength": 31.5
      },
      {
        "id": 58,
        "strength": 30.5
      },
      {
        "id": 112,
        "strength": 29.5
      },
      {
        "id": 26,
        "strength": 28.5
      },
      {
        "id": 45,
        "strength": 27.5
      },
      {
        "id": 64,
        "strength": 26.5
      },
      {
        "id": 109,
        "strength": 25.5
      },
      {
        "id": 69,
        "strength": 24.5
      },
      {
        "id": 11,
        "strength": 23.5
      },
      {
        "id": 39,
        "strength": 22.5
      },
      {
        "id": 40,
        "strength": 21.5
      },
      {
        "id": 53,
        "strength": 20.5
      },
      {
        "id": 89,
        "strength": 19.5
      },
      {
        "id": 3,
        "strength": 18.5
      },
      {
        "id": 14,
        "strength": 17.5
      },
      {
        "id": 4,
        "strength": 16.5
      },
      {
        "id": 37,
        "strength": 15.5
      },
      {
        "id": 21,
        "strength": 14.5
      },
      {
        "id": 31,
        "strength": 13.5
      },
      {
        "id": 83,
        "strength": 12.5
      },
      {
        "id": 97,
        "strength": 11.5
      },
      {
        "id": 33,
        "strength": 10.5
      },
      {
        "id": 35,
        "strength": 9.5
      },
      {
        "id": 76,
        "strength": 8.5
      },
      {
        "id": 16,
        "strength": 7.5
      },
      {
        "id": 2,
        "strength": 6.5
      },
      {
        "id": 10,
        "strength": 5.5
      },
      {
        "id": 13,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 6
  },
  "7": {
    "email": "lthomas@globalbusinessinroads.com",
    "choices": [
      {
        "id": 34,
        "strength": 117
      },
      {
        "id": 1,
        "strength": 115
      },
      {
        "id": 30,
        "strength": 112
      },
      {
        "id": 67,
        "strength": 111
      },
      {
        "id": 8,
        "strength": 110
      },
      {
        "id": 105,
        "strength": 109
      },
      {
        "id": 20,
        "strength": 107
      },
      {
        "id": 48,
        "strength": 106
      },
      {
        "id": 28,
        "strength": 105
      },
      {
        "id": 43,
        "strength": 104
      },
      {
        "id": 5,
        "strength": 103
      },
      {
        "id": 32,
        "strength": 102
      },
      {
        "id": 23,
        "strength": 101
      },
      {
        "id": 102,
        "strength": 100
      },
      {
        "id": 68,
        "strength": 99
      },
      {
        "id": 9,
        "strength": 98
      },
      {
        "id": 106,
        "strength": 97
      },
      {
        "id": 15,
        "strength": 96
      },
      {
        "id": 50,
        "strength": 95
      },
      {
        "id": 47,
        "strength": 94
      },
      {
        "id": 42,
        "strength": 93
      },
      {
        "id": 12,
        "strength": 92
      },
      {
        "id": 91,
        "strength": 91
      },
      {
        "id": 73,
        "strength": 90
      },
      {
        "id": 75,
        "strength": 89
      },
      {
        "id": 95,
        "strength": 88
      },
      {
        "id": 58,
        "strength": 87
      },
      {
        "id": 112,
        "strength": 86
      },
      {
        "id": 49,
        "strength": 85
      },
      {
        "id": 71,
        "strength": 84
      },
      {
        "id": 61,
        "strength": 83
      },
      {
        "id": 44,
        "strength": 82
      },
      {
        "id": 26,
        "strength": 81
      },
      {
        "id": 45,
        "strength": 80
      },
      {
        "id": 64,
        "strength": 79
      },
      {
        "id": 25,
        "strength": 78
      },
      {
        "id": 70,
        "strength": 77
      },
      {
        "id": 109,
        "strength": 76
      },
      {
        "id": 69,
        "strength": 75
      },
      {
        "id": 110,
        "strength": 74
      },
      {
        "id": 80,
        "strength": 73
      },
      {
        "id": 11,
        "strength": 72
      },
      {
        "id": 59,
        "strength": 71
      },
      {
        "id": 24,
        "strength": 70
      },
      {
        "id": 39,
        "strength": 69
      },
      {
        "id": 40,
        "strength": 68
      },
      {
        "id": 41,
        "strength": 67
      },
      {
        "id": 46,
        "strength": 66
      },
      {
        "id": 53,
        "strength": 65
      },
      {
        "id": 36,
        "strength": 64
      },
      {
        "id": 103,
        "strength": 63
      },
      {
        "id": 63,
        "strength": 62
      },
      {
        "id": 3,
        "strength": 61
      },
      {
        "id": 78,
        "strength": 60
      },
      {
        "id": 65,
        "strength": 59
      },
      {
        "id": 27,
        "strength": 58
      },
      {
        "id": 14,
        "strength": 57
      },
      {
        "id": 57,
        "strength": 56
      },
      {
        "id": 66,
        "strength": 55
      },
      {
        "id": 4,
        "strength": 54
      },
      {
        "id": 17,
        "strength": 53
      },
      {
        "id": 37,
        "strength": 52
      },
      {
        "id": 21,
        "strength": 51
      },
      {
        "id": 19,
        "strength": 50
      },
      {
        "id": 60,
        "strength": 49
      },
      {
        "id": 31,
        "strength": 48
      },
      {
        "id": 74,
        "strength": 47
      },
      {
        "id": 18,
        "strength": 46
      },
      {
        "id": 33,
        "strength": 45
      },
      {
        "id": 35,
        "strength": 44
      },
      {
        "id": 52,
        "strength": 43
      },
      {
        "id": 56,
        "strength": 42
      },
      {
        "id": 16,
        "strength": 41
      },
      {
        "id": 2,
        "strength": 40
      },
      {
        "id": 10,
        "strength": 39
      },
      {
        "id": 29,
        "strength": 38
      },
      {
        "id": 111,
        "strength": 37
      },
      {
        "id": 13,
        "strength": 36
      },
      {
        "id": 86,
        "strength": 35
      },
      {
        "id": 72,
        "strength": 34
      },
      {
        "id": 22,
        "strength": 33
      },
      {
        "id": 107,
        "strength": 32
      },
      {
        "id": 108,
        "strength": 31
      },
      {
        "id": 101,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 7
  },
  "8": {
    "email": "paola.buono@apexbrasil.com.br",
    "choices": [
      {
        "id": 102,
        "strength": 116
      },
      {
        "id": 43,
        "strength": 114
      },
      {
        "id": 30,
        "strength": 113
      },
      {
        "id": 67,
        "strength": 112
      },
      {
        "id": 79,
        "strength": 111
      },
      {
        "id": 95,
        "strength": 110
      },
      {
        "id": 80,
        "strength": 109
      },
      {
        "id": 54,
        "strength": 108
      },
      {
        "id": 7,
        "strength": 107
      },
      {
        "id": 104,
        "strength": 106
      },
      {
        "id": 63,
        "strength": 105
      },
      {
        "id": 3,
        "strength": 104
      },
      {
        "id": 78,
        "strength": 103
      },
      {
        "id": 52,
        "strength": 102
      },
      {
        "id": 101,
        "strength": 101
      },
      {
        "id": 20,
        "strength": 99
      },
      {
        "id": 48,
        "strength": 98
      },
      {
        "id": 28,
        "strength": 97
      },
      {
        "id": 32,
        "strength": 96
      },
      {
        "id": 23,
        "strength": 95
      },
      {
        "id": 106,
        "strength": 94
      },
      {
        "id": 15,
        "strength": 93
      },
      {
        "id": 50,
        "strength": 92
      },
      {
        "id": 47,
        "strength": 91
      },
      {
        "id": 12,
        "strength": 90
      },
      {
        "id": 75,
        "strength": 89
      },
      {
        "id": 49,
        "strength": 88
      },
      {
        "id": 71,
        "strength": 87
      },
      {
        "id": 61,
        "strength": 86
      },
      {
        "id": 44,
        "strength": 85
      },
      {
        "id": 70,
        "strength": 84
      },
      {
        "id": 109,
        "strength": 83
      },
      {
        "id": 55,
        "strength": 82
      },
      {
        "id": 110,
        "strength": 81
      },
      {
        "id": 34,
        "strength": 80
      },
      {
        "id": 59,
        "strength": 79
      },
      {
        "id": 40,
        "strength": 78
      },
      {
        "id": 46,
        "strength": 77
      },
      {
        "id": 53,
        "strength": 76
      },
      {
        "id": 103,
        "strength": 75
      },
      {
        "id": 57,
        "strength": 74
      },
      {
        "id": 82,
        "strength": 73
      },
      {
        "id": 19,
        "strength": 72
      },
      {
        "id": 60,
        "strength": 71
      },
      {
        "id": 85,
        "strength": 70
      },
      {
        "id": 16,
        "strength": 69
      },
      {
        "id": 2,
        "strength": 68
      },
      {
        "id": 86,
        "strength": 67
      },
      {
        "id": 72,
        "strength": 66
      },
      {
        "id": 51,
        "strength": 65
      },
      {
        "id": 108,
        "strength": 64
      },
      {
        "id": 105,
        "strength": 63
      },
      {
        "id": 5,
        "strength": 61
      },
      {
        "id": 68,
        "strength": 60
      },
      {
        "id": 9,
        "strength": 59
      },
      {
        "id": 42,
        "strength": 58
      },
      {
        "id": 91,
        "strength": 57
      },
      {
        "id": 73,
        "strength": 56
      },
      {
        "id": 88,
        "strength": 55
      },
      {
        "id": 58,
        "strength": 54
      },
      {
        "id": 99,
        "strength": 53
      },
      {
        "id": 112,
        "strength": 52
      },
      {
        "id": 26,
        "strength": 51
      },
      {
        "id": 98,
        "strength": 50
      },
      {
        "id": 100,
        "strength": 49
      },
      {
        "id": 93,
        "strength": 48
      },
      {
        "id": 45,
        "strength": 47
      },
      {
        "id": 64,
        "strength": 46
      },
      {
        "id": 25,
        "strength": 45
      },
      {
        "id": 38,
        "strength": 44
      },
      {
        "id": 69,
        "strength": 43
      },
      {
        "id": 1,
        "strength": 42
      },
      {
        "id": 11,
        "strength": 41
      },
      {
        "id": 24,
        "strength": 40
      },
      {
        "id": 39,
        "strength": 39
      },
      {
        "id": 84,
        "strength": 38
      },
      {
        "id": 90,
        "strength": 37
      },
      {
        "id": 41,
        "strength": 36
      },
      {
        "id": 36,
        "strength": 35
      },
      {
        "id": 89,
        "strength": 34
      },
      {
        "id": 65,
        "strength": 33
      },
      {
        "id": 27,
        "strength": 32
      },
      {
        "id": 14,
        "strength": 31
      },
      {
        "id": 77,
        "strength": 30
      },
      {
        "id": 66,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 37,
        "strength": 26
      },
      {
        "id": 21,
        "strength": 25
      },
      {
        "id": 31,
        "strength": 24
      },
      {
        "id": 87,
        "strength": 23
      },
      {
        "id": 74,
        "strength": 22
      },
      {
        "id": 83,
        "strength": 21
      },
      {
        "id": 18,
        "strength": 20
      },
      {
        "id": 97,
        "strength": 19
      },
      {
        "id": 81,
        "strength": 18
      },
      {
        "id": 33,
        "strength": 17
      },
      {
        "id": 35,
        "strength": 16
      },
      {
        "id": 92,
        "strength": 15
      },
      {
        "id": 76,
        "strength": 14
      },
      {
        "id": 56,
        "strength": 13
      },
      {
        "id": 10,
        "strength": 12
      },
      {
        "id": 29,
        "strength": 11
      },
      {
        "id": 111,
        "strength": 10
      },
      {
        "id": 13,
        "strength": 9
      },
      {
        "id": 62,
        "strength": 8
      },
      {
        "id": 22,
        "strength": 7
      },
      {
        "id": 96,
        "strength": 6
      },
      {
        "id": 107,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 8
  },
  "9": {
    "email": "d.sykes@nwtsbdc.org",
    "choices": [
      {
        "id": 48,
        "strength": 115
      },
      {
        "id": 61,
        "strength": 114
      },
      {
        "id": 70,
        "strength": 113
      },
      {
        "id": 110,
        "strength": 112
      },
      {
        "id": 78,
        "strength": 111
      },
      {
        "id": 52,
        "strength": 110
      },
      {
        "id": 101,
        "strength": 109
      },
      {
        "id": 28,
        "strength": 107
      },
      {
        "id": 67,
        "strength": 106
      },
      {
        "id": 32,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 50,
        "strength": 103
      },
      {
        "id": 47,
        "strength": 102
      },
      {
        "id": 79,
        "strength": 101
      },
      {
        "id": 12,
        "strength": 100
      },
      {
        "id": 75,
        "strength": 99
      },
      {
        "id": 95,
        "strength": 98
      },
      {
        "id": 71,
        "strength": 97
      },
      {
        "id": 44,
        "strength": 96
      },
      {
        "id": 98,
        "strength": 95
      },
      {
        "id": 80,
        "strength": 94
      },
      {
        "id": 54,
        "strength": 93
      },
      {
        "id": 7,
        "strength": 92
      },
      {
        "id": 103,
        "strength": 91
      },
      {
        "id": 63,
        "strength": 90
      },
      {
        "id": 82,
        "strength": 89
      },
      {
        "id": 19,
        "strength": 88
      },
      {
        "id": 60,
        "strength": 87
      },
      {
        "id": 86,
        "strength": 86
      },
      {
        "id": 72,
        "strength": 85
      },
      {
        "id": 108,
        "strength": 84
      },
      {
        "id": 20,
        "strength": 82
      },
      {
        "id": 43,
        "strength": 81
      },
      {
        "id": 30,
        "strength": 80
      },
      {
        "id": 5,
        "strength": 79
      },
      {
        "id": 23,
        "strength": 78
      },
      {
        "id": 68,
        "strength": 77
      },
      {
        "id": 106,
        "strength": 76
      },
      {
        "id": 15,
        "strength": 75
      },
      {
        "id": 42,
        "strength": 74
      },
      {
        "id": 91,
        "strength": 73
      },
      {
        "id": 73,
        "strength": 72
      },
      {
        "id": 58,
        "strength": 71
      },
      {
        "id": 112,
        "strength": 70
      },
      {
        "id": 49,
        "strength": 69
      },
      {
        "id": 26,
        "strength": 68
      },
      {
        "id": 45,
        "strength": 67
      },
      {
        "id": 64,
        "strength": 66
      },
      {
        "id": 25,
        "strength": 65
      },
      {
        "id": 109,
        "strength": 64
      },
      {
        "id": 69,
        "strength": 63
      },
      {
        "id": 1,
        "strength": 62
      },
      {
        "id": 55,
        "strength": 61
      },
      {
        "id": 11,
        "strength": 60
      },
      {
        "id": 34,
        "strength": 59
      },
      {
        "id": 59,
        "strength": 58
      },
      {
        "id": 24,
        "strength": 57
      },
      {
        "id": 39,
        "strength": 56
      },
      {
        "id": 104,
        "strength": 55
      },
      {
        "id": 40,
        "strength": 54
      },
      {
        "id": 41,
        "strength": 53
      },
      {
        "id": 46,
        "strength": 52
      },
      {
        "id": 53,
        "strength": 51
      },
      {
        "id": 36,
        "strength": 50
      },
      {
        "id": 3,
        "strength": 49
      },
      {
        "id": 65,
        "strength": 48
      },
      {
        "id": 27,
        "strength": 47
      },
      {
        "id": 14,
        "strength": 46
      },
      {
        "id": 57,
        "strength": 45
      },
      {
        "id": 66,
        "strength": 44
      },
      {
        "id": 4,
        "strength": 43
      },
      {
        "id": 17,
        "strength": 42
      },
      {
        "id": 37,
        "strength": 41
      },
      {
        "id": 8,
        "strength": 40
      },
      {
        "id": 21,
        "strength": 39
      },
      {
        "id": 31,
        "strength": 38
      },
      {
        "id": 74,
        "strength": 37
      },
      {
        "id": 18,
        "strength": 36
      },
      {
        "id": 33,
        "strength": 35
      },
      {
        "id": 35,
        "strength": 34
      },
      {
        "id": 85,
        "strength": 33
      },
      {
        "id": 56,
        "strength": 32
      },
      {
        "id": 16,
        "strength": 31
      },
      {
        "id": 2,
        "strength": 30
      },
      {
        "id": 10,
        "strength": 29
      },
      {
        "id": 29,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 13,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 9
  },
  "10": {
    "email": "stewart_lynn@rsccd.edu",
    "choices": [
      {
        "id": 75,
        "strength": 118
      },
      {
        "id": 79,
        "strength": 116
      },
      {
        "id": 95,
        "strength": 115
      },
      {
        "id": 103,
        "strength": 114
      },
      {
        "id": 60,
        "strength": 113
      },
      {
        "id": 101,
        "strength": 112
      },
      {
        "id": 102,
        "strength": 110
      },
      {
        "id": 50,
        "strength": 109
      },
      {
        "id": 47,
        "strength": 108
      },
      {
        "id": 71,
        "strength": 107
      },
      {
        "id": 80,
        "strength": 106
      },
      {
        "id": 54,
        "strength": 105
      },
      {
        "id": 78,
        "strength": 104
      },
      {
        "id": 37,
        "strength": 103
      },
      {
        "id": 52,
        "strength": 102
      },
      {
        "id": 29,
        "strength": 100
      },
      {
        "id": 13,
        "strength": 99
      },
      {
        "id": 48,
        "strength": 97
      },
      {
        "id": 28,
        "strength": 96
      },
      {
        "id": 58,
        "strength": 95
      },
      {
        "id": 61,
        "strength": 94
      },
      {
        "id": 44,
        "strength": 93
      },
      {
        "id": 98,
        "strength": 92
      },
      {
        "id": 25,
        "strength": 91
      },
      {
        "id": 70,
        "strength": 90
      },
      {
        "id": 11,
        "strength": 89
      },
      {
        "id": 24,
        "strength": 88
      },
      {
        "id": 39,
        "strength": 87
      },
      {
        "id": 104,
        "strength": 86
      },
      {
        "id": 63,
        "strength": 85
      },
      {
        "id": 3,
        "strength": 84
      },
      {
        "id": 27,
        "strength": 83
      },
      {
        "id": 66,
        "strength": 82
      },
      {
        "id": 82,
        "strength": 81
      },
      {
        "id": 19,
        "strength": 80
      },
      {
        "id": 31,
        "strength": 79
      },
      {
        "id": 74,
        "strength": 78
      },
      {
        "id": 18,
        "strength": 77
      },
      {
        "id": 16,
        "strength": 76
      },
      {
        "id": 86,
        "strength": 75
      },
      {
        "id": 72,
        "strength": 74
      },
      {
        "id": 20,
        "strength": 72
      },
      {
        "id": 67,
        "strength": 71
      },
      {
        "id": 32,
        "strength": 70
      },
      {
        "id": 23,
        "strength": 69
      },
      {
        "id": 15,
        "strength": 68
      },
      {
        "id": 42,
        "strength": 67
      },
      {
        "id": 12,
        "strength": 66
      },
      {
        "id": 49,
        "strength": 65
      },
      {
        "id": 26,
        "strength": 64
      },
      {
        "id": 55,
        "strength": 63
      },
      {
        "id": 110,
        "strength": 62
      },
      {
        "id": 34,
        "strength": 61
      },
      {
        "id": 59,
        "strength": 60
      },
      {
        "id": 7,
        "strength": 59
      },
      {
        "id": 46,
        "strength": 58
      },
      {
        "id": 36,
        "strength": 57
      },
      {
        "id": 33,
        "strength": 56
      },
      {
        "id": 35,
        "strength": 55
      },
      {
        "id": 85,
        "strength": 54
      },
      {
        "id": 56,
        "strength": 53
      },
      {
        "id": 2,
        "strength": 52
      },
      {
        "id": 22,
        "strength": 51
      },
      {
        "id": 51,
        "strength": 50
      },
      {
        "id": 108,
        "strength": 49
      },
      {
        "id": 43,
        "strength": 47
      },
      {
        "id": 30,
        "strength": 46
      },
      {
        "id": 5,
        "strength": 45
      },
      {
        "id": 68,
        "strength": 44
      },
      {
        "id": 9,
        "strength": 43
      },
      {
        "id": 106,
        "strength": 42
      },
      {
        "id": 91,
        "strength": 41
      },
      {
        "id": 73,
        "strength": 40
      },
      {
        "id": 88,
        "strength": 39
      },
      {
        "id": 112,
        "strength": 38
      },
      {
        "id": 45,
        "strength": 37
      },
      {
        "id": 64,
        "strength": 36
      },
      {
        "id": 109,
        "strength": 35
      },
      {
        "id": 69,
        "strength": 34
      },
      {
        "id": 1,
        "strength": 33
      },
      {
        "id": 40,
        "strength": 32
      },
      {
        "id": 41,
        "strength": 31
      },
      {
        "id": 53,
        "strength": 30
      },
      {
        "id": 65,
        "strength": 29
      },
      {
        "id": 14,
        "strength": 28
      },
      {
        "id": 57,
        "strength": 27
      },
      {
        "id": 4,
        "strength": 26
      },
      {
        "id": 17,
        "strength": 25
      },
      {
        "id": 8,
        "strength": 24
      },
      {
        "id": 21,
        "strength": 23
      },
      {
        "id": 97,
        "strength": 22
      },
      {
        "id": 111,
        "strength": 21
      },
      {
        "id": 96,
        "strength": 20
      },
      {
        "id": 107,
        "strength": 19
      },
      {
        "id": 105,
        "strength": 18
      },
      {
        "id": 6,
        "strength": 16.5
      },
      {
        "id": 38,
        "strength": 15.5
      },
      {
        "id": 62,
        "strength": 14.5
      },
      {
        "id": 92,
        "strength": 13.5
      },
      {
        "id": 81,
        "strength": 12.5
      },
      {
        "id": 87,
        "strength": 11.5
      },
      {
        "id": 90,
        "strength": 10.5
      },
      {
        "id": 84,
        "strength": 9.5
      },
      {
        "id": 100,
        "strength": 8.5
      },
      {
        "id": 93,
        "strength": 7.5
      },
      {
        "id": 99,
        "strength": 6.5
      },
      {
        "id": 77,
        "strength": 5.5
      },
      {
        "id": 89,
        "strength": 4.5
      },
      {
        "id": 83,
        "strength": 3.5
      },
      {
        "id": 76,
        "strength": 2.5
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 10
  },
  "11": {
    "email": "kandels@sunyulster.edu",
    "choices": [
      {
        "id": 71,
        "strength": 118
      },
      {
        "id": 80,
        "strength": 116
      },
      {
        "id": 103,
        "strength": 115
      },
      {
        "id": 101,
        "strength": 114
      },
      {
        "id": 48,
        "strength": 112
      },
      {
        "id": 102,
        "strength": 111
      },
      {
        "id": 47,
        "strength": 110
      },
      {
        "id": 42,
        "strength": 109
      },
      {
        "id": 12,
        "strength": 108
      },
      {
        "id": 75,
        "strength": 107
      },
      {
        "id": 95,
        "strength": 106
      },
      {
        "id": 61,
        "strength": 105
      },
      {
        "id": 98,
        "strength": 104
      },
      {
        "id": 25,
        "strength": 103
      },
      {
        "id": 70,
        "strength": 102
      },
      {
        "id": 54,
        "strength": 101
      },
      {
        "id": 78,
        "strength": 100
      },
      {
        "id": 27,
        "strength": 99
      },
      {
        "id": 52,
        "strength": 98
      },
      {
        "id": 16,
        "strength": 97
      },
      {
        "id": 72,
        "strength": 96
      },
      {
        "id": 28,
        "strength": 94
      },
      {
        "id": 32,
        "strength": 93
      },
      {
        "id": 23,
        "strength": 92
      },
      {
        "id": 15,
        "strength": 91
      },
      {
        "id": 50,
        "strength": 90
      },
      {
        "id": 79,
        "strength": 89
      },
      {
        "id": 44,
        "strength": 88
      },
      {
        "id": 110,
        "strength": 87
      },
      {
        "id": 59,
        "strength": 86
      },
      {
        "id": 104,
        "strength": 85
      },
      {
        "id": 3,
        "strength": 84
      },
      {
        "id": 37,
        "strength": 83
      },
      {
        "id": 19,
        "strength": 82
      },
      {
        "id": 60,
        "strength": 81
      },
      {
        "id": 33,
        "strength": 80
      },
      {
        "id": 35,
        "strength": 79
      },
      {
        "id": 2,
        "strength": 78
      },
      {
        "id": 10,
        "strength": 77
      },
      {
        "id": 29,
        "strength": 76
      },
      {
        "id": 13,
        "strength": 75
      },
      {
        "id": 51,
        "strength": 74
      },
      {
        "id": 20,
        "strength": 72
      },
      {
        "id": 67,
        "strength": 71
      },
      {
        "id": 58,
        "strength": 70
      },
      {
        "id": 49,
        "strength": 69
      },
      {
        "id": 26,
        "strength": 68
      },
      {
        "id": 1,
        "strength": 67
      },
      {
        "id": 55,
        "strength": 66
      },
      {
        "id": 34,
        "strength": 65
      },
      {
        "id": 24,
        "strength": 64
      },
      {
        "id": 39,
        "strength": 63
      },
      {
        "id": 7,
        "strength": 62
      },
      {
        "id": 41,
        "strength": 61
      },
      {
        "id": 46,
        "strength": 60
      },
      {
        "id": 36,
        "strength": 59
      },
      {
        "id": 63,
        "strength": 58
      },
      {
        "id": 66,
        "strength": 57
      },
      {
        "id": 82,
        "strength": 56
      },
      {
        "id": 31,
        "strength": 55
      },
      {
        "id": 74,
        "strength": 54
      },
      {
        "id": 18,
        "strength": 53
      },
      {
        "id": 85,
        "strength": 52
      },
      {
        "id": 56,
        "strength": 51
      },
      {
        "id": 86,
        "strength": 50
      },
      {
        "id": 22,
        "strength": 49
      },
      {
        "id": 108,
        "strength": 48
      },
      {
        "id": 43,
        "strength": 46
      },
      {
        "id": 30,
        "strength": 45
      },
      {
        "id": 5,
        "strength": 44
      },
      {
        "id": 68,
        "strength": 43
      },
      {
        "id": 9,
        "strength": 42
      },
      {
        "id": 106,
        "strength": 41
      },
      {
        "id": 91,
        "strength": 40
      },
      {
        "id": 73,
        "strength": 39
      },
      {
        "id": 88,
        "strength": 38
      },
      {
        "id": 112,
        "strength": 37
      },
      {
        "id": 45,
        "strength": 36
      },
      {
        "id": 64,
        "strength": 35
      },
      {
        "id": 109,
        "strength": 34
      },
      {
        "id": 69,
        "strength": 33
      },
      {
        "id": 40,
        "strength": 32
      },
      {
        "id": 53,
        "strength": 31
      },
      {
        "id": 65,
        "strength": 30
      },
      {
        "id": 14,
        "strength": 29
      },
      {
        "id": 57,
        "strength": 28
      },
      {
        "id": 4,
        "strength": 27
      },
      {
        "id": 17,
        "strength": 26
      },
      {
        "id": 8,
        "strength": 25
      },
      {
        "id": 21,
        "strength": 24
      },
      {
        "id": 97,
        "strength": 23
      },
      {
        "id": 111,
        "strength": 22
      },
      {
        "id": 96,
        "strength": 21
      },
      {
        "id": 107,
        "strength": 20
      },
      {
        "id": 105,
        "strength": 19
      },
      {
        "id": 6,
        "strength": 17.5
      },
      {
        "id": 38,
        "strength": 16.5
      },
      {
        "id": 62,
        "strength": 15.5
      },
      {
        "id": 92,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 11
  },
  "12": {
    "email": "durdonk@upstate.edu",
    "choices": [
      {
        "id": 71,
        "strength": 116
      },
      {
        "id": 61,
        "strength": 115
      },
      {
        "id": 80,
        "strength": 114
      },
      {
        "id": 72,
        "strength": 113
      },
      {
        "id": 48,
        "strength": 111
      },
      {
        "id": 32,
        "strength": 110
      },
      {
        "id": 47,
        "strength": 109
      },
      {
        "id": 70,
        "strength": 108
      },
      {
        "id": 110,
        "strength": 107
      },
      {
        "id": 103,
        "strength": 106
      },
      {
        "id": 78,
        "strength": 105
      },
      {
        "id": 52,
        "strength": 104
      },
      {
        "id": 101,
        "strength": 103
      },
      {
        "id": 28,
        "strength": 101
      },
      {
        "id": 67,
        "strength": 100
      },
      {
        "id": 102,
        "strength": 99
      },
      {
        "id": 50,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 75,
        "strength": 96
      },
      {
        "id": 95,
        "strength": 95
      },
      {
        "id": 44,
        "strength": 94
      },
      {
        "id": 98,
        "strength": 93
      },
      {
        "id": 25,
        "strength": 92
      },
      {
        "id": 1,
        "strength": 91
      },
      {
        "id": 55,
        "strength": 90
      },
      {
        "id": 11,
        "strength": 89
      },
      {
        "id": 54,
        "strength": 88
      },
      {
        "id": 59,
        "strength": 87
      },
      {
        "id": 7,
        "strength": 86
      },
      {
        "id": 104,
        "strength": 85
      },
      {
        "id": 41,
        "strength": 84
      },
      {
        "id": 63,
        "strength": 83
      },
      {
        "id": 27,
        "strength": 82
      },
      {
        "id": 19,
        "strength": 81
      },
      {
        "id": 60,
        "strength": 80
      },
      {
        "id": 33,
        "strength": 79
      },
      {
        "id": 35,
        "strength": 78
      },
      {
        "id": 85,
        "strength": 77
      },
      {
        "id": 16,
        "strength": 76
      },
      {
        "id": 2,
        "strength": 75
      },
      {
        "id": 13,
        "strength": 74
      },
      {
        "id": 86,
        "strength": 73
      },
      {
        "id": 51,
        "strength": 72
      },
      {
        "id": 108,
        "strength": 71
      },
      {
        "id": 20,
        "strength": 69
      },
      {
        "id": 43,
        "strength": 68
      },
      {
        "id": 30,
        "strength": 67
      },
      {
        "id": 5,
        "strength": 66
      },
      {
        "id": 23,
        "strength": 65
      },
      {
        "id": 68,
        "strength": 64
      },
      {
        "id": 9,
        "strength": 63
      },
      {
        "id": 106,
        "strength": 62
      },
      {
        "id": 15,
        "strength": 61
      },
      {
        "id": 79,
        "strength": 60
      },
      {
        "id": 91,
        "strength": 59
      },
      {
        "id": 73,
        "strength": 58
      },
      {
        "id": 58,
        "strength": 57
      },
      {
        "id": 112,
        "strength": 56
      },
      {
        "id": 49,
        "strength": 55
      },
      {
        "id": 26,
        "strength": 54
      },
      {
        "id": 45,
        "strength": 53
      },
      {
        "id": 64,
        "strength": 52
      },
      {
        "id": 109,
        "strength": 51
      },
      {
        "id": 69,
        "strength": 50
      },
      {
        "id": 34,
        "strength": 49
      },
      {
        "id": 24,
        "strength": 48
      },
      {
        "id": 39,
        "strength": 47
      },
      {
        "id": 40,
        "strength": 46
      },
      {
        "id": 46,
        "strength": 45
      },
      {
        "id": 53,
        "strength": 44
      },
      {
        "id": 36,
        "strength": 43
      },
      {
        "id": 3,
        "strength": 42
      },
      {
        "id": 65,
        "strength": 41
      },
      {
        "id": 14,
        "strength": 40
      },
      {
        "id": 57,
        "strength": 39
      },
      {
        "id": 66,
        "strength": 38
      },
      {
        "id": 4,
        "strength": 37
      },
      {
        "id": 17,
        "strength": 36
      },
      {
        "id": 37,
        "strength": 35
      },
      {
        "id": 8,
        "strength": 34
      },
      {
        "id": 21,
        "strength": 33
      },
      {
        "id": 82,
        "strength": 32
      },
      {
        "id": 31,
        "strength": 31
      },
      {
        "id": 74,
        "strength": 30
      },
      {
        "id": 18,
        "strength": 29
      },
      {
        "id": 56,
        "strength": 28
      },
      {
        "id": 10,
        "strength": 27
      },
      {
        "id": 29,
        "strength": 26
      },
      {
        "id": 111,
        "strength": 25
      },
      {
        "id": 22,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 12
  },
  "13": {
    "email": "tmorley@sunyrockland.edu",
    "choices": [
      {
        "id": 71,
        "strength": 118
      },
      {
        "id": 101,
        "strength": 117
      },
      {
        "id": 47,
        "strength": 115
      },
      {
        "id": 75,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 113
      },
      {
        "id": 54,
        "strength": 112
      },
      {
        "id": 103,
        "strength": 111
      },
      {
        "id": 72,
        "strength": 110
      },
      {
        "id": 48,
        "strength": 108
      },
      {
        "id": 32,
        "strength": 107
      },
      {
        "id": 102,
        "strength": 106
      },
      {
        "id": 50,
        "strength": 105
      },
      {
        "id": 42,
        "strength": 104
      },
      {
        "id": 79,
        "strength": 103
      },
      {
        "id": 12,
        "strength": 102
      },
      {
        "id": 95,
        "strength": 101
      },
      {
        "id": 61,
        "strength": 100
      },
      {
        "id": 98,
        "strength": 99
      },
      {
        "id": 25,
        "strength": 98
      },
      {
        "id": 70,
        "strength": 97
      },
      {
        "id": 3,
        "strength": 96
      },
      {
        "id": 78,
        "strength": 95
      },
      {
        "id": 27,
        "strength": 94
      },
      {
        "id": 37,
        "strength": 93
      },
      {
        "id": 60,
        "strength": 92
      },
      {
        "id": 52,
        "strength": 91
      },
      {
        "id": 16,
        "strength": 90
      },
      {
        "id": 10,
        "strength": 89
      },
      {
        "id": 29,
        "strength": 88
      },
      {
        "id": 28,
        "strength": 86
      },
      {
        "id": 23,
        "strength": 85
      },
      {
        "id": 58,
        "strength": 84
      },
      {
        "id": 44,
        "strength": 83
      },
      {
        "id": 110,
        "strength": 82
      },
      {
        "id": 11,
        "strength": 81
      },
      {
        "id": 34,
        "strength": 80
      },
      {
        "id": 59,
        "strength": 79
      },
      {
        "id": 24,
        "strength": 78
      },
      {
        "id": 39,
        "strength": 77
      },
      {
        "id": 104,
        "strength": 76
      },
      {
        "id": 66,
        "strength": 75
      },
      {
        "id": 19,
        "strength": 74
      },
      {
        "id": 31,
        "strength": 73
      },
      {
        "id": 74,
        "strength": 72
      },
      {
        "id": 18,
        "strength": 71
      },
      {
        "id": 33,
        "strength": 70
      },
      {
        "id": 35,
        "strength": 69
      },
      {
        "id": 56,
        "strength": 68
      },
      {
        "id": 2,
        "strength": 67
      },
      {
        "id": 51,
        "strength": 66
      },
      {
        "id": 20,
        "strength": 64
      },
      {
        "id": 67,
        "strength": 63
      },
      {
        "id": 15,
        "strength": 62
      },
      {
        "id": 49,
        "strength": 61
      },
      {
        "id": 26,
        "strength": 60
      },
      {
        "id": 1,
        "strength": 59
      },
      {
        "id": 55,
        "strength": 58
      },
      {
        "id": 7,
        "strength": 57
      },
      {
        "id": 41,
        "strength": 56
      },
      {
        "id": 46,
        "strength": 55
      },
      {
        "id": 36,
        "strength": 54
      },
      {
        "id": 63,
        "strength": 53
      },
      {
        "id": 82,
        "strength": 52
      },
      {
        "id": 85,
        "strength": 51
      },
      {
        "id": 86,
        "strength": 50
      },
      {
        "id": 22,
        "strength": 49
      },
      {
        "id": 108,
        "strength": 48
      },
      {
        "id": 105,
        "strength": 47
      },
      {
        "id": 43,
        "strength": 45
      },
      {
        "id": 30,
        "strength": 44
      },
      {
        "id": 5,
        "strength": 43
      },
      {
        "id": 68,
        "strength": 42
      },
      {
        "id": 9,
        "strength": 41
      },
      {
        "id": 106,
        "strength": 40
      },
      {
        "id": 91,
        "strength": 39
      },
      {
        "id": 73,
        "strength": 38
      },
      {
        "id": 88,
        "strength": 37
      },
      {
        "id": 112,
        "strength": 36
      },
      {
        "id": 45,
        "strength": 35
      },
      {
        "id": 64,
        "strength": 34
      },
      {
        "id": 109,
        "strength": 33
      },
      {
        "id": 69,
        "strength": 32
      },
      {
        "id": 40,
        "strength": 31
      },
      {
        "id": 53,
        "strength": 30
      },
      {
        "id": 65,
        "strength": 29
      },
      {
        "id": 14,
        "strength": 28
      },
      {
        "id": 57,
        "strength": 27
      },
      {
        "id": 4,
        "strength": 26
      },
      {
        "id": 17,
        "strength": 25
      },
      {
        "id": 8,
        "strength": 24
      },
      {
        "id": 21,
        "strength": 23
      },
      {
        "id": 97,
        "strength": 22
      },
      {
        "id": 111,
        "strength": 21
      },
      {
        "id": 96,
        "strength": 20
      },
      {
        "id": 107,
        "strength": 19
      },
      {
        "id": 6,
        "strength": 17.5
      },
      {
        "id": 38,
        "strength": 16.5
      },
      {
        "id": 62,
        "strength": 15.5
      },
      {
        "id": 92,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 13
  },
  "14": {
    "email": "myepes@usf.edu",
    "choices": [
      {
        "id": 102,
        "strength": 115
      },
      {
        "id": 63,
        "strength": 114
      },
      {
        "id": 101,
        "strength": 113
      },
      {
        "id": 48,
        "strength": 111
      },
      {
        "id": 28,
        "strength": 110
      },
      {
        "id": 43,
        "strength": 109
      },
      {
        "id": 67,
        "strength": 108
      },
      {
        "id": 32,
        "strength": 107
      },
      {
        "id": 50,
        "strength": 106
      },
      {
        "id": 47,
        "strength": 105
      },
      {
        "id": 79,
        "strength": 104
      },
      {
        "id": 12,
        "strength": 103
      },
      {
        "id": 75,
        "strength": 102
      },
      {
        "id": 95,
        "strength": 101
      },
      {
        "id": 71,
        "strength": 100
      },
      {
        "id": 61,
        "strength": 99
      },
      {
        "id": 44,
        "strength": 98
      },
      {
        "id": 70,
        "strength": 97
      },
      {
        "id": 110,
        "strength": 96
      },
      {
        "id": 80,
        "strength": 95
      },
      {
        "id": 54,
        "strength": 94
      },
      {
        "id": 7,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 103,
        "strength": 91
      },
      {
        "id": 78,
        "strength": 90
      },
      {
        "id": 19,
        "strength": 89
      },
      {
        "id": 60,
        "strength": 88
      },
      {
        "id": 52,
        "strength": 87
      },
      {
        "id": 86,
        "strength": 86
      },
      {
        "id": 72,
        "strength": 85
      },
      {
        "id": 108,
        "strength": 84
      },
      {
        "id": 20,
        "strength": 82
      },
      {
        "id": 30,
        "strength": 81
      },
      {
        "id": 5,
        "strength": 80
      },
      {
        "id": 23,
        "strength": 79
      },
      {
        "id": 68,
        "strength": 78
      },
      {
        "id": 9,
        "strength": 77
      },
      {
        "id": 106,
        "strength": 76
      },
      {
        "id": 15,
        "strength": 75
      },
      {
        "id": 42,
        "strength": 74
      },
      {
        "id": 91,
        "strength": 73
      },
      {
        "id": 73,
        "strength": 72
      },
      {
        "id": 58,
        "strength": 71
      },
      {
        "id": 112,
        "strength": 70
      },
      {
        "id": 49,
        "strength": 69
      },
      {
        "id": 26,
        "strength": 68
      },
      {
        "id": 98,
        "strength": 67
      },
      {
        "id": 45,
        "strength": 66
      },
      {
        "id": 64,
        "strength": 65
      },
      {
        "id": 25,
        "strength": 64
      },
      {
        "id": 109,
        "strength": 63
      },
      {
        "id": 69,
        "strength": 62
      },
      {
        "id": 1,
        "strength": 61
      },
      {
        "id": 55,
        "strength": 60
      },
      {
        "id": 11,
        "strength": 59
      },
      {
        "id": 34,
        "strength": 58
      },
      {
        "id": 59,
        "strength": 57
      },
      {
        "id": 24,
        "strength": 56
      },
      {
        "id": 39,
        "strength": 55
      },
      {
        "id": 40,
        "strength": 54
      },
      {
        "id": 41,
        "strength": 53
      },
      {
        "id": 46,
        "strength": 52
      },
      {
        "id": 53,
        "strength": 51
      },
      {
        "id": 36,
        "strength": 50
      },
      {
        "id": 3,
        "strength": 49
      },
      {
        "id": 65,
        "strength": 48
      },
      {
        "id": 27,
        "strength": 47
      },
      {
        "id": 57,
        "strength": 46
      },
      {
        "id": 66,
        "strength": 45
      },
      {
        "id": 4,
        "strength": 44
      },
      {
        "id": 17,
        "strength": 43
      },
      {
        "id": 37,
        "strength": 42
      },
      {
        "id": 8,
        "strength": 41
      },
      {
        "id": 21,
        "strength": 40
      },
      {
        "id": 82,
        "strength": 39
      },
      {
        "id": 31,
        "strength": 38
      },
      {
        "id": 74,
        "strength": 37
      },
      {
        "id": 18,
        "strength": 36
      },
      {
        "id": 33,
        "strength": 35
      },
      {
        "id": 35,
        "strength": 34
      },
      {
        "id": 85,
        "strength": 33
      },
      {
        "id": 56,
        "strength": 32
      },
      {
        "id": 16,
        "strength": 31
      },
      {
        "id": 2,
        "strength": 30
      },
      {
        "id": 10,
        "strength": 29
      },
      {
        "id": 29,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 13,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 14
  },
  "15": {
    "email": "david.mulcahy@lamar.edu",
    "choices": [
      {
        "id": 78,
        "strength": 116
      },
      {
        "id": 48,
        "strength": 114
      },
      {
        "id": 79,
        "strength": 113
      },
      {
        "id": 95,
        "strength": 112
      },
      {
        "id": 70,
        "strength": 111
      },
      {
        "id": 54,
        "strength": 110
      },
      {
        "id": 52,
        "strength": 109
      },
      {
        "id": 16,
        "strength": 108
      },
      {
        "id": 101,
        "strength": 107
      },
      {
        "id": 32,
        "strength": 105
      },
      {
        "id": 23,
        "strength": 104
      },
      {
        "id": 102,
        "strength": 103
      },
      {
        "id": 50,
        "strength": 102
      },
      {
        "id": 75,
        "strength": 101
      },
      {
        "id": 58,
        "strength": 100
      },
      {
        "id": 49,
        "strength": 99
      },
      {
        "id": 71,
        "strength": 98
      },
      {
        "id": 61,
        "strength": 97
      },
      {
        "id": 44,
        "strength": 96
      },
      {
        "id": 98,
        "strength": 95
      },
      {
        "id": 110,
        "strength": 94
      },
      {
        "id": 80,
        "strength": 93
      },
      {
        "id": 11,
        "strength": 92
      },
      {
        "id": 103,
        "strength": 91
      },
      {
        "id": 3,
        "strength": 90
      },
      {
        "id": 82,
        "strength": 89
      },
      {
        "id": 60,
        "strength": 88
      },
      {
        "id": 72,
        "strength": 87
      },
      {
        "id": 20,
        "strength": 85
      },
      {
        "id": 28,
        "strength": 84
      },
      {
        "id": 43,
        "strength": 83
      },
      {
        "id": 30,
        "strength": 82
      },
      {
        "id": 67,
        "strength": 81
      },
      {
        "id": 106,
        "strength": 80
      },
      {
        "id": 47,
        "strength": 79
      },
      {
        "id": 42,
        "strength": 78
      },
      {
        "id": 12,
        "strength": 77
      },
      {
        "id": 25,
        "strength": 76
      },
      {
        "id": 109,
        "strength": 75
      },
      {
        "id": 55,
        "strength": 74
      },
      {
        "id": 59,
        "strength": 73
      },
      {
        "id": 24,
        "strength": 72
      },
      {
        "id": 39,
        "strength": 71
      },
      {
        "id": 7,
        "strength": 70
      },
      {
        "id": 104,
        "strength": 69
      },
      {
        "id": 40,
        "strength": 68
      },
      {
        "id": 46,
        "strength": 67
      },
      {
        "id": 53,
        "strength": 66
      },
      {
        "id": 36,
        "strength": 65
      },
      {
        "id": 63,
        "strength": 64
      },
      {
        "id": 27,
        "strength": 63
      },
      {
        "id": 57,
        "strength": 62
      },
      {
        "id": 66,
        "strength": 61
      },
      {
        "id": 37,
        "strength": 60
      },
      {
        "id": 8,
        "strength": 59
      },
      {
        "id": 19,
        "strength": 58
      },
      {
        "id": 31,
        "strength": 57
      },
      {
        "id": 74,
        "strength": 56
      },
      {
        "id": 18,
        "strength": 55
      },
      {
        "id": 97,
        "strength": 54
      },
      {
        "id": 35,
        "strength": 53
      },
      {
        "id": 85,
        "strength": 52
      },
      {
        "id": 56,
        "strength": 51
      },
      {
        "id": 2,
        "strength": 50
      },
      {
        "id": 10,
        "strength": 49
      },
      {
        "id": 29,
        "strength": 48
      },
      {
        "id": 13,
        "strength": 47
      },
      {
        "id": 86,
        "strength": 46
      },
      {
        "id": 22,
        "strength": 45
      },
      {
        "id": 51,
        "strength": 44
      },
      {
        "id": 108,
        "strength": 43
      },
      {
        "id": 6,
        "strength": 41
      },
      {
        "id": 5,
        "strength": 40
      },
      {
        "id": 68,
        "strength": 39
      },
      {
        "id": 9,
        "strength": 38
      },
      {
        "id": 91,
        "strength": 37
      },
      {
        "id": 73,
        "strength": 36
      },
      {
        "id": 88,
        "strength": 35
      },
      {
        "id": 99,
        "strength": 34
      },
      {
        "id": 112,
        "strength": 33
      },
      {
        "id": 26,
        "strength": 32
      },
      {
        "id": 100,
        "strength": 31
      },
      {
        "id": 93,
        "strength": 30
      },
      {
        "id": 45,
        "strength": 29
      },
      {
        "id": 64,
        "strength": 28
      },
      {
        "id": 38,
        "strength": 27
      },
      {
        "id": 69,
        "strength": 26
      },
      {
        "id": 1,
        "strength": 25
      },
      {
        "id": 34,
        "strength": 24
      },
      {
        "id": 84,
        "strength": 23
      },
      {
        "id": 90,
        "strength": 22
      },
      {
        "id": 41,
        "strength": 21
      },
      {
        "id": 89,
        "strength": 20
      },
      {
        "id": 65,
        "strength": 19
      },
      {
        "id": 14,
        "strength": 18
      },
      {
        "id": 77,
        "strength": 17
      },
      {
        "id": 4,
        "strength": 16
      },
      {
        "id": 17,
        "strength": 15
      },
      {
        "id": 21,
        "strength": 14
      },
      {
        "id": 87,
        "strength": 13
      },
      {
        "id": 83,
        "strength": 12
      },
      {
        "id": 81,
        "strength": 11
      },
      {
        "id": 33,
        "strength": 10
      },
      {
        "id": 92,
        "strength": 9
      },
      {
        "id": 76,
        "strength": 8
      },
      {
        "id": 111,
        "strength": 7
      },
      {
        "id": 62,
        "strength": 6
      },
      {
        "id": 96,
        "strength": 5
      },
      {
        "id": 107,
        "strength": 4
      },
      {
        "id": 105,
        "strength": 3
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 15
  },
  "16": {
    "email": "sehwerea@sunyulster.edu",
    "choices": [
      {
        "id": 71,
        "strength": 118
      },
      {
        "id": 80,
        "strength": 117
      },
      {
        "id": 47,
        "strength": 114
      },
      {
        "id": 95,
        "strength": 113
      },
      {
        "id": 54,
        "strength": 112
      },
      {
        "id": 103,
        "strength": 111
      },
      {
        "id": 3,
        "strength": 110
      },
      {
        "id": 78,
        "strength": 109
      },
      {
        "id": 52,
        "strength": 108
      },
      {
        "id": 101,
        "strength": 107
      },
      {
        "id": 48,
        "strength": 105
      },
      {
        "id": 32,
        "strength": 104
      },
      {
        "id": 23,
        "strength": 103
      },
      {
        "id": 102,
        "strength": 102
      },
      {
        "id": 15,
        "strength": 101
      },
      {
        "id": 50,
        "strength": 100
      },
      {
        "id": 42,
        "strength": 99
      },
      {
        "id": 79,
        "strength": 98
      },
      {
        "id": 12,
        "strength": 97
      },
      {
        "id": 75,
        "strength": 96
      },
      {
        "id": 61,
        "strength": 95
      },
      {
        "id": 98,
        "strength": 94
      },
      {
        "id": 25,
        "strength": 93
      },
      {
        "id": 70,
        "strength": 92
      },
      {
        "id": 11,
        "strength": 91
      },
      {
        "id": 59,
        "strength": 90
      },
      {
        "id": 104,
        "strength": 89
      },
      {
        "id": 27,
        "strength": 88
      },
      {
        "id": 2,
        "strength": 87
      },
      {
        "id": 13,
        "strength": 86
      },
      {
        "id": 72,
        "strength": 85
      },
      {
        "id": 51,
        "strength": 84
      },
      {
        "id": 20,
        "strength": 82
      },
      {
        "id": 28,
        "strength": 81
      },
      {
        "id": 49,
        "strength": 80
      },
      {
        "id": 44,
        "strength": 79
      },
      {
        "id": 55,
        "strength": 78
      },
      {
        "id": 110,
        "strength": 77
      },
      {
        "id": 34,
        "strength": 76
      },
      {
        "id": 46,
        "strength": 75
      },
      {
        "id": 37,
        "strength": 74
      },
      {
        "id": 82,
        "strength": 73
      },
      {
        "id": 19,
        "strength": 72
      },
      {
        "id": 60,
        "strength": 71
      },
      {
        "id": 33,
        "strength": 70
      },
      {
        "id": 35,
        "strength": 69
      },
      {
        "id": 85,
        "strength": 68
      },
      {
        "id": 10,
        "strength": 67
      },
      {
        "id": 29,
        "strength": 66
      },
      {
        "id": 43,
        "strength": 64
      },
      {
        "id": 30,
        "strength": 63
      },
      {
        "id": 67,
        "strength": 62
      },
      {
        "id": 106,
        "strength": 61
      },
      {
        "id": 88,
        "strength": 60
      },
      {
        "id": 58,
        "strength": 59
      },
      {
        "id": 26,
        "strength": 58
      },
      {
        "id": 109,
        "strength": 57
      },
      {
        "id": 1,
        "strength": 56
      },
      {
        "id": 24,
        "strength": 55
      },
      {
        "id": 39,
        "strength": 54
      },
      {
        "id": 7,
        "strength": 53
      },
      {
        "id": 40,
        "strength": 52
      },
      {
        "id": 41,
        "strength": 51
      },
      {
        "id": 53,
        "strength": 50
      },
      {
        "id": 36,
        "strength": 49
      },
      {
        "id": 63,
        "strength": 48
      },
      {
        "id": 57,
        "strength": 47
      },
      {
        "id": 66,
        "strength": 46
      },
      {
        "id": 8,
        "strength": 45
      },
      {
        "id": 31,
        "strength": 44
      },
      {
        "id": 74,
        "strength": 43
      },
      {
        "id": 18,
        "strength": 42
      },
      {
        "id": 97,
        "strength": 41
      },
      {
        "id": 56,
        "strength": 40
      },
      {
        "id": 86,
        "strength": 39
      },
      {
        "id": 22,
        "strength": 38
      },
      {
        "id": 96,
        "strength": 37
      },
      {
        "id": 108,
        "strength": 36
      },
      {
        "id": 105,
        "strength": 35
      },
      {
        "id": 5,
        "strength": 33
      },
      {
        "id": 68,
        "strength": 32
      },
      {
        "id": 9,
        "strength": 31
      },
      {
        "id": 91,
        "strength": 30
      },
      {
        "id": 73,
        "strength": 29
      },
      {
        "id": 99,
        "strength": 28
      },
      {
        "id": 112,
        "strength": 27
      },
      {
        "id": 100,
        "strength": 26
      },
      {
        "id": 93,
        "strength": 25
      },
      {
        "id": 45,
        "strength": 24
      },
      {
        "id": 64,
        "strength": 23
      },
      {
        "id": 38,
        "strength": 22
      },
      {
        "id": 69,
        "strength": 21
      },
      {
        "id": 84,
        "strength": 20
      },
      {
        "id": 90,
        "strength": 19
      },
      {
        "id": 89,
        "strength": 18
      },
      {
        "id": 65,
        "strength": 17
      },
      {
        "id": 14,
        "strength": 16
      },
      {
        "id": 77,
        "strength": 15
      },
      {
        "id": 4,
        "strength": 14
      },
      {
        "id": 17,
        "strength": 13
      },
      {
        "id": 21,
        "strength": 12
      },
      {
        "id": 87,
        "strength": 11
      },
      {
        "id": 83,
        "strength": 10
      },
      {
        "id": 81,
        "strength": 9
      },
      {
        "id": 92,
        "strength": 8
      },
      {
        "id": 76,
        "strength": 7
      },
      {
        "id": 111,
        "strength": 6
      },
      {
        "id": 62,
        "strength": 5
      },
      {
        "id": 107,
        "strength": 4
      },
      {
        "id": 6,
        "strength": 2.5
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 16
  },
  "17": {
    "email": "oswald@niagaracc.suny.edu",
    "choices": [
      {
        "id": 48,
        "strength": 115
      },
      {
        "id": 12,
        "strength": 114
      },
      {
        "id": 71,
        "strength": 113
      },
      {
        "id": 61,
        "strength": 112
      },
      {
        "id": 110,
        "strength": 111
      },
      {
        "id": 80,
        "strength": 110
      },
      {
        "id": 103,
        "strength": 109
      },
      {
        "id": 78,
        "strength": 108
      },
      {
        "id": 72,
        "strength": 107
      },
      {
        "id": 101,
        "strength": 106
      },
      {
        "id": 28,
        "strength": 104
      },
      {
        "id": 67,
        "strength": 103
      },
      {
        "id": 32,
        "strength": 102
      },
      {
        "id": 102,
        "strength": 101
      },
      {
        "id": 50,
        "strength": 100
      },
      {
        "id": 47,
        "strength": 99
      },
      {
        "id": 75,
        "strength": 98
      },
      {
        "id": 95,
        "strength": 97
      },
      {
        "id": 44,
        "strength": 96
      },
      {
        "id": 98,
        "strength": 95
      },
      {
        "id": 70,
        "strength": 94
      },
      {
        "id": 55,
        "strength": 93
      },
      {
        "id": 54,
        "strength": 92
      },
      {
        "id": 7,
        "strength": 91
      },
      {
        "id": 104,
        "strength": 90
      },
      {
        "id": 63,
        "strength": 89
      },
      {
        "id": 19,
        "strength": 88
      },
      {
        "id": 60,
        "strength": 87
      },
      {
        "id": 52,
        "strength": 86
      },
      {
        "id": 86,
        "strength": 85
      },
      {
        "id": 51,
        "strength": 84
      },
      {
        "id": 108,
        "strength": 83
      },
      {
        "id": 20,
        "strength": 81
      },
      {
        "id": 43,
        "strength": 80
      },
      {
        "id": 30,
        "strength": 79
      },
      {
        "id": 5,
        "strength": 78
      },
      {
        "id": 23,
        "strength": 77
      },
      {
        "id": 68,
        "strength": 76
      },
      {
        "id": 9,
        "strength": 75
      },
      {
        "id": 106,
        "strength": 74
      },
      {
        "id": 15,
        "strength": 73
      },
      {
        "id": 42,
        "strength": 72
      },
      {
        "id": 79,
        "strength": 71
      },
      {
        "id": 91,
        "strength": 70
      },
      {
        "id": 73,
        "strength": 69
      },
      {
        "id": 58,
        "strength": 68
      },
      {
        "id": 112,
        "strength": 67
      },
      {
        "id": 49,
        "strength": 66
      },
      {
        "id": 26,
        "strength": 65
      },
      {
        "id": 45,
        "strength": 64
      },
      {
        "id": 64,
        "strength": 63
      },
      {
        "id": 25,
        "strength": 62
      },
      {
        "id": 109,
        "strength": 61
      },
      {
        "id": 69,
        "strength": 60
      },
      {
        "id": 1,
        "strength": 59
      },
      {
        "id": 11,
        "strength": 58
      },
      {
        "id": 34,
        "strength": 57
      },
      {
        "id": 59,
        "strength": 56
      },
      {
        "id": 24,
        "strength": 55
      },
      {
        "id": 39,
        "strength": 54
      },
      {
        "id": 40,
        "strength": 53
      },
      {
        "id": 41,
        "strength": 52
      },
      {
        "id": 46,
        "strength": 51
      },
      {
        "id": 53,
        "strength": 50
      },
      {
        "id": 36,
        "strength": 49
      },
      {
        "id": 3,
        "strength": 48
      },
      {
        "id": 65,
        "strength": 47
      },
      {
        "id": 27,
        "strength": 46
      },
      {
        "id": 14,
        "strength": 45
      },
      {
        "id": 57,
        "strength": 44
      },
      {
        "id": 66,
        "strength": 43
      },
      {
        "id": 4,
        "strength": 42
      },
      {
        "id": 37,
        "strength": 41
      },
      {
        "id": 8,
        "strength": 40
      },
      {
        "id": 21,
        "strength": 39
      },
      {
        "id": 82,
        "strength": 38
      },
      {
        "id": 31,
        "strength": 37
      },
      {
        "id": 74,
        "strength": 36
      },
      {
        "id": 18,
        "strength": 35
      },
      {
        "id": 33,
        "strength": 34
      },
      {
        "id": 35,
        "strength": 33
      },
      {
        "id": 85,
        "strength": 32
      },
      {
        "id": 56,
        "strength": 31
      },
      {
        "id": 16,
        "strength": 30
      },
      {
        "id": 2,
        "strength": 29
      },
      {
        "id": 10,
        "strength": 28
      },
      {
        "id": 29,
        "strength": 27
      },
      {
        "id": 111,
        "strength": 26
      },
      {
        "id": 13,
        "strength": 25
      },
      {
        "id": 22,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 17
  },
  "18": {
    "email": "ray.bowman@edcsbdc.org",
    "choices": [
      {
        "id": 75,
        "strength": 117
      },
      {
        "id": 80,
        "strength": 116
      },
      {
        "id": 52,
        "strength": 115
      },
      {
        "id": 47,
        "strength": 113
      },
      {
        "id": 79,
        "strength": 112
      },
      {
        "id": 95,
        "strength": 111
      },
      {
        "id": 71,
        "strength": 110
      },
      {
        "id": 103,
        "strength": 109
      },
      {
        "id": 78,
        "strength": 108
      },
      {
        "id": 60,
        "strength": 107
      },
      {
        "id": 101,
        "strength": 106
      },
      {
        "id": 28,
        "strength": 104
      },
      {
        "id": 102,
        "strength": 103
      },
      {
        "id": 50,
        "strength": 102
      },
      {
        "id": 42,
        "strength": 101
      },
      {
        "id": 70,
        "strength": 100
      },
      {
        "id": 54,
        "strength": 99
      },
      {
        "id": 39,
        "strength": 98
      },
      {
        "id": 104,
        "strength": 97
      },
      {
        "id": 46,
        "strength": 96
      },
      {
        "id": 63,
        "strength": 95
      },
      {
        "id": 66,
        "strength": 94
      },
      {
        "id": 37,
        "strength": 93
      },
      {
        "id": 82,
        "strength": 92
      },
      {
        "id": 19,
        "strength": 91
      },
      {
        "id": 10,
        "strength": 90
      },
      {
        "id": 29,
        "strength": 89
      },
      {
        "id": 13,
        "strength": 88
      },
      {
        "id": 86,
        "strength": 87
      },
      {
        "id": 72,
        "strength": 86
      },
      {
        "id": 20,
        "strength": 84
      },
      {
        "id": 48,
        "strength": 83
      },
      {
        "id": 67,
        "strength": 82
      },
      {
        "id": 32,
        "strength": 81
      },
      {
        "id": 23,
        "strength": 80
      },
      {
        "id": 15,
        "strength": 79
      },
      {
        "id": 12,
        "strength": 78
      },
      {
        "id": 58,
        "strength": 77
      },
      {
        "id": 49,
        "strength": 76
      },
      {
        "id": 61,
        "strength": 75
      },
      {
        "id": 44,
        "strength": 74
      },
      {
        "id": 26,
        "strength": 73
      },
      {
        "id": 98,
        "strength": 72
      },
      {
        "id": 25,
        "strength": 71
      },
      {
        "id": 55,
        "strength": 70
      },
      {
        "id": 110,
        "strength": 69
      },
      {
        "id": 11,
        "strength": 68
      },
      {
        "id": 34,
        "strength": 67
      },
      {
        "id": 59,
        "strength": 66
      },
      {
        "id": 24,
        "strength": 65
      },
      {
        "id": 7,
        "strength": 64
      },
      {
        "id": 36,
        "strength": 63
      },
      {
        "id": 3,
        "strength": 62
      },
      {
        "id": 27,
        "strength": 61
      },
      {
        "id": 31,
        "strength": 60
      },
      {
        "id": 74,
        "strength": 59
      },
      {
        "id": 33,
        "strength": 58
      },
      {
        "id": 35,
        "strength": 57
      },
      {
        "id": 85,
        "strength": 56
      },
      {
        "id": 56,
        "strength": 55
      },
      {
        "id": 16,
        "strength": 54
      },
      {
        "id": 2,
        "strength": 53
      },
      {
        "id": 51,
        "strength": 52
      },
      {
        "id": 108,
        "strength": 51
      },
      {
        "id": 43,
        "strength": 49
      },
      {
        "id": 30,
        "strength": 48
      },
      {
        "id": 5,
        "strength": 47
      },
      {
        "id": 68,
        "strength": 46
      },
      {
        "id": 9,
        "strength": 45
      },
      {
        "id": 106,
        "strength": 44
      },
      {
        "id": 91,
        "strength": 43
      },
      {
        "id": 73,
        "strength": 42
      },
      {
        "id": 88,
        "strength": 41
      },
      {
        "id": 112,
        "strength": 40
      },
      {
        "id": 45,
        "strength": 39
      },
      {
        "id": 64,
        "strength": 38
      },
      {
        "id": 109,
        "strength": 37
      },
      {
        "id": 69,
        "strength": 36
      },
      {
        "id": 1,
        "strength": 35
      },
      {
        "id": 40,
        "strength": 34
      },
      {
        "id": 41,
        "strength": 33
      },
      {
        "id": 53,
        "strength": 32
      },
      {
        "id": 65,
        "strength": 31
      },
      {
        "id": 14,
        "strength": 30
      },
      {
        "id": 57,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 8,
        "strength": 26
      },
      {
        "id": 21,
        "strength": 25
      },
      {
        "id": 111,
        "strength": 24
      },
      {
        "id": 22,
        "strength": 23
      },
      {
        "id": 96,
        "strength": 22
      },
      {
        "id": 107,
        "strength": 21
      },
      {
        "id": 105,
        "strength": 20
      },
      {
        "id": 6,
        "strength": 18.5
      },
      {
        "id": 38,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 18
  },
  "19": {
    "email": "Patrick.Kirwan@trade.gov",
    "choices": [
      {
        "id": 80,
        "strength": 116
      },
      {
        "id": 103,
        "strength": 115
      },
      {
        "id": 28,
        "strength": 113
      },
      {
        "id": 102,
        "strength": 112
      },
      {
        "id": 47,
        "strength": 111
      },
      {
        "id": 75,
        "strength": 110
      },
      {
        "id": 95,
        "strength": 109
      },
      {
        "id": 71,
        "strength": 108
      },
      {
        "id": 61,
        "strength": 107
      },
      {
        "id": 98,
        "strength": 106
      },
      {
        "id": 70,
        "strength": 105
      },
      {
        "id": 34,
        "strength": 104
      },
      {
        "id": 36,
        "strength": 103
      },
      {
        "id": 63,
        "strength": 102
      },
      {
        "id": 78,
        "strength": 101
      },
      {
        "id": 52,
        "strength": 100
      },
      {
        "id": 86,
        "strength": 99
      },
      {
        "id": 51,
        "strength": 98
      },
      {
        "id": 108,
        "strength": 97
      },
      {
        "id": 101,
        "strength": 96
      },
      {
        "id": 20,
        "strength": 94
      },
      {
        "id": 48,
        "strength": 93
      },
      {
        "id": 67,
        "strength": 92
      },
      {
        "id": 32,
        "strength": 91
      },
      {
        "id": 23,
        "strength": 90
      },
      {
        "id": 50,
        "strength": 89
      },
      {
        "id": 42,
        "strength": 88
      },
      {
        "id": 79,
        "strength": 87
      },
      {
        "id": 12,
        "strength": 86
      },
      {
        "id": 88,
        "strength": 85
      },
      {
        "id": 44,
        "strength": 84
      },
      {
        "id": 26,
        "strength": 83
      },
      {
        "id": 25,
        "strength": 82
      },
      {
        "id": 55,
        "strength": 81
      },
      {
        "id": 110,
        "strength": 80
      },
      {
        "id": 11,
        "strength": 79
      },
      {
        "id": 54,
        "strength": 78
      },
      {
        "id": 59,
        "strength": 77
      },
      {
        "id": 39,
        "strength": 76
      },
      {
        "id": 7,
        "strength": 75
      },
      {
        "id": 104,
        "strength": 74
      },
      {
        "id": 46,
        "strength": 73
      },
      {
        "id": 3,
        "strength": 72
      },
      {
        "id": 27,
        "strength": 71
      },
      {
        "id": 66,
        "strength": 70
      },
      {
        "id": 37,
        "strength": 69
      },
      {
        "id": 82,
        "strength": 68
      },
      {
        "id": 60,
        "strength": 67
      },
      {
        "id": 18,
        "strength": 66
      },
      {
        "id": 33,
        "strength": 65
      },
      {
        "id": 35,
        "strength": 64
      },
      {
        "id": 85,
        "strength": 63
      },
      {
        "id": 16,
        "strength": 62
      },
      {
        "id": 2,
        "strength": 61
      },
      {
        "id": 10,
        "strength": 60
      },
      {
        "id": 29,
        "strength": 59
      },
      {
        "id": 13,
        "strength": 58
      },
      {
        "id": 72,
        "strength": 57
      },
      {
        "id": 96,
        "strength": 56
      },
      {
        "id": 107,
        "strength": 55
      },
      {
        "id": 105,
        "strength": 54
      },
      {
        "id": 43,
        "strength": 52
      },
      {
        "id": 30,
        "strength": 51
      },
      {
        "id": 5,
        "strength": 50
      },
      {
        "id": 68,
        "strength": 49
      },
      {
        "id": 9,
        "strength": 48
      },
      {
        "id": 106,
        "strength": 47
      },
      {
        "id": 15,
        "strength": 46
      },
      {
        "id": 91,
        "strength": 45
      },
      {
        "id": 73,
        "strength": 44
      },
      {
        "id": 58,
        "strength": 43
      },
      {
        "id": 112,
        "strength": 42
      },
      {
        "id": 49,
        "strength": 41
      },
      {
        "id": 45,
        "strength": 40
      },
      {
        "id": 64,
        "strength": 39
      },
      {
        "id": 109,
        "strength": 38
      },
      {
        "id": 69,
        "strength": 37
      },
      {
        "id": 1,
        "strength": 36
      },
      {
        "id": 24,
        "strength": 35
      },
      {
        "id": 40,
        "strength": 34
      },
      {
        "id": 41,
        "strength": 33
      },
      {
        "id": 53,
        "strength": 32
      },
      {
        "id": 65,
        "strength": 31
      },
      {
        "id": 14,
        "strength": 30
      },
      {
        "id": 57,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 8,
        "strength": 26
      },
      {
        "id": 21,
        "strength": 25
      },
      {
        "id": 31,
        "strength": 24
      },
      {
        "id": 74,
        "strength": 23
      },
      {
        "id": 56,
        "strength": 22
      },
      {
        "id": 111,
        "strength": 21
      },
      {
        "id": 22,
        "strength": 20
      },
      {
        "id": 6,
        "strength": 18.5
      },
      {
        "id": 38,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 19
  },
  "20": {
    "email": "247dfh@gmail.com",
    "choices": [
      {
        "id": 78,
        "strength": 117
      },
      {
        "id": 52,
        "strength": 116
      },
      {
        "id": 28,
        "strength": 114
      },
      {
        "id": 79,
        "strength": 113
      },
      {
        "id": 95,
        "strength": 112
      },
      {
        "id": 80,
        "strength": 111
      },
      {
        "id": 54,
        "strength": 110
      },
      {
        "id": 82,
        "strength": 109
      },
      {
        "id": 19,
        "strength": 108
      },
      {
        "id": 101,
        "strength": 107
      },
      {
        "id": 48,
        "strength": 105
      },
      {
        "id": 67,
        "strength": 104
      },
      {
        "id": 32,
        "strength": 103
      },
      {
        "id": 23,
        "strength": 102
      },
      {
        "id": 102,
        "strength": 101
      },
      {
        "id": 47,
        "strength": 100
      },
      {
        "id": 75,
        "strength": 99
      },
      {
        "id": 71,
        "strength": 98
      },
      {
        "id": 61,
        "strength": 97
      },
      {
        "id": 98,
        "strength": 96
      },
      {
        "id": 70,
        "strength": 95
      },
      {
        "id": 110,
        "strength": 94
      },
      {
        "id": 59,
        "strength": 93
      },
      {
        "id": 7,
        "strength": 92
      },
      {
        "id": 104,
        "strength": 91
      },
      {
        "id": 46,
        "strength": 90
      },
      {
        "id": 103,
        "strength": 89
      },
      {
        "id": 3,
        "strength": 88
      },
      {
        "id": 16,
        "strength": 87
      },
      {
        "id": 2,
        "strength": 86
      },
      {
        "id": 51,
        "strength": 85
      },
      {
        "id": 108,
        "strength": 84
      },
      {
        "id": 43,
        "strength": 82
      },
      {
        "id": 30,
        "strength": 81
      },
      {
        "id": 106,
        "strength": 80
      },
      {
        "id": 15,
        "strength": 79
      },
      {
        "id": 50,
        "strength": 78
      },
      {
        "id": 42,
        "strength": 77
      },
      {
        "id": 12,
        "strength": 76
      },
      {
        "id": 88,
        "strength": 75
      },
      {
        "id": 49,
        "strength": 74
      },
      {
        "id": 44,
        "strength": 73
      },
      {
        "id": 26,
        "strength": 72
      },
      {
        "id": 25,
        "strength": 71
      },
      {
        "id": 109,
        "strength": 70
      },
      {
        "id": 55,
        "strength": 69
      },
      {
        "id": 11,
        "strength": 68
      },
      {
        "id": 34,
        "strength": 67
      },
      {
        "id": 39,
        "strength": 66
      },
      {
        "id": 40,
        "strength": 65
      },
      {
        "id": 53,
        "strength": 64
      },
      {
        "id": 36,
        "strength": 63
      },
      {
        "id": 63,
        "strength": 62
      },
      {
        "id": 27,
        "strength": 61
      },
      {
        "id": 57,
        "strength": 60
      },
      {
        "id": 66,
        "strength": 59
      },
      {
        "id": 37,
        "strength": 58
      },
      {
        "id": 8,
        "strength": 57
      },
      {
        "id": 60,
        "strength": 56
      },
      {
        "id": 18,
        "strength": 55
      },
      {
        "id": 33,
        "strength": 54
      },
      {
        "id": 35,
        "strength": 53
      },
      {
        "id": 85,
        "strength": 52
      },
      {
        "id": 10,
        "strength": 51
      },
      {
        "id": 29,
        "strength": 50
      },
      {
        "id": 13,
        "strength": 49
      },
      {
        "id": 86,
        "strength": 48
      },
      {
        "id": 72,
        "strength": 47
      },
      {
        "id": 96,
        "strength": 46
      },
      {
        "id": 5,
        "strength": 44
      },
      {
        "id": 68,
        "strength": 43
      },
      {
        "id": 9,
        "strength": 42
      },
      {
        "id": 91,
        "strength": 41
      },
      {
        "id": 73,
        "strength": 40
      },
      {
        "id": 58,
        "strength": 39
      },
      {
        "id": 99,
        "strength": 38
      },
      {
        "id": 112,
        "strength": 37
      },
      {
        "id": 100,
        "strength": 36
      },
      {
        "id": 93,
        "strength": 35
      },
      {
        "id": 45,
        "strength": 34
      },
      {
        "id": 64,
        "strength": 33
      },
      {
        "id": 38,
        "strength": 32
      },
      {
        "id": 69,
        "strength": 31
      },
      {
        "id": 1,
        "strength": 30
      },
      {
        "id": 24,
        "strength": 29
      },
      {
        "id": 84,
        "strength": 28
      },
      {
        "id": 90,
        "strength": 27
      },
      {
        "id": 41,
        "strength": 26
      },
      {
        "id": 89,
        "strength": 25
      },
      {
        "id": 65,
        "strength": 24
      },
      {
        "id": 14,
        "strength": 23
      },
      {
        "id": 77,
        "strength": 22
      },
      {
        "id": 4,
        "strength": 21
      },
      {
        "id": 17,
        "strength": 20
      },
      {
        "id": 21,
        "strength": 19
      },
      {
        "id": 31,
        "strength": 18
      },
      {
        "id": 87,
        "strength": 17
      },
      {
        "id": 74,
        "strength": 16
      },
      {
        "id": 83,
        "strength": 15
      },
      {
        "id": 97,
        "strength": 14
      },
      {
        "id": 81,
        "strength": 13
      },
      {
        "id": 92,
        "strength": 12
      },
      {
        "id": 76,
        "strength": 11
      },
      {
        "id": 56,
        "strength": 10
      },
      {
        "id": 111,
        "strength": 9
      },
      {
        "id": 62,
        "strength": 8
      },
      {
        "id": 22,
        "strength": 7
      },
      {
        "id": 107,
        "strength": 6
      },
      {
        "id": 105,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 20
  },
  "21": {
    "email": "Parbatee.Chang@FloridaSBDC.org",
    "choices": [
      {
        "id": 102,
        "strength": 115
      },
      {
        "id": 63,
        "strength": 114
      },
      {
        "id": 101,
        "strength": 113
      },
      {
        "id": 48,
        "strength": 111
      },
      {
        "id": 28,
        "strength": 110
      },
      {
        "id": 43,
        "strength": 109
      },
      {
        "id": 67,
        "strength": 108
      },
      {
        "id": 32,
        "strength": 107
      },
      {
        "id": 50,
        "strength": 106
      },
      {
        "id": 47,
        "strength": 105
      },
      {
        "id": 79,
        "strength": 104
      },
      {
        "id": 12,
        "strength": 103
      },
      {
        "id": 75,
        "strength": 102
      },
      {
        "id": 95,
        "strength": 101
      },
      {
        "id": 71,
        "strength": 100
      },
      {
        "id": 61,
        "strength": 99
      },
      {
        "id": 44,
        "strength": 98
      },
      {
        "id": 70,
        "strength": 97
      },
      {
        "id": 110,
        "strength": 96
      },
      {
        "id": 80,
        "strength": 95
      },
      {
        "id": 54,
        "strength": 94
      },
      {
        "id": 7,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 103,
        "strength": 91
      },
      {
        "id": 78,
        "strength": 90
      },
      {
        "id": 19,
        "strength": 89
      },
      {
        "id": 60,
        "strength": 88
      },
      {
        "id": 52,
        "strength": 87
      },
      {
        "id": 86,
        "strength": 86
      },
      {
        "id": 72,
        "strength": 85
      },
      {
        "id": 108,
        "strength": 84
      },
      {
        "id": 20,
        "strength": 82
      },
      {
        "id": 30,
        "strength": 81
      },
      {
        "id": 5,
        "strength": 80
      },
      {
        "id": 23,
        "strength": 79
      },
      {
        "id": 68,
        "strength": 78
      },
      {
        "id": 9,
        "strength": 77
      },
      {
        "id": 106,
        "strength": 76
      },
      {
        "id": 15,
        "strength": 75
      },
      {
        "id": 42,
        "strength": 74
      },
      {
        "id": 91,
        "strength": 73
      },
      {
        "id": 73,
        "strength": 72
      },
      {
        "id": 58,
        "strength": 71
      },
      {
        "id": 112,
        "strength": 70
      },
      {
        "id": 49,
        "strength": 69
      },
      {
        "id": 26,
        "strength": 68
      },
      {
        "id": 98,
        "strength": 67
      },
      {
        "id": 45,
        "strength": 66
      },
      {
        "id": 64,
        "strength": 65
      },
      {
        "id": 25,
        "strength": 64
      },
      {
        "id": 109,
        "strength": 63
      },
      {
        "id": 69,
        "strength": 62
      },
      {
        "id": 1,
        "strength": 61
      },
      {
        "id": 55,
        "strength": 60
      },
      {
        "id": 11,
        "strength": 59
      },
      {
        "id": 34,
        "strength": 58
      },
      {
        "id": 59,
        "strength": 57
      },
      {
        "id": 24,
        "strength": 56
      },
      {
        "id": 39,
        "strength": 55
      },
      {
        "id": 40,
        "strength": 54
      },
      {
        "id": 41,
        "strength": 53
      },
      {
        "id": 46,
        "strength": 52
      },
      {
        "id": 53,
        "strength": 51
      },
      {
        "id": 36,
        "strength": 50
      },
      {
        "id": 3,
        "strength": 49
      },
      {
        "id": 65,
        "strength": 48
      },
      {
        "id": 27,
        "strength": 47
      },
      {
        "id": 14,
        "strength": 46
      },
      {
        "id": 57,
        "strength": 45
      },
      {
        "id": 66,
        "strength": 44
      },
      {
        "id": 4,
        "strength": 43
      },
      {
        "id": 17,
        "strength": 42
      },
      {
        "id": 37,
        "strength": 41
      },
      {
        "id": 8,
        "strength": 40
      },
      {
        "id": 82,
        "strength": 39
      },
      {
        "id": 31,
        "strength": 38
      },
      {
        "id": 74,
        "strength": 37
      },
      {
        "id": 18,
        "strength": 36
      },
      {
        "id": 33,
        "strength": 35
      },
      {
        "id": 35,
        "strength": 34
      },
      {
        "id": 85,
        "strength": 33
      },
      {
        "id": 56,
        "strength": 32
      },
      {
        "id": 16,
        "strength": 31
      },
      {
        "id": 2,
        "strength": 30
      },
      {
        "id": 10,
        "strength": 29
      },
      {
        "id": 29,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 13,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 21
  },
  "22": {
    "email": "vickie.gyenes@email.stvincent.edu",
    "choices": [
      {
        "id": 48,
        "strength": 115
      },
      {
        "id": 71,
        "strength": 114
      },
      {
        "id": 61,
        "strength": 113
      },
      {
        "id": 44,
        "strength": 112
      },
      {
        "id": 70,
        "strength": 111
      },
      {
        "id": 110,
        "strength": 110
      },
      {
        "id": 78,
        "strength": 109
      },
      {
        "id": 60,
        "strength": 108
      },
      {
        "id": 72,
        "strength": 107
      },
      {
        "id": 28,
        "strength": 105
      },
      {
        "id": 67,
        "strength": 104
      },
      {
        "id": 32,
        "strength": 103
      },
      {
        "id": 23,
        "strength": 102
      },
      {
        "id": 102,
        "strength": 101
      },
      {
        "id": 15,
        "strength": 100
      },
      {
        "id": 50,
        "strength": 99
      },
      {
        "id": 47,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 12,
        "strength": 96
      },
      {
        "id": 75,
        "strength": 95
      },
      {
        "id": 95,
        "strength": 94
      },
      {
        "id": 58,
        "strength": 93
      },
      {
        "id": 49,
        "strength": 92
      },
      {
        "id": 80,
        "strength": 91
      },
      {
        "id": 11,
        "strength": 90
      },
      {
        "id": 59,
        "strength": 89
      },
      {
        "id": 7,
        "strength": 88
      },
      {
        "id": 36,
        "strength": 87
      },
      {
        "id": 103,
        "strength": 86
      },
      {
        "id": 63,
        "strength": 85
      },
      {
        "id": 3,
        "strength": 84
      },
      {
        "id": 19,
        "strength": 83
      },
      {
        "id": 35,
        "strength": 82
      },
      {
        "id": 52,
        "strength": 81
      },
      {
        "id": 56,
        "strength": 80
      },
      {
        "id": 16,
        "strength": 79
      },
      {
        "id": 10,
        "strength": 78
      },
      {
        "id": 13,
        "strength": 77
      },
      {
        "id": 86,
        "strength": 76
      },
      {
        "id": 108,
        "strength": 75
      },
      {
        "id": 101,
        "strength": 74
      },
      {
        "id": 20,
        "strength": 72
      },
      {
        "id": 43,
        "strength": 71
      },
      {
        "id": 30,
        "strength": 70
      },
      {
        "id": 5,
        "strength": 69
      },
      {
        "id": 68,
        "strength": 68
      },
      {
        "id": 9,
        "strength": 67
      },
      {
        "id": 106,
        "strength": 66
      },
      {
        "id": 79,
        "strength": 65
      },
      {
        "id": 91,
        "strength": 64
      },
      {
        "id": 73,
        "strength": 63
      },
      {
        "id": 112,
        "strength": 62
      },
      {
        "id": 26,
        "strength": 61
      },
      {
        "id": 98,
        "strength": 60
      },
      {
        "id": 45,
        "strength": 59
      },
      {
        "id": 64,
        "strength": 58
      },
      {
        "id": 25,
        "strength": 57
      },
      {
        "id": 109,
        "strength": 56
      },
      {
        "id": 69,
        "strength": 55
      },
      {
        "id": 1,
        "strength": 54
      },
      {
        "id": 55,
        "strength": 53
      },
      {
        "id": 54,
        "strength": 52
      },
      {
        "id": 34,
        "strength": 51
      },
      {
        "id": 24,
        "strength": 50
      },
      {
        "id": 39,
        "strength": 49
      },
      {
        "id": 104,
        "strength": 48
      },
      {
        "id": 40,
        "strength": 47
      },
      {
        "id": 41,
        "strength": 46
      },
      {
        "id": 46,
        "strength": 45
      },
      {
        "id": 53,
        "strength": 44
      },
      {
        "id": 65,
        "strength": 43
      },
      {
        "id": 27,
        "strength": 42
      },
      {
        "id": 14,
        "strength": 41
      },
      {
        "id": 57,
        "strength": 40
      },
      {
        "id": 66,
        "strength": 39
      },
      {
        "id": 4,
        "strength": 38
      },
      {
        "id": 17,
        "strength": 37
      },
      {
        "id": 37,
        "strength": 36
      },
      {
        "id": 8,
        "strength": 35
      },
      {
        "id": 21,
        "strength": 34
      },
      {
        "id": 82,
        "strength": 33
      },
      {
        "id": 31,
        "strength": 32
      },
      {
        "id": 74,
        "strength": 31
      },
      {
        "id": 18,
        "strength": 30
      },
      {
        "id": 33,
        "strength": 29
      },
      {
        "id": 85,
        "strength": 28
      },
      {
        "id": 2,
        "strength": 27
      },
      {
        "id": 29,
        "strength": 26
      },
      {
        "id": 111,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 22
  },
  "23": {
    "email": "bramirez@fsmail.bradley.edu",
    "choices": [
      {
        "id": 52,
        "strength": 117
      },
      {
        "id": 95,
        "strength": 115
      },
      {
        "id": 71,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 113
      },
      {
        "id": 78,
        "strength": 112
      },
      {
        "id": 16,
        "strength": 111
      },
      {
        "id": 20,
        "strength": 109
      },
      {
        "id": 28,
        "strength": 108
      },
      {
        "id": 102,
        "strength": 107
      },
      {
        "id": 15,
        "strength": 106
      },
      {
        "id": 47,
        "strength": 105
      },
      {
        "id": 42,
        "strength": 104
      },
      {
        "id": 79,
        "strength": 103
      },
      {
        "id": 75,
        "strength": 102
      },
      {
        "id": 70,
        "strength": 101
      },
      {
        "id": 11,
        "strength": 100
      },
      {
        "id": 54,
        "strength": 99
      },
      {
        "id": 59,
        "strength": 98
      },
      {
        "id": 104,
        "strength": 97
      },
      {
        "id": 46,
        "strength": 96
      },
      {
        "id": 103,
        "strength": 95
      },
      {
        "id": 3,
        "strength": 94
      },
      {
        "id": 82,
        "strength": 93
      },
      {
        "id": 19,
        "strength": 92
      },
      {
        "id": 2,
        "strength": 91
      },
      {
        "id": 13,
        "strength": 90
      },
      {
        "id": 72,
        "strength": 89
      },
      {
        "id": 51,
        "strength": 88
      },
      {
        "id": 101,
        "strength": 87
      },
      {
        "id": 48,
        "strength": 85
      },
      {
        "id": 43,
        "strength": 84
      },
      {
        "id": 30,
        "strength": 83
      },
      {
        "id": 67,
        "strength": 82
      },
      {
        "id": 32,
        "strength": 81
      },
      {
        "id": 106,
        "strength": 79
      },
      {
        "id": 50,
        "strength": 78
      },
      {
        "id": 12,
        "strength": 77
      },
      {
        "id": 88,
        "strength": 76
      },
      {
        "id": 49,
        "strength": 75
      },
      {
        "id": 61,
        "strength": 74
      },
      {
        "id": 44,
        "strength": 73
      },
      {
        "id": 26,
        "strength": 72
      },
      {
        "id": 98,
        "strength": 71
      },
      {
        "id": 25,
        "strength": 70
      },
      {
        "id": 109,
        "strength": 69
      },
      {
        "id": 55,
        "strength": 68
      },
      {
        "id": 110,
        "strength": 67
      },
      {
        "id": 34,
        "strength": 66
      },
      {
        "id": 39,
        "strength": 65
      },
      {
        "id": 7,
        "strength": 64
      },
      {
        "id": 40,
        "strength": 63
      },
      {
        "id": 53,
        "strength": 62
      },
      {
        "id": 36,
        "strength": 61
      },
      {
        "id": 63,
        "strength": 60
      },
      {
        "id": 27,
        "strength": 59
      },
      {
        "id": 57,
        "strength": 58
      },
      {
        "id": 66,
        "strength": 57
      },
      {
        "id": 37,
        "strength": 56
      },
      {
        "id": 8,
        "strength": 55
      },
      {
        "id": 60,
        "strength": 54
      },
      {
        "id": 18,
        "strength": 53
      },
      {
        "id": 33,
        "strength": 52
      },
      {
        "id": 35,
        "strength": 51
      },
      {
        "id": 85,
        "strength": 50
      },
      {
        "id": 56,
        "strength": 49
      },
      {
        "id": 10,
        "strength": 48
      },
      {
        "id": 29,
        "strength": 47
      },
      {
        "id": 86,
        "strength": 46
      },
      {
        "id": 22,
        "strength": 45
      },
      {
        "id": 96,
        "strength": 44
      },
      {
        "id": 108,
        "strength": 43
      },
      {
        "id": 5,
        "strength": 41
      },
      {
        "id": 68,
        "strength": 40
      },
      {
        "id": 9,
        "strength": 39
      },
      {
        "id": 91,
        "strength": 38
      },
      {
        "id": 73,
        "strength": 37
      },
      {
        "id": 58,
        "strength": 36
      },
      {
        "id": 99,
        "strength": 35
      },
      {
        "id": 112,
        "strength": 34
      },
      {
        "id": 100,
        "strength": 33
      },
      {
        "id": 93,
        "strength": 32
      },
      {
        "id": 45,
        "strength": 31
      },
      {
        "id": 64,
        "strength": 30
      },
      {
        "id": 38,
        "strength": 29
      },
      {
        "id": 69,
        "strength": 28
      },
      {
        "id": 1,
        "strength": 27
      },
      {
        "id": 24,
        "strength": 26
      },
      {
        "id": 84,
        "strength": 25
      },
      {
        "id": 90,
        "strength": 24
      },
      {
        "id": 41,
        "strength": 23
      },
      {
        "id": 89,
        "strength": 22
      },
      {
        "id": 65,
        "strength": 21
      },
      {
        "id": 14,
        "strength": 20
      },
      {
        "id": 77,
        "strength": 19
      },
      {
        "id": 4,
        "strength": 18
      },
      {
        "id": 17,
        "strength": 17
      },
      {
        "id": 21,
        "strength": 16
      },
      {
        "id": 31,
        "strength": 15
      },
      {
        "id": 87,
        "strength": 14
      },
      {
        "id": 74,
        "strength": 13
      },
      {
        "id": 83,
        "strength": 12
      },
      {
        "id": 97,
        "strength": 11
      },
      {
        "id": 81,
        "strength": 10
      },
      {
        "id": 92,
        "strength": 9
      },
      {
        "id": 76,
        "strength": 8
      },
      {
        "id": 111,
        "strength": 7
      },
      {
        "id": 62,
        "strength": 6
      },
      {
        "id": 107,
        "strength": 5
      },
      {
        "id": 105,
        "strength": 4
      },
      {
        "id": 6,
        "strength": 2.5
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 23
  },
  "24": {
    "email": "L2stewart.cw@lbcc.edu",
    "choices": [
      {
        "id": 75,
        "strength": 117
      },
      {
        "id": 60,
        "strength": 116
      },
      {
        "id": 50,
        "strength": 114
      },
      {
        "id": 79,
        "strength": 113
      },
      {
        "id": 95,
        "strength": 112
      },
      {
        "id": 103,
        "strength": 111
      },
      {
        "id": 101,
        "strength": 110
      },
      {
        "id": 48,
        "strength": 108
      },
      {
        "id": 102,
        "strength": 107
      },
      {
        "id": 47,
        "strength": 106
      },
      {
        "id": 58,
        "strength": 105
      },
      {
        "id": 71,
        "strength": 104
      },
      {
        "id": 44,
        "strength": 103
      },
      {
        "id": 70,
        "strength": 102
      },
      {
        "id": 80,
        "strength": 101
      },
      {
        "id": 54,
        "strength": 100
      },
      {
        "id": 63,
        "strength": 99
      },
      {
        "id": 78,
        "strength": 98
      },
      {
        "id": 37,
        "strength": 97
      },
      {
        "id": 31,
        "strength": 96
      },
      {
        "id": 74,
        "strength": 95
      },
      {
        "id": 52,
        "strength": 94
      },
      {
        "id": 10,
        "strength": 93
      },
      {
        "id": 29,
        "strength": 92
      },
      {
        "id": 13,
        "strength": 91
      },
      {
        "id": 86,
        "strength": 90
      },
      {
        "id": 72,
        "strength": 89
      },
      {
        "id": 28,
        "strength": 87
      },
      {
        "id": 67,
        "strength": 86
      },
      {
        "id": 32,
        "strength": 85
      },
      {
        "id": 15,
        "strength": 84
      },
      {
        "id": 12,
        "strength": 83
      },
      {
        "id": 49,
        "strength": 82
      },
      {
        "id": 61,
        "strength": 81
      },
      {
        "id": 98,
        "strength": 80
      },
      {
        "id": 25,
        "strength": 79
      },
      {
        "id": 55,
        "strength": 78
      },
      {
        "id": 110,
        "strength": 77
      },
      {
        "id": 11,
        "strength": 76
      },
      {
        "id": 39,
        "strength": 75
      },
      {
        "id": 7,
        "strength": 74
      },
      {
        "id": 104,
        "strength": 73
      },
      {
        "id": 3,
        "strength": 72
      },
      {
        "id": 27,
        "strength": 71
      },
      {
        "id": 66,
        "strength": 70
      },
      {
        "id": 82,
        "strength": 69
      },
      {
        "id": 19,
        "strength": 68
      },
      {
        "id": 18,
        "strength": 67
      },
      {
        "id": 85,
        "strength": 66
      },
      {
        "id": 56,
        "strength": 65
      },
      {
        "id": 16,
        "strength": 64
      },
      {
        "id": 108,
        "strength": 63
      },
      {
        "id": 20,
        "strength": 61
      },
      {
        "id": 43,
        "strength": 60
      },
      {
        "id": 30,
        "strength": 59
      },
      {
        "id": 5,
        "strength": 58
      },
      {
        "id": 23,
        "strength": 57
      },
      {
        "id": 68,
        "strength": 56
      },
      {
        "id": 9,
        "strength": 55
      },
      {
        "id": 106,
        "strength": 54
      },
      {
        "id": 42,
        "strength": 53
      },
      {
        "id": 91,
        "strength": 52
      },
      {
        "id": 73,
        "strength": 51
      },
      {
        "id": 112,
        "strength": 50
      },
      {
        "id": 26,
        "strength": 49
      },
      {
        "id": 45,
        "strength": 48
      },
      {
        "id": 64,
        "strength": 47
      },
      {
        "id": 109,
        "strength": 46
      },
      {
        "id": 69,
        "strength": 45
      },
      {
        "id": 1,
        "strength": 44
      },
      {
        "id": 34,
        "strength": 43
      },
      {
        "id": 59,
        "strength": 42
      },
      {
        "id": 40,
        "strength": 41
      },
      {
        "id": 41,
        "strength": 40
      },
      {
        "id": 46,
        "strength": 39
      },
      {
        "id": 53,
        "strength": 38
      },
      {
        "id": 36,
        "strength": 37
      },
      {
        "id": 65,
        "strength": 36
      },
      {
        "id": 14,
        "strength": 35
      },
      {
        "id": 57,
        "strength": 34
      },
      {
        "id": 4,
        "strength": 33
      },
      {
        "id": 17,
        "strength": 32
      },
      {
        "id": 8,
        "strength": 31
      },
      {
        "id": 21,
        "strength": 30
      },
      {
        "id": 97,
        "strength": 29
      },
      {
        "id": 33,
        "strength": 28
      },
      {
        "id": 35,
        "strength": 27
      },
      {
        "id": 2,
        "strength": 26
      },
      {
        "id": 111,
        "strength": 25
      },
      {
        "id": 22,
        "strength": 24
      },
      {
        "id": 51,
        "strength": 23
      },
      {
        "id": 107,
        "strength": 22
      },
      {
        "id": 105,
        "strength": 21
      },
      {
        "id": 6,
        "strength": 19.5
      },
      {
        "id": 38,
        "strength": 18.5
      },
      {
        "id": 96,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 88,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 24
  },
  "25": {
    "email": "jblinder@uh.edu",
    "choices": [
      {
        "id": 52,
        "strength": 117
      },
      {
        "id": 101,
        "strength": 116
      },
      {
        "id": 48,
        "strength": 114
      },
      {
        "id": 102,
        "strength": 113
      },
      {
        "id": 47,
        "strength": 112
      },
      {
        "id": 79,
        "strength": 111
      },
      {
        "id": 75,
        "strength": 110
      },
      {
        "id": 95,
        "strength": 109
      },
      {
        "id": 71,
        "strength": 108
      },
      {
        "id": 61,
        "strength": 107
      },
      {
        "id": 98,
        "strength": 106
      },
      {
        "id": 70,
        "strength": 105
      },
      {
        "id": 80,
        "strength": 104
      },
      {
        "id": 11,
        "strength": 103
      },
      {
        "id": 54,
        "strength": 102
      },
      {
        "id": 103,
        "strength": 101
      },
      {
        "id": 78,
        "strength": 100
      },
      {
        "id": 27,
        "strength": 99
      },
      {
        "id": 16,
        "strength": 98
      },
      {
        "id": 13,
        "strength": 97
      },
      {
        "id": 28,
        "strength": 95
      },
      {
        "id": 32,
        "strength": 94
      },
      {
        "id": 50,
        "strength": 93
      },
      {
        "id": 42,
        "strength": 92
      },
      {
        "id": 12,
        "strength": 91
      },
      {
        "id": 44,
        "strength": 90
      },
      {
        "id": 110,
        "strength": 89
      },
      {
        "id": 59,
        "strength": 88
      },
      {
        "id": 3,
        "strength": 87
      },
      {
        "id": 37,
        "strength": 86
      },
      {
        "id": 82,
        "strength": 85
      },
      {
        "id": 19,
        "strength": 84
      },
      {
        "id": 60,
        "strength": 83
      },
      {
        "id": 33,
        "strength": 82
      },
      {
        "id": 35,
        "strength": 81
      },
      {
        "id": 2,
        "strength": 80
      },
      {
        "id": 10,
        "strength": 79
      },
      {
        "id": 29,
        "strength": 78
      },
      {
        "id": 72,
        "strength": 77
      },
      {
        "id": 20,
        "strength": 75
      },
      {
        "id": 67,
        "strength": 74
      },
      {
        "id": 23,
        "strength": 73
      },
      {
        "id": 15,
        "strength": 72
      },
      {
        "id": 58,
        "strength": 71
      },
      {
        "id": 49,
        "strength": 70
      },
      {
        "id": 26,
        "strength": 69
      },
      {
        "id": 1,
        "strength": 68
      },
      {
        "id": 34,
        "strength": 67
      },
      {
        "id": 24,
        "strength": 66
      },
      {
        "id": 39,
        "strength": 65
      },
      {
        "id": 7,
        "strength": 64
      },
      {
        "id": 104,
        "strength": 63
      },
      {
        "id": 41,
        "strength": 62
      },
      {
        "id": 46,
        "strength": 61
      },
      {
        "id": 36,
        "strength": 60
      },
      {
        "id": 63,
        "strength": 59
      },
      {
        "id": 66,
        "strength": 58
      },
      {
        "id": 31,
        "strength": 57
      },
      {
        "id": 74,
        "strength": 56
      },
      {
        "id": 18,
        "strength": 55
      },
      {
        "id": 85,
        "strength": 54
      },
      {
        "id": 86,
        "strength": 53
      },
      {
        "id": 51,
        "strength": 52
      },
      {
        "id": 108,
        "strength": 51
      },
      {
        "id": 43,
        "strength": 49
      },
      {
        "id": 30,
        "strength": 48
      },
      {
        "id": 5,
        "strength": 47
      },
      {
        "id": 68,
        "strength": 46
      },
      {
        "id": 9,
        "strength": 45
      },
      {
        "id": 106,
        "strength": 44
      },
      {
        "id": 91,
        "strength": 43
      },
      {
        "id": 73,
        "strength": 42
      },
      {
        "id": 88,
        "strength": 41
      },
      {
        "id": 112,
        "strength": 40
      },
      {
        "id": 45,
        "strength": 39
      },
      {
        "id": 64,
        "strength": 38
      },
      {
        "id": 109,
        "strength": 37
      },
      {
        "id": 69,
        "strength": 36
      },
      {
        "id": 55,
        "strength": 35
      },
      {
        "id": 40,
        "strength": 34
      },
      {
        "id": 53,
        "strength": 33
      },
      {
        "id": 65,
        "strength": 32
      },
      {
        "id": 14,
        "strength": 31
      },
      {
        "id": 57,
        "strength": 30
      },
      {
        "id": 4,
        "strength": 29
      },
      {
        "id": 17,
        "strength": 28
      },
      {
        "id": 8,
        "strength": 27
      },
      {
        "id": 21,
        "strength": 26
      },
      {
        "id": 97,
        "strength": 25
      },
      {
        "id": 56,
        "strength": 24
      },
      {
        "id": 111,
        "strength": 23
      },
      {
        "id": 22,
        "strength": 22
      },
      {
        "id": 96,
        "strength": 21
      },
      {
        "id": 107,
        "strength": 20
      },
      {
        "id": 105,
        "strength": 19
      },
      {
        "id": 6,
        "strength": 17.5
      },
      {
        "id": 38,
        "strength": 16.5
      },
      {
        "id": 62,
        "strength": 15.5
      },
      {
        "id": 92,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 25
  },
  "26": {
    "email": "HMA@GOVST.EDU",
    "choices": [
      {
        "id": 102,
        "strength": 116
      },
      {
        "id": 47,
        "strength": 115
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 113
      },
      {
        "id": 78,
        "strength": 112
      },
      {
        "id": 52,
        "strength": 111
      },
      {
        "id": 28,
        "strength": 109
      },
      {
        "id": 42,
        "strength": 108
      },
      {
        "id": 75,
        "strength": 107
      },
      {
        "id": 71,
        "strength": 106
      },
      {
        "id": 44,
        "strength": 105
      },
      {
        "id": 98,
        "strength": 104
      },
      {
        "id": 104,
        "strength": 103
      },
      {
        "id": 103,
        "strength": 102
      },
      {
        "id": 63,
        "strength": 101
      },
      {
        "id": 3,
        "strength": 100
      },
      {
        "id": 66,
        "strength": 99
      },
      {
        "id": 82,
        "strength": 98
      },
      {
        "id": 19,
        "strength": 97
      },
      {
        "id": 35,
        "strength": 96
      },
      {
        "id": 72,
        "strength": 95
      },
      {
        "id": 51,
        "strength": 94
      },
      {
        "id": 101,
        "strength": 93
      },
      {
        "id": 20,
        "strength": 91
      },
      {
        "id": 48,
        "strength": 90
      },
      {
        "id": 43,
        "strength": 89
      },
      {
        "id": 67,
        "strength": 88
      },
      {
        "id": 32,
        "strength": 87
      },
      {
        "id": 23,
        "strength": 86
      },
      {
        "id": 50,
        "strength": 85
      },
      {
        "id": 79,
        "strength": 84
      },
      {
        "id": 12,
        "strength": 83
      },
      {
        "id": 88,
        "strength": 82
      },
      {
        "id": 61,
        "strength": 81
      },
      {
        "id": 25,
        "strength": 80
      },
      {
        "id": 70,
        "strength": 79
      },
      {
        "id": 110,
        "strength": 78
      },
      {
        "id": 11,
        "strength": 77
      },
      {
        "id": 54,
        "strength": 76
      },
      {
        "id": 34,
        "strength": 75
      },
      {
        "id": 59,
        "strength": 74
      },
      {
        "id": 39,
        "strength": 73
      },
      {
        "id": 7,
        "strength": 72
      },
      {
        "id": 46,
        "strength": 71
      },
      {
        "id": 36,
        "strength": 70
      },
      {
        "id": 27,
        "strength": 69
      },
      {
        "id": 37,
        "strength": 68
      },
      {
        "id": 60,
        "strength": 67
      },
      {
        "id": 18,
        "strength": 66
      },
      {
        "id": 33,
        "strength": 65
      },
      {
        "id": 16,
        "strength": 64
      },
      {
        "id": 2,
        "strength": 63
      },
      {
        "id": 10,
        "strength": 62
      },
      {
        "id": 29,
        "strength": 61
      },
      {
        "id": 13,
        "strength": 60
      },
      {
        "id": 86,
        "strength": 59
      },
      {
        "id": 96,
        "strength": 58
      },
      {
        "id": 108,
        "strength": 57
      },
      {
        "id": 105,
        "strength": 56
      },
      {
        "id": 30,
        "strength": 54
      },
      {
        "id": 5,
        "strength": 53
      },
      {
        "id": 68,
        "strength": 52
      },
      {
        "id": 9,
        "strength": 51
      },
      {
        "id": 106,
        "strength": 50
      },
      {
        "id": 15,
        "strength": 49
      },
      {
        "id": 91,
        "strength": 48
      },
      {
        "id": 73,
        "strength": 47
      },
      {
        "id": 58,
        "strength": 46
      },
      {
        "id": 112,
        "strength": 45
      },
      {
        "id": 49,
        "strength": 44
      },
      {
        "id": 45,
        "strength": 43
      },
      {
        "id": 64,
        "strength": 42
      },
      {
        "id": 109,
        "strength": 41
      },
      {
        "id": 69,
        "strength": 40
      },
      {
        "id": 1,
        "strength": 39
      },
      {
        "id": 55,
        "strength": 38
      },
      {
        "id": 24,
        "strength": 37
      },
      {
        "id": 40,
        "strength": 36
      },
      {
        "id": 41,
        "strength": 35
      },
      {
        "id": 53,
        "strength": 34
      },
      {
        "id": 65,
        "strength": 33
      },
      {
        "id": 14,
        "strength": 32
      },
      {
        "id": 57,
        "strength": 31
      },
      {
        "id": 4,
        "strength": 30
      },
      {
        "id": 17,
        "strength": 29
      },
      {
        "id": 8,
        "strength": 28
      },
      {
        "id": 21,
        "strength": 27
      },
      {
        "id": 31,
        "strength": 26
      },
      {
        "id": 74,
        "strength": 25
      },
      {
        "id": 97,
        "strength": 24
      },
      {
        "id": 85,
        "strength": 23
      },
      {
        "id": 56,
        "strength": 22
      },
      {
        "id": 111,
        "strength": 21
      },
      {
        "id": 22,
        "strength": 20
      },
      {
        "id": 107,
        "strength": 19
      },
      {
        "id": 6,
        "strength": 17.5
      },
      {
        "id": 38,
        "strength": 16.5
      },
      {
        "id": 62,
        "strength": 15.5
      },
      {
        "id": 92,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 26
  },
  "27": {
    "email": "mvillami@umd.edu",
    "choices": [
      {
        "id": 95,
        "strength": 117
      },
      {
        "id": 102,
        "strength": 115
      },
      {
        "id": 47,
        "strength": 114
      },
      {
        "id": 75,
        "strength": 113
      },
      {
        "id": 71,
        "strength": 112
      },
      {
        "id": 25,
        "strength": 111
      },
      {
        "id": 80,
        "strength": 110
      },
      {
        "id": 11,
        "strength": 109
      },
      {
        "id": 103,
        "strength": 108
      },
      {
        "id": 52,
        "strength": 107
      },
      {
        "id": 16,
        "strength": 106
      },
      {
        "id": 13,
        "strength": 105
      },
      {
        "id": 101,
        "strength": 104
      },
      {
        "id": 48,
        "strength": 102
      },
      {
        "id": 28,
        "strength": 101
      },
      {
        "id": 32,
        "strength": 100
      },
      {
        "id": 50,
        "strength": 99
      },
      {
        "id": 42,
        "strength": 98
      },
      {
        "id": 79,
        "strength": 97
      },
      {
        "id": 12,
        "strength": 96
      },
      {
        "id": 61,
        "strength": 95
      },
      {
        "id": 44,
        "strength": 94
      },
      {
        "id": 98,
        "strength": 93
      },
      {
        "id": 70,
        "strength": 92
      },
      {
        "id": 54,
        "strength": 91
      },
      {
        "id": 59,
        "strength": 90
      },
      {
        "id": 3,
        "strength": 89
      },
      {
        "id": 78,
        "strength": 88
      },
      {
        "id": 37,
        "strength": 87
      },
      {
        "id": 82,
        "strength": 86
      },
      {
        "id": 19,
        "strength": 85
      },
      {
        "id": 60,
        "strength": 84
      },
      {
        "id": 33,
        "strength": 83
      },
      {
        "id": 35,
        "strength": 82
      },
      {
        "id": 2,
        "strength": 81
      },
      {
        "id": 10,
        "strength": 80
      },
      {
        "id": 29,
        "strength": 79
      },
      {
        "id": 72,
        "strength": 78
      },
      {
        "id": 20,
        "strength": 76
      },
      {
        "id": 67,
        "strength": 75
      },
      {
        "id": 23,
        "strength": 74
      },
      {
        "id": 15,
        "strength": 73
      },
      {
        "id": 58,
        "strength": 72
      },
      {
        "id": 49,
        "strength": 71
      },
      {
        "id": 26,
        "strength": 70
      },
      {
        "id": 1,
        "strength": 69
      },
      {
        "id": 110,
        "strength": 68
      },
      {
        "id": 34,
        "strength": 67
      },
      {
        "id": 24,
        "strength": 66
      },
      {
        "id": 39,
        "strength": 65
      },
      {
        "id": 7,
        "strength": 64
      },
      {
        "id": 104,
        "strength": 63
      },
      {
        "id": 41,
        "strength": 62
      },
      {
        "id": 46,
        "strength": 61
      },
      {
        "id": 36,
        "strength": 60
      },
      {
        "id": 63,
        "strength": 59
      },
      {
        "id": 66,
        "strength": 58
      },
      {
        "id": 31,
        "strength": 57
      },
      {
        "id": 74,
        "strength": 56
      },
      {
        "id": 18,
        "strength": 55
      },
      {
        "id": 85,
        "strength": 54
      },
      {
        "id": 86,
        "strength": 53
      },
      {
        "id": 51,
        "strength": 52
      },
      {
        "id": 108,
        "strength": 51
      },
      {
        "id": 43,
        "strength": 49
      },
      {
        "id": 30,
        "strength": 48
      },
      {
        "id": 5,
        "strength": 47
      },
      {
        "id": 68,
        "strength": 46
      },
      {
        "id": 9,
        "strength": 45
      },
      {
        "id": 106,
        "strength": 44
      },
      {
        "id": 91,
        "strength": 43
      },
      {
        "id": 73,
        "strength": 42
      },
      {
        "id": 88,
        "strength": 41
      },
      {
        "id": 112,
        "strength": 40
      },
      {
        "id": 45,
        "strength": 39
      },
      {
        "id": 64,
        "strength": 38
      },
      {
        "id": 109,
        "strength": 37
      },
      {
        "id": 69,
        "strength": 36
      },
      {
        "id": 55,
        "strength": 35
      },
      {
        "id": 40,
        "strength": 34
      },
      {
        "id": 53,
        "strength": 33
      },
      {
        "id": 65,
        "strength": 32
      },
      {
        "id": 14,
        "strength": 31
      },
      {
        "id": 57,
        "strength": 30
      },
      {
        "id": 4,
        "strength": 29
      },
      {
        "id": 17,
        "strength": 28
      },
      {
        "id": 8,
        "strength": 27
      },
      {
        "id": 21,
        "strength": 26
      },
      {
        "id": 97,
        "strength": 25
      },
      {
        "id": 56,
        "strength": 24
      },
      {
        "id": 111,
        "strength": 23
      },
      {
        "id": 22,
        "strength": 22
      },
      {
        "id": 96,
        "strength": 21
      },
      {
        "id": 107,
        "strength": 20
      },
      {
        "id": 105,
        "strength": 19
      },
      {
        "id": 6,
        "strength": 17.5
      },
      {
        "id": 38,
        "strength": 16.5
      },
      {
        "id": 62,
        "strength": 15.5
      },
      {
        "id": 92,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 27
  },
  "28": {
    "email": "adurante@allentownedc.com",
    "choices": [
      {
        "id": 102,
        "strength": 115
      },
      {
        "id": 47,
        "strength": 114
      },
      {
        "id": 75,
        "strength": 113
      },
      {
        "id": 95,
        "strength": 112
      },
      {
        "id": 71,
        "strength": 111
      },
      {
        "id": 110,
        "strength": 110
      },
      {
        "id": 80,
        "strength": 109
      },
      {
        "id": 103,
        "strength": 108
      },
      {
        "id": 78,
        "strength": 107
      },
      {
        "id": 19,
        "strength": 106
      },
      {
        "id": 52,
        "strength": 105
      },
      {
        "id": 101,
        "strength": 104
      },
      {
        "id": 20,
        "strength": 102
      },
      {
        "id": 48,
        "strength": 101
      },
      {
        "id": 67,
        "strength": 100
      },
      {
        "id": 32,
        "strength": 99
      },
      {
        "id": 23,
        "strength": 98
      },
      {
        "id": 50,
        "strength": 97
      },
      {
        "id": 42,
        "strength": 96
      },
      {
        "id": 79,
        "strength": 95
      },
      {
        "id": 12,
        "strength": 94
      },
      {
        "id": 61,
        "strength": 93
      },
      {
        "id": 44,
        "strength": 92
      },
      {
        "id": 26,
        "strength": 91
      },
      {
        "id": 98,
        "strength": 90
      },
      {
        "id": 25,
        "strength": 89
      },
      {
        "id": 70,
        "strength": 88
      },
      {
        "id": 11,
        "strength": 87
      },
      {
        "id": 54,
        "strength": 86
      },
      {
        "id": 34,
        "strength": 85
      },
      {
        "id": 59,
        "strength": 84
      },
      {
        "id": 39,
        "strength": 83
      },
      {
        "id": 7,
        "strength": 82
      },
      {
        "id": 104,
        "strength": 81
      },
      {
        "id": 46,
        "strength": 80
      },
      {
        "id": 36,
        "strength": 79
      },
      {
        "id": 63,
        "strength": 78
      },
      {
        "id": 3,
        "strength": 77
      },
      {
        "id": 27,
        "strength": 76
      },
      {
        "id": 66,
        "strength": 75
      },
      {
        "id": 37,
        "strength": 74
      },
      {
        "id": 82,
        "strength": 73
      },
      {
        "id": 60,
        "strength": 72
      },
      {
        "id": 18,
        "strength": 71
      },
      {
        "id": 33,
        "strength": 70
      },
      {
        "id": 35,
        "strength": 69
      },
      {
        "id": 16,
        "strength": 68
      },
      {
        "id": 2,
        "strength": 67
      },
      {
        "id": 10,
        "strength": 66
      },
      {
        "id": 29,
        "strength": 65
      },
      {
        "id": 13,
        "strength": 64
      },
      {
        "id": 86,
        "strength": 63
      },
      {
        "id": 72,
        "strength": 62
      },
      {
        "id": 51,
        "strength": 61
      },
      {
        "id": 108,
        "strength": 60
      },
      {
        "id": 43,
        "strength": 58
      },
      {
        "id": 30,
        "strength": 57
      },
      {
        "id": 5,
        "strength": 56
      },
      {
        "id": 68,
        "strength": 55
      },
      {
        "id": 9,
        "strength": 54
      },
      {
        "id": 106,
        "strength": 53
      },
      {
        "id": 15,
        "strength": 52
      },
      {
        "id": 91,
        "strength": 51
      },
      {
        "id": 73,
        "strength": 50
      },
      {
        "id": 88,
        "strength": 49
      },
      {
        "id": 58,
        "strength": 48
      },
      {
        "id": 112,
        "strength": 47
      },
      {
        "id": 49,
        "strength": 46
      },
      {
        "id": 45,
        "strength": 45
      },
      {
        "id": 64,
        "strength": 44
      },
      {
        "id": 109,
        "strength": 43
      },
      {
        "id": 69,
        "strength": 42
      },
      {
        "id": 1,
        "strength": 41
      },
      {
        "id": 55,
        "strength": 40
      },
      {
        "id": 24,
        "strength": 39
      },
      {
        "id": 40,
        "strength": 38
      },
      {
        "id": 41,
        "strength": 37
      },
      {
        "id": 53,
        "strength": 36
      },
      {
        "id": 65,
        "strength": 35
      },
      {
        "id": 14,
        "strength": 34
      },
      {
        "id": 57,
        "strength": 33
      },
      {
        "id": 4,
        "strength": 32
      },
      {
        "id": 17,
        "strength": 31
      },
      {
        "id": 8,
        "strength": 30
      },
      {
        "id": 21,
        "strength": 29
      },
      {
        "id": 31,
        "strength": 28
      },
      {
        "id": 74,
        "strength": 27
      },
      {
        "id": 85,
        "strength": 26
      },
      {
        "id": 56,
        "strength": 25
      },
      {
        "id": 111,
        "strength": 24
      },
      {
        "id": 22,
        "strength": 23
      },
      {
        "id": 96,
        "strength": 22
      },
      {
        "id": 107,
        "strength": 21
      },
      {
        "id": 105,
        "strength": 20
      },
      {
        "id": 6,
        "strength": 18.5
      },
      {
        "id": 38,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 28
  },
  "29": {
    "email": "tcassell@harpercollege.edu",
    "choices": [
      {
        "id": 75,
        "strength": 117
      },
      {
        "id": 101,
        "strength": 116
      },
      {
        "id": 102,
        "strength": 114
      },
      {
        "id": 79,
        "strength": 113
      },
      {
        "id": 95,
        "strength": 112
      },
      {
        "id": 54,
        "strength": 111
      },
      {
        "id": 103,
        "strength": 110
      },
      {
        "id": 37,
        "strength": 109
      },
      {
        "id": 60,
        "strength": 108
      },
      {
        "id": 52,
        "strength": 107
      },
      {
        "id": 10,
        "strength": 106
      },
      {
        "id": 13,
        "strength": 104
      },
      {
        "id": 72,
        "strength": 103
      },
      {
        "id": 48,
        "strength": 101
      },
      {
        "id": 28,
        "strength": 100
      },
      {
        "id": 50,
        "strength": 99
      },
      {
        "id": 47,
        "strength": 98
      },
      {
        "id": 58,
        "strength": 97
      },
      {
        "id": 71,
        "strength": 96
      },
      {
        "id": 44,
        "strength": 95
      },
      {
        "id": 98,
        "strength": 94
      },
      {
        "id": 25,
        "strength": 93
      },
      {
        "id": 80,
        "strength": 92
      },
      {
        "id": 11,
        "strength": 91
      },
      {
        "id": 24,
        "strength": 90
      },
      {
        "id": 39,
        "strength": 89
      },
      {
        "id": 3,
        "strength": 88
      },
      {
        "id": 78,
        "strength": 87
      },
      {
        "id": 27,
        "strength": 86
      },
      {
        "id": 66,
        "strength": 85
      },
      {
        "id": 19,
        "strength": 84
      },
      {
        "id": 31,
        "strength": 83
      },
      {
        "id": 74,
        "strength": 82
      },
      {
        "id": 18,
        "strength": 81
      },
      {
        "id": 16,
        "strength": 80
      },
      {
        "id": 20,
        "strength": 78
      },
      {
        "id": 67,
        "strength": 77
      },
      {
        "id": 32,
        "strength": 76
      },
      {
        "id": 23,
        "strength": 75
      },
      {
        "id": 15,
        "strength": 74
      },
      {
        "id": 42,
        "strength": 73
      },
      {
        "id": 12,
        "strength": 72
      },
      {
        "id": 49,
        "strength": 71
      },
      {
        "id": 61,
        "strength": 70
      },
      {
        "id": 26,
        "strength": 69
      },
      {
        "id": 70,
        "strength": 68
      },
      {
        "id": 110,
        "strength": 67
      },
      {
        "id": 34,
        "strength": 66
      },
      {
        "id": 59,
        "strength": 65
      },
      {
        "id": 7,
        "strength": 64
      },
      {
        "id": 104,
        "strength": 63
      },
      {
        "id": 46,
        "strength": 62
      },
      {
        "id": 36,
        "strength": 61
      },
      {
        "id": 63,
        "strength": 60
      },
      {
        "id": 82,
        "strength": 59
      },
      {
        "id": 33,
        "strength": 58
      },
      {
        "id": 35,
        "strength": 57
      },
      {
        "id": 56,
        "strength": 56
      },
      {
        "id": 2,
        "strength": 55
      },
      {
        "id": 86,
        "strength": 54
      },
      {
        "id": 51,
        "strength": 53
      },
      {
        "id": 108,
        "strength": 52
      },
      {
        "id": 43,
        "strength": 50
      },
      {
        "id": 30,
        "strength": 49
      },
      {
        "id": 5,
        "strength": 48
      },
      {
        "id": 68,
        "strength": 47
      },
      {
        "id": 9,
        "strength": 46
      },
      {
        "id": 106,
        "strength": 45
      },
      {
        "id": 91,
        "strength": 44
      },
      {
        "id": 73,
        "strength": 43
      },
      {
        "id": 88,
        "strength": 42
      },
      {
        "id": 112,
        "strength": 41
      },
      {
        "id": 45,
        "strength": 40
      },
      {
        "id": 64,
        "strength": 39
      },
      {
        "id": 109,
        "strength": 38
      },
      {
        "id": 69,
        "strength": 37
      },
      {
        "id": 1,
        "strength": 36
      },
      {
        "id": 55,
        "strength": 35
      },
      {
        "id": 40,
        "strength": 34
      },
      {
        "id": 41,
        "strength": 33
      },
      {
        "id": 53,
        "strength": 32
      },
      {
        "id": 65,
        "strength": 31
      },
      {
        "id": 14,
        "strength": 30
      },
      {
        "id": 57,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 8,
        "strength": 26
      },
      {
        "id": 21,
        "strength": 25
      },
      {
        "id": 97,
        "strength": 24
      },
      {
        "id": 85,
        "strength": 23
      },
      {
        "id": 111,
        "strength": 22
      },
      {
        "id": 22,
        "strength": 21
      },
      {
        "id": 96,
        "strength": 20
      },
      {
        "id": 107,
        "strength": 19
      },
      {
        "id": 105,
        "strength": 18
      },
      {
        "id": 6,
        "strength": 16.5
      },
      {
        "id": 38,
        "strength": 15.5
      },
      {
        "id": 62,
        "strength": 14.5
      },
      {
        "id": 92,
        "strength": 13.5
      },
      {
        "id": 81,
        "strength": 12.5
      },
      {
        "id": 87,
        "strength": 11.5
      },
      {
        "id": 90,
        "strength": 10.5
      },
      {
        "id": 84,
        "strength": 9.5
      },
      {
        "id": 100,
        "strength": 8.5
      },
      {
        "id": 93,
        "strength": 7.5
      },
      {
        "id": 99,
        "strength": 6.5
      },
      {
        "id": 77,
        "strength": 5.5
      },
      {
        "id": 89,
        "strength": 4.5
      },
      {
        "id": 83,
        "strength": 3.5
      },
      {
        "id": 76,
        "strength": 2.5
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 29
  },
  "30": {
    "email": "agreenspan@sciencecenter.org",
    "choices": [
      {
        "id": 67,
        "strength": 115
      },
      {
        "id": 106,
        "strength": 114
      },
      {
        "id": 95,
        "strength": 113
      },
      {
        "id": 110,
        "strength": 112
      },
      {
        "id": 80,
        "strength": 111
      },
      {
        "id": 7,
        "strength": 110
      },
      {
        "id": 78,
        "strength": 109
      },
      {
        "id": 8,
        "strength": 108
      },
      {
        "id": 52,
        "strength": 107
      },
      {
        "id": 105,
        "strength": 106
      },
      {
        "id": 20,
        "strength": 104
      },
      {
        "id": 48,
        "strength": 103
      },
      {
        "id": 28,
        "strength": 102
      },
      {
        "id": 43,
        "strength": 101
      },
      {
        "id": 32,
        "strength": 100
      },
      {
        "id": 23,
        "strength": 99
      },
      {
        "id": 102,
        "strength": 98
      },
      {
        "id": 15,
        "strength": 97
      },
      {
        "id": 50,
        "strength": 96
      },
      {
        "id": 47,
        "strength": 95
      },
      {
        "id": 79,
        "strength": 94
      },
      {
        "id": 12,
        "strength": 93
      },
      {
        "id": 75,
        "strength": 92
      },
      {
        "id": 49,
        "strength": 91
      },
      {
        "id": 71,
        "strength": 90
      },
      {
        "id": 61,
        "strength": 89
      },
      {
        "id": 44,
        "strength": 88
      },
      {
        "id": 70,
        "strength": 87
      },
      {
        "id": 109,
        "strength": 86
      },
      {
        "id": 55,
        "strength": 85
      },
      {
        "id": 54,
        "strength": 84
      },
      {
        "id": 34,
        "strength": 83
      },
      {
        "id": 59,
        "strength": 82
      },
      {
        "id": 104,
        "strength": 81
      },
      {
        "id": 40,
        "strength": 80
      },
      {
        "id": 46,
        "strength": 79
      },
      {
        "id": 53,
        "strength": 78
      },
      {
        "id": 103,
        "strength": 77
      },
      {
        "id": 63,
        "strength": 76
      },
      {
        "id": 3,
        "strength": 75
      },
      {
        "id": 57,
        "strength": 74
      },
      {
        "id": 82,
        "strength": 73
      },
      {
        "id": 19,
        "strength": 72
      },
      {
        "id": 60,
        "strength": 71
      },
      {
        "id": 85,
        "strength": 70
      },
      {
        "id": 16,
        "strength": 69
      },
      {
        "id": 2,
        "strength": 68
      },
      {
        "id": 86,
        "strength": 67
      },
      {
        "id": 72,
        "strength": 66
      },
      {
        "id": 51,
        "strength": 65
      },
      {
        "id": 108,
        "strength": 64
      },
      {
        "id": 101,
        "strength": 63
      },
      {
        "id": 5,
        "strength": 61
      },
      {
        "id": 68,
        "strength": 60
      },
      {
        "id": 9,
        "strength": 59
      },
      {
        "id": 42,
        "strength": 58
      },
      {
        "id": 91,
        "strength": 57
      },
      {
        "id": 73,
        "strength": 56
      },
      {
        "id": 88,
        "strength": 55
      },
      {
        "id": 58,
        "strength": 54
      },
      {
        "id": 99,
        "strength": 53
      },
      {
        "id": 112,
        "strength": 52
      },
      {
        "id": 26,
        "strength": 51
      },
      {
        "id": 98,
        "strength": 50
      },
      {
        "id": 100,
        "strength": 49
      },
      {
        "id": 93,
        "strength": 48
      },
      {
        "id": 45,
        "strength": 47
      },
      {
        "id": 64,
        "strength": 46
      },
      {
        "id": 25,
        "strength": 45
      },
      {
        "id": 38,
        "strength": 44
      },
      {
        "id": 69,
        "strength": 43
      },
      {
        "id": 1,
        "strength": 42
      },
      {
        "id": 11,
        "strength": 41
      },
      {
        "id": 24,
        "strength": 40
      },
      {
        "id": 39,
        "strength": 39
      },
      {
        "id": 84,
        "strength": 38
      },
      {
        "id": 90,
        "strength": 37
      },
      {
        "id": 41,
        "strength": 36
      },
      {
        "id": 36,
        "strength": 35
      },
      {
        "id": 89,
        "strength": 34
      },
      {
        "id": 65,
        "strength": 33
      },
      {
        "id": 27,
        "strength": 32
      },
      {
        "id": 14,
        "strength": 31
      },
      {
        "id": 77,
        "strength": 30
      },
      {
        "id": 66,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 37,
        "strength": 26
      },
      {
        "id": 21,
        "strength": 25
      },
      {
        "id": 31,
        "strength": 24
      },
      {
        "id": 87,
        "strength": 23
      },
      {
        "id": 74,
        "strength": 22
      },
      {
        "id": 83,
        "strength": 21
      },
      {
        "id": 18,
        "strength": 20
      },
      {
        "id": 97,
        "strength": 19
      },
      {
        "id": 81,
        "strength": 18
      },
      {
        "id": 33,
        "strength": 17
      },
      {
        "id": 35,
        "strength": 16
      },
      {
        "id": 92,
        "strength": 15
      },
      {
        "id": 76,
        "strength": 14
      },
      {
        "id": 56,
        "strength": 13
      },
      {
        "id": 10,
        "strength": 12
      },
      {
        "id": 29,
        "strength": 11
      },
      {
        "id": 111,
        "strength": 10
      },
      {
        "id": 13,
        "strength": 9
      },
      {
        "id": 62,
        "strength": 8
      },
      {
        "id": 22,
        "strength": 7
      },
      {
        "id": 96,
        "strength": 6
      },
      {
        "id": 107,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 30
  },
  "31": {
    "email": "pbc6888@lhup.edu",
    "choices": [
      {
        "id": 75,
        "strength": 116
      },
      {
        "id": 60,
        "strength": 115
      },
      {
        "id": 101,
        "strength": 114
      },
      {
        "id": 48,
        "strength": 112
      },
      {
        "id": 102,
        "strength": 111
      },
      {
        "id": 50,
        "strength": 110
      },
      {
        "id": 79,
        "strength": 109
      },
      {
        "id": 95,
        "strength": 108
      },
      {
        "id": 58,
        "strength": 107
      },
      {
        "id": 44,
        "strength": 106
      },
      {
        "id": 110,
        "strength": 105
      },
      {
        "id": 54,
        "strength": 104
      },
      {
        "id": 24,
        "strength": 103
      },
      {
        "id": 103,
        "strength": 102
      },
      {
        "id": 37,
        "strength": 101
      },
      {
        "id": 74,
        "strength": 100
      },
      {
        "id": 10,
        "strength": 99
      },
      {
        "id": 29,
        "strength": 98
      },
      {
        "id": 13,
        "strength": 97
      },
      {
        "id": 72,
        "strength": 96
      },
      {
        "id": 28,
        "strength": 94
      },
      {
        "id": 67,
        "strength": 93
      },
      {
        "id": 32,
        "strength": 92
      },
      {
        "id": 15,
        "strength": 91
      },
      {
        "id": 47,
        "strength": 90
      },
      {
        "id": 12,
        "strength": 89
      },
      {
        "id": 49,
        "strength": 88
      },
      {
        "id": 71,
        "strength": 87
      },
      {
        "id": 61,
        "strength": 86
      },
      {
        "id": 98,
        "strength": 85
      },
      {
        "id": 25,
        "strength": 84
      },
      {
        "id": 70,
        "strength": 83
      },
      {
        "id": 80,
        "strength": 82
      },
      {
        "id": 11,
        "strength": 81
      },
      {
        "id": 39,
        "strength": 80
      },
      {
        "id": 7,
        "strength": 79
      },
      {
        "id": 63,
        "strength": 78
      },
      {
        "id": 3,
        "strength": 77
      },
      {
        "id": 78,
        "strength": 76
      },
      {
        "id": 27,
        "strength": 75
      },
      {
        "id": 66,
        "strength": 74
      },
      {
        "id": 19,
        "strength": 73
      },
      {
        "id": 18,
        "strength": 72
      },
      {
        "id": 52,
        "strength": 71
      },
      {
        "id": 56,
        "strength": 70
      },
      {
        "id": 16,
        "strength": 69
      },
      {
        "id": 86,
        "strength": 68
      },
      {
        "id": 108,
        "strength": 67
      },
      {
        "id": 20,
        "strength": 65
      },
      {
        "id": 43,
        "strength": 64
      },
      {
        "id": 30,
        "strength": 63
      },
      {
        "id": 5,
        "strength": 62
      },
      {
        "id": 23,
        "strength": 61
      },
      {
        "id": 68,
        "strength": 60
      },
      {
        "id": 9,
        "strength": 59
      },
      {
        "id": 106,
        "strength": 58
      },
      {
        "id": 42,
        "strength": 57
      },
      {
        "id": 91,
        "strength": 56
      },
      {
        "id": 73,
        "strength": 55
      },
      {
        "id": 112,
        "strength": 54
      },
      {
        "id": 26,
        "strength": 53
      },
      {
        "id": 45,
        "strength": 52
      },
      {
        "id": 64,
        "strength": 51
      },
      {
        "id": 109,
        "strength": 50
      },
      {
        "id": 69,
        "strength": 49
      },
      {
        "id": 1,
        "strength": 48
      },
      {
        "id": 55,
        "strength": 47
      },
      {
        "id": 34,
        "strength": 46
      },
      {
        "id": 59,
        "strength": 45
      },
      {
        "id": 104,
        "strength": 44
      },
      {
        "id": 40,
        "strength": 43
      },
      {
        "id": 41,
        "strength": 42
      },
      {
        "id": 46,
        "strength": 41
      },
      {
        "id": 53,
        "strength": 40
      },
      {
        "id": 36,
        "strength": 39
      },
      {
        "id": 65,
        "strength": 38
      },
      {
        "id": 14,
        "strength": 37
      },
      {
        "id": 57,
        "strength": 36
      },
      {
        "id": 4,
        "strength": 35
      },
      {
        "id": 17,
        "strength": 34
      },
      {
        "id": 8,
        "strength": 33
      },
      {
        "id": 21,
        "strength": 32
      },
      {
        "id": 82,
        "strength": 31
      },
      {
        "id": 97,
        "strength": 30
      },
      {
        "id": 33,
        "strength": 29
      },
      {
        "id": 35,
        "strength": 28
      },
      {
        "id": 85,
        "strength": 27
      },
      {
        "id": 2,
        "strength": 26
      },
      {
        "id": 111,
        "strength": 25
      },
      {
        "id": 22,
        "strength": 24
      },
      {
        "id": 51,
        "strength": 23
      },
      {
        "id": 107,
        "strength": 22
      },
      {
        "id": 105,
        "strength": 21
      },
      {
        "id": 6,
        "strength": 19.5
      },
      {
        "id": 38,
        "strength": 18.5
      },
      {
        "id": 96,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 88,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 31
  },
  "32": {
    "email": "blandine@eaecouncil.com",
    "choices": [
      {
        "id": 47,
        "strength": 116
      },
      {
        "id": 50,
        "strength": 114
      },
      {
        "id": 12,
        "strength": 113
      },
      {
        "id": 71,
        "strength": 112
      },
      {
        "id": 61,
        "strength": 111
      },
      {
        "id": 70,
        "strength": 110
      },
      {
        "id": 110,
        "strength": 109
      },
      {
        "id": 80,
        "strength": 108
      },
      {
        "id": 52,
        "strength": 107
      },
      {
        "id": 16,
        "strength": 106
      },
      {
        "id": 13,
        "strength": 105
      },
      {
        "id": 72,
        "strength": 104
      },
      {
        "id": 48,
        "strength": 102
      },
      {
        "id": 28,
        "strength": 101
      },
      {
        "id": 67,
        "strength": 100
      },
      {
        "id": 102,
        "strength": 99
      },
      {
        "id": 15,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 75,
        "strength": 96
      },
      {
        "id": 95,
        "strength": 95
      },
      {
        "id": 44,
        "strength": 94
      },
      {
        "id": 25,
        "strength": 93
      },
      {
        "id": 1,
        "strength": 92
      },
      {
        "id": 11,
        "strength": 91
      },
      {
        "id": 34,
        "strength": 90
      },
      {
        "id": 59,
        "strength": 89
      },
      {
        "id": 7,
        "strength": 88
      },
      {
        "id": 41,
        "strength": 87
      },
      {
        "id": 103,
        "strength": 86
      },
      {
        "id": 63,
        "strength": 85
      },
      {
        "id": 3,
        "strength": 84
      },
      {
        "id": 78,
        "strength": 83
      },
      {
        "id": 27,
        "strength": 82
      },
      {
        "id": 19,
        "strength": 81
      },
      {
        "id": 60,
        "strength": 80
      },
      {
        "id": 33,
        "strength": 79
      },
      {
        "id": 35,
        "strength": 78
      },
      {
        "id": 85,
        "strength": 77
      },
      {
        "id": 2,
        "strength": 76
      },
      {
        "id": 86,
        "strength": 75
      },
      {
        "id": 108,
        "strength": 74
      },
      {
        "id": 101,
        "strength": 73
      },
      {
        "id": 105,
        "strength": 72
      },
      {
        "id": 20,
        "strength": 70
      },
      {
        "id": 6,
        "strength": 69
      },
      {
        "id": 43,
        "strength": 68
      },
      {
        "id": 30,
        "strength": 67
      },
      {
        "id": 5,
        "strength": 66
      },
      {
        "id": 23,
        "strength": 65
      },
      {
        "id": 68,
        "strength": 64
      },
      {
        "id": 9,
        "strength": 63
      },
      {
        "id": 106,
        "strength": 62
      },
      {
        "id": 79,
        "strength": 61
      },
      {
        "id": 91,
        "strength": 60
      },
      {
        "id": 73,
        "strength": 59
      },
      {
        "id": 58,
        "strength": 58
      },
      {
        "id": 112,
        "strength": 57
      },
      {
        "id": 49,
        "strength": 56
      },
      {
        "id": 26,
        "strength": 55
      },
      {
        "id": 98,
        "strength": 54
      },
      {
        "id": 45,
        "strength": 53
      },
      {
        "id": 64,
        "strength": 52
      },
      {
        "id": 109,
        "strength": 51
      },
      {
        "id": 69,
        "strength": 50
      },
      {
        "id": 55,
        "strength": 49
      },
      {
        "id": 54,
        "strength": 48
      },
      {
        "id": 24,
        "strength": 47
      },
      {
        "id": 39,
        "strength": 46
      },
      {
        "id": 104,
        "strength": 45
      },
      {
        "id": 40,
        "strength": 44
      },
      {
        "id": 46,
        "strength": 43
      },
      {
        "id": 53,
        "strength": 42
      },
      {
        "id": 36,
        "strength": 41
      },
      {
        "id": 65,
        "strength": 40
      },
      {
        "id": 14,
        "strength": 39
      },
      {
        "id": 57,
        "strength": 38
      },
      {
        "id": 66,
        "strength": 37
      },
      {
        "id": 4,
        "strength": 36
      },
      {
        "id": 17,
        "strength": 35
      },
      {
        "id": 37,
        "strength": 34
      },
      {
        "id": 8,
        "strength": 33
      },
      {
        "id": 21,
        "strength": 32
      },
      {
        "id": 82,
        "strength": 31
      },
      {
        "id": 31,
        "strength": 30
      },
      {
        "id": 74,
        "strength": 29
      },
      {
        "id": 18,
        "strength": 28
      },
      {
        "id": 56,
        "strength": 27
      },
      {
        "id": 10,
        "strength": 26
      },
      {
        "id": 29,
        "strength": 25
      },
      {
        "id": 111,
        "strength": 24
      },
      {
        "id": 22,
        "strength": 23
      },
      {
        "id": 51,
        "strength": 22
      },
      {
        "id": 107,
        "strength": 21
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 32
  },
  "33": {
    "email": "rmartin@georgiasbdc.org",
    "choices": [
      {
        "id": 47,
        "strength": 116
      },
      {
        "id": 71,
        "strength": 115
      },
      {
        "id": 80,
        "strength": 114
      },
      {
        "id": 103,
        "strength": 113
      },
      {
        "id": 52,
        "strength": 112
      },
      {
        "id": 28,
        "strength": 110
      },
      {
        "id": 32,
        "strength": 109
      },
      {
        "id": 102,
        "strength": 108
      },
      {
        "id": 42,
        "strength": 107
      },
      {
        "id": 12,
        "strength": 106
      },
      {
        "id": 75,
        "strength": 105
      },
      {
        "id": 95,
        "strength": 104
      },
      {
        "id": 61,
        "strength": 103
      },
      {
        "id": 25,
        "strength": 102
      },
      {
        "id": 70,
        "strength": 101
      },
      {
        "id": 11,
        "strength": 100
      },
      {
        "id": 59,
        "strength": 99
      },
      {
        "id": 78,
        "strength": 98
      },
      {
        "id": 27,
        "strength": 97
      },
      {
        "id": 19,
        "strength": 96
      },
      {
        "id": 35,
        "strength": 95
      },
      {
        "id": 16,
        "strength": 94
      },
      {
        "id": 2,
        "strength": 93
      },
      {
        "id": 13,
        "strength": 92
      },
      {
        "id": 72,
        "strength": 91
      },
      {
        "id": 101,
        "strength": 90
      },
      {
        "id": 20,
        "strength": 88
      },
      {
        "id": 48,
        "strength": 87
      },
      {
        "id": 67,
        "strength": 86
      },
      {
        "id": 23,
        "strength": 85
      },
      {
        "id": 50,
        "strength": 84
      },
      {
        "id": 79,
        "strength": 83
      },
      {
        "id": 44,
        "strength": 82
      },
      {
        "id": 26,
        "strength": 81
      },
      {
        "id": 98,
        "strength": 80
      },
      {
        "id": 1,
        "strength": 79
      },
      {
        "id": 110,
        "strength": 78
      },
      {
        "id": 54,
        "strength": 77
      },
      {
        "id": 34,
        "strength": 76
      },
      {
        "id": 39,
        "strength": 75
      },
      {
        "id": 7,
        "strength": 74
      },
      {
        "id": 104,
        "strength": 73
      },
      {
        "id": 41,
        "strength": 72
      },
      {
        "id": 46,
        "strength": 71
      },
      {
        "id": 36,
        "strength": 70
      },
      {
        "id": 63,
        "strength": 69
      },
      {
        "id": 3,
        "strength": 68
      },
      {
        "id": 66,
        "strength": 67
      },
      {
        "id": 37,
        "strength": 66
      },
      {
        "id": 82,
        "strength": 65
      },
      {
        "id": 60,
        "strength": 64
      },
      {
        "id": 18,
        "strength": 63
      },
      {
        "id": 85,
        "strength": 62
      },
      {
        "id": 10,
        "strength": 61
      },
      {
        "id": 29,
        "strength": 60
      },
      {
        "id": 86,
        "strength": 59
      },
      {
        "id": 51,
        "strength": 58
      },
      {
        "id": 108,
        "strength": 57
      },
      {
        "id": 43,
        "strength": 55
      },
      {
        "id": 30,
        "strength": 54
      },
      {
        "id": 5,
        "strength": 53
      },
      {
        "id": 68,
        "strength": 52
      },
      {
        "id": 9,
        "strength": 51
      },
      {
        "id": 106,
        "strength": 50
      },
      {
        "id": 15,
        "strength": 49
      },
      {
        "id": 91,
        "strength": 48
      },
      {
        "id": 73,
        "strength": 47
      },
      {
        "id": 88,
        "strength": 46
      },
      {
        "id": 58,
        "strength": 45
      },
      {
        "id": 112,
        "strength": 44
      },
      {
        "id": 49,
        "strength": 43
      },
      {
        "id": 45,
        "strength": 42
      },
      {
        "id": 64,
        "strength": 41
      },
      {
        "id": 109,
        "strength": 40
      },
      {
        "id": 69,
        "strength": 39
      },
      {
        "id": 55,
        "strength": 38
      },
      {
        "id": 24,
        "strength": 37
      },
      {
        "id": 40,
        "strength": 36
      },
      {
        "id": 53,
        "strength": 35
      },
      {
        "id": 65,
        "strength": 34
      },
      {
        "id": 14,
        "strength": 33
      },
      {
        "id": 57,
        "strength": 32
      },
      {
        "id": 4,
        "strength": 31
      },
      {
        "id": 17,
        "strength": 30
      },
      {
        "id": 8,
        "strength": 29
      },
      {
        "id": 21,
        "strength": 28
      },
      {
        "id": 31,
        "strength": 27
      },
      {
        "id": 74,
        "strength": 26
      },
      {
        "id": 56,
        "strength": 25
      },
      {
        "id": 111,
        "strength": 24
      },
      {
        "id": 22,
        "strength": 23
      },
      {
        "id": 96,
        "strength": 22
      },
      {
        "id": 107,
        "strength": 21
      },
      {
        "id": 105,
        "strength": 20
      },
      {
        "id": 6,
        "strength": 18.5
      },
      {
        "id": 38,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 33
  },
  "34": {
    "email": "kdesai@lindenpointe.com",
    "choices": [
      {
        "id": 47,
        "strength": 116
      },
      {
        "id": 80,
        "strength": 115
      },
      {
        "id": 103,
        "strength": 114
      },
      {
        "id": 19,
        "strength": 113
      },
      {
        "id": 105,
        "strength": 112
      },
      {
        "id": 28,
        "strength": 110
      },
      {
        "id": 67,
        "strength": 109
      },
      {
        "id": 32,
        "strength": 108
      },
      {
        "id": 102,
        "strength": 107
      },
      {
        "id": 50,
        "strength": 106
      },
      {
        "id": 75,
        "strength": 105
      },
      {
        "id": 95,
        "strength": 104
      },
      {
        "id": 71,
        "strength": 103
      },
      {
        "id": 61,
        "strength": 102
      },
      {
        "id": 70,
        "strength": 101
      },
      {
        "id": 110,
        "strength": 100
      },
      {
        "id": 7,
        "strength": 99
      },
      {
        "id": 36,
        "strength": 98
      },
      {
        "id": 63,
        "strength": 97
      },
      {
        "id": 3,
        "strength": 96
      },
      {
        "id": 78,
        "strength": 95
      },
      {
        "id": 52,
        "strength": 94
      },
      {
        "id": 16,
        "strength": 93
      },
      {
        "id": 13,
        "strength": 92
      },
      {
        "id": 86,
        "strength": 91
      },
      {
        "id": 108,
        "strength": 90
      },
      {
        "id": 101,
        "strength": 89
      },
      {
        "id": 20,
        "strength": 87
      },
      {
        "id": 48,
        "strength": 86
      },
      {
        "id": 30,
        "strength": 85
      },
      {
        "id": 23,
        "strength": 84
      },
      {
        "id": 42,
        "strength": 83
      },
      {
        "id": 79,
        "strength": 82
      },
      {
        "id": 12,
        "strength": 81
      },
      {
        "id": 88,
        "strength": 80
      },
      {
        "id": 44,
        "strength": 79
      },
      {
        "id": 26,
        "strength": 78
      },
      {
        "id": 98,
        "strength": 77
      },
      {
        "id": 25,
        "strength": 76
      },
      {
        "id": 11,
        "strength": 75
      },
      {
        "id": 54,
        "strength": 74
      },
      {
        "id": 59,
        "strength": 73
      },
      {
        "id": 39,
        "strength": 72
      },
      {
        "id": 104,
        "strength": 71
      },
      {
        "id": 46,
        "strength": 70
      },
      {
        "id": 27,
        "strength": 69
      },
      {
        "id": 66,
        "strength": 68
      },
      {
        "id": 37,
        "strength": 67
      },
      {
        "id": 8,
        "strength": 66
      },
      {
        "id": 82,
        "strength": 65
      },
      {
        "id": 60,
        "strength": 64
      },
      {
        "id": 18,
        "strength": 63
      },
      {
        "id": 33,
        "strength": 62
      },
      {
        "id": 35,
        "strength": 61
      },
      {
        "id": 2,
        "strength": 60
      },
      {
        "id": 10,
        "strength": 59
      },
      {
        "id": 29,
        "strength": 58
      },
      {
        "id": 72,
        "strength": 57
      },
      {
        "id": 51,
        "strength": 56
      },
      {
        "id": 96,
        "strength": 55
      },
      {
        "id": 107,
        "strength": 54
      },
      {
        "id": 43,
        "strength": 52
      },
      {
        "id": 5,
        "strength": 51
      },
      {
        "id": 68,
        "strength": 50
      },
      {
        "id": 9,
        "strength": 49
      },
      {
        "id": 106,
        "strength": 48
      },
      {
        "id": 15,
        "strength": 47
      },
      {
        "id": 91,
        "strength": 46
      },
      {
        "id": 73,
        "strength": 45
      },
      {
        "id": 58,
        "strength": 44
      },
      {
        "id": 112,
        "strength": 43
      },
      {
        "id": 49,
        "strength": 42
      },
      {
        "id": 45,
        "strength": 41
      },
      {
        "id": 64,
        "strength": 40
      },
      {
        "id": 109,
        "strength": 39
      },
      {
        "id": 69,
        "strength": 38
      },
      {
        "id": 1,
        "strength": 37
      },
      {
        "id": 55,
        "strength": 36
      },
      {
        "id": 24,
        "strength": 35
      },
      {
        "id": 40,
        "strength": 34
      },
      {
        "id": 41,
        "strength": 33
      },
      {
        "id": 53,
        "strength": 32
      },
      {
        "id": 65,
        "strength": 31
      },
      {
        "id": 14,
        "strength": 30
      },
      {
        "id": 57,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 21,
        "strength": 26
      },
      {
        "id": 31,
        "strength": 25
      },
      {
        "id": 74,
        "strength": 24
      },
      {
        "id": 85,
        "strength": 23
      },
      {
        "id": 56,
        "strength": 22
      },
      {
        "id": 111,
        "strength": 21
      },
      {
        "id": 22,
        "strength": 20
      },
      {
        "id": 6,
        "strength": 18.5
      },
      {
        "id": 38,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 34
  },
  "35": {
    "email": "rock@siouxfalls.com",
    "choices": [
      {
        "id": 47,
        "strength": 117
      },
      {
        "id": 44,
        "strength": 116
      },
      {
        "id": 80,
        "strength": 115
      },
      {
        "id": 78,
        "strength": 114
      },
      {
        "id": 102,
        "strength": 112
      },
      {
        "id": 42,
        "strength": 111
      },
      {
        "id": 95,
        "strength": 110
      },
      {
        "id": 71,
        "strength": 109
      },
      {
        "id": 3,
        "strength": 108
      },
      {
        "id": 52,
        "strength": 107
      },
      {
        "id": 28,
        "strength": 105
      },
      {
        "id": 32,
        "strength": 104
      },
      {
        "id": 12,
        "strength": 103
      },
      {
        "id": 75,
        "strength": 102
      },
      {
        "id": 61,
        "strength": 101
      },
      {
        "id": 26,
        "strength": 100
      },
      {
        "id": 98,
        "strength": 99
      },
      {
        "id": 25,
        "strength": 98
      },
      {
        "id": 70,
        "strength": 97
      },
      {
        "id": 11,
        "strength": 96
      },
      {
        "id": 59,
        "strength": 95
      },
      {
        "id": 104,
        "strength": 94
      },
      {
        "id": 36,
        "strength": 93
      },
      {
        "id": 103,
        "strength": 92
      },
      {
        "id": 27,
        "strength": 91
      },
      {
        "id": 66,
        "strength": 90
      },
      {
        "id": 82,
        "strength": 89
      },
      {
        "id": 19,
        "strength": 88
      },
      {
        "id": 33,
        "strength": 87
      },
      {
        "id": 16,
        "strength": 86
      },
      {
        "id": 2,
        "strength": 85
      },
      {
        "id": 13,
        "strength": 84
      },
      {
        "id": 72,
        "strength": 83
      },
      {
        "id": 51,
        "strength": 82
      },
      {
        "id": 101,
        "strength": 81
      },
      {
        "id": 20,
        "strength": 79
      },
      {
        "id": 48,
        "strength": 78
      },
      {
        "id": 43,
        "strength": 77
      },
      {
        "id": 67,
        "strength": 76
      },
      {
        "id": 23,
        "strength": 75
      },
      {
        "id": 15,
        "strength": 74
      },
      {
        "id": 50,
        "strength": 73
      },
      {
        "id": 79,
        "strength": 72
      },
      {
        "id": 88,
        "strength": 71
      },
      {
        "id": 58,
        "strength": 70
      },
      {
        "id": 1,
        "strength": 69
      },
      {
        "id": 110,
        "strength": 68
      },
      {
        "id": 54,
        "strength": 67
      },
      {
        "id": 34,
        "strength": 66
      },
      {
        "id": 39,
        "strength": 65
      },
      {
        "id": 7,
        "strength": 64
      },
      {
        "id": 41,
        "strength": 63
      },
      {
        "id": 46,
        "strength": 62
      },
      {
        "id": 63,
        "strength": 61
      },
      {
        "id": 37,
        "strength": 60
      },
      {
        "id": 60,
        "strength": 59
      },
      {
        "id": 18,
        "strength": 58
      },
      {
        "id": 85,
        "strength": 57
      },
      {
        "id": 10,
        "strength": 56
      },
      {
        "id": 29,
        "strength": 55
      },
      {
        "id": 86,
        "strength": 54
      },
      {
        "id": 22,
        "strength": 53
      },
      {
        "id": 96,
        "strength": 52
      },
      {
        "id": 108,
        "strength": 51
      },
      {
        "id": 105,
        "strength": 50
      },
      {
        "id": 30,
        "strength": 48
      },
      {
        "id": 5,
        "strength": 47
      },
      {
        "id": 68,
        "strength": 46
      },
      {
        "id": 9,
        "strength": 45
      },
      {
        "id": 106,
        "strength": 44
      },
      {
        "id": 91,
        "strength": 43
      },
      {
        "id": 73,
        "strength": 42
      },
      {
        "id": 112,
        "strength": 41
      },
      {
        "id": 49,
        "strength": 40
      },
      {
        "id": 45,
        "strength": 39
      },
      {
        "id": 64,
        "strength": 38
      },
      {
        "id": 109,
        "strength": 37
      },
      {
        "id": 69,
        "strength": 36
      },
      {
        "id": 55,
        "strength": 35
      },
      {
        "id": 24,
        "strength": 34
      },
      {
        "id": 40,
        "strength": 33
      },
      {
        "id": 53,
        "strength": 32
      },
      {
        "id": 65,
        "strength": 31
      },
      {
        "id": 14,
        "strength": 30
      },
      {
        "id": 57,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 8,
        "strength": 26
      },
      {
        "id": 21,
        "strength": 25
      },
      {
        "id": 31,
        "strength": 24
      },
      {
        "id": 74,
        "strength": 23
      },
      {
        "id": 97,
        "strength": 22
      },
      {
        "id": 56,
        "strength": 21
      },
      {
        "id": 111,
        "strength": 20
      },
      {
        "id": 107,
        "strength": 19
      },
      {
        "id": 6,
        "strength": 17.5
      },
      {
        "id": 38,
        "strength": 16.5
      },
      {
        "id": 62,
        "strength": 15.5
      },
      {
        "id": 92,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 35
  },
  "36": {
    "email": "mckinney@duq.edu",
    "choices": [
      {
        "id": 80,
        "strength": 116
      },
      {
        "id": 103,
        "strength": 115
      },
      {
        "id": 78,
        "strength": 114
      },
      {
        "id": 19,
        "strength": 113
      },
      {
        "id": 28,
        "strength": 111
      },
      {
        "id": 102,
        "strength": 110
      },
      {
        "id": 47,
        "strength": 109
      },
      {
        "id": 75,
        "strength": 108
      },
      {
        "id": 95,
        "strength": 107
      },
      {
        "id": 71,
        "strength": 106
      },
      {
        "id": 61,
        "strength": 105
      },
      {
        "id": 44,
        "strength": 104
      },
      {
        "id": 70,
        "strength": 103
      },
      {
        "id": 110,
        "strength": 102
      },
      {
        "id": 34,
        "strength": 101
      },
      {
        "id": 63,
        "strength": 100
      },
      {
        "id": 3,
        "strength": 99
      },
      {
        "id": 35,
        "strength": 98
      },
      {
        "id": 52,
        "strength": 97
      },
      {
        "id": 86,
        "strength": 96
      },
      {
        "id": 108,
        "strength": 95
      },
      {
        "id": 101,
        "strength": 94
      },
      {
        "id": 20,
        "strength": 92
      },
      {
        "id": 48,
        "strength": 91
      },
      {
        "id": 67,
        "strength": 90
      },
      {
        "id": 32,
        "strength": 89
      },
      {
        "id": 23,
        "strength": 88
      },
      {
        "id": 15,
        "strength": 87
      },
      {
        "id": 50,
        "strength": 86
      },
      {
        "id": 42,
        "strength": 85
      },
      {
        "id": 79,
        "strength": 84
      },
      {
        "id": 12,
        "strength": 83
      },
      {
        "id": 88,
        "strength": 82
      },
      {
        "id": 58,
        "strength": 81
      },
      {
        "id": 26,
        "strength": 80
      },
      {
        "id": 98,
        "strength": 79
      },
      {
        "id": 25,
        "strength": 78
      },
      {
        "id": 11,
        "strength": 77
      },
      {
        "id": 54,
        "strength": 76
      },
      {
        "id": 59,
        "strength": 75
      },
      {
        "id": 39,
        "strength": 74
      },
      {
        "id": 7,
        "strength": 73
      },
      {
        "id": 104,
        "strength": 72
      },
      {
        "id": 46,
        "strength": 71
      },
      {
        "id": 27,
        "strength": 70
      },
      {
        "id": 66,
        "strength": 69
      },
      {
        "id": 37,
        "strength": 68
      },
      {
        "id": 82,
        "strength": 67
      },
      {
        "id": 60,
        "strength": 66
      },
      {
        "id": 18,
        "strength": 65
      },
      {
        "id": 33,
        "strength": 64
      },
      {
        "id": 16,
        "strength": 63
      },
      {
        "id": 2,
        "strength": 62
      },
      {
        "id": 10,
        "strength": 61
      },
      {
        "id": 29,
        "strength": 60
      },
      {
        "id": 13,
        "strength": 59
      },
      {
        "id": 72,
        "strength": 58
      },
      {
        "id": 22,
        "strength": 57
      },
      {
        "id": 51,
        "strength": 56
      },
      {
        "id": 96,
        "strength": 55
      },
      {
        "id": 107,
        "strength": 54
      },
      {
        "id": 105,
        "strength": 53
      },
      {
        "id": 43,
        "strength": 51
      },
      {
        "id": 30,
        "strength": 50
      },
      {
        "id": 5,
        "strength": 49
      },
      {
        "id": 68,
        "strength": 48
      },
      {
        "id": 9,
        "strength": 47
      },
      {
        "id": 106,
        "strength": 46
      },
      {
        "id": 91,
        "strength": 45
      },
      {
        "id": 73,
        "strength": 44
      },
      {
        "id": 112,
        "strength": 43
      },
      {
        "id": 49,
        "strength": 42
      },
      {
        "id": 45,
        "strength": 41
      },
      {
        "id": 64,
        "strength": 40
      },
      {
        "id": 109,
        "strength": 39
      },
      {
        "id": 69,
        "strength": 38
      },
      {
        "id": 1,
        "strength": 37
      },
      {
        "id": 55,
        "strength": 36
      },
      {
        "id": 24,
        "strength": 35
      },
      {
        "id": 40,
        "strength": 34
      },
      {
        "id": 41,
        "strength": 33
      },
      {
        "id": 53,
        "strength": 32
      },
      {
        "id": 65,
        "strength": 31
      },
      {
        "id": 14,
        "strength": 30
      },
      {
        "id": 57,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 8,
        "strength": 26
      },
      {
        "id": 21,
        "strength": 25
      },
      {
        "id": 31,
        "strength": 24
      },
      {
        "id": 74,
        "strength": 23
      },
      {
        "id": 85,
        "strength": 22
      },
      {
        "id": 56,
        "strength": 21
      },
      {
        "id": 111,
        "strength": 20
      },
      {
        "id": 6,
        "strength": 18.5
      },
      {
        "id": 38,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 36
  },
  "37": {
    "email": "ozols@wharton.upenn.edu",
    "choices": [
      {
        "id": 75,
        "strength": 117
      },
      {
        "id": 101,
        "strength": 116
      },
      {
        "id": 102,
        "strength": 114
      },
      {
        "id": 79,
        "strength": 113
      },
      {
        "id": 95,
        "strength": 112
      },
      {
        "id": 54,
        "strength": 111
      },
      {
        "id": 103,
        "strength": 110
      },
      {
        "id": 60,
        "strength": 109
      },
      {
        "id": 10,
        "strength": 108
      },
      {
        "id": 29,
        "strength": 107
      },
      {
        "id": 13,
        "strength": 106
      },
      {
        "id": 48,
        "strength": 104
      },
      {
        "id": 28,
        "strength": 103
      },
      {
        "id": 50,
        "strength": 102
      },
      {
        "id": 47,
        "strength": 101
      },
      {
        "id": 58,
        "strength": 100
      },
      {
        "id": 71,
        "strength": 99
      },
      {
        "id": 44,
        "strength": 98
      },
      {
        "id": 98,
        "strength": 97
      },
      {
        "id": 25,
        "strength": 96
      },
      {
        "id": 110,
        "strength": 95
      },
      {
        "id": 80,
        "strength": 94
      },
      {
        "id": 11,
        "strength": 93
      },
      {
        "id": 24,
        "strength": 92
      },
      {
        "id": 39,
        "strength": 91
      },
      {
        "id": 3,
        "strength": 90
      },
      {
        "id": 78,
        "strength": 89
      },
      {
        "id": 27,
        "strength": 88
      },
      {
        "id": 66,
        "strength": 87
      },
      {
        "id": 19,
        "strength": 86
      },
      {
        "id": 31,
        "strength": 85
      },
      {
        "id": 74,
        "strength": 84
      },
      {
        "id": 18,
        "strength": 83
      },
      {
        "id": 52,
        "strength": 82
      },
      {
        "id": 16,
        "strength": 81
      },
      {
        "id": 72,
        "strength": 80
      },
      {
        "id": 20,
        "strength": 78
      },
      {
        "id": 67,
        "strength": 77
      },
      {
        "id": 32,
        "strength": 76
      },
      {
        "id": 23,
        "strength": 75
      },
      {
        "id": 15,
        "strength": 74
      },
      {
        "id": 42,
        "strength": 73
      },
      {
        "id": 12,
        "strength": 72
      },
      {
        "id": 49,
        "strength": 71
      },
      {
        "id": 61,
        "strength": 70
      },
      {
        "id": 26,
        "strength": 69
      },
      {
        "id": 70,
        "strength": 68
      },
      {
        "id": 34,
        "strength": 67
      },
      {
        "id": 59,
        "strength": 66
      },
      {
        "id": 7,
        "strength": 65
      },
      {
        "id": 104,
        "strength": 64
      },
      {
        "id": 46,
        "strength": 63
      },
      {
        "id": 36,
        "strength": 62
      },
      {
        "id": 63,
        "strength": 61
      },
      {
        "id": 82,
        "strength": 60
      },
      {
        "id": 33,
        "strength": 59
      },
      {
        "id": 35,
        "strength": 58
      },
      {
        "id": 56,
        "strength": 57
      },
      {
        "id": 2,
        "strength": 56
      },
      {
        "id": 86,
        "strength": 55
      },
      {
        "id": 51,
        "strength": 54
      },
      {
        "id": 108,
        "strength": 53
      },
      {
        "id": 43,
        "strength": 51
      },
      {
        "id": 30,
        "strength": 50
      },
      {
        "id": 5,
        "strength": 49
      },
      {
        "id": 68,
        "strength": 48
      },
      {
        "id": 9,
        "strength": 47
      },
      {
        "id": 106,
        "strength": 46
      },
      {
        "id": 91,
        "strength": 45
      },
      {
        "id": 73,
        "strength": 44
      },
      {
        "id": 88,
        "strength": 43
      },
      {
        "id": 112,
        "strength": 42
      },
      {
        "id": 45,
        "strength": 41
      },
      {
        "id": 64,
        "strength": 40
      },
      {
        "id": 109,
        "strength": 39
      },
      {
        "id": 69,
        "strength": 38
      },
      {
        "id": 1,
        "strength": 37
      },
      {
        "id": 55,
        "strength": 36
      },
      {
        "id": 40,
        "strength": 35
      },
      {
        "id": 41,
        "strength": 34
      },
      {
        "id": 53,
        "strength": 33
      },
      {
        "id": 65,
        "strength": 32
      },
      {
        "id": 14,
        "strength": 31
      },
      {
        "id": 57,
        "strength": 30
      },
      {
        "id": 4,
        "strength": 29
      },
      {
        "id": 17,
        "strength": 28
      },
      {
        "id": 8,
        "strength": 27
      },
      {
        "id": 21,
        "strength": 26
      },
      {
        "id": 97,
        "strength": 25
      },
      {
        "id": 85,
        "strength": 24
      },
      {
        "id": 111,
        "strength": 23
      },
      {
        "id": 22,
        "strength": 22
      },
      {
        "id": 96,
        "strength": 21
      },
      {
        "id": 107,
        "strength": 20
      },
      {
        "id": 105,
        "strength": 19
      },
      {
        "id": 6,
        "strength": 17.5
      },
      {
        "id": 38,
        "strength": 16.5
      },
      {
        "id": 62,
        "strength": 15.5
      },
      {
        "id": 92,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 37
  },
  "38": {
    "email": "Jose.Velasco@economia.gob",
    "choices": [
      {
        "id": 15,
        "strength": 114
      },
      {
        "id": 20,
        "strength": 112
      },
      {
        "id": 43,
        "strength": 111
      },
      {
        "id": 30,
        "strength": 110
      },
      {
        "id": 23,
        "strength": 109
      },
      {
        "id": 106,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 25,
        "strength": 100
      },
      {
        "id": 109,
        "strength": 99
      },
      {
        "id": 55,
        "strength": 98
      },
      {
        "id": 80,
        "strength": 97
      },
      {
        "id": 54,
        "strength": 96
      },
      {
        "id": 59,
        "strength": 95
      },
      {
        "id": 24,
        "strength": 94
      },
      {
        "id": 84,
        "strength": 93
      },
      {
        "id": 90,
        "strength": 92
      },
      {
        "id": 104,
        "strength": 91
      },
      {
        "id": 40,
        "strength": 90
      },
      {
        "id": 46,
        "strength": 89
      },
      {
        "id": 53,
        "strength": 88
      },
      {
        "id": 89,
        "strength": 87
      },
      {
        "id": 3,
        "strength": 86
      },
      {
        "id": 78,
        "strength": 85
      },
      {
        "id": 77,
        "strength": 84
      },
      {
        "id": 57,
        "strength": 83
      },
      {
        "id": 8,
        "strength": 82
      },
      {
        "id": 82,
        "strength": 81
      },
      {
        "id": 87,
        "strength": 80
      },
      {
        "id": 83,
        "strength": 79
      },
      {
        "id": 97,
        "strength": 78
      },
      {
        "id": 81,
        "strength": 77
      },
      {
        "id": 85,
        "strength": 76
      },
      {
        "id": 92,
        "strength": 75
      },
      {
        "id": 52,
        "strength": 74
      },
      {
        "id": 76,
        "strength": 73
      },
      {
        "id": 56,
        "strength": 72
      },
      {
        "id": 16,
        "strength": 71
      },
      {
        "id": 2,
        "strength": 70
      },
      {
        "id": 10,
        "strength": 69
      },
      {
        "id": 13,
        "strength": 68
      },
      {
        "id": 62,
        "strength": 67
      },
      {
        "id": 51,
        "strength": 66
      },
      {
        "id": 96,
        "strength": 65
      },
      {
        "id": 48,
        "strength": 63.5
      },
      {
        "id": 105,
        "strength": 62.5
      },
      {
        "id": 86,
        "strength": 61.5
      },
      {
        "id": 67,
        "strength": 60.5
      },
      {
        "id": 6,
        "strength": 59.5
      },
      {
        "id": 19,
        "strength": 58.5
      },
      {
        "id": 5,
        "strength": 57.5
      },
      {
        "id": 108,
        "strength": 56.5
      },
      {
        "id": 32,
        "strength": 55.5
      },
      {
        "id": 41,
        "strength": 54.5
      },
      {
        "id": 7,
        "strength": 53.5
      },
      {
        "id": 12,
        "strength": 52.5
      },
      {
        "id": 107,
        "strength": 51.5
      },
      {
        "id": 102,
        "strength": 50.5
      },
      {
        "id": 1,
        "strength": 49.5
      },
      {
        "id": 28,
        "strength": 48.5
      },
      {
        "id": 34,
        "strength": 47.5
      },
      {
        "id": 111,
        "strength": 46.5
      },
      {
        "id": 29,
        "strength": 45.5
      },
      {
        "id": 18,
        "strength": 44.5
      },
      {
        "id": 60,
        "strength": 43.5
      },
      {
        "id": 17,
        "strength": 42.5
      },
      {
        "id": 66,
        "strength": 41.5
      },
      {
        "id": 27,
        "strength": 40.5
      },
      {
        "id": 65,
        "strength": 39.5
      },
      {
        "id": 63,
        "strength": 38.5
      },
      {
        "id": 103,
        "strength": 37.5
      },
      {
        "id": 36,
        "strength": 36.5
      },
      {
        "id": 110,
        "strength": 35.5
      },
      {
        "id": 44,
        "strength": 34.5
      },
      {
        "id": 61,
        "strength": 33.5
      },
      {
        "id": 91,
        "strength": 32.5
      },
      {
        "id": 50,
        "strength": 31.5
      },
      {
        "id": 68,
        "strength": 30.5
      },
      {
        "id": 72,
        "strength": 29.5
      },
      {
        "id": 74,
        "strength": 28.5
      },
      {
        "id": 47,
        "strength": 27.5
      },
      {
        "id": 98,
        "strength": 26.5
      },
      {
        "id": 9,
        "strength": 25.5
      },
      {
        "id": 42,
        "strength": 24.5
      },
      {
        "id": 73,
        "strength": 23.5
      },
      {
        "id": 75,
        "strength": 22.5
      },
      {
        "id": 58,
        "strength": 21.5
      },
      {
        "id": 112,
        "strength": 20.5
      },
      {
        "id": 71,
        "strength": 19.5
      },
      {
        "id": 26,
        "strength": 18.5
      },
      {
        "id": 45,
        "strength": 17.5
      },
      {
        "id": 64,
        "strength": 16.5
      },
      {
        "id": 70,
        "strength": 15.5
      },
      {
        "id": 69,
        "strength": 14.5
      },
      {
        "id": 11,
        "strength": 13.5
      },
      {
        "id": 39,
        "strength": 12.5
      },
      {
        "id": 14,
        "strength": 11.5
      },
      {
        "id": 4,
        "strength": 10.5
      },
      {
        "id": 37,
        "strength": 9.5
      },
      {
        "id": 21,
        "strength": 8.5
      },
      {
        "id": 31,
        "strength": 7.5
      },
      {
        "id": 33,
        "strength": 6.5
      },
      {
        "id": 35,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 38
  },
  "39": {
    "email": "leslie@cascadiawm.com",
    "choices": [
      {
        "id": 75,
        "strength": 116
      },
      {
        "id": 101,
        "strength": 115
      },
      {
        "id": 28,
        "strength": 113
      },
      {
        "id": 102,
        "strength": 112
      },
      {
        "id": 47,
        "strength": 111
      },
      {
        "id": 79,
        "strength": 110
      },
      {
        "id": 95,
        "strength": 109
      },
      {
        "id": 71,
        "strength": 108
      },
      {
        "id": 80,
        "strength": 107
      },
      {
        "id": 54,
        "strength": 106
      },
      {
        "id": 103,
        "strength": 105
      },
      {
        "id": 78,
        "strength": 104
      },
      {
        "id": 66,
        "strength": 103
      },
      {
        "id": 37,
        "strength": 102
      },
      {
        "id": 19,
        "strength": 101
      },
      {
        "id": 60,
        "strength": 100
      },
      {
        "id": 18,
        "strength": 99
      },
      {
        "id": 52,
        "strength": 98
      },
      {
        "id": 10,
        "strength": 97
      },
      {
        "id": 29,
        "strength": 96
      },
      {
        "id": 13,
        "strength": 95
      },
      {
        "id": 72,
        "strength": 94
      },
      {
        "id": 20,
        "strength": 92
      },
      {
        "id": 48,
        "strength": 91
      },
      {
        "id": 67,
        "strength": 90
      },
      {
        "id": 32,
        "strength": 89
      },
      {
        "id": 23,
        "strength": 88
      },
      {
        "id": 15,
        "strength": 87
      },
      {
        "id": 50,
        "strength": 86
      },
      {
        "id": 42,
        "strength": 85
      },
      {
        "id": 12,
        "strength": 84
      },
      {
        "id": 58,
        "strength": 83
      },
      {
        "id": 61,
        "strength": 82
      },
      {
        "id": 44,
        "strength": 81
      },
      {
        "id": 26,
        "strength": 80
      },
      {
        "id": 98,
        "strength": 79
      },
      {
        "id": 25,
        "strength": 78
      },
      {
        "id": 70,
        "strength": 77
      },
      {
        "id": 110,
        "strength": 76
      },
      {
        "id": 11,
        "strength": 75
      },
      {
        "id": 34,
        "strength": 74
      },
      {
        "id": 59,
        "strength": 73
      },
      {
        "id": 24,
        "strength": 72
      },
      {
        "id": 7,
        "strength": 71
      },
      {
        "id": 104,
        "strength": 70
      },
      {
        "id": 46,
        "strength": 69
      },
      {
        "id": 36,
        "strength": 68
      },
      {
        "id": 63,
        "strength": 67
      },
      {
        "id": 3,
        "strength": 66
      },
      {
        "id": 27,
        "strength": 65
      },
      {
        "id": 82,
        "strength": 64
      },
      {
        "id": 31,
        "strength": 63
      },
      {
        "id": 74,
        "strength": 62
      },
      {
        "id": 33,
        "strength": 61
      },
      {
        "id": 35,
        "strength": 60
      },
      {
        "id": 56,
        "strength": 59
      },
      {
        "id": 16,
        "strength": 58
      },
      {
        "id": 2,
        "strength": 57
      },
      {
        "id": 86,
        "strength": 56
      },
      {
        "id": 51,
        "strength": 55
      },
      {
        "id": 108,
        "strength": 54
      },
      {
        "id": 43,
        "strength": 52
      },
      {
        "id": 30,
        "strength": 51
      },
      {
        "id": 5,
        "strength": 50
      },
      {
        "id": 68,
        "strength": 49
      },
      {
        "id": 9,
        "strength": 48
      },
      {
        "id": 106,
        "strength": 47
      },
      {
        "id": 91,
        "strength": 46
      },
      {
        "id": 73,
        "strength": 45
      },
      {
        "id": 88,
        "strength": 44
      },
      {
        "id": 112,
        "strength": 43
      },
      {
        "id": 49,
        "strength": 42
      },
      {
        "id": 45,
        "strength": 41
      },
      {
        "id": 64,
        "strength": 40
      },
      {
        "id": 109,
        "strength": 39
      },
      {
        "id": 69,
        "strength": 38
      },
      {
        "id": 1,
        "strength": 37
      },
      {
        "id": 55,
        "strength": 36
      },
      {
        "id": 40,
        "strength": 35
      },
      {
        "id": 41,
        "strength": 34
      },
      {
        "id": 53,
        "strength": 33
      },
      {
        "id": 65,
        "strength": 32
      },
      {
        "id": 14,
        "strength": 31
      },
      {
        "id": 57,
        "strength": 30
      },
      {
        "id": 4,
        "strength": 29
      },
      {
        "id": 17,
        "strength": 28
      },
      {
        "id": 8,
        "strength": 27
      },
      {
        "id": 21,
        "strength": 26
      },
      {
        "id": 85,
        "strength": 25
      },
      {
        "id": 111,
        "strength": 24
      },
      {
        "id": 22,
        "strength": 23
      },
      {
        "id": 96,
        "strength": 22
      },
      {
        "id": 107,
        "strength": 21
      },
      {
        "id": 105,
        "strength": 20
      },
      {
        "id": 6,
        "strength": 18.5
      },
      {
        "id": 38,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 39
  },
  "40": {
    "email": "manuelteenex@me.com",
    "choices": [
      {
        "id": 15,
        "strength": 115
      },
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 95,
        "strength": 108
      },
      {
        "id": 49,
        "strength": 107
      },
      {
        "id": 25,
        "strength": 106
      },
      {
        "id": 109,
        "strength": 105
      },
      {
        "id": 80,
        "strength": 104
      },
      {
        "id": 59,
        "strength": 103
      },
      {
        "id": 24,
        "strength": 102
      },
      {
        "id": 46,
        "strength": 101
      },
      {
        "id": 53,
        "strength": 100
      },
      {
        "id": 3,
        "strength": 99
      },
      {
        "id": 78,
        "strength": 98
      },
      {
        "id": 57,
        "strength": 97
      },
      {
        "id": 8,
        "strength": 96
      },
      {
        "id": 52,
        "strength": 95
      },
      {
        "id": 56,
        "strength": 94
      },
      {
        "id": 16,
        "strength": 93
      },
      {
        "id": 2,
        "strength": 92
      },
      {
        "id": 10,
        "strength": 91
      },
      {
        "id": 13,
        "strength": 90
      },
      {
        "id": 48,
        "strength": 88
      },
      {
        "id": 28,
        "strength": 87
      },
      {
        "id": 67,
        "strength": 86
      },
      {
        "id": 5,
        "strength": 85
      },
      {
        "id": 32,
        "strength": 84
      },
      {
        "id": 102,
        "strength": 83
      },
      {
        "id": 68,
        "strength": 82
      },
      {
        "id": 9,
        "strength": 81
      },
      {
        "id": 50,
        "strength": 80
      },
      {
        "id": 47,
        "strength": 79
      },
      {
        "id": 42,
        "strength": 78
      },
      {
        "id": 79,
        "strength": 77
      },
      {
        "id": 12,
        "strength": 76
      },
      {
        "id": 91,
        "strength": 75
      },
      {
        "id": 73,
        "strength": 74
      },
      {
        "id": 88,
        "strength": 73
      },
      {
        "id": 75,
        "strength": 72
      },
      {
        "id": 58,
        "strength": 71
      },
      {
        "id": 99,
        "strength": 70
      },
      {
        "id": 112,
        "strength": 69
      },
      {
        "id": 71,
        "strength": 68
      },
      {
        "id": 61,
        "strength": 67
      },
      {
        "id": 44,
        "strength": 66
      },
      {
        "id": 26,
        "strength": 65
      },
      {
        "id": 100,
        "strength": 64
      },
      {
        "id": 93,
        "strength": 63
      },
      {
        "id": 45,
        "strength": 62
      },
      {
        "id": 64,
        "strength": 61
      },
      {
        "id": 70,
        "strength": 60
      },
      {
        "id": 38,
        "strength": 59
      },
      {
        "id": 69,
        "strength": 58
      },
      {
        "id": 1,
        "strength": 57
      },
      {
        "id": 55,
        "strength": 56
      },
      {
        "id": 110,
        "strength": 55
      },
      {
        "id": 11,
        "strength": 54
      },
      {
        "id": 54,
        "strength": 53
      },
      {
        "id": 34,
        "strength": 52
      },
      {
        "id": 39,
        "strength": 51
      },
      {
        "id": 84,
        "strength": 50
      },
      {
        "id": 7,
        "strength": 49
      },
      {
        "id": 90,
        "strength": 48
      },
      {
        "id": 104,
        "strength": 47
      },
      {
        "id": 41,
        "strength": 46
      },
      {
        "id": 36,
        "strength": 45
      },
      {
        "id": 89,
        "strength": 44
      },
      {
        "id": 103,
        "strength": 43
      },
      {
        "id": 63,
        "strength": 42
      },
      {
        "id": 65,
        "strength": 41
      },
      {
        "id": 27,
        "strength": 40
      },
      {
        "id": 14,
        "strength": 39
      },
      {
        "id": 77,
        "strength": 38
      },
      {
        "id": 66,
        "strength": 37
      },
      {
        "id": 4,
        "strength": 36
      },
      {
        "id": 17,
        "strength": 35
      },
      {
        "id": 37,
        "strength": 34
      },
      {
        "id": 21,
        "strength": 33
      },
      {
        "id": 82,
        "strength": 32
      },
      {
        "id": 19,
        "strength": 31
      },
      {
        "id": 60,
        "strength": 30
      },
      {
        "id": 31,
        "strength": 29
      },
      {
        "id": 87,
        "strength": 28
      },
      {
        "id": 74,
        "strength": 27
      },
      {
        "id": 83,
        "strength": 26
      },
      {
        "id": 18,
        "strength": 25
      },
      {
        "id": 97,
        "strength": 24
      },
      {
        "id": 81,
        "strength": 23
      },
      {
        "id": 33,
        "strength": 22
      },
      {
        "id": 35,
        "strength": 21
      },
      {
        "id": 85,
        "strength": 20
      },
      {
        "id": 92,
        "strength": 19
      },
      {
        "id": 76,
        "strength": 18
      },
      {
        "id": 29,
        "strength": 17
      },
      {
        "id": 111,
        "strength": 16
      },
      {
        "id": 86,
        "strength": 15
      },
      {
        "id": 72,
        "strength": 14
      },
      {
        "id": 62,
        "strength": 13
      },
      {
        "id": 22,
        "strength": 12
      },
      {
        "id": 51,
        "strength": 11
      },
      {
        "id": 96,
        "strength": 10
      },
      {
        "id": 107,
        "strength": 9
      },
      {
        "id": 108,
        "strength": 8
      },
      {
        "id": 101,
        "strength": 7
      },
      {
        "id": 105,
        "strength": 6
      },
      {
        "id": 6,
        "strength": 4.5
      },
      {
        "id": 98,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 40
  },
  "41": {
    "email": "MARIEL@SFBI.NET",
    "choices": [
      {
        "id": 32,
        "strength": 115
      },
      {
        "id": 47,
        "strength": 114
      },
      {
        "id": 12,
        "strength": 113
      },
      {
        "id": 71,
        "strength": 112
      },
      {
        "id": 61,
        "strength": 111
      },
      {
        "id": 70,
        "strength": 110
      },
      {
        "id": 80,
        "strength": 109
      },
      {
        "id": 52,
        "strength": 108
      },
      {
        "id": 72,
        "strength": 107
      },
      {
        "id": 48,
        "strength": 105
      },
      {
        "id": 28,
        "strength": 104
      },
      {
        "id": 67,
        "strength": 103
      },
      {
        "id": 102,
        "strength": 102
      },
      {
        "id": 50,
        "strength": 101
      },
      {
        "id": 42,
        "strength": 100
      },
      {
        "id": 75,
        "strength": 99
      },
      {
        "id": 95,
        "strength": 98
      },
      {
        "id": 44,
        "strength": 97
      },
      {
        "id": 25,
        "strength": 96
      },
      {
        "id": 1,
        "strength": 95
      },
      {
        "id": 110,
        "strength": 94
      },
      {
        "id": 11,
        "strength": 93
      },
      {
        "id": 59,
        "strength": 92
      },
      {
        "id": 7,
        "strength": 91
      },
      {
        "id": 103,
        "strength": 90
      },
      {
        "id": 63,
        "strength": 89
      },
      {
        "id": 78,
        "strength": 88
      },
      {
        "id": 27,
        "strength": 87
      },
      {
        "id": 19,
        "strength": 86
      },
      {
        "id": 60,
        "strength": 85
      },
      {
        "id": 33,
        "strength": 84
      },
      {
        "id": 35,
        "strength": 83
      },
      {
        "id": 85,
        "strength": 82
      },
      {
        "id": 16,
        "strength": 81
      },
      {
        "id": 2,
        "strength": 80
      },
      {
        "id": 13,
        "strength": 79
      },
      {
        "id": 86,
        "strength": 78
      },
      {
        "id": 108,
        "strength": 77
      },
      {
        "id": 101,
        "strength": 76
      },
      {
        "id": 20,
        "strength": 74
      },
      {
        "id": 43,
        "strength": 73
      },
      {
        "id": 30,
        "strength": 72
      },
      {
        "id": 5,
        "strength": 71
      },
      {
        "id": 23,
        "strength": 70
      },
      {
        "id": 68,
        "strength": 69
      },
      {
        "id": 9,
        "strength": 68
      },
      {
        "id": 106,
        "strength": 67
      },
      {
        "id": 15,
        "strength": 66
      },
      {
        "id": 79,
        "strength": 65
      },
      {
        "id": 91,
        "strength": 64
      },
      {
        "id": 73,
        "strength": 63
      },
      {
        "id": 58,
        "strength": 62
      },
      {
        "id": 112,
        "strength": 61
      },
      {
        "id": 49,
        "strength": 60
      },
      {
        "id": 26,
        "strength": 59
      },
      {
        "id": 98,
        "strength": 58
      },
      {
        "id": 45,
        "strength": 57
      },
      {
        "id": 64,
        "strength": 56
      },
      {
        "id": 109,
        "strength": 55
      },
      {
        "id": 69,
        "strength": 54
      },
      {
        "id": 55,
        "strength": 53
      },
      {
        "id": 54,
        "strength": 52
      },
      {
        "id": 34,
        "strength": 51
      },
      {
        "id": 24,
        "strength": 50
      },
      {
        "id": 39,
        "strength": 49
      },
      {
        "id": 104,
        "strength": 48
      },
      {
        "id": 40,
        "strength": 47
      },
      {
        "id": 46,
        "strength": 46
      },
      {
        "id": 53,
        "strength": 45
      },
      {
        "id": 36,
        "strength": 44
      },
      {
        "id": 3,
        "strength": 43
      },
      {
        "id": 65,
        "strength": 42
      },
      {
        "id": 14,
        "strength": 41
      },
      {
        "id": 57,
        "strength": 40
      },
      {
        "id": 66,
        "strength": 39
      },
      {
        "id": 4,
        "strength": 38
      },
      {
        "id": 17,
        "strength": 37
      },
      {
        "id": 37,
        "strength": 36
      },
      {
        "id": 8,
        "strength": 35
      },
      {
        "id": 21,
        "strength": 34
      },
      {
        "id": 82,
        "strength": 33
      },
      {
        "id": 31,
        "strength": 32
      },
      {
        "id": 74,
        "strength": 31
      },
      {
        "id": 18,
        "strength": 30
      },
      {
        "id": 56,
        "strength": 29
      },
      {
        "id": 10,
        "strength": 28
      },
      {
        "id": 29,
        "strength": 27
      },
      {
        "id": 111,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 41
  },
  "42": {
    "email": "dilll@missouri.edu",
    "choices": [
      {
        "id": 80,
        "strength": 118
      },
      {
        "id": 47,
        "strength": 116
      },
      {
        "id": 71,
        "strength": 115
      },
      {
        "id": 52,
        "strength": 114
      },
      {
        "id": 102,
        "strength": 112
      },
      {
        "id": 95,
        "strength": 111
      },
      {
        "id": 70,
        "strength": 110
      },
      {
        "id": 11,
        "strength": 109
      },
      {
        "id": 78,
        "strength": 108
      },
      {
        "id": 35,
        "strength": 107
      },
      {
        "id": 16,
        "strength": 106
      },
      {
        "id": 13,
        "strength": 105
      },
      {
        "id": 28,
        "strength": 103
      },
      {
        "id": 32,
        "strength": 102
      },
      {
        "id": 23,
        "strength": 101
      },
      {
        "id": 12,
        "strength": 100
      },
      {
        "id": 75,
        "strength": 99
      },
      {
        "id": 61,
        "strength": 98
      },
      {
        "id": 44,
        "strength": 97
      },
      {
        "id": 26,
        "strength": 96
      },
      {
        "id": 98,
        "strength": 95
      },
      {
        "id": 25,
        "strength": 94
      },
      {
        "id": 59,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 46,
        "strength": 91
      },
      {
        "id": 103,
        "strength": 90
      },
      {
        "id": 3,
        "strength": 89
      },
      {
        "id": 27,
        "strength": 88
      },
      {
        "id": 66,
        "strength": 87
      },
      {
        "id": 82,
        "strength": 86
      },
      {
        "id": 19,
        "strength": 85
      },
      {
        "id": 18,
        "strength": 84
      },
      {
        "id": 33,
        "strength": 83
      },
      {
        "id": 2,
        "strength": 82
      },
      {
        "id": 72,
        "strength": 81
      },
      {
        "id": 51,
        "strength": 80
      },
      {
        "id": 101,
        "strength": 79
      },
      {
        "id": 20,
        "strength": 77
      },
      {
        "id": 48,
        "strength": 76
      },
      {
        "id": 43,
        "strength": 75
      },
      {
        "id": 67,
        "strength": 74
      },
      {
        "id": 15,
        "strength": 73
      },
      {
        "id": 50,
        "strength": 72
      },
      {
        "id": 79,
        "strength": 70
      },
      {
        "id": 88,
        "strength": 69
      },
      {
        "id": 49,
        "strength": 68
      },
      {
        "id": 1,
        "strength": 67
      },
      {
        "id": 110,
        "strength": 66
      },
      {
        "id": 54,
        "strength": 65
      },
      {
        "id": 34,
        "strength": 64
      },
      {
        "id": 39,
        "strength": 63
      },
      {
        "id": 7,
        "strength": 62
      },
      {
        "id": 41,
        "strength": 61
      },
      {
        "id": 36,
        "strength": 60
      },
      {
        "id": 63,
        "strength": 59
      },
      {
        "id": 37,
        "strength": 58
      },
      {
        "id": 60,
        "strength": 57
      },
      {
        "id": 85,
        "strength": 56
      },
      {
        "id": 56,
        "strength": 55
      },
      {
        "id": 10,
        "strength": 54
      },
      {
        "id": 29,
        "strength": 53
      },
      {
        "id": 86,
        "strength": 52
      },
      {
        "id": 22,
        "strength": 51
      },
      {
        "id": 96,
        "strength": 50
      },
      {
        "id": 108,
        "strength": 49
      },
      {
        "id": 105,
        "strength": 48
      },
      {
        "id": 30,
        "strength": 46
      },
      {
        "id": 5,
        "strength": 45
      },
      {
        "id": 68,
        "strength": 44
      },
      {
        "id": 9,
        "strength": 43
      },
      {
        "id": 106,
        "strength": 42
      },
      {
        "id": 91,
        "strength": 41
      },
      {
        "id": 73,
        "strength": 40
      },
      {
        "id": 58,
        "strength": 39
      },
      {
        "id": 112,
        "strength": 38
      },
      {
        "id": 45,
        "strength": 37
      },
      {
        "id": 64,
        "strength": 36
      },
      {
        "id": 109,
        "strength": 35
      },
      {
        "id": 69,
        "strength": 34
      },
      {
        "id": 55,
        "strength": 33
      },
      {
        "id": 24,
        "strength": 32
      },
      {
        "id": 40,
        "strength": 31
      },
      {
        "id": 53,
        "strength": 30
      },
      {
        "id": 65,
        "strength": 29
      },
      {
        "id": 14,
        "strength": 28
      },
      {
        "id": 57,
        "strength": 27
      },
      {
        "id": 4,
        "strength": 26
      },
      {
        "id": 17,
        "strength": 25
      },
      {
        "id": 8,
        "strength": 24
      },
      {
        "id": 21,
        "strength": 23
      },
      {
        "id": 31,
        "strength": 22
      },
      {
        "id": 74,
        "strength": 21
      },
      {
        "id": 97,
        "strength": 20
      },
      {
        "id": 111,
        "strength": 19
      },
      {
        "id": 107,
        "strength": 18
      },
      {
        "id": 6,
        "strength": 16.5
      },
      {
        "id": 38,
        "strength": 15.5
      },
      {
        "id": 62,
        "strength": 14.5
      },
      {
        "id": 92,
        "strength": 13.5
      },
      {
        "id": 81,
        "strength": 12.5
      },
      {
        "id": 87,
        "strength": 11.5
      },
      {
        "id": 90,
        "strength": 10.5
      },
      {
        "id": 84,
        "strength": 9.5
      },
      {
        "id": 100,
        "strength": 8.5
      },
      {
        "id": 93,
        "strength": 7.5
      },
      {
        "id": 99,
        "strength": 6.5
      },
      {
        "id": 77,
        "strength": 5.5
      },
      {
        "id": 89,
        "strength": 4.5
      },
      {
        "id": 83,
        "strength": 3.5
      },
      {
        "id": 76,
        "strength": 2.5
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 42
  },
  "43": {
    "email": "afrey@sena.edu.co",
    "choices": [
      {
        "id": 23,
        "strength": 115
      },
      {
        "id": 15,
        "strength": 114
      },
      {
        "id": 42,
        "strength": 113
      },
      {
        "id": 95,
        "strength": 112
      },
      {
        "id": 26,
        "strength": 111
      },
      {
        "id": 80,
        "strength": 110
      },
      {
        "id": 59,
        "strength": 109
      },
      {
        "id": 3,
        "strength": 108
      },
      {
        "id": 78,
        "strength": 107
      },
      {
        "id": 16,
        "strength": 106
      },
      {
        "id": 20,
        "strength": 104
      },
      {
        "id": 30,
        "strength": 103
      },
      {
        "id": 102,
        "strength": 102
      },
      {
        "id": 106,
        "strength": 101
      },
      {
        "id": 47,
        "strength": 100
      },
      {
        "id": 88,
        "strength": 99
      },
      {
        "id": 49,
        "strength": 98
      },
      {
        "id": 44,
        "strength": 97
      },
      {
        "id": 45,
        "strength": 96
      },
      {
        "id": 25,
        "strength": 95
      },
      {
        "id": 109,
        "strength": 94
      },
      {
        "id": 24,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 40,
        "strength": 91
      },
      {
        "id": 46,
        "strength": 90
      },
      {
        "id": 53,
        "strength": 89
      },
      {
        "id": 36,
        "strength": 88
      },
      {
        "id": 57,
        "strength": 87
      },
      {
        "id": 66,
        "strength": 86
      },
      {
        "id": 8,
        "strength": 85
      },
      {
        "id": 82,
        "strength": 84
      },
      {
        "id": 97,
        "strength": 83
      },
      {
        "id": 33,
        "strength": 82
      },
      {
        "id": 35,
        "strength": 81
      },
      {
        "id": 52,
        "strength": 80
      },
      {
        "id": 2,
        "strength": 79
      },
      {
        "id": 10,
        "strength": 78
      },
      {
        "id": 29,
        "strength": 77
      },
      {
        "id": 51,
        "strength": 76
      },
      {
        "id": 96,
        "strength": 75
      },
      {
        "id": 105,
        "strength": 74
      },
      {
        "id": 48,
        "strength": 72
      },
      {
        "id": 28,
        "strength": 71
      },
      {
        "id": 6,
        "strength": 70
      },
      {
        "id": 67,
        "strength": 69
      },
      {
        "id": 5,
        "strength": 68
      },
      {
        "id": 32,
        "strength": 67
      },
      {
        "id": 68,
        "strength": 66
      },
      {
        "id": 9,
        "strength": 65
      },
      {
        "id": 50,
        "strength": 64
      },
      {
        "id": 79,
        "strength": 63
      },
      {
        "id": 12,
        "strength": 62
      },
      {
        "id": 91,
        "strength": 61
      },
      {
        "id": 73,
        "strength": 60
      },
      {
        "id": 75,
        "strength": 59
      },
      {
        "id": 58,
        "strength": 58
      },
      {
        "id": 99,
        "strength": 57
      },
      {
        "id": 112,
        "strength": 56
      },
      {
        "id": 71,
        "strength": 55
      },
      {
        "id": 61,
        "strength": 54
      },
      {
        "id": 98,
        "strength": 53
      },
      {
        "id": 100,
        "strength": 52
      },
      {
        "id": 93,
        "strength": 51
      },
      {
        "id": 64,
        "strength": 50
      },
      {
        "id": 70,
        "strength": 49
      },
      {
        "id": 38,
        "strength": 48
      },
      {
        "id": 69,
        "strength": 47
      },
      {
        "id": 1,
        "strength": 46
      },
      {
        "id": 55,
        "strength": 45
      },
      {
        "id": 110,
        "strength": 44
      },
      {
        "id": 11,
        "strength": 43
      },
      {
        "id": 54,
        "strength": 42
      },
      {
        "id": 34,
        "strength": 41
      },
      {
        "id": 39,
        "strength": 40
      },
      {
        "id": 84,
        "strength": 39
      },
      {
        "id": 7,
        "strength": 38
      },
      {
        "id": 90,
        "strength": 37
      },
      {
        "id": 41,
        "strength": 36
      },
      {
        "id": 89,
        "strength": 35
      },
      {
        "id": 103,
        "strength": 34
      },
      {
        "id": 63,
        "strength": 33
      },
      {
        "id": 65,
        "strength": 32
      },
      {
        "id": 27,
        "strength": 31
      },
      {
        "id": 14,
        "strength": 30
      },
      {
        "id": 77,
        "strength": 29
      },
      {
        "id": 4,
        "strength": 28
      },
      {
        "id": 17,
        "strength": 27
      },
      {
        "id": 37,
        "strength": 26
      },
      {
        "id": 21,
        "strength": 25
      },
      {
        "id": 19,
        "strength": 24
      },
      {
        "id": 60,
        "strength": 23
      },
      {
        "id": 31,
        "strength": 22
      },
      {
        "id": 87,
        "strength": 21
      },
      {
        "id": 74,
        "strength": 20
      },
      {
        "id": 83,
        "strength": 19
      },
      {
        "id": 18,
        "strength": 18
      },
      {
        "id": 81,
        "strength": 17
      },
      {
        "id": 85,
        "strength": 16
      },
      {
        "id": 92,
        "strength": 15
      },
      {
        "id": 76,
        "strength": 14
      },
      {
        "id": 56,
        "strength": 13
      },
      {
        "id": 111,
        "strength": 12
      },
      {
        "id": 13,
        "strength": 11
      },
      {
        "id": 86,
        "strength": 10
      },
      {
        "id": 72,
        "strength": 9
      },
      {
        "id": 62,
        "strength": 8
      },
      {
        "id": 22,
        "strength": 7
      },
      {
        "id": 107,
        "strength": 6
      },
      {
        "id": 108,
        "strength": 5
      },
      {
        "id": 101,
        "strength": 4
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 43
  },
  "44": {
    "email": "Gustavo.zentner@cme-mec.ca",
    "choices": [
      {
        "id": 3,
        "strength": 116
      },
      {
        "id": 102,
        "strength": 114
      },
      {
        "id": 15,
        "strength": 113
      },
      {
        "id": 42,
        "strength": 112
      },
      {
        "id": 95,
        "strength": 111
      },
      {
        "id": 58,
        "strength": 110
      },
      {
        "id": 78,
        "strength": 109
      },
      {
        "id": 35,
        "strength": 108
      },
      {
        "id": 16,
        "strength": 107
      },
      {
        "id": 10,
        "strength": 106
      },
      {
        "id": 13,
        "strength": 105
      },
      {
        "id": 48,
        "strength": 103
      },
      {
        "id": 43,
        "strength": 102
      },
      {
        "id": 23,
        "strength": 101
      },
      {
        "id": 50,
        "strength": 100
      },
      {
        "id": 47,
        "strength": 99
      },
      {
        "id": 12,
        "strength": 98
      },
      {
        "id": 75,
        "strength": 97
      },
      {
        "id": 49,
        "strength": 96
      },
      {
        "id": 26,
        "strength": 95
      },
      {
        "id": 98,
        "strength": 94
      },
      {
        "id": 25,
        "strength": 93
      },
      {
        "id": 80,
        "strength": 92
      },
      {
        "id": 11,
        "strength": 91
      },
      {
        "id": 24,
        "strength": 90
      },
      {
        "id": 7,
        "strength": 89
      },
      {
        "id": 36,
        "strength": 88
      },
      {
        "id": 103,
        "strength": 87
      },
      {
        "id": 27,
        "strength": 86
      },
      {
        "id": 66,
        "strength": 85
      },
      {
        "id": 37,
        "strength": 84
      },
      {
        "id": 8,
        "strength": 83
      },
      {
        "id": 60,
        "strength": 82
      },
      {
        "id": 31,
        "strength": 81
      },
      {
        "id": 74,
        "strength": 80
      },
      {
        "id": 97,
        "strength": 79
      },
      {
        "id": 33,
        "strength": 78
      },
      {
        "id": 2,
        "strength": 77
      },
      {
        "id": 29,
        "strength": 76
      },
      {
        "id": 22,
        "strength": 75
      },
      {
        "id": 101,
        "strength": 74
      },
      {
        "id": 105,
        "strength": 73
      },
      {
        "id": 20,
        "strength": 71
      },
      {
        "id": 28,
        "strength": 70
      },
      {
        "id": 30,
        "strength": 69
      },
      {
        "id": 67,
        "strength": 68
      },
      {
        "id": 5,
        "strength": 67
      },
      {
        "id": 32,
        "strength": 66
      },
      {
        "id": 68,
        "strength": 65
      },
      {
        "id": 9,
        "strength": 64
      },
      {
        "id": 106,
        "strength": 63
      },
      {
        "id": 79,
        "strength": 62
      },
      {
        "id": 91,
        "strength": 61
      },
      {
        "id": 73,
        "strength": 60
      },
      {
        "id": 88,
        "strength": 59
      },
      {
        "id": 112,
        "strength": 58
      },
      {
        "id": 71,
        "strength": 57
      },
      {
        "id": 61,
        "strength": 56
      },
      {
        "id": 45,
        "strength": 55
      },
      {
        "id": 64,
        "strength": 54
      },
      {
        "id": 70,
        "strength": 53
      },
      {
        "id": 109,
        "strength": 52
      },
      {
        "id": 69,
        "strength": 51
      },
      {
        "id": 1,
        "strength": 50
      },
      {
        "id": 110,
        "strength": 49
      },
      {
        "id": 54,
        "strength": 48
      },
      {
        "id": 34,
        "strength": 47
      },
      {
        "id": 59,
        "strength": 46
      },
      {
        "id": 39,
        "strength": 45
      },
      {
        "id": 104,
        "strength": 44
      },
      {
        "id": 40,
        "strength": 43
      },
      {
        "id": 41,
        "strength": 42
      },
      {
        "id": 46,
        "strength": 41
      },
      {
        "id": 53,
        "strength": 40
      },
      {
        "id": 63,
        "strength": 39
      },
      {
        "id": 65,
        "strength": 38
      },
      {
        "id": 14,
        "strength": 37
      },
      {
        "id": 57,
        "strength": 36
      },
      {
        "id": 4,
        "strength": 35
      },
      {
        "id": 17,
        "strength": 34
      },
      {
        "id": 21,
        "strength": 33
      },
      {
        "id": 82,
        "strength": 32
      },
      {
        "id": 19,
        "strength": 31
      },
      {
        "id": 18,
        "strength": 30
      },
      {
        "id": 52,
        "strength": 29
      },
      {
        "id": 56,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 86,
        "strength": 26
      },
      {
        "id": 72,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 96,
        "strength": 23
      },
      {
        "id": 107,
        "strength": 22
      },
      {
        "id": 108,
        "strength": 21
      },
      {
        "id": 6,
        "strength": 19.5
      },
      {
        "id": 38,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 85,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 55,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 44
  },
  "45": {
    "email": "jacqueline.torcellini@uconn.edu",
    "choices": [
      {
        "id": 48,
        "strength": 114
      },
      {
        "id": 28,
        "strength": 113
      },
      {
        "id": 67,
        "strength": 112
      },
      {
        "id": 32,
        "strength": 111
      },
      {
        "id": 102,
        "strength": 110
      },
      {
        "id": 50,
        "strength": 109
      },
      {
        "id": 47,
        "strength": 108
      },
      {
        "id": 12,
        "strength": 107
      },
      {
        "id": 75,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 71,
        "strength": 104
      },
      {
        "id": 61,
        "strength": 103
      },
      {
        "id": 44,
        "strength": 102
      },
      {
        "id": 70,
        "strength": 101
      },
      {
        "id": 110,
        "strength": 100
      },
      {
        "id": 80,
        "strength": 99
      },
      {
        "id": 7,
        "strength": 98
      },
      {
        "id": 103,
        "strength": 97
      },
      {
        "id": 63,
        "strength": 96
      },
      {
        "id": 78,
        "strength": 95
      },
      {
        "id": 19,
        "strength": 94
      },
      {
        "id": 60,
        "strength": 93
      },
      {
        "id": 52,
        "strength": 92
      },
      {
        "id": 86,
        "strength": 91
      },
      {
        "id": 72,
        "strength": 90
      },
      {
        "id": 108,
        "strength": 89
      },
      {
        "id": 101,
        "strength": 88
      },
      {
        "id": 20,
        "strength": 86
      },
      {
        "id": 43,
        "strength": 85
      },
      {
        "id": 30,
        "strength": 84
      },
      {
        "id": 5,
        "strength": 83
      },
      {
        "id": 23,
        "strength": 82
      },
      {
        "id": 68,
        "strength": 81
      },
      {
        "id": 9,
        "strength": 80
      },
      {
        "id": 106,
        "strength": 79
      },
      {
        "id": 15,
        "strength": 78
      },
      {
        "id": 42,
        "strength": 77
      },
      {
        "id": 79,
        "strength": 76
      },
      {
        "id": 91,
        "strength": 75
      },
      {
        "id": 73,
        "strength": 74
      },
      {
        "id": 58,
        "strength": 73
      },
      {
        "id": 112,
        "strength": 72
      },
      {
        "id": 49,
        "strength": 71
      },
      {
        "id": 26,
        "strength": 70
      },
      {
        "id": 98,
        "strength": 69
      },
      {
        "id": 64,
        "strength": 68
      },
      {
        "id": 25,
        "strength": 67
      },
      {
        "id": 109,
        "strength": 66
      },
      {
        "id": 69,
        "strength": 65
      },
      {
        "id": 1,
        "strength": 64
      },
      {
        "id": 55,
        "strength": 63
      },
      {
        "id": 11,
        "strength": 62
      },
      {
        "id": 54,
        "strength": 61
      },
      {
        "id": 34,
        "strength": 60
      },
      {
        "id": 59,
        "strength": 59
      },
      {
        "id": 24,
        "strength": 58
      },
      {
        "id": 39,
        "strength": 57
      },
      {
        "id": 104,
        "strength": 56
      },
      {
        "id": 40,
        "strength": 55
      },
      {
        "id": 41,
        "strength": 54
      },
      {
        "id": 46,
        "strength": 53
      },
      {
        "id": 53,
        "strength": 52
      },
      {
        "id": 36,
        "strength": 51
      },
      {
        "id": 3,
        "strength": 50
      },
      {
        "id": 65,
        "strength": 49
      },
      {
        "id": 27,
        "strength": 48
      },
      {
        "id": 14,
        "strength": 47
      },
      {
        "id": 57,
        "strength": 46
      },
      {
        "id": 66,
        "strength": 45
      },
      {
        "id": 4,
        "strength": 44
      },
      {
        "id": 17,
        "strength": 43
      },
      {
        "id": 37,
        "strength": 42
      },
      {
        "id": 8,
        "strength": 41
      },
      {
        "id": 21,
        "strength": 40
      },
      {
        "id": 82,
        "strength": 39
      },
      {
        "id": 31,
        "strength": 38
      },
      {
        "id": 74,
        "strength": 37
      },
      {
        "id": 18,
        "strength": 36
      },
      {
        "id": 33,
        "strength": 35
      },
      {
        "id": 35,
        "strength": 34
      },
      {
        "id": 85,
        "strength": 33
      },
      {
        "id": 56,
        "strength": 32
      },
      {
        "id": 16,
        "strength": 31
      },
      {
        "id": 2,
        "strength": 30
      },
      {
        "id": 10,
        "strength": 29
      },
      {
        "id": 29,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 13,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 45
  },
  "46": {
    "email": "marinruizs@missouri.edu",
    "choices": [
      {
        "id": 80,
        "strength": 117
      },
      {
        "id": 52,
        "strength": 116
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 78,
        "strength": 113
      },
      {
        "id": 20,
        "strength": 111
      },
      {
        "id": 28,
        "strength": 110
      },
      {
        "id": 23,
        "strength": 109
      },
      {
        "id": 102,
        "strength": 108
      },
      {
        "id": 47,
        "strength": 107
      },
      {
        "id": 42,
        "strength": 106
      },
      {
        "id": 79,
        "strength": 105
      },
      {
        "id": 75,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 71,
        "strength": 102
      },
      {
        "id": 54,
        "strength": 101
      },
      {
        "id": 59,
        "strength": 100
      },
      {
        "id": 104,
        "strength": 99
      },
      {
        "id": 103,
        "strength": 98
      },
      {
        "id": 3,
        "strength": 97
      },
      {
        "id": 82,
        "strength": 96
      },
      {
        "id": 19,
        "strength": 95
      },
      {
        "id": 18,
        "strength": 94
      },
      {
        "id": 16,
        "strength": 93
      },
      {
        "id": 2,
        "strength": 92
      },
      {
        "id": 51,
        "strength": 91
      },
      {
        "id": 101,
        "strength": 90
      },
      {
        "id": 48,
        "strength": 88
      },
      {
        "id": 43,
        "strength": 87
      },
      {
        "id": 30,
        "strength": 86
      },
      {
        "id": 67,
        "strength": 85
      },
      {
        "id": 32,
        "strength": 84
      },
      {
        "id": 106,
        "strength": 83
      },
      {
        "id": 15,
        "strength": 82
      },
      {
        "id": 50,
        "strength": 81
      },
      {
        "id": 12,
        "strength": 80
      },
      {
        "id": 88,
        "strength": 79
      },
      {
        "id": 61,
        "strength": 78
      },
      {
        "id": 44,
        "strength": 77
      },
      {
        "id": 26,
        "strength": 76
      },
      {
        "id": 98,
        "strength": 75
      },
      {
        "id": 25,
        "strength": 74
      },
      {
        "id": 70,
        "strength": 73
      },
      {
        "id": 109,
        "strength": 72
      },
      {
        "id": 55,
        "strength": 71
      },
      {
        "id": 110,
        "strength": 70
      },
      {
        "id": 11,
        "strength": 69
      },
      {
        "id": 34,
        "strength": 68
      },
      {
        "id": 39,
        "strength": 67
      },
      {
        "id": 7,
        "strength": 66
      },
      {
        "id": 40,
        "strength": 65
      },
      {
        "id": 53,
        "strength": 64
      },
      {
        "id": 36,
        "strength": 63
      },
      {
        "id": 63,
        "strength": 62
      },
      {
        "id": 27,
        "strength": 61
      },
      {
        "id": 57,
        "strength": 60
      },
      {
        "id": 66,
        "strength": 59
      },
      {
        "id": 37,
        "strength": 58
      },
      {
        "id": 8,
        "strength": 57
      },
      {
        "id": 60,
        "strength": 56
      },
      {
        "id": 33,
        "strength": 55
      },
      {
        "id": 35,
        "strength": 54
      },
      {
        "id": 85,
        "strength": 53
      },
      {
        "id": 10,
        "strength": 52
      },
      {
        "id": 29,
        "strength": 51
      },
      {
        "id": 13,
        "strength": 50
      },
      {
        "id": 86,
        "strength": 49
      },
      {
        "id": 72,
        "strength": 48
      },
      {
        "id": 96,
        "strength": 47
      },
      {
        "id": 108,
        "strength": 46
      },
      {
        "id": 5,
        "strength": 44
      },
      {
        "id": 68,
        "strength": 43
      },
      {
        "id": 9,
        "strength": 42
      },
      {
        "id": 91,
        "strength": 41
      },
      {
        "id": 73,
        "strength": 40
      },
      {
        "id": 58,
        "strength": 39
      },
      {
        "id": 99,
        "strength": 38
      },
      {
        "id": 112,
        "strength": 37
      },
      {
        "id": 100,
        "strength": 36
      },
      {
        "id": 93,
        "strength": 35
      },
      {
        "id": 45,
        "strength": 34
      },
      {
        "id": 64,
        "strength": 33
      },
      {
        "id": 38,
        "strength": 32
      },
      {
        "id": 69,
        "strength": 31
      },
      {
        "id": 1,
        "strength": 30
      },
      {
        "id": 24,
        "strength": 29
      },
      {
        "id": 84,
        "strength": 28
      },
      {
        "id": 90,
        "strength": 27
      },
      {
        "id": 41,
        "strength": 26
      },
      {
        "id": 89,
        "strength": 25
      },
      {
        "id": 65,
        "strength": 24
      },
      {
        "id": 14,
        "strength": 23
      },
      {
        "id": 77,
        "strength": 22
      },
      {
        "id": 4,
        "strength": 21
      },
      {
        "id": 17,
        "strength": 20
      },
      {
        "id": 21,
        "strength": 19
      },
      {
        "id": 31,
        "strength": 18
      },
      {
        "id": 87,
        "strength": 17
      },
      {
        "id": 74,
        "strength": 16
      },
      {
        "id": 83,
        "strength": 15
      },
      {
        "id": 97,
        "strength": 14
      },
      {
        "id": 81,
        "strength": 13
      },
      {
        "id": 92,
        "strength": 12
      },
      {
        "id": 76,
        "strength": 11
      },
      {
        "id": 56,
        "strength": 10
      },
      {
        "id": 111,
        "strength": 9
      },
      {
        "id": 62,
        "strength": 8
      },
      {
        "id": 22,
        "strength": 7
      },
      {
        "id": 107,
        "strength": 6
      },
      {
        "id": 105,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 46
  },
  "47": {
    "email": "dearl@wtcwinnipeg.com",
    "choices": [
      {
        "id": 42,
        "strength": 116
      },
      {
        "id": 16,
        "strength": 115
      },
      {
        "id": 13,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 112
      },
      {
        "id": 3,
        "strength": 111
      },
      {
        "id": 33,
        "strength": 110
      },
      {
        "id": 35,
        "strength": 109
      },
      {
        "id": 2,
        "strength": 108
      },
      {
        "id": 32,
        "strength": 106
      },
      {
        "id": 23,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 12,
        "strength": 103
      },
      {
        "id": 95,
        "strength": 102
      },
      {
        "id": 71,
        "strength": 101
      },
      {
        "id": 26,
        "strength": 100
      },
      {
        "id": 25,
        "strength": 99
      },
      {
        "id": 11,
        "strength": 98
      },
      {
        "id": 34,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 78,
        "strength": 95
      },
      {
        "id": 27,
        "strength": 94
      },
      {
        "id": 66,
        "strength": 93
      },
      {
        "id": 52,
        "strength": 92
      },
      {
        "id": 10,
        "strength": 91
      },
      {
        "id": 105,
        "strength": 90
      },
      {
        "id": 20,
        "strength": 88
      },
      {
        "id": 28,
        "strength": 87
      },
      {
        "id": 43,
        "strength": 86
      },
      {
        "id": 15,
        "strength": 85
      },
      {
        "id": 50,
        "strength": 84
      },
      {
        "id": 88,
        "strength": 83
      },
      {
        "id": 75,
        "strength": 82
      },
      {
        "id": 61,
        "strength": 81
      },
      {
        "id": 44,
        "strength": 80
      },
      {
        "id": 98,
        "strength": 79
      },
      {
        "id": 70,
        "strength": 78
      },
      {
        "id": 1,
        "strength": 77
      },
      {
        "id": 39,
        "strength": 76
      },
      {
        "id": 7,
        "strength": 75
      },
      {
        "id": 104,
        "strength": 74
      },
      {
        "id": 41,
        "strength": 73
      },
      {
        "id": 46,
        "strength": 72
      },
      {
        "id": 36,
        "strength": 71
      },
      {
        "id": 103,
        "strength": 70
      },
      {
        "id": 37,
        "strength": 69
      },
      {
        "id": 8,
        "strength": 68
      },
      {
        "id": 82,
        "strength": 67
      },
      {
        "id": 19,
        "strength": 66
      },
      {
        "id": 18,
        "strength": 65
      },
      {
        "id": 29,
        "strength": 64
      },
      {
        "id": 72,
        "strength": 63
      },
      {
        "id": 51,
        "strength": 62
      },
      {
        "id": 96,
        "strength": 61
      },
      {
        "id": 101,
        "strength": 60
      },
      {
        "id": 48,
        "strength": 58
      },
      {
        "id": 30,
        "strength": 57
      },
      {
        "id": 67,
        "strength": 56
      },
      {
        "id": 5,
        "strength": 55
      },
      {
        "id": 68,
        "strength": 54
      },
      {
        "id": 9,
        "strength": 53
      },
      {
        "id": 106,
        "strength": 52
      },
      {
        "id": 79,
        "strength": 51
      },
      {
        "id": 91,
        "strength": 50
      },
      {
        "id": 73,
        "strength": 49
      },
      {
        "id": 58,
        "strength": 48
      },
      {
        "id": 112,
        "strength": 47
      },
      {
        "id": 49,
        "strength": 46
      },
      {
        "id": 45,
        "strength": 45
      },
      {
        "id": 64,
        "strength": 44
      },
      {
        "id": 109,
        "strength": 43
      },
      {
        "id": 69,
        "strength": 42
      },
      {
        "id": 110,
        "strength": 41
      },
      {
        "id": 54,
        "strength": 40
      },
      {
        "id": 24,
        "strength": 39
      },
      {
        "id": 40,
        "strength": 38
      },
      {
        "id": 53,
        "strength": 37
      },
      {
        "id": 63,
        "strength": 36
      },
      {
        "id": 65,
        "strength": 35
      },
      {
        "id": 14,
        "strength": 34
      },
      {
        "id": 57,
        "strength": 33
      },
      {
        "id": 4,
        "strength": 32
      },
      {
        "id": 17,
        "strength": 31
      },
      {
        "id": 21,
        "strength": 30
      },
      {
        "id": 60,
        "strength": 29
      },
      {
        "id": 31,
        "strength": 28
      },
      {
        "id": 74,
        "strength": 27
      },
      {
        "id": 97,
        "strength": 26
      },
      {
        "id": 85,
        "strength": 25
      },
      {
        "id": 56,
        "strength": 24
      },
      {
        "id": 111,
        "strength": 23
      },
      {
        "id": 86,
        "strength": 22
      },
      {
        "id": 22,
        "strength": 21
      },
      {
        "id": 107,
        "strength": 20
      },
      {
        "id": 108,
        "strength": 19
      },
      {
        "id": 6,
        "strength": 17.5
      },
      {
        "id": 38,
        "strength": 16.5
      },
      {
        "id": 62,
        "strength": 15.5
      },
      {
        "id": 92,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 55,
        "strength": 9.5
      },
      {
        "id": 100,
        "strength": 8.5
      },
      {
        "id": 93,
        "strength": 7.5
      },
      {
        "id": 99,
        "strength": 6.5
      },
      {
        "id": 77,
        "strength": 5.5
      },
      {
        "id": 89,
        "strength": 4.5
      },
      {
        "id": 83,
        "strength": 3.5
      },
      {
        "id": 76,
        "strength": 2.5
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 47
  },
  "48": {
    "email": "adavidson@niagarafalls.ca",
    "choices": [
      {
        "id": 15,
        "strength": 115
      },
      {
        "id": 49,
        "strength": 114
      },
      {
        "id": 60,
        "strength": 113
      },
      {
        "id": 16,
        "strength": 112
      },
      {
        "id": 10,
        "strength": 111
      },
      {
        "id": 13,
        "strength": 110
      },
      {
        "id": 23,
        "strength": 108
      },
      {
        "id": 102,
        "strength": 107
      },
      {
        "id": 50,
        "strength": 106
      },
      {
        "id": 42,
        "strength": 105
      },
      {
        "id": 12,
        "strength": 104
      },
      {
        "id": 75,
        "strength": 103
      },
      {
        "id": 95,
        "strength": 102
      },
      {
        "id": 58,
        "strength": 101
      },
      {
        "id": 61,
        "strength": 100
      },
      {
        "id": 44,
        "strength": 99
      },
      {
        "id": 25,
        "strength": 98
      },
      {
        "id": 11,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 24,
        "strength": 95
      },
      {
        "id": 7,
        "strength": 94
      },
      {
        "id": 103,
        "strength": 93
      },
      {
        "id": 3,
        "strength": 92
      },
      {
        "id": 27,
        "strength": 91
      },
      {
        "id": 37,
        "strength": 90
      },
      {
        "id": 8,
        "strength": 89
      },
      {
        "id": 31,
        "strength": 88
      },
      {
        "id": 74,
        "strength": 87
      },
      {
        "id": 33,
        "strength": 86
      },
      {
        "id": 2,
        "strength": 85
      },
      {
        "id": 29,
        "strength": 84
      },
      {
        "id": 72,
        "strength": 83
      },
      {
        "id": 22,
        "strength": 82
      },
      {
        "id": 101,
        "strength": 81
      },
      {
        "id": 20,
        "strength": 79
      },
      {
        "id": 28,
        "strength": 78
      },
      {
        "id": 43,
        "strength": 77
      },
      {
        "id": 30,
        "strength": 76
      },
      {
        "id": 67,
        "strength": 75
      },
      {
        "id": 5,
        "strength": 74
      },
      {
        "id": 32,
        "strength": 73
      },
      {
        "id": 68,
        "strength": 72
      },
      {
        "id": 9,
        "strength": 71
      },
      {
        "id": 106,
        "strength": 70
      },
      {
        "id": 47,
        "strength": 69
      },
      {
        "id": 79,
        "strength": 68
      },
      {
        "id": 91,
        "strength": 67
      },
      {
        "id": 73,
        "strength": 66
      },
      {
        "id": 112,
        "strength": 65
      },
      {
        "id": 71,
        "strength": 64
      },
      {
        "id": 26,
        "strength": 63
      },
      {
        "id": 98,
        "strength": 62
      },
      {
        "id": 45,
        "strength": 61
      },
      {
        "id": 64,
        "strength": 60
      },
      {
        "id": 70,
        "strength": 59
      },
      {
        "id": 109,
        "strength": 58
      },
      {
        "id": 69,
        "strength": 57
      },
      {
        "id": 1,
        "strength": 56
      },
      {
        "id": 110,
        "strength": 55
      },
      {
        "id": 80,
        "strength": 54
      },
      {
        "id": 54,
        "strength": 53
      },
      {
        "id": 34,
        "strength": 52
      },
      {
        "id": 39,
        "strength": 51
      },
      {
        "id": 40,
        "strength": 50
      },
      {
        "id": 41,
        "strength": 49
      },
      {
        "id": 46,
        "strength": 48
      },
      {
        "id": 53,
        "strength": 47
      },
      {
        "id": 36,
        "strength": 46
      },
      {
        "id": 63,
        "strength": 45
      },
      {
        "id": 78,
        "strength": 44
      },
      {
        "id": 65,
        "strength": 43
      },
      {
        "id": 14,
        "strength": 42
      },
      {
        "id": 57,
        "strength": 41
      },
      {
        "id": 66,
        "strength": 40
      },
      {
        "id": 4,
        "strength": 39
      },
      {
        "id": 17,
        "strength": 38
      },
      {
        "id": 21,
        "strength": 37
      },
      {
        "id": 19,
        "strength": 36
      },
      {
        "id": 18,
        "strength": 35
      },
      {
        "id": 97,
        "strength": 34
      },
      {
        "id": 35,
        "strength": 33
      },
      {
        "id": 52,
        "strength": 32
      },
      {
        "id": 56,
        "strength": 31
      },
      {
        "id": 111,
        "strength": 30
      },
      {
        "id": 86,
        "strength": 29
      },
      {
        "id": 107,
        "strength": 28
      },
      {
        "id": 108,
        "strength": 27
      },
      {
        "id": 105,
        "strength": 26
      },
      {
        "id": 6,
        "strength": 24.5
      },
      {
        "id": 38,
        "strength": 23.5
      },
      {
        "id": 96,
        "strength": 22.5
      },
      {
        "id": 62,
        "strength": 21.5
      },
      {
        "id": 92,
        "strength": 20.5
      },
      {
        "id": 85,
        "strength": 19.5
      },
      {
        "id": 81,
        "strength": 18.5
      },
      {
        "id": 87,
        "strength": 17.5
      },
      {
        "id": 82,
        "strength": 16.5
      },
      {
        "id": 90,
        "strength": 15.5
      },
      {
        "id": 84,
        "strength": 14.5
      },
      {
        "id": 55,
        "strength": 13.5
      },
      {
        "id": 100,
        "strength": 12.5
      },
      {
        "id": 93,
        "strength": 11.5
      },
      {
        "id": 99,
        "strength": 10.5
      },
      {
        "id": 88,
        "strength": 9.5
      },
      {
        "id": 77,
        "strength": 8.5
      },
      {
        "id": 104,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 48
  },
  "49": {
    "email": "francisco.trevino@sit.mx",
    "choices": [
      {
        "id": 15,
        "strength": 116
      },
      {
        "id": 48,
        "strength": 114
      },
      {
        "id": 95,
        "strength": 113
      },
      {
        "id": 25,
        "strength": 112
      },
      {
        "id": 80,
        "strength": 111
      },
      {
        "id": 59,
        "strength": 110
      },
      {
        "id": 24,
        "strength": 109
      },
      {
        "id": 46,
        "strength": 108
      },
      {
        "id": 3,
        "strength": 107
      },
      {
        "id": 60,
        "strength": 106
      },
      {
        "id": 52,
        "strength": 105
      },
      {
        "id": 16,
        "strength": 104
      },
      {
        "id": 10,
        "strength": 103
      },
      {
        "id": 13,
        "strength": 102
      },
      {
        "id": 20,
        "strength": 100
      },
      {
        "id": 43,
        "strength": 99
      },
      {
        "id": 30,
        "strength": 98
      },
      {
        "id": 23,
        "strength": 97
      },
      {
        "id": 102,
        "strength": 96
      },
      {
        "id": 106,
        "strength": 95
      },
      {
        "id": 50,
        "strength": 94
      },
      {
        "id": 42,
        "strength": 93
      },
      {
        "id": 79,
        "strength": 92
      },
      {
        "id": 75,
        "strength": 91
      },
      {
        "id": 58,
        "strength": 90
      },
      {
        "id": 61,
        "strength": 89
      },
      {
        "id": 44,
        "strength": 88
      },
      {
        "id": 109,
        "strength": 87
      },
      {
        "id": 11,
        "strength": 86
      },
      {
        "id": 54,
        "strength": 85
      },
      {
        "id": 40,
        "strength": 84
      },
      {
        "id": 53,
        "strength": 83
      },
      {
        "id": 103,
        "strength": 82
      },
      {
        "id": 78,
        "strength": 81
      },
      {
        "id": 27,
        "strength": 80
      },
      {
        "id": 57,
        "strength": 79
      },
      {
        "id": 37,
        "strength": 78
      },
      {
        "id": 8,
        "strength": 77
      },
      {
        "id": 31,
        "strength": 76
      },
      {
        "id": 74,
        "strength": 75
      },
      {
        "id": 18,
        "strength": 74
      },
      {
        "id": 97,
        "strength": 73
      },
      {
        "id": 56,
        "strength": 72
      },
      {
        "id": 2,
        "strength": 71
      },
      {
        "id": 29,
        "strength": 70
      },
      {
        "id": 72,
        "strength": 69
      },
      {
        "id": 22,
        "strength": 68
      },
      {
        "id": 101,
        "strength": 67
      },
      {
        "id": 28,
        "strength": 65
      },
      {
        "id": 67,
        "strength": 64
      },
      {
        "id": 5,
        "strength": 63
      },
      {
        "id": 32,
        "strength": 62
      },
      {
        "id": 68,
        "strength": 61
      },
      {
        "id": 9,
        "strength": 60
      },
      {
        "id": 47,
        "strength": 59
      },
      {
        "id": 12,
        "strength": 58
      },
      {
        "id": 91,
        "strength": 57
      },
      {
        "id": 73,
        "strength": 56
      },
      {
        "id": 88,
        "strength": 55
      },
      {
        "id": 99,
        "strength": 54
      },
      {
        "id": 112,
        "strength": 53
      },
      {
        "id": 71,
        "strength": 52
      },
      {
        "id": 26,
        "strength": 51
      },
      {
        "id": 98,
        "strength": 50
      },
      {
        "id": 100,
        "strength": 49
      },
      {
        "id": 93,
        "strength": 48
      },
      {
        "id": 45,
        "strength": 47
      },
      {
        "id": 64,
        "strength": 46
      },
      {
        "id": 70,
        "strength": 45
      },
      {
        "id": 38,
        "strength": 44
      },
      {
        "id": 69,
        "strength": 43
      },
      {
        "id": 1,
        "strength": 42
      },
      {
        "id": 55,
        "strength": 41
      },
      {
        "id": 110,
        "strength": 40
      },
      {
        "id": 34,
        "strength": 39
      },
      {
        "id": 39,
        "strength": 38
      },
      {
        "id": 84,
        "strength": 37
      },
      {
        "id": 7,
        "strength": 36
      },
      {
        "id": 90,
        "strength": 35
      },
      {
        "id": 104,
        "strength": 34
      },
      {
        "id": 41,
        "strength": 33
      },
      {
        "id": 36,
        "strength": 32
      },
      {
        "id": 89,
        "strength": 31
      },
      {
        "id": 63,
        "strength": 30
      },
      {
        "id": 65,
        "strength": 29
      },
      {
        "id": 14,
        "strength": 28
      },
      {
        "id": 77,
        "strength": 27
      },
      {
        "id": 66,
        "strength": 26
      },
      {
        "id": 4,
        "strength": 25
      },
      {
        "id": 17,
        "strength": 24
      },
      {
        "id": 21,
        "strength": 23
      },
      {
        "id": 82,
        "strength": 22
      },
      {
        "id": 19,
        "strength": 21
      },
      {
        "id": 87,
        "strength": 20
      },
      {
        "id": 83,
        "strength": 19
      },
      {
        "id": 81,
        "strength": 18
      },
      {
        "id": 33,
        "strength": 17
      },
      {
        "id": 35,
        "strength": 16
      },
      {
        "id": 85,
        "strength": 15
      },
      {
        "id": 92,
        "strength": 14
      },
      {
        "id": 76,
        "strength": 13
      },
      {
        "id": 111,
        "strength": 12
      },
      {
        "id": 86,
        "strength": 11
      },
      {
        "id": 62,
        "strength": 10
      },
      {
        "id": 51,
        "strength": 9
      },
      {
        "id": 96,
        "strength": 8
      },
      {
        "id": 107,
        "strength": 7
      },
      {
        "id": 108,
        "strength": 6
      },
      {
        "id": 105,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 49
  },
  "50": {
    "email": "dcyr@sdecb.com",
    "choices": [
      {
        "id": 16,
        "strength": 116
      },
      {
        "id": 13,
        "strength": 115
      },
      {
        "id": 15,
        "strength": 113
      },
      {
        "id": 3,
        "strength": 112
      },
      {
        "id": 10,
        "strength": 111
      },
      {
        "id": 48,
        "strength": 109
      },
      {
        "id": 32,
        "strength": 108
      },
      {
        "id": 23,
        "strength": 107
      },
      {
        "id": 102,
        "strength": 106
      },
      {
        "id": 47,
        "strength": 105
      },
      {
        "id": 42,
        "strength": 104
      },
      {
        "id": 12,
        "strength": 103
      },
      {
        "id": 75,
        "strength": 102
      },
      {
        "id": 95,
        "strength": 101
      },
      {
        "id": 58,
        "strength": 100
      },
      {
        "id": 49,
        "strength": 99
      },
      {
        "id": 44,
        "strength": 98
      },
      {
        "id": 25,
        "strength": 97
      },
      {
        "id": 11,
        "strength": 96
      },
      {
        "id": 34,
        "strength": 95
      },
      {
        "id": 24,
        "strength": 94
      },
      {
        "id": 7,
        "strength": 93
      },
      {
        "id": 103,
        "strength": 92
      },
      {
        "id": 27,
        "strength": 91
      },
      {
        "id": 37,
        "strength": 90
      },
      {
        "id": 8,
        "strength": 89
      },
      {
        "id": 60,
        "strength": 88
      },
      {
        "id": 31,
        "strength": 87
      },
      {
        "id": 74,
        "strength": 86
      },
      {
        "id": 33,
        "strength": 85
      },
      {
        "id": 2,
        "strength": 84
      },
      {
        "id": 29,
        "strength": 83
      },
      {
        "id": 101,
        "strength": 82
      },
      {
        "id": 105,
        "strength": 81
      },
      {
        "id": 20,
        "strength": 79
      },
      {
        "id": 28,
        "strength": 78
      },
      {
        "id": 43,
        "strength": 77
      },
      {
        "id": 30,
        "strength": 76
      },
      {
        "id": 67,
        "strength": 75
      },
      {
        "id": 5,
        "strength": 74
      },
      {
        "id": 68,
        "strength": 73
      },
      {
        "id": 9,
        "strength": 72
      },
      {
        "id": 106,
        "strength": 71
      },
      {
        "id": 79,
        "strength": 70
      },
      {
        "id": 91,
        "strength": 69
      },
      {
        "id": 73,
        "strength": 68
      },
      {
        "id": 112,
        "strength": 67
      },
      {
        "id": 71,
        "strength": 66
      },
      {
        "id": 61,
        "strength": 65
      },
      {
        "id": 26,
        "strength": 64
      },
      {
        "id": 98,
        "strength": 63
      },
      {
        "id": 45,
        "strength": 62
      },
      {
        "id": 64,
        "strength": 61
      },
      {
        "id": 70,
        "strength": 60
      },
      {
        "id": 109,
        "strength": 59
      },
      {
        "id": 69,
        "strength": 58
      },
      {
        "id": 1,
        "strength": 57
      },
      {
        "id": 110,
        "strength": 56
      },
      {
        "id": 80,
        "strength": 55
      },
      {
        "id": 54,
        "strength": 54
      },
      {
        "id": 59,
        "strength": 53
      },
      {
        "id": 39,
        "strength": 52
      },
      {
        "id": 40,
        "strength": 51
      },
      {
        "id": 41,
        "strength": 50
      },
      {
        "id": 46,
        "strength": 49
      },
      {
        "id": 53,
        "strength": 48
      },
      {
        "id": 36,
        "strength": 47
      },
      {
        "id": 63,
        "strength": 46
      },
      {
        "id": 78,
        "strength": 45
      },
      {
        "id": 65,
        "strength": 44
      },
      {
        "id": 14,
        "strength": 43
      },
      {
        "id": 57,
        "strength": 42
      },
      {
        "id": 66,
        "strength": 41
      },
      {
        "id": 4,
        "strength": 40
      },
      {
        "id": 17,
        "strength": 39
      },
      {
        "id": 21,
        "strength": 38
      },
      {
        "id": 19,
        "strength": 37
      },
      {
        "id": 18,
        "strength": 36
      },
      {
        "id": 97,
        "strength": 35
      },
      {
        "id": 35,
        "strength": 34
      },
      {
        "id": 52,
        "strength": 33
      },
      {
        "id": 56,
        "strength": 32
      },
      {
        "id": 111,
        "strength": 31
      },
      {
        "id": 86,
        "strength": 30
      },
      {
        "id": 72,
        "strength": 29
      },
      {
        "id": 22,
        "strength": 28
      },
      {
        "id": 107,
        "strength": 27
      },
      {
        "id": 108,
        "strength": 26
      },
      {
        "id": 6,
        "strength": 24.5
      },
      {
        "id": 38,
        "strength": 23.5
      },
      {
        "id": 96,
        "strength": 22.5
      },
      {
        "id": 62,
        "strength": 21.5
      },
      {
        "id": 92,
        "strength": 20.5
      },
      {
        "id": 85,
        "strength": 19.5
      },
      {
        "id": 81,
        "strength": 18.5
      },
      {
        "id": 87,
        "strength": 17.5
      },
      {
        "id": 82,
        "strength": 16.5
      },
      {
        "id": 90,
        "strength": 15.5
      },
      {
        "id": 84,
        "strength": 14.5
      },
      {
        "id": 55,
        "strength": 13.5
      },
      {
        "id": 100,
        "strength": 12.5
      },
      {
        "id": 93,
        "strength": 11.5
      },
      {
        "id": 99,
        "strength": 10.5
      },
      {
        "id": 88,
        "strength": 9.5
      },
      {
        "id": 77,
        "strength": 8.5
      },
      {
        "id": 104,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 50
  },
  "51": {
    "email": "vilmamirandaurias@gmail.com",
    "choices": [
      {
        "id": 88,
        "strength": 115
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 113
      },
      {
        "id": 104,
        "strength": 112
      },
      {
        "id": 3,
        "strength": 111
      },
      {
        "id": 78,
        "strength": 110
      },
      {
        "id": 82,
        "strength": 109
      },
      {
        "id": 96,
        "strength": 108
      },
      {
        "id": 20,
        "strength": 106
      },
      {
        "id": 43,
        "strength": 105
      },
      {
        "id": 23,
        "strength": 104
      },
      {
        "id": 102,
        "strength": 103
      },
      {
        "id": 47,
        "strength": 102
      },
      {
        "id": 42,
        "strength": 101
      },
      {
        "id": 79,
        "strength": 100
      },
      {
        "id": 26,
        "strength": 99
      },
      {
        "id": 98,
        "strength": 98
      },
      {
        "id": 54,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 46,
        "strength": 95
      },
      {
        "id": 27,
        "strength": 94
      },
      {
        "id": 66,
        "strength": 93
      },
      {
        "id": 97,
        "strength": 92
      },
      {
        "id": 35,
        "strength": 91
      },
      {
        "id": 52,
        "strength": 90
      },
      {
        "id": 16,
        "strength": 89
      },
      {
        "id": 2,
        "strength": 88
      },
      {
        "id": 28,
        "strength": 86
      },
      {
        "id": 30,
        "strength": 85
      },
      {
        "id": 106,
        "strength": 84
      },
      {
        "id": 15,
        "strength": 83
      },
      {
        "id": 75,
        "strength": 82
      },
      {
        "id": 99,
        "strength": 81
      },
      {
        "id": 49,
        "strength": 80
      },
      {
        "id": 71,
        "strength": 79
      },
      {
        "id": 44,
        "strength": 78
      },
      {
        "id": 100,
        "strength": 77
      },
      {
        "id": 93,
        "strength": 76
      },
      {
        "id": 25,
        "strength": 75
      },
      {
        "id": 38,
        "strength": 74
      },
      {
        "id": 109,
        "strength": 73
      },
      {
        "id": 55,
        "strength": 72
      },
      {
        "id": 11,
        "strength": 71
      },
      {
        "id": 34,
        "strength": 70
      },
      {
        "id": 39,
        "strength": 69
      },
      {
        "id": 84,
        "strength": 68
      },
      {
        "id": 90,
        "strength": 67
      },
      {
        "id": 40,
        "strength": 66
      },
      {
        "id": 53,
        "strength": 65
      },
      {
        "id": 36,
        "strength": 64
      },
      {
        "id": 89,
        "strength": 63
      },
      {
        "id": 103,
        "strength": 62
      },
      {
        "id": 77,
        "strength": 61
      },
      {
        "id": 57,
        "strength": 60
      },
      {
        "id": 37,
        "strength": 59
      },
      {
        "id": 8,
        "strength": 58
      },
      {
        "id": 19,
        "strength": 57
      },
      {
        "id": 87,
        "strength": 56
      },
      {
        "id": 83,
        "strength": 55
      },
      {
        "id": 18,
        "strength": 54
      },
      {
        "id": 81,
        "strength": 53
      },
      {
        "id": 33,
        "strength": 52
      },
      {
        "id": 85,
        "strength": 51
      },
      {
        "id": 92,
        "strength": 50
      },
      {
        "id": 76,
        "strength": 49
      },
      {
        "id": 10,
        "strength": 48
      },
      {
        "id": 29,
        "strength": 47
      },
      {
        "id": 13,
        "strength": 46
      },
      {
        "id": 62,
        "strength": 45
      },
      {
        "id": 101,
        "strength": 44
      },
      {
        "id": 105,
        "strength": 43
      },
      {
        "id": 48,
        "strength": 41.5
      },
      {
        "id": 86,
        "strength": 40.5
      },
      {
        "id": 67,
        "strength": 39.5
      },
      {
        "id": 6,
        "strength": 38.5
      },
      {
        "id": 5,
        "strength": 37.5
      },
      {
        "id": 108,
        "strength": 36.5
      },
      {
        "id": 32,
        "strength": 35.5
      },
      {
        "id": 41,
        "strength": 34.5
      },
      {
        "id": 7,
        "strength": 33.5
      },
      {
        "id": 12,
        "strength": 32.5
      },
      {
        "id": 107,
        "strength": 31.5
      },
      {
        "id": 1,
        "strength": 30.5
      },
      {
        "id": 111,
        "strength": 29.5
      },
      {
        "id": 56,
        "strength": 28.5
      },
      {
        "id": 60,
        "strength": 27.5
      },
      {
        "id": 17,
        "strength": 26.5
      },
      {
        "id": 65,
        "strength": 25.5
      },
      {
        "id": 63,
        "strength": 24.5
      },
      {
        "id": 110,
        "strength": 23.5
      },
      {
        "id": 61,
        "strength": 22.5
      },
      {
        "id": 91,
        "strength": 21.5
      },
      {
        "id": 50,
        "strength": 20.5
      },
      {
        "id": 68,
        "strength": 19.5
      },
      {
        "id": 72,
        "strength": 18.5
      },
      {
        "id": 74,
        "strength": 17.5
      },
      {
        "id": 24,
        "strength": 16.5
      },
      {
        "id": 9,
        "strength": 15.5
      },
      {
        "id": 73,
        "strength": 14.5
      },
      {
        "id": 58,
        "strength": 13.5
      },
      {
        "id": 112,
        "strength": 12.5
      },
      {
        "id": 45,
        "strength": 11.5
      },
      {
        "id": 64,
        "strength": 10.5
      },
      {
        "id": 70,
        "strength": 9.5
      },
      {
        "id": 69,
        "strength": 8.5
      },
      {
        "id": 14,
        "strength": 7.5
      },
      {
        "id": 4,
        "strength": 6.5
      },
      {
        "id": 21,
        "strength": 5.5
      },
      {
        "id": 31,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 51
  },
  "52": {
    "email": "rreyes@ujed.mx",
    "choices": [
      {
        "id": 80,
        "strength": 117
      },
      {
        "id": 42,
        "strength": 115
      },
      {
        "id": 25,
        "strength": 114
      },
      {
        "id": 59,
        "strength": 113
      },
      {
        "id": 46,
        "strength": 112
      },
      {
        "id": 16,
        "strength": 111
      },
      {
        "id": 2,
        "strength": 110
      },
      {
        "id": 13,
        "strength": 109
      },
      {
        "id": 20,
        "strength": 107
      },
      {
        "id": 23,
        "strength": 106
      },
      {
        "id": 15,
        "strength": 105
      },
      {
        "id": 47,
        "strength": 104
      },
      {
        "id": 95,
        "strength": 103
      },
      {
        "id": 49,
        "strength": 102
      },
      {
        "id": 71,
        "strength": 101
      },
      {
        "id": 11,
        "strength": 100
      },
      {
        "id": 3,
        "strength": 99
      },
      {
        "id": 78,
        "strength": 98
      },
      {
        "id": 27,
        "strength": 97
      },
      {
        "id": 18,
        "strength": 96
      },
      {
        "id": 33,
        "strength": 95
      },
      {
        "id": 35,
        "strength": 94
      },
      {
        "id": 10,
        "strength": 93
      },
      {
        "id": 28,
        "strength": 91
      },
      {
        "id": 43,
        "strength": 90
      },
      {
        "id": 30,
        "strength": 89
      },
      {
        "id": 32,
        "strength": 88
      },
      {
        "id": 102,
        "strength": 87
      },
      {
        "id": 106,
        "strength": 86
      },
      {
        "id": 79,
        "strength": 85
      },
      {
        "id": 12,
        "strength": 84
      },
      {
        "id": 88,
        "strength": 83
      },
      {
        "id": 75,
        "strength": 82
      },
      {
        "id": 61,
        "strength": 81
      },
      {
        "id": 26,
        "strength": 80
      },
      {
        "id": 70,
        "strength": 79
      },
      {
        "id": 109,
        "strength": 78
      },
      {
        "id": 1,
        "strength": 77
      },
      {
        "id": 54,
        "strength": 76
      },
      {
        "id": 34,
        "strength": 75
      },
      {
        "id": 24,
        "strength": 74
      },
      {
        "id": 39,
        "strength": 73
      },
      {
        "id": 104,
        "strength": 72
      },
      {
        "id": 40,
        "strength": 71
      },
      {
        "id": 41,
        "strength": 70
      },
      {
        "id": 53,
        "strength": 69
      },
      {
        "id": 36,
        "strength": 68
      },
      {
        "id": 103,
        "strength": 67
      },
      {
        "id": 57,
        "strength": 66
      },
      {
        "id": 66,
        "strength": 65
      },
      {
        "id": 37,
        "strength": 64
      },
      {
        "id": 8,
        "strength": 63
      },
      {
        "id": 82,
        "strength": 62
      },
      {
        "id": 19,
        "strength": 61
      },
      {
        "id": 85,
        "strength": 60
      },
      {
        "id": 56,
        "strength": 59
      },
      {
        "id": 29,
        "strength": 58
      },
      {
        "id": 72,
        "strength": 57
      },
      {
        "id": 51,
        "strength": 56
      },
      {
        "id": 96,
        "strength": 55
      },
      {
        "id": 101,
        "strength": 54
      },
      {
        "id": 48,
        "strength": 52
      },
      {
        "id": 67,
        "strength": 51
      },
      {
        "id": 5,
        "strength": 50
      },
      {
        "id": 68,
        "strength": 49
      },
      {
        "id": 9,
        "strength": 48
      },
      {
        "id": 50,
        "strength": 47
      },
      {
        "id": 91,
        "strength": 46
      },
      {
        "id": 73,
        "strength": 45
      },
      {
        "id": 58,
        "strength": 44
      },
      {
        "id": 99,
        "strength": 43
      },
      {
        "id": 112,
        "strength": 42
      },
      {
        "id": 44,
        "strength": 41
      },
      {
        "id": 98,
        "strength": 40
      },
      {
        "id": 100,
        "strength": 39
      },
      {
        "id": 93,
        "strength": 38
      },
      {
        "id": 45,
        "strength": 37
      },
      {
        "id": 64,
        "strength": 36
      },
      {
        "id": 38,
        "strength": 35
      },
      {
        "id": 69,
        "strength": 34
      },
      {
        "id": 55,
        "strength": 33
      },
      {
        "id": 110,
        "strength": 32
      },
      {
        "id": 84,
        "strength": 31
      },
      {
        "id": 7,
        "strength": 30
      },
      {
        "id": 90,
        "strength": 29
      },
      {
        "id": 89,
        "strength": 28
      },
      {
        "id": 63,
        "strength": 27
      },
      {
        "id": 65,
        "strength": 26
      },
      {
        "id": 14,
        "strength": 25
      },
      {
        "id": 77,
        "strength": 24
      },
      {
        "id": 4,
        "strength": 23
      },
      {
        "id": 17,
        "strength": 22
      },
      {
        "id": 21,
        "strength": 21
      },
      {
        "id": 60,
        "strength": 20
      },
      {
        "id": 31,
        "strength": 19
      },
      {
        "id": 87,
        "strength": 18
      },
      {
        "id": 74,
        "strength": 17
      },
      {
        "id": 83,
        "strength": 16
      },
      {
        "id": 97,
        "strength": 15
      },
      {
        "id": 81,
        "strength": 14
      },
      {
        "id": 92,
        "strength": 13
      },
      {
        "id": 76,
        "strength": 12
      },
      {
        "id": 111,
        "strength": 11
      },
      {
        "id": 86,
        "strength": 10
      },
      {
        "id": 62,
        "strength": 9
      },
      {
        "id": 22,
        "strength": 8
      },
      {
        "id": 107,
        "strength": 7
      },
      {
        "id": 108,
        "strength": 6
      },
      {
        "id": 105,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 52
  },
  "53": {
    "email": "matthew.nemeth@uconn.edu",
    "choices": [
      {
        "id": 95,
        "strength": 115
      },
      {
        "id": 80,
        "strength": 114
      },
      {
        "id": 78,
        "strength": 113
      },
      {
        "id": 52,
        "strength": 112
      },
      {
        "id": 20,
        "strength": 110
      },
      {
        "id": 48,
        "strength": 109
      },
      {
        "id": 28,
        "strength": 108
      },
      {
        "id": 43,
        "strength": 107
      },
      {
        "id": 30,
        "strength": 106
      },
      {
        "id": 67,
        "strength": 105
      },
      {
        "id": 32,
        "strength": 104
      },
      {
        "id": 23,
        "strength": 103
      },
      {
        "id": 102,
        "strength": 102
      },
      {
        "id": 106,
        "strength": 101
      },
      {
        "id": 15,
        "strength": 100
      },
      {
        "id": 50,
        "strength": 99
      },
      {
        "id": 47,
        "strength": 98
      },
      {
        "id": 79,
        "strength": 97
      },
      {
        "id": 12,
        "strength": 96
      },
      {
        "id": 75,
        "strength": 95
      },
      {
        "id": 49,
        "strength": 94
      },
      {
        "id": 71,
        "strength": 93
      },
      {
        "id": 61,
        "strength": 92
      },
      {
        "id": 44,
        "strength": 91
      },
      {
        "id": 70,
        "strength": 90
      },
      {
        "id": 109,
        "strength": 89
      },
      {
        "id": 55,
        "strength": 88
      },
      {
        "id": 110,
        "strength": 87
      },
      {
        "id": 54,
        "strength": 86
      },
      {
        "id": 59,
        "strength": 85
      },
      {
        "id": 7,
        "strength": 84
      },
      {
        "id": 104,
        "strength": 83
      },
      {
        "id": 40,
        "strength": 82
      },
      {
        "id": 46,
        "strength": 81
      },
      {
        "id": 103,
        "strength": 80
      },
      {
        "id": 63,
        "strength": 79
      },
      {
        "id": 3,
        "strength": 78
      },
      {
        "id": 57,
        "strength": 77
      },
      {
        "id": 8,
        "strength": 76
      },
      {
        "id": 82,
        "strength": 75
      },
      {
        "id": 19,
        "strength": 74
      },
      {
        "id": 60,
        "strength": 73
      },
      {
        "id": 85,
        "strength": 72
      },
      {
        "id": 16,
        "strength": 71
      },
      {
        "id": 2,
        "strength": 70
      },
      {
        "id": 86,
        "strength": 69
      },
      {
        "id": 72,
        "strength": 68
      },
      {
        "id": 51,
        "strength": 67
      },
      {
        "id": 108,
        "strength": 66
      },
      {
        "id": 101,
        "strength": 65
      },
      {
        "id": 5,
        "strength": 63
      },
      {
        "id": 68,
        "strength": 62
      },
      {
        "id": 9,
        "strength": 61
      },
      {
        "id": 42,
        "strength": 60
      },
      {
        "id": 91,
        "strength": 59
      },
      {
        "id": 73,
        "strength": 58
      },
      {
        "id": 88,
        "strength": 57
      },
      {
        "id": 58,
        "strength": 56
      },
      {
        "id": 99,
        "strength": 55
      },
      {
        "id": 112,
        "strength": 54
      },
      {
        "id": 26,
        "strength": 53
      },
      {
        "id": 98,
        "strength": 52
      },
      {
        "id": 100,
        "strength": 51
      },
      {
        "id": 93,
        "strength": 50
      },
      {
        "id": 45,
        "strength": 49
      },
      {
        "id": 64,
        "strength": 48
      },
      {
        "id": 25,
        "strength": 47
      },
      {
        "id": 38,
        "strength": 46
      },
      {
        "id": 69,
        "strength": 45
      },
      {
        "id": 1,
        "strength": 44
      },
      {
        "id": 11,
        "strength": 43
      },
      {
        "id": 34,
        "strength": 42
      },
      {
        "id": 24,
        "strength": 41
      },
      {
        "id": 39,
        "strength": 40
      },
      {
        "id": 84,
        "strength": 39
      },
      {
        "id": 90,
        "strength": 38
      },
      {
        "id": 41,
        "strength": 37
      },
      {
        "id": 36,
        "strength": 36
      },
      {
        "id": 89,
        "strength": 35
      },
      {
        "id": 65,
        "strength": 34
      },
      {
        "id": 27,
        "strength": 33
      },
      {
        "id": 14,
        "strength": 32
      },
      {
        "id": 77,
        "strength": 31
      },
      {
        "id": 66,
        "strength": 30
      },
      {
        "id": 4,
        "strength": 29
      },
      {
        "id": 17,
        "strength": 28
      },
      {
        "id": 37,
        "strength": 27
      },
      {
        "id": 21,
        "strength": 26
      },
      {
        "id": 31,
        "strength": 25
      },
      {
        "id": 87,
        "strength": 24
      },
      {
        "id": 74,
        "strength": 23
      },
      {
        "id": 83,
        "strength": 22
      },
      {
        "id": 18,
        "strength": 21
      },
      {
        "id": 97,
        "strength": 20
      },
      {
        "id": 81,
        "strength": 19
      },
      {
        "id": 33,
        "strength": 18
      },
      {
        "id": 35,
        "strength": 17
      },
      {
        "id": 92,
        "strength": 16
      },
      {
        "id": 76,
        "strength": 15
      },
      {
        "id": 56,
        "strength": 14
      },
      {
        "id": 10,
        "strength": 13
      },
      {
        "id": 29,
        "strength": 12
      },
      {
        "id": 111,
        "strength": 11
      },
      {
        "id": 13,
        "strength": 10
      },
      {
        "id": 62,
        "strength": 9
      },
      {
        "id": 22,
        "strength": 8
      },
      {
        "id": 96,
        "strength": 7
      },
      {
        "id": 107,
        "strength": 6
      },
      {
        "id": 105,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 53
  },
  "54": {
    "email": "kcuellar@icesi.edu.co",
    "choices": [
      {
        "id": 79,
        "strength": 116
      },
      {
        "id": 16,
        "strength": 115
      },
      {
        "id": 10,
        "strength": 114
      },
      {
        "id": 29,
        "strength": 113
      },
      {
        "id": 23,
        "strength": 111
      },
      {
        "id": 15,
        "strength": 110
      },
      {
        "id": 75,
        "strength": 109
      },
      {
        "id": 95,
        "strength": 108
      },
      {
        "id": 25,
        "strength": 107
      },
      {
        "id": 59,
        "strength": 106
      },
      {
        "id": 24,
        "strength": 105
      },
      {
        "id": 3,
        "strength": 104
      },
      {
        "id": 37,
        "strength": 103
      },
      {
        "id": 13,
        "strength": 102
      },
      {
        "id": 101,
        "strength": 101
      },
      {
        "id": 20,
        "strength": 99
      },
      {
        "id": 102,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 88,
        "strength": 96
      },
      {
        "id": 58,
        "strength": 95
      },
      {
        "id": 49,
        "strength": 94
      },
      {
        "id": 26,
        "strength": 93
      },
      {
        "id": 98,
        "strength": 92
      },
      {
        "id": 80,
        "strength": 91
      },
      {
        "id": 11,
        "strength": 90
      },
      {
        "id": 39,
        "strength": 89
      },
      {
        "id": 104,
        "strength": 88
      },
      {
        "id": 46,
        "strength": 87
      },
      {
        "id": 36,
        "strength": 86
      },
      {
        "id": 103,
        "strength": 85
      },
      {
        "id": 78,
        "strength": 84
      },
      {
        "id": 27,
        "strength": 83
      },
      {
        "id": 66,
        "strength": 82
      },
      {
        "id": 82,
        "strength": 81
      },
      {
        "id": 60,
        "strength": 80
      },
      {
        "id": 31,
        "strength": 79
      },
      {
        "id": 74,
        "strength": 78
      },
      {
        "id": 18,
        "strength": 77
      },
      {
        "id": 97,
        "strength": 76
      },
      {
        "id": 33,
        "strength": 75
      },
      {
        "id": 52,
        "strength": 74
      },
      {
        "id": 2,
        "strength": 73
      },
      {
        "id": 51,
        "strength": 72
      },
      {
        "id": 96,
        "strength": 71
      },
      {
        "id": 48,
        "strength": 69
      },
      {
        "id": 28,
        "strength": 68
      },
      {
        "id": 6,
        "strength": 67
      },
      {
        "id": 43,
        "strength": 66
      },
      {
        "id": 30,
        "strength": 65
      },
      {
        "id": 106,
        "strength": 64
      },
      {
        "id": 50,
        "strength": 63
      },
      {
        "id": 47,
        "strength": 62
      },
      {
        "id": 99,
        "strength": 61
      },
      {
        "id": 71,
        "strength": 60
      },
      {
        "id": 44,
        "strength": 59
      },
      {
        "id": 100,
        "strength": 58
      },
      {
        "id": 93,
        "strength": 57
      },
      {
        "id": 45,
        "strength": 56
      },
      {
        "id": 38,
        "strength": 55
      },
      {
        "id": 109,
        "strength": 54
      },
      {
        "id": 55,
        "strength": 53
      },
      {
        "id": 34,
        "strength": 51
      },
      {
        "id": 84,
        "strength": 50
      },
      {
        "id": 90,
        "strength": 49
      },
      {
        "id": 40,
        "strength": 48
      },
      {
        "id": 53,
        "strength": 47
      },
      {
        "id": 89,
        "strength": 46
      },
      {
        "id": 77,
        "strength": 45
      },
      {
        "id": 57,
        "strength": 44
      },
      {
        "id": 8,
        "strength": 43
      },
      {
        "id": 19,
        "strength": 42
      },
      {
        "id": 87,
        "strength": 41
      },
      {
        "id": 83,
        "strength": 40
      },
      {
        "id": 81,
        "strength": 39
      },
      {
        "id": 35,
        "strength": 38
      },
      {
        "id": 85,
        "strength": 37
      },
      {
        "id": 92,
        "strength": 36
      },
      {
        "id": 76,
        "strength": 35
      },
      {
        "id": 56,
        "strength": 34
      },
      {
        "id": 72,
        "strength": 33
      },
      {
        "id": 62,
        "strength": 32
      },
      {
        "id": 105,
        "strength": 30.5
      },
      {
        "id": 86,
        "strength": 29.5
      },
      {
        "id": 67,
        "strength": 28.5
      },
      {
        "id": 5,
        "strength": 27.5
      },
      {
        "id": 108,
        "strength": 26.5
      },
      {
        "id": 32,
        "strength": 25.5
      },
      {
        "id": 41,
        "strength": 24.5
      },
      {
        "id": 7,
        "strength": 23.5
      },
      {
        "id": 12,
        "strength": 22.5
      },
      {
        "id": 107,
        "strength": 21.5
      },
      {
        "id": 1,
        "strength": 20.5
      },
      {
        "id": 111,
        "strength": 19.5
      },
      {
        "id": 17,
        "strength": 18.5
      },
      {
        "id": 65,
        "strength": 17.5
      },
      {
        "id": 63,
        "strength": 16.5
      },
      {
        "id": 110,
        "strength": 15.5
      },
      {
        "id": 61,
        "strength": 14.5
      },
      {
        "id": 91,
        "strength": 13.5
      },
      {
        "id": 68,
        "strength": 12.5
      },
      {
        "id": 9,
        "strength": 11.5
      },
      {
        "id": 73,
        "strength": 10.5
      },
      {
        "id": 112,
        "strength": 9.5
      },
      {
        "id": 64,
        "strength": 8.5
      },
      {
        "id": 70,
        "strength": 7.5
      },
      {
        "id": 69,
        "strength": 6.5
      },
      {
        "id": 14,
        "strength": 5.5
      },
      {
        "id": 4,
        "strength": 4.5
      },
      {
        "id": 21,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      },
      {
        "id": 22,
        "strength": 1.5
      }
    ],
    "id": 54
  },
  "55": {
    "email": "juan.rosas@telefonica.com",
    "choices": [
      {
        "id": 2,
        "strength": 114
      },
      {
        "id": 20,
        "strength": 112
      },
      {
        "id": 43,
        "strength": 111
      },
      {
        "id": 30,
        "strength": 110
      },
      {
        "id": 23,
        "strength": 109
      },
      {
        "id": 106,
        "strength": 108
      },
      {
        "id": 15,
        "strength": 107
      },
      {
        "id": 79,
        "strength": 106
      },
      {
        "id": 88,
        "strength": 105
      },
      {
        "id": 95,
        "strength": 104
      },
      {
        "id": 99,
        "strength": 103
      },
      {
        "id": 49,
        "strength": 102
      },
      {
        "id": 26,
        "strength": 101
      },
      {
        "id": 100,
        "strength": 100
      },
      {
        "id": 93,
        "strength": 99
      },
      {
        "id": 38,
        "strength": 98
      },
      {
        "id": 109,
        "strength": 97
      },
      {
        "id": 80,
        "strength": 96
      },
      {
        "id": 54,
        "strength": 95
      },
      {
        "id": 59,
        "strength": 94
      },
      {
        "id": 84,
        "strength": 93
      },
      {
        "id": 90,
        "strength": 92
      },
      {
        "id": 104,
        "strength": 91
      },
      {
        "id": 40,
        "strength": 90
      },
      {
        "id": 46,
        "strength": 89
      },
      {
        "id": 53,
        "strength": 88
      },
      {
        "id": 36,
        "strength": 87
      },
      {
        "id": 89,
        "strength": 86
      },
      {
        "id": 3,
        "strength": 85
      },
      {
        "id": 78,
        "strength": 84
      },
      {
        "id": 77,
        "strength": 83
      },
      {
        "id": 57,
        "strength": 82
      },
      {
        "id": 8,
        "strength": 81
      },
      {
        "id": 82,
        "strength": 80
      },
      {
        "id": 87,
        "strength": 79
      },
      {
        "id": 83,
        "strength": 78
      },
      {
        "id": 97,
        "strength": 77
      },
      {
        "id": 81,
        "strength": 76
      },
      {
        "id": 85,
        "strength": 75
      },
      {
        "id": 92,
        "strength": 74
      },
      {
        "id": 52,
        "strength": 73
      },
      {
        "id": 76,
        "strength": 72
      },
      {
        "id": 16,
        "strength": 71
      },
      {
        "id": 29,
        "strength": 70
      },
      {
        "id": 62,
        "strength": 69
      },
      {
        "id": 51,
        "strength": 68
      },
      {
        "id": 96,
        "strength": 67
      },
      {
        "id": 48,
        "strength": 65.5
      },
      {
        "id": 105,
        "strength": 64.5
      },
      {
        "id": 86,
        "strength": 63.5
      },
      {
        "id": 67,
        "strength": 62.5
      },
      {
        "id": 6,
        "strength": 61.5
      },
      {
        "id": 19,
        "strength": 60.5
      },
      {
        "id": 5,
        "strength": 59.5
      },
      {
        "id": 108,
        "strength": 58.5
      },
      {
        "id": 32,
        "strength": 57.5
      },
      {
        "id": 41,
        "strength": 56.5
      },
      {
        "id": 7,
        "strength": 55.5
      },
      {
        "id": 12,
        "strength": 54.5
      },
      {
        "id": 107,
        "strength": 53.5
      },
      {
        "id": 102,
        "strength": 52.5
      },
      {
        "id": 1,
        "strength": 51.5
      },
      {
        "id": 28,
        "strength": 50.5
      },
      {
        "id": 34,
        "strength": 49.5
      },
      {
        "id": 111,
        "strength": 48.5
      },
      {
        "id": 56,
        "strength": 47.5
      },
      {
        "id": 18,
        "strength": 46.5
      },
      {
        "id": 60,
        "strength": 45.5
      },
      {
        "id": 17,
        "strength": 44.5
      },
      {
        "id": 66,
        "strength": 43.5
      },
      {
        "id": 27,
        "strength": 42.5
      },
      {
        "id": 65,
        "strength": 41.5
      },
      {
        "id": 63,
        "strength": 40.5
      },
      {
        "id": 103,
        "strength": 39.5
      },
      {
        "id": 110,
        "strength": 38.5
      },
      {
        "id": 25,
        "strength": 37.5
      },
      {
        "id": 44,
        "strength": 36.5
      },
      {
        "id": 61,
        "strength": 35.5
      },
      {
        "id": 91,
        "strength": 34.5
      },
      {
        "id": 50,
        "strength": 33.5
      },
      {
        "id": 68,
        "strength": 32.5
      },
      {
        "id": 72,
        "strength": 31.5
      },
      {
        "id": 74,
        "strength": 30.5
      },
      {
        "id": 24,
        "strength": 29.5
      },
      {
        "id": 47,
        "strength": 28.5
      },
      {
        "id": 98,
        "strength": 27.5
      },
      {
        "id": 9,
        "strength": 26.5
      },
      {
        "id": 42,
        "strength": 25.5
      },
      {
        "id": 73,
        "strength": 24.5
      },
      {
        "id": 75,
        "strength": 23.5
      },
      {
        "id": 58,
        "strength": 22.5
      },
      {
        "id": 112,
        "strength": 21.5
      },
      {
        "id": 71,
        "strength": 20.5
      },
      {
        "id": 45,
        "strength": 19.5
      },
      {
        "id": 64,
        "strength": 18.5
      },
      {
        "id": 70,
        "strength": 17.5
      },
      {
        "id": 69,
        "strength": 16.5
      },
      {
        "id": 11,
        "strength": 15.5
      },
      {
        "id": 39,
        "strength": 14.5
      },
      {
        "id": 14,
        "strength": 13.5
      },
      {
        "id": 4,
        "strength": 12.5
      },
      {
        "id": 37,
        "strength": 11.5
      },
      {
        "id": 21,
        "strength": 10.5
      },
      {
        "id": 31,
        "strength": 9.5
      },
      {
        "id": 33,
        "strength": 8.5
      },
      {
        "id": 35,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 55
  },
  "56": {
    "email": "schuermannc@cochise.edu",
    "choices": [
      {
        "id": 75,
        "strength": 115
      },
      {
        "id": 71,
        "strength": 114
      },
      {
        "id": 70,
        "strength": 113
      },
      {
        "id": 60,
        "strength": 112
      },
      {
        "id": 74,
        "strength": 111
      },
      {
        "id": 13,
        "strength": 110
      },
      {
        "id": 72,
        "strength": 109
      },
      {
        "id": 101,
        "strength": 108
      },
      {
        "id": 48,
        "strength": 106
      },
      {
        "id": 28,
        "strength": 105
      },
      {
        "id": 67,
        "strength": 104
      },
      {
        "id": 5,
        "strength": 103
      },
      {
        "id": 32,
        "strength": 102
      },
      {
        "id": 23,
        "strength": 101
      },
      {
        "id": 102,
        "strength": 100
      },
      {
        "id": 15,
        "strength": 99
      },
      {
        "id": 50,
        "strength": 98
      },
      {
        "id": 47,
        "strength": 97
      },
      {
        "id": 42,
        "strength": 96
      },
      {
        "id": 79,
        "strength": 95
      },
      {
        "id": 12,
        "strength": 94
      },
      {
        "id": 95,
        "strength": 93
      },
      {
        "id": 58,
        "strength": 92
      },
      {
        "id": 61,
        "strength": 91
      },
      {
        "id": 44,
        "strength": 90
      },
      {
        "id": 110,
        "strength": 89
      },
      {
        "id": 80,
        "strength": 88
      },
      {
        "id": 11,
        "strength": 87
      },
      {
        "id": 54,
        "strength": 86
      },
      {
        "id": 24,
        "strength": 85
      },
      {
        "id": 39,
        "strength": 84
      },
      {
        "id": 7,
        "strength": 83
      },
      {
        "id": 104,
        "strength": 82
      },
      {
        "id": 103,
        "strength": 81
      },
      {
        "id": 63,
        "strength": 80
      },
      {
        "id": 78,
        "strength": 79
      },
      {
        "id": 66,
        "strength": 78
      },
      {
        "id": 37,
        "strength": 77
      },
      {
        "id": 19,
        "strength": 76
      },
      {
        "id": 31,
        "strength": 75
      },
      {
        "id": 18,
        "strength": 74
      },
      {
        "id": 52,
        "strength": 73
      },
      {
        "id": 16,
        "strength": 72
      },
      {
        "id": 10,
        "strength": 71
      },
      {
        "id": 29,
        "strength": 70
      },
      {
        "id": 86,
        "strength": 69
      },
      {
        "id": 22,
        "strength": 68
      },
      {
        "id": 108,
        "strength": 67
      },
      {
        "id": 20,
        "strength": 65
      },
      {
        "id": 43,
        "strength": 64
      },
      {
        "id": 30,
        "strength": 63
      },
      {
        "id": 68,
        "strength": 62
      },
      {
        "id": 9,
        "strength": 61
      },
      {
        "id": 106,
        "strength": 60
      },
      {
        "id": 91,
        "strength": 59
      },
      {
        "id": 73,
        "strength": 58
      },
      {
        "id": 112,
        "strength": 57
      },
      {
        "id": 49,
        "strength": 56
      },
      {
        "id": 26,
        "strength": 55
      },
      {
        "id": 98,
        "strength": 54
      },
      {
        "id": 45,
        "strength": 53
      },
      {
        "id": 64,
        "strength": 52
      },
      {
        "id": 25,
        "strength": 51
      },
      {
        "id": 109,
        "strength": 50
      },
      {
        "id": 69,
        "strength": 49
      },
      {
        "id": 1,
        "strength": 48
      },
      {
        "id": 55,
        "strength": 47
      },
      {
        "id": 34,
        "strength": 46
      },
      {
        "id": 59,
        "strength": 45
      },
      {
        "id": 40,
        "strength": 44
      },
      {
        "id": 41,
        "strength": 43
      },
      {
        "id": 46,
        "strength": 42
      },
      {
        "id": 53,
        "strength": 41
      },
      {
        "id": 36,
        "strength": 40
      },
      {
        "id": 3,
        "strength": 39
      },
      {
        "id": 65,
        "strength": 38
      },
      {
        "id": 27,
        "strength": 37
      },
      {
        "id": 14,
        "strength": 36
      },
      {
        "id": 57,
        "strength": 35
      },
      {
        "id": 4,
        "strength": 34
      },
      {
        "id": 17,
        "strength": 33
      },
      {
        "id": 8,
        "strength": 32
      },
      {
        "id": 21,
        "strength": 31
      },
      {
        "id": 82,
        "strength": 30
      },
      {
        "id": 33,
        "strength": 29
      },
      {
        "id": 35,
        "strength": 28
      },
      {
        "id": 85,
        "strength": 27
      },
      {
        "id": 2,
        "strength": 26
      },
      {
        "id": 111,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 56
  },
  "57": {
    "email": "nelson@uconn.edu",
    "choices": [
      {
        "id": 95,
        "strength": 115
      },
      {
        "id": 80,
        "strength": 114
      },
      {
        "id": 78,
        "strength": 113
      },
      {
        "id": 52,
        "strength": 112
      },
      {
        "id": 20,
        "strength": 110
      },
      {
        "id": 48,
        "strength": 109
      },
      {
        "id": 28,
        "strength": 108
      },
      {
        "id": 43,
        "strength": 107
      },
      {
        "id": 30,
        "strength": 106
      },
      {
        "id": 67,
        "strength": 105
      },
      {
        "id": 32,
        "strength": 104
      },
      {
        "id": 23,
        "strength": 103
      },
      {
        "id": 102,
        "strength": 102
      },
      {
        "id": 106,
        "strength": 101
      },
      {
        "id": 15,
        "strength": 100
      },
      {
        "id": 50,
        "strength": 99
      },
      {
        "id": 47,
        "strength": 98
      },
      {
        "id": 79,
        "strength": 97
      },
      {
        "id": 12,
        "strength": 96
      },
      {
        "id": 75,
        "strength": 95
      },
      {
        "id": 49,
        "strength": 94
      },
      {
        "id": 71,
        "strength": 93
      },
      {
        "id": 61,
        "strength": 92
      },
      {
        "id": 44,
        "strength": 91
      },
      {
        "id": 70,
        "strength": 90
      },
      {
        "id": 109,
        "strength": 89
      },
      {
        "id": 55,
        "strength": 88
      },
      {
        "id": 110,
        "strength": 87
      },
      {
        "id": 54,
        "strength": 86
      },
      {
        "id": 59,
        "strength": 85
      },
      {
        "id": 7,
        "strength": 84
      },
      {
        "id": 104,
        "strength": 83
      },
      {
        "id": 40,
        "strength": 82
      },
      {
        "id": 46,
        "strength": 81
      },
      {
        "id": 53,
        "strength": 80
      },
      {
        "id": 103,
        "strength": 79
      },
      {
        "id": 63,
        "strength": 78
      },
      {
        "id": 3,
        "strength": 77
      },
      {
        "id": 8,
        "strength": 76
      },
      {
        "id": 82,
        "strength": 75
      },
      {
        "id": 19,
        "strength": 74
      },
      {
        "id": 60,
        "strength": 73
      },
      {
        "id": 85,
        "strength": 72
      },
      {
        "id": 16,
        "strength": 71
      },
      {
        "id": 2,
        "strength": 70
      },
      {
        "id": 86,
        "strength": 69
      },
      {
        "id": 72,
        "strength": 68
      },
      {
        "id": 51,
        "strength": 67
      },
      {
        "id": 108,
        "strength": 66
      },
      {
        "id": 101,
        "strength": 65
      },
      {
        "id": 5,
        "strength": 63
      },
      {
        "id": 68,
        "strength": 62
      },
      {
        "id": 9,
        "strength": 61
      },
      {
        "id": 42,
        "strength": 60
      },
      {
        "id": 91,
        "strength": 59
      },
      {
        "id": 73,
        "strength": 58
      },
      {
        "id": 88,
        "strength": 57
      },
      {
        "id": 58,
        "strength": 56
      },
      {
        "id": 99,
        "strength": 55
      },
      {
        "id": 112,
        "strength": 54
      },
      {
        "id": 26,
        "strength": 53
      },
      {
        "id": 98,
        "strength": 52
      },
      {
        "id": 100,
        "strength": 51
      },
      {
        "id": 93,
        "strength": 50
      },
      {
        "id": 45,
        "strength": 49
      },
      {
        "id": 64,
        "strength": 48
      },
      {
        "id": 25,
        "strength": 47
      },
      {
        "id": 38,
        "strength": 46
      },
      {
        "id": 69,
        "strength": 45
      },
      {
        "id": 1,
        "strength": 44
      },
      {
        "id": 11,
        "strength": 43
      },
      {
        "id": 34,
        "strength": 42
      },
      {
        "id": 24,
        "strength": 41
      },
      {
        "id": 39,
        "strength": 40
      },
      {
        "id": 84,
        "strength": 39
      },
      {
        "id": 90,
        "strength": 38
      },
      {
        "id": 41,
        "strength": 37
      },
      {
        "id": 36,
        "strength": 36
      },
      {
        "id": 89,
        "strength": 35
      },
      {
        "id": 65,
        "strength": 34
      },
      {
        "id": 27,
        "strength": 33
      },
      {
        "id": 14,
        "strength": 32
      },
      {
        "id": 77,
        "strength": 31
      },
      {
        "id": 66,
        "strength": 30
      },
      {
        "id": 4,
        "strength": 29
      },
      {
        "id": 17,
        "strength": 28
      },
      {
        "id": 37,
        "strength": 27
      },
      {
        "id": 21,
        "strength": 26
      },
      {
        "id": 31,
        "strength": 25
      },
      {
        "id": 87,
        "strength": 24
      },
      {
        "id": 74,
        "strength": 23
      },
      {
        "id": 83,
        "strength": 22
      },
      {
        "id": 18,
        "strength": 21
      },
      {
        "id": 97,
        "strength": 20
      },
      {
        "id": 81,
        "strength": 19
      },
      {
        "id": 33,
        "strength": 18
      },
      {
        "id": 35,
        "strength": 17
      },
      {
        "id": 92,
        "strength": 16
      },
      {
        "id": 76,
        "strength": 15
      },
      {
        "id": 56,
        "strength": 14
      },
      {
        "id": 10,
        "strength": 13
      },
      {
        "id": 29,
        "strength": 12
      },
      {
        "id": 111,
        "strength": 11
      },
      {
        "id": 13,
        "strength": 10
      },
      {
        "id": 62,
        "strength": 9
      },
      {
        "id": 22,
        "strength": 8
      },
      {
        "id": 96,
        "strength": 7
      },
      {
        "id": 107,
        "strength": 6
      },
      {
        "id": 105,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 57
  },
  "58": {
    "email": "erin.richmond@cityofnorthbay.ca",
    "choices": [
      {
        "id": 15,
        "strength": 116
      },
      {
        "id": 10,
        "strength": 115
      },
      {
        "id": 13,
        "strength": 114
      },
      {
        "id": 75,
        "strength": 112
      },
      {
        "id": 44,
        "strength": 111
      },
      {
        "id": 24,
        "strength": 110
      },
      {
        "id": 3,
        "strength": 109
      },
      {
        "id": 37,
        "strength": 108
      },
      {
        "id": 60,
        "strength": 107
      },
      {
        "id": 31,
        "strength": 106
      },
      {
        "id": 74,
        "strength": 105
      },
      {
        "id": 16,
        "strength": 104
      },
      {
        "id": 29,
        "strength": 103
      },
      {
        "id": 101,
        "strength": 102
      },
      {
        "id": 48,
        "strength": 100
      },
      {
        "id": 23,
        "strength": 99
      },
      {
        "id": 102,
        "strength": 98
      },
      {
        "id": 50,
        "strength": 97
      },
      {
        "id": 42,
        "strength": 96
      },
      {
        "id": 79,
        "strength": 95
      },
      {
        "id": 12,
        "strength": 94
      },
      {
        "id": 95,
        "strength": 93
      },
      {
        "id": 49,
        "strength": 92
      },
      {
        "id": 25,
        "strength": 91
      },
      {
        "id": 11,
        "strength": 90
      },
      {
        "id": 54,
        "strength": 89
      },
      {
        "id": 39,
        "strength": 88
      },
      {
        "id": 7,
        "strength": 87
      },
      {
        "id": 36,
        "strength": 86
      },
      {
        "id": 103,
        "strength": 85
      },
      {
        "id": 78,
        "strength": 84
      },
      {
        "id": 27,
        "strength": 83
      },
      {
        "id": 66,
        "strength": 82
      },
      {
        "id": 8,
        "strength": 81
      },
      {
        "id": 18,
        "strength": 80
      },
      {
        "id": 33,
        "strength": 79
      },
      {
        "id": 35,
        "strength": 78
      },
      {
        "id": 56,
        "strength": 77
      },
      {
        "id": 2,
        "strength": 76
      },
      {
        "id": 72,
        "strength": 75
      },
      {
        "id": 22,
        "strength": 74
      },
      {
        "id": 20,
        "strength": 72
      },
      {
        "id": 28,
        "strength": 71
      },
      {
        "id": 43,
        "strength": 70
      },
      {
        "id": 30,
        "strength": 69
      },
      {
        "id": 67,
        "strength": 68
      },
      {
        "id": 5,
        "strength": 67
      },
      {
        "id": 32,
        "strength": 66
      },
      {
        "id": 68,
        "strength": 65
      },
      {
        "id": 9,
        "strength": 64
      },
      {
        "id": 106,
        "strength": 63
      },
      {
        "id": 47,
        "strength": 62
      },
      {
        "id": 91,
        "strength": 61
      },
      {
        "id": 73,
        "strength": 60
      },
      {
        "id": 112,
        "strength": 59
      },
      {
        "id": 71,
        "strength": 58
      },
      {
        "id": 61,
        "strength": 57
      },
      {
        "id": 26,
        "strength": 56
      },
      {
        "id": 98,
        "strength": 55
      },
      {
        "id": 45,
        "strength": 54
      },
      {
        "id": 64,
        "strength": 53
      },
      {
        "id": 70,
        "strength": 52
      },
      {
        "id": 109,
        "strength": 51
      },
      {
        "id": 69,
        "strength": 50
      },
      {
        "id": 1,
        "strength": 49
      },
      {
        "id": 110,
        "strength": 48
      },
      {
        "id": 80,
        "strength": 47
      },
      {
        "id": 34,
        "strength": 46
      },
      {
        "id": 59,
        "strength": 45
      },
      {
        "id": 40,
        "strength": 44
      },
      {
        "id": 41,
        "strength": 43
      },
      {
        "id": 46,
        "strength": 42
      },
      {
        "id": 53,
        "strength": 41
      },
      {
        "id": 63,
        "strength": 40
      },
      {
        "id": 65,
        "strength": 39
      },
      {
        "id": 14,
        "strength": 38
      },
      {
        "id": 57,
        "strength": 37
      },
      {
        "id": 4,
        "strength": 36
      },
      {
        "id": 17,
        "strength": 35
      },
      {
        "id": 21,
        "strength": 34
      },
      {
        "id": 19,
        "strength": 33
      },
      {
        "id": 97,
        "strength": 32
      },
      {
        "id": 52,
        "strength": 31
      },
      {
        "id": 111,
        "strength": 30
      },
      {
        "id": 86,
        "strength": 29
      },
      {
        "id": 107,
        "strength": 28
      },
      {
        "id": 108,
        "strength": 27
      },
      {
        "id": 105,
        "strength": 26
      },
      {
        "id": 6,
        "strength": 24.5
      },
      {
        "id": 38,
        "strength": 23.5
      },
      {
        "id": 96,
        "strength": 22.5
      },
      {
        "id": 62,
        "strength": 21.5
      },
      {
        "id": 92,
        "strength": 20.5
      },
      {
        "id": 85,
        "strength": 19.5
      },
      {
        "id": 81,
        "strength": 18.5
      },
      {
        "id": 87,
        "strength": 17.5
      },
      {
        "id": 82,
        "strength": 16.5
      },
      {
        "id": 90,
        "strength": 15.5
      },
      {
        "id": 84,
        "strength": 14.5
      },
      {
        "id": 55,
        "strength": 13.5
      },
      {
        "id": 100,
        "strength": 12.5
      },
      {
        "id": 93,
        "strength": 11.5
      },
      {
        "id": 99,
        "strength": 10.5
      },
      {
        "id": 88,
        "strength": 9.5
      },
      {
        "id": 77,
        "strength": 8.5
      },
      {
        "id": 104,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 58
  },
  "59": {
    "email": "kwestgar@Tnstate.edu",
    "choices": [
      {
        "id": 80,
        "strength": 117
      },
      {
        "id": 52,
        "strength": 116
      },
      {
        "id": 47,
        "strength": 114
      },
      {
        "id": 95,
        "strength": 113
      },
      {
        "id": 71,
        "strength": 112
      },
      {
        "id": 61,
        "strength": 111
      },
      {
        "id": 78,
        "strength": 110
      },
      {
        "id": 16,
        "strength": 109
      },
      {
        "id": 2,
        "strength": 108
      },
      {
        "id": 72,
        "strength": 107
      },
      {
        "id": 20,
        "strength": 105
      },
      {
        "id": 48,
        "strength": 104
      },
      {
        "id": 28,
        "strength": 103
      },
      {
        "id": 32,
        "strength": 102
      },
      {
        "id": 23,
        "strength": 101
      },
      {
        "id": 102,
        "strength": 100
      },
      {
        "id": 42,
        "strength": 99
      },
      {
        "id": 79,
        "strength": 98
      },
      {
        "id": 12,
        "strength": 97
      },
      {
        "id": 75,
        "strength": 96
      },
      {
        "id": 49,
        "strength": 95
      },
      {
        "id": 25,
        "strength": 94
      },
      {
        "id": 70,
        "strength": 93
      },
      {
        "id": 11,
        "strength": 92
      },
      {
        "id": 54,
        "strength": 91
      },
      {
        "id": 104,
        "strength": 90
      },
      {
        "id": 46,
        "strength": 89
      },
      {
        "id": 103,
        "strength": 88
      },
      {
        "id": 3,
        "strength": 87
      },
      {
        "id": 27,
        "strength": 86
      },
      {
        "id": 82,
        "strength": 85
      },
      {
        "id": 19,
        "strength": 84
      },
      {
        "id": 60,
        "strength": 83
      },
      {
        "id": 33,
        "strength": 82
      },
      {
        "id": 35,
        "strength": 81
      },
      {
        "id": 85,
        "strength": 80
      },
      {
        "id": 13,
        "strength": 79
      },
      {
        "id": 51,
        "strength": 78
      },
      {
        "id": 101,
        "strength": 77
      },
      {
        "id": 43,
        "strength": 75
      },
      {
        "id": 30,
        "strength": 74
      },
      {
        "id": 67,
        "strength": 73
      },
      {
        "id": 106,
        "strength": 72
      },
      {
        "id": 15,
        "strength": 71
      },
      {
        "id": 50,
        "strength": 70
      },
      {
        "id": 88,
        "strength": 69
      },
      {
        "id": 44,
        "strength": 68
      },
      {
        "id": 26,
        "strength": 67
      },
      {
        "id": 98,
        "strength": 66
      },
      {
        "id": 109,
        "strength": 65
      },
      {
        "id": 1,
        "strength": 64
      },
      {
        "id": 55,
        "strength": 63
      },
      {
        "id": 110,
        "strength": 62
      },
      {
        "id": 34,
        "strength": 61
      },
      {
        "id": 39,
        "strength": 60
      },
      {
        "id": 7,
        "strength": 59
      },
      {
        "id": 40,
        "strength": 58
      },
      {
        "id": 41,
        "strength": 57
      },
      {
        "id": 53,
        "strength": 56
      },
      {
        "id": 36,
        "strength": 55
      },
      {
        "id": 63,
        "strength": 54
      },
      {
        "id": 57,
        "strength": 53
      },
      {
        "id": 66,
        "strength": 52
      },
      {
        "id": 37,
        "strength": 51
      },
      {
        "id": 8,
        "strength": 50
      },
      {
        "id": 18,
        "strength": 49
      },
      {
        "id": 10,
        "strength": 48
      },
      {
        "id": 29,
        "strength": 47
      },
      {
        "id": 86,
        "strength": 46
      },
      {
        "id": 22,
        "strength": 45
      },
      {
        "id": 96,
        "strength": 44
      },
      {
        "id": 108,
        "strength": 43
      },
      {
        "id": 5,
        "strength": 41
      },
      {
        "id": 68,
        "strength": 40
      },
      {
        "id": 9,
        "strength": 39
      },
      {
        "id": 91,
        "strength": 38
      },
      {
        "id": 73,
        "strength": 37
      },
      {
        "id": 58,
        "strength": 36
      },
      {
        "id": 99,
        "strength": 35
      },
      {
        "id": 112,
        "strength": 34
      },
      {
        "id": 100,
        "strength": 33
      },
      {
        "id": 93,
        "strength": 32
      },
      {
        "id": 45,
        "strength": 31
      },
      {
        "id": 64,
        "strength": 30
      },
      {
        "id": 38,
        "strength": 29
      },
      {
        "id": 69,
        "strength": 28
      },
      {
        "id": 24,
        "strength": 27
      },
      {
        "id": 84,
        "strength": 26
      },
      {
        "id": 90,
        "strength": 25
      },
      {
        "id": 89,
        "strength": 24
      },
      {
        "id": 65,
        "strength": 23
      },
      {
        "id": 14,
        "strength": 22
      },
      {
        "id": 77,
        "strength": 21
      },
      {
        "id": 4,
        "strength": 20
      },
      {
        "id": 17,
        "strength": 19
      },
      {
        "id": 21,
        "strength": 18
      },
      {
        "id": 31,
        "strength": 17
      },
      {
        "id": 87,
        "strength": 16
      },
      {
        "id": 74,
        "strength": 15
      },
      {
        "id": 83,
        "strength": 14
      },
      {
        "id": 97,
        "strength": 13
      },
      {
        "id": 81,
        "strength": 12
      },
      {
        "id": 92,
        "strength": 11
      },
      {
        "id": 76,
        "strength": 10
      },
      {
        "id": 56,
        "strength": 9
      },
      {
        "id": 111,
        "strength": 8
      },
      {
        "id": 62,
        "strength": 7
      },
      {
        "id": 107,
        "strength": 6
      },
      {
        "id": 105,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 59
  },
  "60": {
    "email": "pawan_chugh@gov.nt.ca",
    "choices": [
      {
        "id": 10,
        "strength": 116
      },
      {
        "id": 13,
        "strength": 115
      },
      {
        "id": 48,
        "strength": 113
      },
      {
        "id": 15,
        "strength": 112
      },
      {
        "id": 75,
        "strength": 111
      },
      {
        "id": 58,
        "strength": 110
      },
      {
        "id": 49,
        "strength": 109
      },
      {
        "id": 24,
        "strength": 108
      },
      {
        "id": 37,
        "strength": 107
      },
      {
        "id": 31,
        "strength": 106
      },
      {
        "id": 74,
        "strength": 105
      },
      {
        "id": 16,
        "strength": 104
      },
      {
        "id": 29,
        "strength": 103
      },
      {
        "id": 72,
        "strength": 102
      },
      {
        "id": 101,
        "strength": 101
      },
      {
        "id": 23,
        "strength": 99
      },
      {
        "id": 102,
        "strength": 98
      },
      {
        "id": 50,
        "strength": 97
      },
      {
        "id": 42,
        "strength": 96
      },
      {
        "id": 79,
        "strength": 95
      },
      {
        "id": 12,
        "strength": 94
      },
      {
        "id": 95,
        "strength": 93
      },
      {
        "id": 61,
        "strength": 92
      },
      {
        "id": 44,
        "strength": 91
      },
      {
        "id": 25,
        "strength": 90
      },
      {
        "id": 11,
        "strength": 89
      },
      {
        "id": 54,
        "strength": 88
      },
      {
        "id": 59,
        "strength": 87
      },
      {
        "id": 39,
        "strength": 86
      },
      {
        "id": 7,
        "strength": 85
      },
      {
        "id": 103,
        "strength": 84
      },
      {
        "id": 3,
        "strength": 83
      },
      {
        "id": 27,
        "strength": 82
      },
      {
        "id": 66,
        "strength": 81
      },
      {
        "id": 8,
        "strength": 80
      },
      {
        "id": 18,
        "strength": 79
      },
      {
        "id": 33,
        "strength": 78
      },
      {
        "id": 56,
        "strength": 77
      },
      {
        "id": 2,
        "strength": 76
      },
      {
        "id": 22,
        "strength": 75
      },
      {
        "id": 20,
        "strength": 73
      },
      {
        "id": 28,
        "strength": 72
      },
      {
        "id": 43,
        "strength": 71
      },
      {
        "id": 30,
        "strength": 70
      },
      {
        "id": 67,
        "strength": 69
      },
      {
        "id": 5,
        "strength": 68
      },
      {
        "id": 32,
        "strength": 67
      },
      {
        "id": 68,
        "strength": 66
      },
      {
        "id": 9,
        "strength": 65
      },
      {
        "id": 106,
        "strength": 64
      },
      {
        "id": 47,
        "strength": 63
      },
      {
        "id": 91,
        "strength": 62
      },
      {
        "id": 73,
        "strength": 61
      },
      {
        "id": 112,
        "strength": 60
      },
      {
        "id": 71,
        "strength": 59
      },
      {
        "id": 26,
        "strength": 58
      },
      {
        "id": 98,
        "strength": 57
      },
      {
        "id": 45,
        "strength": 56
      },
      {
        "id": 64,
        "strength": 55
      },
      {
        "id": 70,
        "strength": 54
      },
      {
        "id": 109,
        "strength": 53
      },
      {
        "id": 69,
        "strength": 52
      },
      {
        "id": 1,
        "strength": 51
      },
      {
        "id": 110,
        "strength": 50
      },
      {
        "id": 80,
        "strength": 49
      },
      {
        "id": 34,
        "strength": 48
      },
      {
        "id": 40,
        "strength": 47
      },
      {
        "id": 41,
        "strength": 46
      },
      {
        "id": 46,
        "strength": 45
      },
      {
        "id": 53,
        "strength": 44
      },
      {
        "id": 36,
        "strength": 43
      },
      {
        "id": 63,
        "strength": 42
      },
      {
        "id": 78,
        "strength": 41
      },
      {
        "id": 65,
        "strength": 40
      },
      {
        "id": 14,
        "strength": 39
      },
      {
        "id": 57,
        "strength": 38
      },
      {
        "id": 4,
        "strength": 37
      },
      {
        "id": 17,
        "strength": 36
      },
      {
        "id": 21,
        "strength": 35
      },
      {
        "id": 19,
        "strength": 34
      },
      {
        "id": 97,
        "strength": 33
      },
      {
        "id": 35,
        "strength": 32
      },
      {
        "id": 52,
        "strength": 31
      },
      {
        "id": 111,
        "strength": 30
      },
      {
        "id": 86,
        "strength": 29
      },
      {
        "id": 107,
        "strength": 28
      },
      {
        "id": 108,
        "strength": 27
      },
      {
        "id": 105,
        "strength": 26
      },
      {
        "id": 6,
        "strength": 24.5
      },
      {
        "id": 38,
        "strength": 23.5
      },
      {
        "id": 96,
        "strength": 22.5
      },
      {
        "id": 62,
        "strength": 21.5
      },
      {
        "id": 92,
        "strength": 20.5
      },
      {
        "id": 85,
        "strength": 19.5
      },
      {
        "id": 81,
        "strength": 18.5
      },
      {
        "id": 87,
        "strength": 17.5
      },
      {
        "id": 82,
        "strength": 16.5
      },
      {
        "id": 90,
        "strength": 15.5
      },
      {
        "id": 84,
        "strength": 14.5
      },
      {
        "id": 55,
        "strength": 13.5
      },
      {
        "id": 100,
        "strength": 12.5
      },
      {
        "id": 93,
        "strength": 11.5
      },
      {
        "id": 99,
        "strength": 10.5
      },
      {
        "id": 88,
        "strength": 9.5
      },
      {
        "id": 77,
        "strength": 8.5
      },
      {
        "id": 104,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 60
  },
  "61": {
    "email": "gjobin@ccmm.qc.ca",
    "choices": [
      {
        "id": 42,
        "strength": 115
      },
      {
        "id": 12,
        "strength": 114
      },
      {
        "id": 70,
        "strength": 113
      },
      {
        "id": 80,
        "strength": 112
      },
      {
        "id": 59,
        "strength": 111
      },
      {
        "id": 33,
        "strength": 110
      },
      {
        "id": 16,
        "strength": 109
      },
      {
        "id": 2,
        "strength": 108
      },
      {
        "id": 10,
        "strength": 107
      },
      {
        "id": 13,
        "strength": 106
      },
      {
        "id": 72,
        "strength": 105
      },
      {
        "id": 48,
        "strength": 103
      },
      {
        "id": 32,
        "strength": 102
      },
      {
        "id": 23,
        "strength": 101
      },
      {
        "id": 15,
        "strength": 100
      },
      {
        "id": 47,
        "strength": 99
      },
      {
        "id": 49,
        "strength": 98
      },
      {
        "id": 71,
        "strength": 97
      },
      {
        "id": 25,
        "strength": 96
      },
      {
        "id": 1,
        "strength": 95
      },
      {
        "id": 11,
        "strength": 94
      },
      {
        "id": 34,
        "strength": 93
      },
      {
        "id": 7,
        "strength": 92
      },
      {
        "id": 41,
        "strength": 91
      },
      {
        "id": 36,
        "strength": 90
      },
      {
        "id": 103,
        "strength": 89
      },
      {
        "id": 63,
        "strength": 88
      },
      {
        "id": 27,
        "strength": 87
      },
      {
        "id": 8,
        "strength": 86
      },
      {
        "id": 19,
        "strength": 85
      },
      {
        "id": 60,
        "strength": 84
      },
      {
        "id": 35,
        "strength": 83
      },
      {
        "id": 52,
        "strength": 82
      },
      {
        "id": 86,
        "strength": 81
      },
      {
        "id": 22,
        "strength": 80
      },
      {
        "id": 107,
        "strength": 79
      },
      {
        "id": 108,
        "strength": 78
      },
      {
        "id": 105,
        "strength": 77
      },
      {
        "id": 20,
        "strength": 75
      },
      {
        "id": 28,
        "strength": 74
      },
      {
        "id": 43,
        "strength": 73
      },
      {
        "id": 30,
        "strength": 72
      },
      {
        "id": 67,
        "strength": 71
      },
      {
        "id": 5,
        "strength": 70
      },
      {
        "id": 102,
        "strength": 69
      },
      {
        "id": 68,
        "strength": 68
      },
      {
        "id": 9,
        "strength": 67
      },
      {
        "id": 106,
        "strength": 66
      },
      {
        "id": 50,
        "strength": 65
      },
      {
        "id": 91,
        "strength": 64
      },
      {
        "id": 73,
        "strength": 63
      },
      {
        "id": 88,
        "strength": 62
      },
      {
        "id": 75,
        "strength": 61
      },
      {
        "id": 95,
        "strength": 60
      },
      {
        "id": 58,
        "strength": 59
      },
      {
        "id": 112,
        "strength": 58
      },
      {
        "id": 44,
        "strength": 57
      },
      {
        "id": 26,
        "strength": 56
      },
      {
        "id": 45,
        "strength": 55
      },
      {
        "id": 64,
        "strength": 54
      },
      {
        "id": 109,
        "strength": 53
      },
      {
        "id": 69,
        "strength": 52
      },
      {
        "id": 110,
        "strength": 51
      },
      {
        "id": 24,
        "strength": 50
      },
      {
        "id": 39,
        "strength": 49
      },
      {
        "id": 40,
        "strength": 48
      },
      {
        "id": 46,
        "strength": 47
      },
      {
        "id": 53,
        "strength": 46
      },
      {
        "id": 3,
        "strength": 45
      },
      {
        "id": 78,
        "strength": 44
      },
      {
        "id": 65,
        "strength": 43
      },
      {
        "id": 14,
        "strength": 42
      },
      {
        "id": 57,
        "strength": 41
      },
      {
        "id": 66,
        "strength": 40
      },
      {
        "id": 4,
        "strength": 39
      },
      {
        "id": 17,
        "strength": 38
      },
      {
        "id": 37,
        "strength": 37
      },
      {
        "id": 21,
        "strength": 36
      },
      {
        "id": 31,
        "strength": 35
      },
      {
        "id": 74,
        "strength": 34
      },
      {
        "id": 18,
        "strength": 33
      },
      {
        "id": 85,
        "strength": 32
      },
      {
        "id": 56,
        "strength": 31
      },
      {
        "id": 29,
        "strength": 30
      },
      {
        "id": 111,
        "strength": 29
      },
      {
        "id": 96,
        "strength": 28
      },
      {
        "id": 101,
        "strength": 27
      },
      {
        "id": 6,
        "strength": 25.5
      },
      {
        "id": 38,
        "strength": 24.5
      },
      {
        "id": 62,
        "strength": 23.5
      },
      {
        "id": 92,
        "strength": 22.5
      },
      {
        "id": 81,
        "strength": 21.5
      },
      {
        "id": 87,
        "strength": 20.5
      },
      {
        "id": 82,
        "strength": 19.5
      },
      {
        "id": 90,
        "strength": 18.5
      },
      {
        "id": 84,
        "strength": 17.5
      },
      {
        "id": 55,
        "strength": 16.5
      },
      {
        "id": 100,
        "strength": 15.5
      },
      {
        "id": 93,
        "strength": 14.5
      },
      {
        "id": 99,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 61
  },
  "62": {
    "email": "varriaga@sre.gob.m",
    "choices": [
      {
        "id": 15,
        "strength": 114
      },
      {
        "id": 20,
        "strength": 112
      },
      {
        "id": 43,
        "strength": 111
      },
      {
        "id": 30,
        "strength": 110
      },
      {
        "id": 23,
        "strength": 109
      },
      {
        "id": 106,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 25,
        "strength": 100
      },
      {
        "id": 38,
        "strength": 99
      },
      {
        "id": 109,
        "strength": 98
      },
      {
        "id": 55,
        "strength": 97
      },
      {
        "id": 80,
        "strength": 96
      },
      {
        "id": 54,
        "strength": 95
      },
      {
        "id": 59,
        "strength": 94
      },
      {
        "id": 24,
        "strength": 93
      },
      {
        "id": 84,
        "strength": 92
      },
      {
        "id": 90,
        "strength": 91
      },
      {
        "id": 104,
        "strength": 90
      },
      {
        "id": 40,
        "strength": 89
      },
      {
        "id": 46,
        "strength": 88
      },
      {
        "id": 53,
        "strength": 87
      },
      {
        "id": 89,
        "strength": 86
      },
      {
        "id": 3,
        "strength": 85
      },
      {
        "id": 78,
        "strength": 84
      },
      {
        "id": 77,
        "strength": 83
      },
      {
        "id": 57,
        "strength": 82
      },
      {
        "id": 8,
        "strength": 81
      },
      {
        "id": 82,
        "strength": 80
      },
      {
        "id": 87,
        "strength": 79
      },
      {
        "id": 83,
        "strength": 78
      },
      {
        "id": 97,
        "strength": 77
      },
      {
        "id": 81,
        "strength": 76
      },
      {
        "id": 85,
        "strength": 75
      },
      {
        "id": 92,
        "strength": 74
      },
      {
        "id": 52,
        "strength": 73
      },
      {
        "id": 76,
        "strength": 72
      },
      {
        "id": 56,
        "strength": 71
      },
      {
        "id": 16,
        "strength": 70
      },
      {
        "id": 2,
        "strength": 69
      },
      {
        "id": 10,
        "strength": 68
      },
      {
        "id": 13,
        "strength": 67
      },
      {
        "id": 51,
        "strength": 66
      },
      {
        "id": 96,
        "strength": 65
      },
      {
        "id": 48,
        "strength": 63.5
      },
      {
        "id": 105,
        "strength": 62.5
      },
      {
        "id": 86,
        "strength": 61.5
      },
      {
        "id": 67,
        "strength": 60.5
      },
      {
        "id": 6,
        "strength": 59.5
      },
      {
        "id": 19,
        "strength": 58.5
      },
      {
        "id": 5,
        "strength": 57.5
      },
      {
        "id": 108,
        "strength": 56.5
      },
      {
        "id": 32,
        "strength": 55.5
      },
      {
        "id": 41,
        "strength": 54.5
      },
      {
        "id": 7,
        "strength": 53.5
      },
      {
        "id": 12,
        "strength": 52.5
      },
      {
        "id": 107,
        "strength": 51.5
      },
      {
        "id": 102,
        "strength": 50.5
      },
      {
        "id": 1,
        "strength": 49.5
      },
      {
        "id": 28,
        "strength": 48.5
      },
      {
        "id": 34,
        "strength": 47.5
      },
      {
        "id": 111,
        "strength": 46.5
      },
      {
        "id": 29,
        "strength": 45.5
      },
      {
        "id": 18,
        "strength": 44.5
      },
      {
        "id": 60,
        "strength": 43.5
      },
      {
        "id": 17,
        "strength": 42.5
      },
      {
        "id": 66,
        "strength": 41.5
      },
      {
        "id": 27,
        "strength": 40.5
      },
      {
        "id": 65,
        "strength": 39.5
      },
      {
        "id": 63,
        "strength": 38.5
      },
      {
        "id": 103,
        "strength": 37.5
      },
      {
        "id": 36,
        "strength": 36.5
      },
      {
        "id": 110,
        "strength": 35.5
      },
      {
        "id": 44,
        "strength": 34.5
      },
      {
        "id": 61,
        "strength": 33.5
      },
      {
        "id": 91,
        "strength": 32.5
      },
      {
        "id": 50,
        "strength": 31.5
      },
      {
        "id": 68,
        "strength": 30.5
      },
      {
        "id": 72,
        "strength": 29.5
      },
      {
        "id": 74,
        "strength": 28.5
      },
      {
        "id": 47,
        "strength": 27.5
      },
      {
        "id": 98,
        "strength": 26.5
      },
      {
        "id": 9,
        "strength": 25.5
      },
      {
        "id": 42,
        "strength": 24.5
      },
      {
        "id": 73,
        "strength": 23.5
      },
      {
        "id": 75,
        "strength": 22.5
      },
      {
        "id": 58,
        "strength": 21.5
      },
      {
        "id": 112,
        "strength": 20.5
      },
      {
        "id": 71,
        "strength": 19.5
      },
      {
        "id": 26,
        "strength": 18.5
      },
      {
        "id": 45,
        "strength": 17.5
      },
      {
        "id": 64,
        "strength": 16.5
      },
      {
        "id": 70,
        "strength": 15.5
      },
      {
        "id": 69,
        "strength": 14.5
      },
      {
        "id": 11,
        "strength": 13.5
      },
      {
        "id": 39,
        "strength": 12.5
      },
      {
        "id": 14,
        "strength": 11.5
      },
      {
        "id": 4,
        "strength": 10.5
      },
      {
        "id": 37,
        "strength": 9.5
      },
      {
        "id": 21,
        "strength": 8.5
      },
      {
        "id": 31,
        "strength": 7.5
      },
      {
        "id": 33,
        "strength": 6.5
      },
      {
        "id": 35,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 62
  },
  "63": {
    "email": "mlorenzo@cdspanama.org",
    "choices": [
      {
        "id": 26,
        "strength": 115
      },
      {
        "id": 23,
        "strength": 113
      },
      {
        "id": 61,
        "strength": 112
      },
      {
        "id": 70,
        "strength": 111
      },
      {
        "id": 80,
        "strength": 110
      },
      {
        "id": 34,
        "strength": 109
      },
      {
        "id": 36,
        "strength": 108
      },
      {
        "id": 103,
        "strength": 107
      },
      {
        "id": 19,
        "strength": 106
      },
      {
        "id": 86,
        "strength": 105
      },
      {
        "id": 22,
        "strength": 104
      },
      {
        "id": 107,
        "strength": 103
      },
      {
        "id": 108,
        "strength": 102
      },
      {
        "id": 105,
        "strength": 101
      },
      {
        "id": 20,
        "strength": 99
      },
      {
        "id": 48,
        "strength": 98
      },
      {
        "id": 28,
        "strength": 97
      },
      {
        "id": 43,
        "strength": 96
      },
      {
        "id": 30,
        "strength": 95
      },
      {
        "id": 67,
        "strength": 94
      },
      {
        "id": 5,
        "strength": 93
      },
      {
        "id": 32,
        "strength": 92
      },
      {
        "id": 102,
        "strength": 91
      },
      {
        "id": 68,
        "strength": 90
      },
      {
        "id": 9,
        "strength": 89
      },
      {
        "id": 106,
        "strength": 88
      },
      {
        "id": 15,
        "strength": 87
      },
      {
        "id": 50,
        "strength": 86
      },
      {
        "id": 47,
        "strength": 85
      },
      {
        "id": 42,
        "strength": 84
      },
      {
        "id": 12,
        "strength": 83
      },
      {
        "id": 91,
        "strength": 82
      },
      {
        "id": 73,
        "strength": 81
      },
      {
        "id": 88,
        "strength": 80
      },
      {
        "id": 75,
        "strength": 79
      },
      {
        "id": 95,
        "strength": 78
      },
      {
        "id": 58,
        "strength": 77
      },
      {
        "id": 112,
        "strength": 76
      },
      {
        "id": 49,
        "strength": 75
      },
      {
        "id": 71,
        "strength": 74
      },
      {
        "id": 44,
        "strength": 73
      },
      {
        "id": 45,
        "strength": 72
      },
      {
        "id": 64,
        "strength": 71
      },
      {
        "id": 25,
        "strength": 70
      },
      {
        "id": 109,
        "strength": 69
      },
      {
        "id": 69,
        "strength": 68
      },
      {
        "id": 1,
        "strength": 67
      },
      {
        "id": 110,
        "strength": 66
      },
      {
        "id": 11,
        "strength": 65
      },
      {
        "id": 59,
        "strength": 64
      },
      {
        "id": 24,
        "strength": 63
      },
      {
        "id": 39,
        "strength": 62
      },
      {
        "id": 7,
        "strength": 61
      },
      {
        "id": 40,
        "strength": 60
      },
      {
        "id": 41,
        "strength": 59
      },
      {
        "id": 46,
        "strength": 58
      },
      {
        "id": 53,
        "strength": 57
      },
      {
        "id": 3,
        "strength": 56
      },
      {
        "id": 78,
        "strength": 55
      },
      {
        "id": 65,
        "strength": 54
      },
      {
        "id": 27,
        "strength": 53
      },
      {
        "id": 14,
        "strength": 52
      },
      {
        "id": 57,
        "strength": 51
      },
      {
        "id": 66,
        "strength": 50
      },
      {
        "id": 4,
        "strength": 49
      },
      {
        "id": 17,
        "strength": 48
      },
      {
        "id": 37,
        "strength": 47
      },
      {
        "id": 8,
        "strength": 46
      },
      {
        "id": 21,
        "strength": 45
      },
      {
        "id": 60,
        "strength": 44
      },
      {
        "id": 31,
        "strength": 43
      },
      {
        "id": 74,
        "strength": 42
      },
      {
        "id": 18,
        "strength": 41
      },
      {
        "id": 33,
        "strength": 40
      },
      {
        "id": 35,
        "strength": 39
      },
      {
        "id": 52,
        "strength": 38
      },
      {
        "id": 56,
        "strength": 37
      },
      {
        "id": 16,
        "strength": 36
      },
      {
        "id": 2,
        "strength": 35
      },
      {
        "id": 10,
        "strength": 34
      },
      {
        "id": 29,
        "strength": 33
      },
      {
        "id": 111,
        "strength": 32
      },
      {
        "id": 13,
        "strength": 31
      },
      {
        "id": 72,
        "strength": 30
      },
      {
        "id": 96,
        "strength": 29
      },
      {
        "id": 101,
        "strength": 28
      },
      {
        "id": 6,
        "strength": 26.5
      },
      {
        "id": 38,
        "strength": 25.5
      },
      {
        "id": 62,
        "strength": 24.5
      },
      {
        "id": 92,
        "strength": 23.5
      },
      {
        "id": 85,
        "strength": 22.5
      },
      {
        "id": 81,
        "strength": 21.5
      },
      {
        "id": 87,
        "strength": 20.5
      },
      {
        "id": 82,
        "strength": 19.5
      },
      {
        "id": 90,
        "strength": 18.5
      },
      {
        "id": 84,
        "strength": 17.5
      },
      {
        "id": 55,
        "strength": 16.5
      },
      {
        "id": 100,
        "strength": 15.5
      },
      {
        "id": 93,
        "strength": 14.5
      },
      {
        "id": 99,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 63
  },
  "64": {
    "email": "janice.washington@domail.maricopa.edu",
    "choices": [
      {
        "id": 48,
        "strength": 114
      },
      {
        "id": 28,
        "strength": 113
      },
      {
        "id": 67,
        "strength": 112
      },
      {
        "id": 32,
        "strength": 111
      },
      {
        "id": 102,
        "strength": 110
      },
      {
        "id": 50,
        "strength": 109
      },
      {
        "id": 47,
        "strength": 108
      },
      {
        "id": 12,
        "strength": 107
      },
      {
        "id": 75,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 71,
        "strength": 104
      },
      {
        "id": 61,
        "strength": 103
      },
      {
        "id": 44,
        "strength": 102
      },
      {
        "id": 70,
        "strength": 101
      },
      {
        "id": 110,
        "strength": 100
      },
      {
        "id": 80,
        "strength": 99
      },
      {
        "id": 7,
        "strength": 98
      },
      {
        "id": 103,
        "strength": 97
      },
      {
        "id": 63,
        "strength": 96
      },
      {
        "id": 78,
        "strength": 95
      },
      {
        "id": 19,
        "strength": 94
      },
      {
        "id": 60,
        "strength": 93
      },
      {
        "id": 52,
        "strength": 92
      },
      {
        "id": 86,
        "strength": 91
      },
      {
        "id": 72,
        "strength": 90
      },
      {
        "id": 108,
        "strength": 89
      },
      {
        "id": 101,
        "strength": 88
      },
      {
        "id": 20,
        "strength": 86
      },
      {
        "id": 43,
        "strength": 85
      },
      {
        "id": 30,
        "strength": 84
      },
      {
        "id": 5,
        "strength": 83
      },
      {
        "id": 23,
        "strength": 82
      },
      {
        "id": 68,
        "strength": 81
      },
      {
        "id": 9,
        "strength": 80
      },
      {
        "id": 106,
        "strength": 79
      },
      {
        "id": 15,
        "strength": 78
      },
      {
        "id": 42,
        "strength": 77
      },
      {
        "id": 79,
        "strength": 76
      },
      {
        "id": 91,
        "strength": 75
      },
      {
        "id": 73,
        "strength": 74
      },
      {
        "id": 58,
        "strength": 73
      },
      {
        "id": 112,
        "strength": 72
      },
      {
        "id": 49,
        "strength": 71
      },
      {
        "id": 26,
        "strength": 70
      },
      {
        "id": 98,
        "strength": 69
      },
      {
        "id": 45,
        "strength": 68
      },
      {
        "id": 25,
        "strength": 67
      },
      {
        "id": 109,
        "strength": 66
      },
      {
        "id": 69,
        "strength": 65
      },
      {
        "id": 1,
        "strength": 64
      },
      {
        "id": 55,
        "strength": 63
      },
      {
        "id": 11,
        "strength": 62
      },
      {
        "id": 54,
        "strength": 61
      },
      {
        "id": 34,
        "strength": 60
      },
      {
        "id": 59,
        "strength": 59
      },
      {
        "id": 24,
        "strength": 58
      },
      {
        "id": 39,
        "strength": 57
      },
      {
        "id": 104,
        "strength": 56
      },
      {
        "id": 40,
        "strength": 55
      },
      {
        "id": 41,
        "strength": 54
      },
      {
        "id": 46,
        "strength": 53
      },
      {
        "id": 53,
        "strength": 52
      },
      {
        "id": 36,
        "strength": 51
      },
      {
        "id": 3,
        "strength": 50
      },
      {
        "id": 65,
        "strength": 49
      },
      {
        "id": 27,
        "strength": 48
      },
      {
        "id": 14,
        "strength": 47
      },
      {
        "id": 57,
        "strength": 46
      },
      {
        "id": 66,
        "strength": 45
      },
      {
        "id": 4,
        "strength": 44
      },
      {
        "id": 17,
        "strength": 43
      },
      {
        "id": 37,
        "strength": 42
      },
      {
        "id": 8,
        "strength": 41
      },
      {
        "id": 21,
        "strength": 40
      },
      {
        "id": 82,
        "strength": 39
      },
      {
        "id": 31,
        "strength": 38
      },
      {
        "id": 74,
        "strength": 37
      },
      {
        "id": 18,
        "strength": 36
      },
      {
        "id": 33,
        "strength": 35
      },
      {
        "id": 35,
        "strength": 34
      },
      {
        "id": 85,
        "strength": 33
      },
      {
        "id": 56,
        "strength": 32
      },
      {
        "id": 16,
        "strength": 31
      },
      {
        "id": 2,
        "strength": 30
      },
      {
        "id": 10,
        "strength": 29
      },
      {
        "id": 29,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 13,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 105,
        "strength": 22
      },
      {
        "id": 6,
        "strength": 20.5
      },
      {
        "id": 38,
        "strength": 19.5
      },
      {
        "id": 96,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 64
  },
  "65": {
    "email": "mori@feq.unicamp.br",
    "choices": [
      {
        "id": 42,
        "strength": 114
      },
      {
        "id": 24,
        "strength": 113
      },
      {
        "id": 36,
        "strength": 112
      },
      {
        "id": 27,
        "strength": 111
      },
      {
        "id": 18,
        "strength": 110
      },
      {
        "id": 33,
        "strength": 109
      },
      {
        "id": 35,
        "strength": 108
      },
      {
        "id": 2,
        "strength": 107
      },
      {
        "id": 20,
        "strength": 105
      },
      {
        "id": 48,
        "strength": 104
      },
      {
        "id": 28,
        "strength": 103
      },
      {
        "id": 43,
        "strength": 102
      },
      {
        "id": 30,
        "strength": 101
      },
      {
        "id": 67,
        "strength": 100
      },
      {
        "id": 5,
        "strength": 99
      },
      {
        "id": 32,
        "strength": 98
      },
      {
        "id": 23,
        "strength": 97
      },
      {
        "id": 102,
        "strength": 96
      },
      {
        "id": 68,
        "strength": 95
      },
      {
        "id": 9,
        "strength": 94
      },
      {
        "id": 106,
        "strength": 93
      },
      {
        "id": 15,
        "strength": 92
      },
      {
        "id": 50,
        "strength": 91
      },
      {
        "id": 47,
        "strength": 90
      },
      {
        "id": 12,
        "strength": 89
      },
      {
        "id": 91,
        "strength": 88
      },
      {
        "id": 73,
        "strength": 87
      },
      {
        "id": 75,
        "strength": 86
      },
      {
        "id": 95,
        "strength": 85
      },
      {
        "id": 58,
        "strength": 84
      },
      {
        "id": 112,
        "strength": 83
      },
      {
        "id": 49,
        "strength": 82
      },
      {
        "id": 71,
        "strength": 81
      },
      {
        "id": 61,
        "strength": 80
      },
      {
        "id": 44,
        "strength": 79
      },
      {
        "id": 26,
        "strength": 78
      },
      {
        "id": 45,
        "strength": 77
      },
      {
        "id": 64,
        "strength": 76
      },
      {
        "id": 25,
        "strength": 75
      },
      {
        "id": 70,
        "strength": 74
      },
      {
        "id": 109,
        "strength": 73
      },
      {
        "id": 69,
        "strength": 72
      },
      {
        "id": 1,
        "strength": 71
      },
      {
        "id": 110,
        "strength": 70
      },
      {
        "id": 80,
        "strength": 69
      },
      {
        "id": 11,
        "strength": 68
      },
      {
        "id": 34,
        "strength": 67
      },
      {
        "id": 59,
        "strength": 66
      },
      {
        "id": 39,
        "strength": 65
      },
      {
        "id": 7,
        "strength": 64
      },
      {
        "id": 40,
        "strength": 63
      },
      {
        "id": 41,
        "strength": 62
      },
      {
        "id": 46,
        "strength": 61
      },
      {
        "id": 53,
        "strength": 60
      },
      {
        "id": 103,
        "strength": 59
      },
      {
        "id": 63,
        "strength": 58
      },
      {
        "id": 3,
        "strength": 57
      },
      {
        "id": 78,
        "strength": 56
      },
      {
        "id": 14,
        "strength": 55
      },
      {
        "id": 57,
        "strength": 54
      },
      {
        "id": 66,
        "strength": 53
      },
      {
        "id": 4,
        "strength": 52
      },
      {
        "id": 17,
        "strength": 51
      },
      {
        "id": 37,
        "strength": 50
      },
      {
        "id": 8,
        "strength": 49
      },
      {
        "id": 21,
        "strength": 48
      },
      {
        "id": 19,
        "strength": 47
      },
      {
        "id": 60,
        "strength": 46
      },
      {
        "id": 31,
        "strength": 45
      },
      {
        "id": 74,
        "strength": 44
      },
      {
        "id": 52,
        "strength": 43
      },
      {
        "id": 56,
        "strength": 42
      },
      {
        "id": 16,
        "strength": 41
      },
      {
        "id": 10,
        "strength": 40
      },
      {
        "id": 29,
        "strength": 39
      },
      {
        "id": 111,
        "strength": 38
      },
      {
        "id": 13,
        "strength": 37
      },
      {
        "id": 86,
        "strength": 36
      },
      {
        "id": 72,
        "strength": 35
      },
      {
        "id": 22,
        "strength": 34
      },
      {
        "id": 107,
        "strength": 33
      },
      {
        "id": 108,
        "strength": 32
      },
      {
        "id": 101,
        "strength": 31
      },
      {
        "id": 105,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 65
  },
  "66": {
    "email": "nilda@belizeinvest.org.bz",
    "choices": [
      {
        "id": 102,
        "strength": 114
      },
      {
        "id": 47,
        "strength": 113
      },
      {
        "id": 42,
        "strength": 112
      },
      {
        "id": 75,
        "strength": 111
      },
      {
        "id": 95,
        "strength": 110
      },
      {
        "id": 26,
        "strength": 109
      },
      {
        "id": 80,
        "strength": 108
      },
      {
        "id": 39,
        "strength": 107
      },
      {
        "id": 3,
        "strength": 106
      },
      {
        "id": 78,
        "strength": 105
      },
      {
        "id": 27,
        "strength": 104
      },
      {
        "id": 37,
        "strength": 103
      },
      {
        "id": 18,
        "strength": 102
      },
      {
        "id": 35,
        "strength": 101
      },
      {
        "id": 16,
        "strength": 100
      },
      {
        "id": 10,
        "strength": 99
      },
      {
        "id": 29,
        "strength": 98
      },
      {
        "id": 13,
        "strength": 97
      },
      {
        "id": 101,
        "strength": 96
      },
      {
        "id": 20,
        "strength": 94
      },
      {
        "id": 28,
        "strength": 93
      },
      {
        "id": 43,
        "strength": 92
      },
      {
        "id": 23,
        "strength": 91
      },
      {
        "id": 15,
        "strength": 90
      },
      {
        "id": 79,
        "strength": 89
      },
      {
        "id": 88,
        "strength": 88
      },
      {
        "id": 58,
        "strength": 87
      },
      {
        "id": 71,
        "strength": 86
      },
      {
        "id": 44,
        "strength": 85
      },
      {
        "id": 98,
        "strength": 84
      },
      {
        "id": 25,
        "strength": 83
      },
      {
        "id": 11,
        "strength": 82
      },
      {
        "id": 54,
        "strength": 81
      },
      {
        "id": 34,
        "strength": 80
      },
      {
        "id": 59,
        "strength": 79
      },
      {
        "id": 24,
        "strength": 78
      },
      {
        "id": 104,
        "strength": 77
      },
      {
        "id": 46,
        "strength": 76
      },
      {
        "id": 36,
        "strength": 75
      },
      {
        "id": 103,
        "strength": 74
      },
      {
        "id": 82,
        "strength": 73
      },
      {
        "id": 19,
        "strength": 72
      },
      {
        "id": 60,
        "strength": 71
      },
      {
        "id": 31,
        "strength": 70
      },
      {
        "id": 74,
        "strength": 69
      },
      {
        "id": 33,
        "strength": 68
      },
      {
        "id": 52,
        "strength": 67
      },
      {
        "id": 56,
        "strength": 66
      },
      {
        "id": 2,
        "strength": 65
      },
      {
        "id": 72,
        "strength": 64
      },
      {
        "id": 51,
        "strength": 63
      },
      {
        "id": 96,
        "strength": 62
      },
      {
        "id": 105,
        "strength": 61
      },
      {
        "id": 48,
        "strength": 59
      },
      {
        "id": 30,
        "strength": 58
      },
      {
        "id": 67,
        "strength": 57
      },
      {
        "id": 5,
        "strength": 56
      },
      {
        "id": 32,
        "strength": 55
      },
      {
        "id": 68,
        "strength": 54
      },
      {
        "id": 9,
        "strength": 53
      },
      {
        "id": 106,
        "strength": 52
      },
      {
        "id": 50,
        "strength": 51
      },
      {
        "id": 12,
        "strength": 50
      },
      {
        "id": 91,
        "strength": 49
      },
      {
        "id": 73,
        "strength": 48
      },
      {
        "id": 112,
        "strength": 47
      },
      {
        "id": 49,
        "strength": 46
      },
      {
        "id": 61,
        "strength": 45
      },
      {
        "id": 45,
        "strength": 44
      },
      {
        "id": 64,
        "strength": 43
      },
      {
        "id": 70,
        "strength": 42
      },
      {
        "id": 109,
        "strength": 41
      },
      {
        "id": 69,
        "strength": 40
      },
      {
        "id": 1,
        "strength": 39
      },
      {
        "id": 110,
        "strength": 38
      },
      {
        "id": 7,
        "strength": 37
      },
      {
        "id": 40,
        "strength": 36
      },
      {
        "id": 41,
        "strength": 35
      },
      {
        "id": 53,
        "strength": 34
      },
      {
        "id": 63,
        "strength": 33
      },
      {
        "id": 65,
        "strength": 32
      },
      {
        "id": 14,
        "strength": 31
      },
      {
        "id": 57,
        "strength": 30
      },
      {
        "id": 4,
        "strength": 29
      },
      {
        "id": 17,
        "strength": 28
      },
      {
        "id": 8,
        "strength": 27
      },
      {
        "id": 21,
        "strength": 26
      },
      {
        "id": 97,
        "strength": 25
      },
      {
        "id": 111,
        "strength": 24
      },
      {
        "id": 86,
        "strength": 23
      },
      {
        "id": 22,
        "strength": 22
      },
      {
        "id": 107,
        "strength": 21
      },
      {
        "id": 108,
        "strength": 20
      },
      {
        "id": 6,
        "strength": 18.5
      },
      {
        "id": 38,
        "strength": 17.5
      },
      {
        "id": 62,
        "strength": 16.5
      },
      {
        "id": 92,
        "strength": 15.5
      },
      {
        "id": 85,
        "strength": 14.5
      },
      {
        "id": 81,
        "strength": 13.5
      },
      {
        "id": 87,
        "strength": 12.5
      },
      {
        "id": 90,
        "strength": 11.5
      },
      {
        "id": 84,
        "strength": 10.5
      },
      {
        "id": 55,
        "strength": 9.5
      },
      {
        "id": 100,
        "strength": 8.5
      },
      {
        "id": 93,
        "strength": 7.5
      },
      {
        "id": 99,
        "strength": 6.5
      },
      {
        "id": 77,
        "strength": 5.5
      },
      {
        "id": 89,
        "strength": 4.5
      },
      {
        "id": 83,
        "strength": 3.5
      },
      {
        "id": 76,
        "strength": 2.5
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 66
  },
  "67": {
    "email": "aksara@anprotec.org.br",
    "choices": [
      {
        "id": 30,
        "strength": 114
      },
      {
        "id": 42,
        "strength": 113
      },
      {
        "id": 34,
        "strength": 112
      },
      {
        "id": 24,
        "strength": 111
      },
      {
        "id": 7,
        "strength": 110
      },
      {
        "id": 36,
        "strength": 109
      },
      {
        "id": 27,
        "strength": 108
      },
      {
        "id": 8,
        "strength": 107
      },
      {
        "id": 18,
        "strength": 106
      },
      {
        "id": 33,
        "strength": 105
      },
      {
        "id": 35,
        "strength": 104
      },
      {
        "id": 2,
        "strength": 103
      },
      {
        "id": 105,
        "strength": 102
      },
      {
        "id": 20,
        "strength": 100
      },
      {
        "id": 48,
        "strength": 99
      },
      {
        "id": 28,
        "strength": 98
      },
      {
        "id": 43,
        "strength": 97
      },
      {
        "id": 5,
        "strength": 96
      },
      {
        "id": 32,
        "strength": 95
      },
      {
        "id": 23,
        "strength": 94
      },
      {
        "id": 102,
        "strength": 93
      },
      {
        "id": 68,
        "strength": 92
      },
      {
        "id": 9,
        "strength": 91
      },
      {
        "id": 106,
        "strength": 90
      },
      {
        "id": 15,
        "strength": 89
      },
      {
        "id": 50,
        "strength": 88
      },
      {
        "id": 47,
        "strength": 87
      },
      {
        "id": 12,
        "strength": 86
      },
      {
        "id": 91,
        "strength": 85
      },
      {
        "id": 73,
        "strength": 84
      },
      {
        "id": 75,
        "strength": 83
      },
      {
        "id": 95,
        "strength": 82
      },
      {
        "id": 58,
        "strength": 81
      },
      {
        "id": 112,
        "strength": 80
      },
      {
        "id": 49,
        "strength": 79
      },
      {
        "id": 71,
        "strength": 78
      },
      {
        "id": 61,
        "strength": 77
      },
      {
        "id": 44,
        "strength": 76
      },
      {
        "id": 26,
        "strength": 75
      },
      {
        "id": 45,
        "strength": 74
      },
      {
        "id": 64,
        "strength": 73
      },
      {
        "id": 25,
        "strength": 72
      },
      {
        "id": 70,
        "strength": 71
      },
      {
        "id": 109,
        "strength": 70
      },
      {
        "id": 69,
        "strength": 69
      },
      {
        "id": 1,
        "strength": 68
      },
      {
        "id": 110,
        "strength": 67
      },
      {
        "id": 80,
        "strength": 66
      },
      {
        "id": 11,
        "strength": 65
      },
      {
        "id": 59,
        "strength": 64
      },
      {
        "id": 39,
        "strength": 63
      },
      {
        "id": 40,
        "strength": 62
      },
      {
        "id": 41,
        "strength": 61
      },
      {
        "id": 46,
        "strength": 60
      },
      {
        "id": 53,
        "strength": 59
      },
      {
        "id": 103,
        "strength": 58
      },
      {
        "id": 63,
        "strength": 57
      },
      {
        "id": 3,
        "strength": 56
      },
      {
        "id": 78,
        "strength": 55
      },
      {
        "id": 65,
        "strength": 54
      },
      {
        "id": 14,
        "strength": 53
      },
      {
        "id": 57,
        "strength": 52
      },
      {
        "id": 66,
        "strength": 51
      },
      {
        "id": 4,
        "strength": 50
      },
      {
        "id": 17,
        "strength": 49
      },
      {
        "id": 37,
        "strength": 48
      },
      {
        "id": 21,
        "strength": 47
      },
      {
        "id": 19,
        "strength": 46
      },
      {
        "id": 60,
        "strength": 45
      },
      {
        "id": 31,
        "strength": 44
      },
      {
        "id": 74,
        "strength": 43
      },
      {
        "id": 52,
        "strength": 42
      },
      {
        "id": 56,
        "strength": 41
      },
      {
        "id": 16,
        "strength": 40
      },
      {
        "id": 10,
        "strength": 39
      },
      {
        "id": 29,
        "strength": 38
      },
      {
        "id": 111,
        "strength": 37
      },
      {
        "id": 13,
        "strength": 36
      },
      {
        "id": 86,
        "strength": 35
      },
      {
        "id": 72,
        "strength": 34
      },
      {
        "id": 22,
        "strength": 33
      },
      {
        "id": 107,
        "strength": 32
      },
      {
        "id": 108,
        "strength": 31
      },
      {
        "id": 101,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 67
  },
  "68": {
    "email": "cviel@quebecinternational.ca",
    "choices": [
      {
        "id": 23,
        "strength": 114
      },
      {
        "id": 15,
        "strength": 113
      },
      {
        "id": 42,
        "strength": 112
      },
      {
        "id": 12,
        "strength": 111
      },
      {
        "id": 7,
        "strength": 110
      },
      {
        "id": 8,
        "strength": 109
      },
      {
        "id": 33,
        "strength": 108
      },
      {
        "id": 16,
        "strength": 107
      },
      {
        "id": 2,
        "strength": 106
      },
      {
        "id": 10,
        "strength": 105
      },
      {
        "id": 13,
        "strength": 104
      },
      {
        "id": 20,
        "strength": 102
      },
      {
        "id": 48,
        "strength": 101
      },
      {
        "id": 28,
        "strength": 100
      },
      {
        "id": 43,
        "strength": 99
      },
      {
        "id": 30,
        "strength": 98
      },
      {
        "id": 67,
        "strength": 97
      },
      {
        "id": 5,
        "strength": 96
      },
      {
        "id": 32,
        "strength": 95
      },
      {
        "id": 102,
        "strength": 94
      },
      {
        "id": 9,
        "strength": 93
      },
      {
        "id": 106,
        "strength": 92
      },
      {
        "id": 50,
        "strength": 91
      },
      {
        "id": 47,
        "strength": 90
      },
      {
        "id": 91,
        "strength": 89
      },
      {
        "id": 73,
        "strength": 88
      },
      {
        "id": 75,
        "strength": 87
      },
      {
        "id": 95,
        "strength": 86
      },
      {
        "id": 58,
        "strength": 85
      },
      {
        "id": 112,
        "strength": 84
      },
      {
        "id": 49,
        "strength": 83
      },
      {
        "id": 71,
        "strength": 82
      },
      {
        "id": 61,
        "strength": 81
      },
      {
        "id": 44,
        "strength": 80
      },
      {
        "id": 26,
        "strength": 79
      },
      {
        "id": 45,
        "strength": 78
      },
      {
        "id": 64,
        "strength": 77
      },
      {
        "id": 25,
        "strength": 76
      },
      {
        "id": 70,
        "strength": 75
      },
      {
        "id": 109,
        "strength": 74
      },
      {
        "id": 69,
        "strength": 73
      },
      {
        "id": 1,
        "strength": 72
      },
      {
        "id": 110,
        "strength": 71
      },
      {
        "id": 80,
        "strength": 70
      },
      {
        "id": 11,
        "strength": 69
      },
      {
        "id": 34,
        "strength": 68
      },
      {
        "id": 59,
        "strength": 67
      },
      {
        "id": 24,
        "strength": 66
      },
      {
        "id": 39,
        "strength": 65
      },
      {
        "id": 40,
        "strength": 64
      },
      {
        "id": 41,
        "strength": 63
      },
      {
        "id": 46,
        "strength": 62
      },
      {
        "id": 53,
        "strength": 61
      },
      {
        "id": 36,
        "strength": 60
      },
      {
        "id": 103,
        "strength": 59
      },
      {
        "id": 63,
        "strength": 58
      },
      {
        "id": 3,
        "strength": 57
      },
      {
        "id": 78,
        "strength": 56
      },
      {
        "id": 65,
        "strength": 55
      },
      {
        "id": 27,
        "strength": 54
      },
      {
        "id": 14,
        "strength": 53
      },
      {
        "id": 57,
        "strength": 52
      },
      {
        "id": 66,
        "strength": 51
      },
      {
        "id": 4,
        "strength": 50
      },
      {
        "id": 17,
        "strength": 49
      },
      {
        "id": 37,
        "strength": 48
      },
      {
        "id": 21,
        "strength": 47
      },
      {
        "id": 19,
        "strength": 46
      },
      {
        "id": 60,
        "strength": 45
      },
      {
        "id": 31,
        "strength": 44
      },
      {
        "id": 74,
        "strength": 43
      },
      {
        "id": 18,
        "strength": 42
      },
      {
        "id": 35,
        "strength": 41
      },
      {
        "id": 52,
        "strength": 40
      },
      {
        "id": 56,
        "strength": 39
      },
      {
        "id": 29,
        "strength": 38
      },
      {
        "id": 111,
        "strength": 37
      },
      {
        "id": 86,
        "strength": 36
      },
      {
        "id": 72,
        "strength": 35
      },
      {
        "id": 22,
        "strength": 34
      },
      {
        "id": 107,
        "strength": 33
      },
      {
        "id": 108,
        "strength": 32
      },
      {
        "id": 101,
        "strength": 31
      },
      {
        "id": 105,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 68
  },
  "69": {
    "email": "josie.mousseau@international.gc.ca",
    "choices": [
      {
        "id": 23,
        "strength": 114
      },
      {
        "id": 15,
        "strength": 113
      },
      {
        "id": 42,
        "strength": 112
      },
      {
        "id": 12,
        "strength": 111
      },
      {
        "id": 7,
        "strength": 110
      },
      {
        "id": 8,
        "strength": 109
      },
      {
        "id": 33,
        "strength": 108
      },
      {
        "id": 16,
        "strength": 107
      },
      {
        "id": 2,
        "strength": 106
      },
      {
        "id": 10,
        "strength": 105
      },
      {
        "id": 13,
        "strength": 104
      },
      {
        "id": 20,
        "strength": 102
      },
      {
        "id": 48,
        "strength": 101
      },
      {
        "id": 28,
        "strength": 100
      },
      {
        "id": 43,
        "strength": 99
      },
      {
        "id": 30,
        "strength": 98
      },
      {
        "id": 67,
        "strength": 97
      },
      {
        "id": 5,
        "strength": 96
      },
      {
        "id": 32,
        "strength": 95
      },
      {
        "id": 102,
        "strength": 94
      },
      {
        "id": 68,
        "strength": 93
      },
      {
        "id": 9,
        "strength": 92
      },
      {
        "id": 106,
        "strength": 91
      },
      {
        "id": 50,
        "strength": 90
      },
      {
        "id": 47,
        "strength": 89
      },
      {
        "id": 91,
        "strength": 88
      },
      {
        "id": 73,
        "strength": 87
      },
      {
        "id": 75,
        "strength": 86
      },
      {
        "id": 95,
        "strength": 85
      },
      {
        "id": 58,
        "strength": 84
      },
      {
        "id": 112,
        "strength": 83
      },
      {
        "id": 49,
        "strength": 82
      },
      {
        "id": 71,
        "strength": 81
      },
      {
        "id": 61,
        "strength": 80
      },
      {
        "id": 44,
        "strength": 79
      },
      {
        "id": 26,
        "strength": 78
      },
      {
        "id": 45,
        "strength": 77
      },
      {
        "id": 64,
        "strength": 76
      },
      {
        "id": 25,
        "strength": 75
      },
      {
        "id": 70,
        "strength": 74
      },
      {
        "id": 109,
        "strength": 73
      },
      {
        "id": 1,
        "strength": 72
      },
      {
        "id": 110,
        "strength": 71
      },
      {
        "id": 80,
        "strength": 70
      },
      {
        "id": 11,
        "strength": 69
      },
      {
        "id": 34,
        "strength": 68
      },
      {
        "id": 59,
        "strength": 67
      },
      {
        "id": 24,
        "strength": 66
      },
      {
        "id": 39,
        "strength": 65
      },
      {
        "id": 40,
        "strength": 64
      },
      {
        "id": 41,
        "strength": 63
      },
      {
        "id": 46,
        "strength": 62
      },
      {
        "id": 53,
        "strength": 61
      },
      {
        "id": 36,
        "strength": 60
      },
      {
        "id": 103,
        "strength": 59
      },
      {
        "id": 63,
        "strength": 58
      },
      {
        "id": 3,
        "strength": 57
      },
      {
        "id": 78,
        "strength": 56
      },
      {
        "id": 65,
        "strength": 55
      },
      {
        "id": 27,
        "strength": 54
      },
      {
        "id": 14,
        "strength": 53
      },
      {
        "id": 57,
        "strength": 52
      },
      {
        "id": 66,
        "strength": 51
      },
      {
        "id": 4,
        "strength": 50
      },
      {
        "id": 17,
        "strength": 49
      },
      {
        "id": 37,
        "strength": 48
      },
      {
        "id": 21,
        "strength": 47
      },
      {
        "id": 19,
        "strength": 46
      },
      {
        "id": 60,
        "strength": 45
      },
      {
        "id": 31,
        "strength": 44
      },
      {
        "id": 74,
        "strength": 43
      },
      {
        "id": 18,
        "strength": 42
      },
      {
        "id": 35,
        "strength": 41
      },
      {
        "id": 52,
        "strength": 40
      },
      {
        "id": 56,
        "strength": 39
      },
      {
        "id": 29,
        "strength": 38
      },
      {
        "id": 111,
        "strength": 37
      },
      {
        "id": 86,
        "strength": 36
      },
      {
        "id": 72,
        "strength": 35
      },
      {
        "id": 22,
        "strength": 34
      },
      {
        "id": 107,
        "strength": 33
      },
      {
        "id": 108,
        "strength": 32
      },
      {
        "id": 101,
        "strength": 31
      },
      {
        "id": 105,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 69
  },
  "70": {
    "email": "jgonzalesp@ipn.mx",
    "choices": [
      {
        "id": 13,
        "strength": 116
      },
      {
        "id": 15,
        "strength": 114
      },
      {
        "id": 42,
        "strength": 113
      },
      {
        "id": 71,
        "strength": 112
      },
      {
        "id": 61,
        "strength": 111
      },
      {
        "id": 25,
        "strength": 110
      },
      {
        "id": 80,
        "strength": 109
      },
      {
        "id": 11,
        "strength": 108
      },
      {
        "id": 56,
        "strength": 107
      },
      {
        "id": 16,
        "strength": 106
      },
      {
        "id": 32,
        "strength": 104
      },
      {
        "id": 23,
        "strength": 103
      },
      {
        "id": 47,
        "strength": 102
      },
      {
        "id": 12,
        "strength": 101
      },
      {
        "id": 1,
        "strength": 100
      },
      {
        "id": 34,
        "strength": 99
      },
      {
        "id": 59,
        "strength": 98
      },
      {
        "id": 24,
        "strength": 97
      },
      {
        "id": 41,
        "strength": 96
      },
      {
        "id": 36,
        "strength": 95
      },
      {
        "id": 103,
        "strength": 94
      },
      {
        "id": 63,
        "strength": 93
      },
      {
        "id": 27,
        "strength": 92
      },
      {
        "id": 19,
        "strength": 91
      },
      {
        "id": 33,
        "strength": 90
      },
      {
        "id": 35,
        "strength": 89
      },
      {
        "id": 52,
        "strength": 88
      },
      {
        "id": 2,
        "strength": 87
      },
      {
        "id": 10,
        "strength": 86
      },
      {
        "id": 86,
        "strength": 85
      },
      {
        "id": 72,
        "strength": 84
      },
      {
        "id": 22,
        "strength": 83
      },
      {
        "id": 107,
        "strength": 82
      },
      {
        "id": 108,
        "strength": 81
      },
      {
        "id": 105,
        "strength": 80
      },
      {
        "id": 20,
        "strength": 78
      },
      {
        "id": 48,
        "strength": 77
      },
      {
        "id": 28,
        "strength": 76
      },
      {
        "id": 43,
        "strength": 75
      },
      {
        "id": 30,
        "strength": 74
      },
      {
        "id": 67,
        "strength": 73
      },
      {
        "id": 5,
        "strength": 72
      },
      {
        "id": 102,
        "strength": 71
      },
      {
        "id": 68,
        "strength": 70
      },
      {
        "id": 9,
        "strength": 69
      },
      {
        "id": 106,
        "strength": 68
      },
      {
        "id": 50,
        "strength": 67
      },
      {
        "id": 91,
        "strength": 66
      },
      {
        "id": 73,
        "strength": 65
      },
      {
        "id": 88,
        "strength": 64
      },
      {
        "id": 75,
        "strength": 63
      },
      {
        "id": 95,
        "strength": 62
      },
      {
        "id": 58,
        "strength": 61
      },
      {
        "id": 112,
        "strength": 60
      },
      {
        "id": 49,
        "strength": 59
      },
      {
        "id": 44,
        "strength": 58
      },
      {
        "id": 26,
        "strength": 57
      },
      {
        "id": 45,
        "strength": 56
      },
      {
        "id": 64,
        "strength": 55
      },
      {
        "id": 109,
        "strength": 54
      },
      {
        "id": 69,
        "strength": 53
      },
      {
        "id": 110,
        "strength": 52
      },
      {
        "id": 39,
        "strength": 51
      },
      {
        "id": 7,
        "strength": 50
      },
      {
        "id": 40,
        "strength": 49
      },
      {
        "id": 46,
        "strength": 48
      },
      {
        "id": 53,
        "strength": 47
      },
      {
        "id": 3,
        "strength": 46
      },
      {
        "id": 78,
        "strength": 45
      },
      {
        "id": 65,
        "strength": 44
      },
      {
        "id": 14,
        "strength": 43
      },
      {
        "id": 57,
        "strength": 42
      },
      {
        "id": 66,
        "strength": 41
      },
      {
        "id": 4,
        "strength": 40
      },
      {
        "id": 17,
        "strength": 39
      },
      {
        "id": 37,
        "strength": 38
      },
      {
        "id": 8,
        "strength": 37
      },
      {
        "id": 21,
        "strength": 36
      },
      {
        "id": 60,
        "strength": 35
      },
      {
        "id": 31,
        "strength": 34
      },
      {
        "id": 74,
        "strength": 33
      },
      {
        "id": 18,
        "strength": 32
      },
      {
        "id": 85,
        "strength": 31
      },
      {
        "id": 29,
        "strength": 30
      },
      {
        "id": 111,
        "strength": 29
      },
      {
        "id": 96,
        "strength": 28
      },
      {
        "id": 101,
        "strength": 27
      },
      {
        "id": 6,
        "strength": 25.5
      },
      {
        "id": 38,
        "strength": 24.5
      },
      {
        "id": 62,
        "strength": 23.5
      },
      {
        "id": 92,
        "strength": 22.5
      },
      {
        "id": 81,
        "strength": 21.5
      },
      {
        "id": 87,
        "strength": 20.5
      },
      {
        "id": 82,
        "strength": 19.5
      },
      {
        "id": 90,
        "strength": 18.5
      },
      {
        "id": 84,
        "strength": 17.5
      },
      {
        "id": 55,
        "strength": 16.5
      },
      {
        "id": 100,
        "strength": 15.5
      },
      {
        "id": 93,
        "strength": 14.5
      },
      {
        "id": 99,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 70
  },
  "71": {
    "email": "gharling@sherbrooke-innopole.com",
    "choices": [
      {
        "id": 42,
        "strength": 117
      },
      {
        "id": 16,
        "strength": 116
      },
      {
        "id": 13,
        "strength": 115
      },
      {
        "id": 23,
        "strength": 113
      },
      {
        "id": 11,
        "strength": 112
      },
      {
        "id": 33,
        "strength": 111
      },
      {
        "id": 2,
        "strength": 110
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 47,
        "strength": 107
      },
      {
        "id": 12,
        "strength": 106
      },
      {
        "id": 25,
        "strength": 105
      },
      {
        "id": 70,
        "strength": 104
      },
      {
        "id": 80,
        "strength": 103
      },
      {
        "id": 59,
        "strength": 102
      },
      {
        "id": 27,
        "strength": 101
      },
      {
        "id": 35,
        "strength": 100
      },
      {
        "id": 52,
        "strength": 99
      },
      {
        "id": 10,
        "strength": 98
      },
      {
        "id": 20,
        "strength": 96
      },
      {
        "id": 28,
        "strength": 95
      },
      {
        "id": 32,
        "strength": 94
      },
      {
        "id": 102,
        "strength": 93
      },
      {
        "id": 75,
        "strength": 92
      },
      {
        "id": 95,
        "strength": 91
      },
      {
        "id": 61,
        "strength": 90
      },
      {
        "id": 26,
        "strength": 89
      },
      {
        "id": 1,
        "strength": 88
      },
      {
        "id": 34,
        "strength": 87
      },
      {
        "id": 39,
        "strength": 86
      },
      {
        "id": 7,
        "strength": 85
      },
      {
        "id": 41,
        "strength": 84
      },
      {
        "id": 46,
        "strength": 83
      },
      {
        "id": 36,
        "strength": 82
      },
      {
        "id": 103,
        "strength": 81
      },
      {
        "id": 3,
        "strength": 80
      },
      {
        "id": 78,
        "strength": 79
      },
      {
        "id": 66,
        "strength": 78
      },
      {
        "id": 37,
        "strength": 77
      },
      {
        "id": 8,
        "strength": 76
      },
      {
        "id": 19,
        "strength": 75
      },
      {
        "id": 18,
        "strength": 74
      },
      {
        "id": 56,
        "strength": 73
      },
      {
        "id": 29,
        "strength": 72
      },
      {
        "id": 72,
        "strength": 71
      },
      {
        "id": 22,
        "strength": 70
      },
      {
        "id": 101,
        "strength": 69
      },
      {
        "id": 48,
        "strength": 67
      },
      {
        "id": 43,
        "strength": 66
      },
      {
        "id": 30,
        "strength": 65
      },
      {
        "id": 67,
        "strength": 64
      },
      {
        "id": 5,
        "strength": 63
      },
      {
        "id": 68,
        "strength": 62
      },
      {
        "id": 9,
        "strength": 61
      },
      {
        "id": 106,
        "strength": 60
      },
      {
        "id": 50,
        "strength": 59
      },
      {
        "id": 79,
        "strength": 58
      },
      {
        "id": 91,
        "strength": 57
      },
      {
        "id": 73,
        "strength": 56
      },
      {
        "id": 88,
        "strength": 55
      },
      {
        "id": 58,
        "strength": 54
      },
      {
        "id": 112,
        "strength": 53
      },
      {
        "id": 49,
        "strength": 52
      },
      {
        "id": 44,
        "strength": 51
      },
      {
        "id": 98,
        "strength": 50
      },
      {
        "id": 45,
        "strength": 49
      },
      {
        "id": 64,
        "strength": 48
      },
      {
        "id": 109,
        "strength": 47
      },
      {
        "id": 69,
        "strength": 46
      },
      {
        "id": 110,
        "strength": 45
      },
      {
        "id": 54,
        "strength": 44
      },
      {
        "id": 24,
        "strength": 43
      },
      {
        "id": 104,
        "strength": 42
      },
      {
        "id": 40,
        "strength": 41
      },
      {
        "id": 53,
        "strength": 40
      },
      {
        "id": 63,
        "strength": 39
      },
      {
        "id": 65,
        "strength": 38
      },
      {
        "id": 14,
        "strength": 37
      },
      {
        "id": 57,
        "strength": 36
      },
      {
        "id": 4,
        "strength": 35
      },
      {
        "id": 17,
        "strength": 34
      },
      {
        "id": 21,
        "strength": 33
      },
      {
        "id": 82,
        "strength": 32
      },
      {
        "id": 60,
        "strength": 31
      },
      {
        "id": 31,
        "strength": 30
      },
      {
        "id": 74,
        "strength": 29
      },
      {
        "id": 85,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 86,
        "strength": 26
      },
      {
        "id": 51,
        "strength": 25
      },
      {
        "id": 96,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 108,
        "strength": 22
      },
      {
        "id": 105,
        "strength": 21
      },
      {
        "id": 6,
        "strength": 19.5
      },
      {
        "id": 38,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 81,
        "strength": 15.5
      },
      {
        "id": 87,
        "strength": 14.5
      },
      {
        "id": 90,
        "strength": 13.5
      },
      {
        "id": 84,
        "strength": 12.5
      },
      {
        "id": 55,
        "strength": 11.5
      },
      {
        "id": 100,
        "strength": 10.5
      },
      {
        "id": 93,
        "strength": 9.5
      },
      {
        "id": 99,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 97,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 71
  },
  "72": {
    "email": "tshaver@bacd.ca",
    "choices": [
      {
        "id": 13,
        "strength": 116
      },
      {
        "id": 15,
        "strength": 114
      },
      {
        "id": 42,
        "strength": 113
      },
      {
        "id": 12,
        "strength": 112
      },
      {
        "id": 61,
        "strength": 111
      },
      {
        "id": 59,
        "strength": 110
      },
      {
        "id": 60,
        "strength": 109
      },
      {
        "id": 33,
        "strength": 108
      },
      {
        "id": 16,
        "strength": 107
      },
      {
        "id": 2,
        "strength": 106
      },
      {
        "id": 10,
        "strength": 105
      },
      {
        "id": 48,
        "strength": 103
      },
      {
        "id": 32,
        "strength": 102
      },
      {
        "id": 23,
        "strength": 101
      },
      {
        "id": 47,
        "strength": 100
      },
      {
        "id": 75,
        "strength": 99
      },
      {
        "id": 58,
        "strength": 98
      },
      {
        "id": 49,
        "strength": 97
      },
      {
        "id": 71,
        "strength": 96
      },
      {
        "id": 25,
        "strength": 95
      },
      {
        "id": 70,
        "strength": 94
      },
      {
        "id": 1,
        "strength": 93
      },
      {
        "id": 80,
        "strength": 92
      },
      {
        "id": 11,
        "strength": 91
      },
      {
        "id": 24,
        "strength": 90
      },
      {
        "id": 39,
        "strength": 89
      },
      {
        "id": 7,
        "strength": 88
      },
      {
        "id": 41,
        "strength": 87
      },
      {
        "id": 27,
        "strength": 86
      },
      {
        "id": 66,
        "strength": 85
      },
      {
        "id": 37,
        "strength": 84
      },
      {
        "id": 8,
        "strength": 83
      },
      {
        "id": 31,
        "strength": 82
      },
      {
        "id": 74,
        "strength": 81
      },
      {
        "id": 18,
        "strength": 80
      },
      {
        "id": 35,
        "strength": 79
      },
      {
        "id": 52,
        "strength": 78
      },
      {
        "id": 56,
        "strength": 77
      },
      {
        "id": 29,
        "strength": 76
      },
      {
        "id": 22,
        "strength": 75
      },
      {
        "id": 101,
        "strength": 74
      },
      {
        "id": 20,
        "strength": 72
      },
      {
        "id": 28,
        "strength": 71
      },
      {
        "id": 43,
        "strength": 70
      },
      {
        "id": 30,
        "strength": 69
      },
      {
        "id": 67,
        "strength": 68
      },
      {
        "id": 5,
        "strength": 67
      },
      {
        "id": 102,
        "strength": 66
      },
      {
        "id": 68,
        "strength": 65
      },
      {
        "id": 9,
        "strength": 64
      },
      {
        "id": 106,
        "strength": 63
      },
      {
        "id": 50,
        "strength": 62
      },
      {
        "id": 79,
        "strength": 61
      },
      {
        "id": 91,
        "strength": 60
      },
      {
        "id": 73,
        "strength": 59
      },
      {
        "id": 95,
        "strength": 58
      },
      {
        "id": 112,
        "strength": 57
      },
      {
        "id": 44,
        "strength": 56
      },
      {
        "id": 26,
        "strength": 55
      },
      {
        "id": 45,
        "strength": 54
      },
      {
        "id": 64,
        "strength": 53
      },
      {
        "id": 109,
        "strength": 52
      },
      {
        "id": 69,
        "strength": 51
      },
      {
        "id": 110,
        "strength": 50
      },
      {
        "id": 54,
        "strength": 49
      },
      {
        "id": 34,
        "strength": 48
      },
      {
        "id": 40,
        "strength": 47
      },
      {
        "id": 46,
        "strength": 46
      },
      {
        "id": 53,
        "strength": 45
      },
      {
        "id": 36,
        "strength": 44
      },
      {
        "id": 103,
        "strength": 43
      },
      {
        "id": 63,
        "strength": 42
      },
      {
        "id": 3,
        "strength": 41
      },
      {
        "id": 78,
        "strength": 40
      },
      {
        "id": 65,
        "strength": 39
      },
      {
        "id": 14,
        "strength": 38
      },
      {
        "id": 57,
        "strength": 37
      },
      {
        "id": 4,
        "strength": 36
      },
      {
        "id": 17,
        "strength": 35
      },
      {
        "id": 21,
        "strength": 34
      },
      {
        "id": 19,
        "strength": 33
      },
      {
        "id": 85,
        "strength": 32
      },
      {
        "id": 111,
        "strength": 31
      },
      {
        "id": 86,
        "strength": 30
      },
      {
        "id": 107,
        "strength": 29
      },
      {
        "id": 108,
        "strength": 28
      },
      {
        "id": 105,
        "strength": 27
      },
      {
        "id": 6,
        "strength": 25.5
      },
      {
        "id": 38,
        "strength": 24.5
      },
      {
        "id": 96,
        "strength": 23.5
      },
      {
        "id": 62,
        "strength": 22.5
      },
      {
        "id": 92,
        "strength": 21.5
      },
      {
        "id": 81,
        "strength": 20.5
      },
      {
        "id": 87,
        "strength": 19.5
      },
      {
        "id": 82,
        "strength": 18.5
      },
      {
        "id": 90,
        "strength": 17.5
      },
      {
        "id": 84,
        "strength": 16.5
      },
      {
        "id": 55,
        "strength": 15.5
      },
      {
        "id": 100,
        "strength": 14.5
      },
      {
        "id": 93,
        "strength": 13.5
      },
      {
        "id": 99,
        "strength": 12.5
      },
      {
        "id": 88,
        "strength": 11.5
      },
      {
        "id": 98,
        "strength": 10.5
      },
      {
        "id": 77,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 72
  },
  "73": {
    "email": "eduardo.golin@sebrae.com.br",
    "choices": [
      {
        "id": 42,
        "strength": 114
      },
      {
        "id": 24,
        "strength": 113
      },
      {
        "id": 36,
        "strength": 112
      },
      {
        "id": 27,
        "strength": 111
      },
      {
        "id": 18,
        "strength": 110
      },
      {
        "id": 33,
        "strength": 109
      },
      {
        "id": 35,
        "strength": 108
      },
      {
        "id": 2,
        "strength": 107
      },
      {
        "id": 20,
        "strength": 105
      },
      {
        "id": 48,
        "strength": 104
      },
      {
        "id": 28,
        "strength": 103
      },
      {
        "id": 43,
        "strength": 102
      },
      {
        "id": 30,
        "strength": 101
      },
      {
        "id": 67,
        "strength": 100
      },
      {
        "id": 5,
        "strength": 99
      },
      {
        "id": 32,
        "strength": 98
      },
      {
        "id": 23,
        "strength": 97
      },
      {
        "id": 102,
        "strength": 96
      },
      {
        "id": 68,
        "strength": 95
      },
      {
        "id": 9,
        "strength": 94
      },
      {
        "id": 106,
        "strength": 93
      },
      {
        "id": 15,
        "strength": 92
      },
      {
        "id": 50,
        "strength": 91
      },
      {
        "id": 47,
        "strength": 90
      },
      {
        "id": 12,
        "strength": 89
      },
      {
        "id": 91,
        "strength": 88
      },
      {
        "id": 75,
        "strength": 87
      },
      {
        "id": 95,
        "strength": 86
      },
      {
        "id": 58,
        "strength": 85
      },
      {
        "id": 112,
        "strength": 84
      },
      {
        "id": 49,
        "strength": 83
      },
      {
        "id": 71,
        "strength": 82
      },
      {
        "id": 61,
        "strength": 81
      },
      {
        "id": 44,
        "strength": 80
      },
      {
        "id": 26,
        "strength": 79
      },
      {
        "id": 45,
        "strength": 78
      },
      {
        "id": 64,
        "strength": 77
      },
      {
        "id": 25,
        "strength": 76
      },
      {
        "id": 70,
        "strength": 75
      },
      {
        "id": 109,
        "strength": 74
      },
      {
        "id": 69,
        "strength": 73
      },
      {
        "id": 1,
        "strength": 72
      },
      {
        "id": 110,
        "strength": 71
      },
      {
        "id": 80,
        "strength": 70
      },
      {
        "id": 11,
        "strength": 69
      },
      {
        "id": 34,
        "strength": 68
      },
      {
        "id": 59,
        "strength": 67
      },
      {
        "id": 39,
        "strength": 66
      },
      {
        "id": 7,
        "strength": 65
      },
      {
        "id": 40,
        "strength": 64
      },
      {
        "id": 41,
        "strength": 63
      },
      {
        "id": 46,
        "strength": 62
      },
      {
        "id": 53,
        "strength": 61
      },
      {
        "id": 103,
        "strength": 60
      },
      {
        "id": 63,
        "strength": 59
      },
      {
        "id": 3,
        "strength": 58
      },
      {
        "id": 78,
        "strength": 57
      },
      {
        "id": 65,
        "strength": 56
      },
      {
        "id": 14,
        "strength": 55
      },
      {
        "id": 57,
        "strength": 54
      },
      {
        "id": 66,
        "strength": 53
      },
      {
        "id": 4,
        "strength": 52
      },
      {
        "id": 17,
        "strength": 51
      },
      {
        "id": 37,
        "strength": 50
      },
      {
        "id": 8,
        "strength": 49
      },
      {
        "id": 21,
        "strength": 48
      },
      {
        "id": 19,
        "strength": 47
      },
      {
        "id": 60,
        "strength": 46
      },
      {
        "id": 31,
        "strength": 45
      },
      {
        "id": 74,
        "strength": 44
      },
      {
        "id": 52,
        "strength": 43
      },
      {
        "id": 56,
        "strength": 42
      },
      {
        "id": 16,
        "strength": 41
      },
      {
        "id": 10,
        "strength": 40
      },
      {
        "id": 29,
        "strength": 39
      },
      {
        "id": 111,
        "strength": 38
      },
      {
        "id": 13,
        "strength": 37
      },
      {
        "id": 86,
        "strength": 36
      },
      {
        "id": 72,
        "strength": 35
      },
      {
        "id": 22,
        "strength": 34
      },
      {
        "id": 107,
        "strength": 33
      },
      {
        "id": 108,
        "strength": 32
      },
      {
        "id": 101,
        "strength": 31
      },
      {
        "id": 105,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 73
  },
  "74": {
    "email": "President@whitehorsechamber.com",
    "choices": [
      {
        "id": 10,
        "strength": 116
      },
      {
        "id": 13,
        "strength": 115
      },
      {
        "id": 15,
        "strength": 113
      },
      {
        "id": 75,
        "strength": 112
      },
      {
        "id": 58,
        "strength": 111
      },
      {
        "id": 24,
        "strength": 110
      },
      {
        "id": 37,
        "strength": 109
      },
      {
        "id": 60,
        "strength": 108
      },
      {
        "id": 31,
        "strength": 107
      },
      {
        "id": 56,
        "strength": 106
      },
      {
        "id": 16,
        "strength": 105
      },
      {
        "id": 29,
        "strength": 104
      },
      {
        "id": 101,
        "strength": 103
      },
      {
        "id": 48,
        "strength": 101
      },
      {
        "id": 5,
        "strength": 100
      },
      {
        "id": 23,
        "strength": 99
      },
      {
        "id": 102,
        "strength": 98
      },
      {
        "id": 50,
        "strength": 97
      },
      {
        "id": 42,
        "strength": 96
      },
      {
        "id": 79,
        "strength": 95
      },
      {
        "id": 12,
        "strength": 94
      },
      {
        "id": 95,
        "strength": 93
      },
      {
        "id": 49,
        "strength": 92
      },
      {
        "id": 44,
        "strength": 91
      },
      {
        "id": 25,
        "strength": 90
      },
      {
        "id": 11,
        "strength": 89
      },
      {
        "id": 54,
        "strength": 88
      },
      {
        "id": 39,
        "strength": 87
      },
      {
        "id": 7,
        "strength": 86
      },
      {
        "id": 103,
        "strength": 85
      },
      {
        "id": 3,
        "strength": 84
      },
      {
        "id": 27,
        "strength": 83
      },
      {
        "id": 66,
        "strength": 82
      },
      {
        "id": 8,
        "strength": 81
      },
      {
        "id": 18,
        "strength": 80
      },
      {
        "id": 33,
        "strength": 79
      },
      {
        "id": 2,
        "strength": 78
      },
      {
        "id": 72,
        "strength": 77
      },
      {
        "id": 20,
        "strength": 75
      },
      {
        "id": 28,
        "strength": 74
      },
      {
        "id": 43,
        "strength": 73
      },
      {
        "id": 30,
        "strength": 72
      },
      {
        "id": 67,
        "strength": 71
      },
      {
        "id": 32,
        "strength": 70
      },
      {
        "id": 68,
        "strength": 69
      },
      {
        "id": 9,
        "strength": 68
      },
      {
        "id": 106,
        "strength": 67
      },
      {
        "id": 47,
        "strength": 66
      },
      {
        "id": 91,
        "strength": 65
      },
      {
        "id": 73,
        "strength": 64
      },
      {
        "id": 112,
        "strength": 63
      },
      {
        "id": 71,
        "strength": 62
      },
      {
        "id": 61,
        "strength": 61
      },
      {
        "id": 26,
        "strength": 60
      },
      {
        "id": 98,
        "strength": 59
      },
      {
        "id": 45,
        "strength": 58
      },
      {
        "id": 64,
        "strength": 57
      },
      {
        "id": 70,
        "strength": 56
      },
      {
        "id": 109,
        "strength": 55
      },
      {
        "id": 69,
        "strength": 54
      },
      {
        "id": 1,
        "strength": 53
      },
      {
        "id": 110,
        "strength": 52
      },
      {
        "id": 80,
        "strength": 51
      },
      {
        "id": 34,
        "strength": 50
      },
      {
        "id": 59,
        "strength": 49
      },
      {
        "id": 104,
        "strength": 48
      },
      {
        "id": 40,
        "strength": 47
      },
      {
        "id": 41,
        "strength": 46
      },
      {
        "id": 46,
        "strength": 45
      },
      {
        "id": 53,
        "strength": 44
      },
      {
        "id": 36,
        "strength": 43
      },
      {
        "id": 63,
        "strength": 42
      },
      {
        "id": 78,
        "strength": 41
      },
      {
        "id": 65,
        "strength": 40
      },
      {
        "id": 14,
        "strength": 39
      },
      {
        "id": 57,
        "strength": 38
      },
      {
        "id": 4,
        "strength": 37
      },
      {
        "id": 17,
        "strength": 36
      },
      {
        "id": 21,
        "strength": 35
      },
      {
        "id": 19,
        "strength": 34
      },
      {
        "id": 97,
        "strength": 33
      },
      {
        "id": 35,
        "strength": 32
      },
      {
        "id": 52,
        "strength": 31
      },
      {
        "id": 111,
        "strength": 30
      },
      {
        "id": 86,
        "strength": 29
      },
      {
        "id": 22,
        "strength": 28
      },
      {
        "id": 107,
        "strength": 27
      },
      {
        "id": 108,
        "strength": 26
      },
      {
        "id": 105,
        "strength": 25
      },
      {
        "id": 6,
        "strength": 23.5
      },
      {
        "id": 38,
        "strength": 22.5
      },
      {
        "id": 96,
        "strength": 21.5
      },
      {
        "id": 62,
        "strength": 20.5
      },
      {
        "id": 92,
        "strength": 19.5
      },
      {
        "id": 85,
        "strength": 18.5
      },
      {
        "id": 81,
        "strength": 17.5
      },
      {
        "id": 87,
        "strength": 16.5
      },
      {
        "id": 82,
        "strength": 15.5
      },
      {
        "id": 90,
        "strength": 14.5
      },
      {
        "id": 84,
        "strength": 13.5
      },
      {
        "id": 55,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 88,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 89,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 74
  },
  "75": {
    "email": "emprender@coparmextijuana.org",
    "choices": [
      {
        "id": 10,
        "strength": 117
      },
      {
        "id": 13,
        "strength": 116
      },
      {
        "id": 25,
        "strength": 114
      },
      {
        "id": 24,
        "strength": 113
      },
      {
        "id": 37,
        "strength": 112
      },
      {
        "id": 29,
        "strength": 111
      },
      {
        "id": 101,
        "strength": 110
      },
      {
        "id": 102,
        "strength": 108
      },
      {
        "id": 15,
        "strength": 107
      },
      {
        "id": 79,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 58,
        "strength": 104
      },
      {
        "id": 11,
        "strength": 103
      },
      {
        "id": 54,
        "strength": 102
      },
      {
        "id": 39,
        "strength": 101
      },
      {
        "id": 103,
        "strength": 100
      },
      {
        "id": 3,
        "strength": 99
      },
      {
        "id": 27,
        "strength": 98
      },
      {
        "id": 66,
        "strength": 97
      },
      {
        "id": 60,
        "strength": 96
      },
      {
        "id": 31,
        "strength": 95
      },
      {
        "id": 74,
        "strength": 94
      },
      {
        "id": 18,
        "strength": 93
      },
      {
        "id": 56,
        "strength": 92
      },
      {
        "id": 16,
        "strength": 91
      },
      {
        "id": 20,
        "strength": 89
      },
      {
        "id": 48,
        "strength": 88
      },
      {
        "id": 28,
        "strength": 87
      },
      {
        "id": 23,
        "strength": 86
      },
      {
        "id": 50,
        "strength": 85
      },
      {
        "id": 47,
        "strength": 84
      },
      {
        "id": 42,
        "strength": 83
      },
      {
        "id": 49,
        "strength": 82
      },
      {
        "id": 71,
        "strength": 81
      },
      {
        "id": 44,
        "strength": 80
      },
      {
        "id": 26,
        "strength": 79
      },
      {
        "id": 98,
        "strength": 78
      },
      {
        "id": 80,
        "strength": 77
      },
      {
        "id": 34,
        "strength": 76
      },
      {
        "id": 59,
        "strength": 75
      },
      {
        "id": 46,
        "strength": 74
      },
      {
        "id": 36,
        "strength": 73
      },
      {
        "id": 78,
        "strength": 72
      },
      {
        "id": 19,
        "strength": 71
      },
      {
        "id": 33,
        "strength": 70
      },
      {
        "id": 35,
        "strength": 69
      },
      {
        "id": 52,
        "strength": 68
      },
      {
        "id": 2,
        "strength": 67
      },
      {
        "id": 72,
        "strength": 66
      },
      {
        "id": 43,
        "strength": 64
      },
      {
        "id": 30,
        "strength": 63
      },
      {
        "id": 67,
        "strength": 62
      },
      {
        "id": 5,
        "strength": 61
      },
      {
        "id": 32,
        "strength": 60
      },
      {
        "id": 68,
        "strength": 59
      },
      {
        "id": 9,
        "strength": 58
      },
      {
        "id": 106,
        "strength": 57
      },
      {
        "id": 12,
        "strength": 56
      },
      {
        "id": 91,
        "strength": 55
      },
      {
        "id": 73,
        "strength": 54
      },
      {
        "id": 88,
        "strength": 53
      },
      {
        "id": 112,
        "strength": 52
      },
      {
        "id": 61,
        "strength": 51
      },
      {
        "id": 45,
        "strength": 50
      },
      {
        "id": 64,
        "strength": 49
      },
      {
        "id": 70,
        "strength": 48
      },
      {
        "id": 109,
        "strength": 47
      },
      {
        "id": 69,
        "strength": 46
      },
      {
        "id": 1,
        "strength": 45
      },
      {
        "id": 110,
        "strength": 44
      },
      {
        "id": 7,
        "strength": 43
      },
      {
        "id": 104,
        "strength": 42
      },
      {
        "id": 40,
        "strength": 41
      },
      {
        "id": 41,
        "strength": 40
      },
      {
        "id": 53,
        "strength": 39
      },
      {
        "id": 63,
        "strength": 38
      },
      {
        "id": 65,
        "strength": 37
      },
      {
        "id": 14,
        "strength": 36
      },
      {
        "id": 57,
        "strength": 35
      },
      {
        "id": 4,
        "strength": 34
      },
      {
        "id": 17,
        "strength": 33
      },
      {
        "id": 8,
        "strength": 32
      },
      {
        "id": 21,
        "strength": 31
      },
      {
        "id": 82,
        "strength": 30
      },
      {
        "id": 97,
        "strength": 29
      },
      {
        "id": 111,
        "strength": 28
      },
      {
        "id": 86,
        "strength": 27
      },
      {
        "id": 22,
        "strength": 26
      },
      {
        "id": 51,
        "strength": 25
      },
      {
        "id": 96,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 108,
        "strength": 22
      },
      {
        "id": 105,
        "strength": 21
      },
      {
        "id": 6,
        "strength": 19.5
      },
      {
        "id": 38,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 85,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 55,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 75
  },
  "76": {
    "email": "scarbonell@iae.edu.ar",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 45,
        "strength": 100
      },
      {
        "id": 38,
        "strength": 99
      },
      {
        "id": 109,
        "strength": 98
      },
      {
        "id": 55,
        "strength": 97
      },
      {
        "id": 80,
        "strength": 96
      },
      {
        "id": 54,
        "strength": 95
      },
      {
        "id": 59,
        "strength": 94
      },
      {
        "id": 84,
        "strength": 93
      },
      {
        "id": 90,
        "strength": 92
      },
      {
        "id": 104,
        "strength": 91
      },
      {
        "id": 40,
        "strength": 90
      },
      {
        "id": 46,
        "strength": 89
      },
      {
        "id": 53,
        "strength": 88
      },
      {
        "id": 89,
        "strength": 87
      },
      {
        "id": 3,
        "strength": 86
      },
      {
        "id": 78,
        "strength": 85
      },
      {
        "id": 77,
        "strength": 84
      },
      {
        "id": 57,
        "strength": 83
      },
      {
        "id": 8,
        "strength": 82
      },
      {
        "id": 82,
        "strength": 81
      },
      {
        "id": 87,
        "strength": 80
      },
      {
        "id": 83,
        "strength": 79
      },
      {
        "id": 97,
        "strength": 78
      },
      {
        "id": 81,
        "strength": 77
      },
      {
        "id": 35,
        "strength": 76
      },
      {
        "id": 85,
        "strength": 75
      },
      {
        "id": 92,
        "strength": 74
      },
      {
        "id": 52,
        "strength": 73
      },
      {
        "id": 56,
        "strength": 72
      },
      {
        "id": 16,
        "strength": 71
      },
      {
        "id": 2,
        "strength": 70
      },
      {
        "id": 62,
        "strength": 69
      },
      {
        "id": 22,
        "strength": 68
      },
      {
        "id": 51,
        "strength": 67
      },
      {
        "id": 96,
        "strength": 66
      },
      {
        "id": 48,
        "strength": 64.5
      },
      {
        "id": 105,
        "strength": 63.5
      },
      {
        "id": 86,
        "strength": 62.5
      },
      {
        "id": 67,
        "strength": 61.5
      },
      {
        "id": 6,
        "strength": 60.5
      },
      {
        "id": 19,
        "strength": 59.5
      },
      {
        "id": 5,
        "strength": 58.5
      },
      {
        "id": 108,
        "strength": 57.5
      },
      {
        "id": 32,
        "strength": 56.5
      },
      {
        "id": 41,
        "strength": 55.5
      },
      {
        "id": 7,
        "strength": 54.5
      },
      {
        "id": 12,
        "strength": 53.5
      },
      {
        "id": 107,
        "strength": 52.5
      },
      {
        "id": 102,
        "strength": 51.5
      },
      {
        "id": 1,
        "strength": 50.5
      },
      {
        "id": 28,
        "strength": 49.5
      },
      {
        "id": 34,
        "strength": 48.5
      },
      {
        "id": 111,
        "strength": 47.5
      },
      {
        "id": 29,
        "strength": 46.5
      },
      {
        "id": 18,
        "strength": 45.5
      },
      {
        "id": 60,
        "strength": 44.5
      },
      {
        "id": 17,
        "strength": 43.5
      },
      {
        "id": 66,
        "strength": 42.5
      },
      {
        "id": 27,
        "strength": 41.5
      },
      {
        "id": 65,
        "strength": 40.5
      },
      {
        "id": 63,
        "strength": 39.5
      },
      {
        "id": 103,
        "strength": 38.5
      },
      {
        "id": 36,
        "strength": 37.5
      },
      {
        "id": 110,
        "strength": 36.5
      },
      {
        "id": 25,
        "strength": 35.5
      },
      {
        "id": 44,
        "strength": 34.5
      },
      {
        "id": 61,
        "strength": 33.5
      },
      {
        "id": 91,
        "strength": 32.5
      },
      {
        "id": 50,
        "strength": 31.5
      },
      {
        "id": 68,
        "strength": 30.5
      },
      {
        "id": 72,
        "strength": 29.5
      },
      {
        "id": 74,
        "strength": 28.5
      },
      {
        "id": 24,
        "strength": 27.5
      },
      {
        "id": 47,
        "strength": 26.5
      },
      {
        "id": 98,
        "strength": 25.5
      },
      {
        "id": 9,
        "strength": 24.5
      },
      {
        "id": 42,
        "strength": 23.5
      },
      {
        "id": 73,
        "strength": 22.5
      },
      {
        "id": 75,
        "strength": 21.5
      },
      {
        "id": 58,
        "strength": 20.5
      },
      {
        "id": 112,
        "strength": 19.5
      },
      {
        "id": 71,
        "strength": 18.5
      },
      {
        "id": 26,
        "strength": 17.5
      },
      {
        "id": 64,
        "strength": 16.5
      },
      {
        "id": 70,
        "strength": 15.5
      },
      {
        "id": 69,
        "strength": 14.5
      },
      {
        "id": 11,
        "strength": 13.5
      },
      {
        "id": 39,
        "strength": 12.5
      },
      {
        "id": 14,
        "strength": 11.5
      },
      {
        "id": 4,
        "strength": 10.5
      },
      {
        "id": 37,
        "strength": 9.5
      },
      {
        "id": 21,
        "strength": 8.5
      },
      {
        "id": 31,
        "strength": 7.5
      },
      {
        "id": 33,
        "strength": 6.5
      },
      {
        "id": 10,
        "strength": 5.5
      },
      {
        "id": 13,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 76
  },
  "77": {
    "email": "nayli.aguilar@endeavor.org.mx",
    "choices": [
      {
        "id": 15,
        "strength": 114
      },
      {
        "id": 20,
        "strength": 112
      },
      {
        "id": 43,
        "strength": 111
      },
      {
        "id": 30,
        "strength": 110
      },
      {
        "id": 23,
        "strength": 109
      },
      {
        "id": 106,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 25,
        "strength": 100
      },
      {
        "id": 38,
        "strength": 99
      },
      {
        "id": 109,
        "strength": 98
      },
      {
        "id": 55,
        "strength": 97
      },
      {
        "id": 80,
        "strength": 96
      },
      {
        "id": 54,
        "strength": 95
      },
      {
        "id": 59,
        "strength": 94
      },
      {
        "id": 24,
        "strength": 93
      },
      {
        "id": 84,
        "strength": 92
      },
      {
        "id": 90,
        "strength": 91
      },
      {
        "id": 104,
        "strength": 90
      },
      {
        "id": 40,
        "strength": 89
      },
      {
        "id": 46,
        "strength": 88
      },
      {
        "id": 53,
        "strength": 87
      },
      {
        "id": 89,
        "strength": 86
      },
      {
        "id": 3,
        "strength": 85
      },
      {
        "id": 78,
        "strength": 84
      },
      {
        "id": 57,
        "strength": 83
      },
      {
        "id": 8,
        "strength": 82
      },
      {
        "id": 82,
        "strength": 81
      },
      {
        "id": 87,
        "strength": 80
      },
      {
        "id": 83,
        "strength": 79
      },
      {
        "id": 97,
        "strength": 78
      },
      {
        "id": 81,
        "strength": 77
      },
      {
        "id": 85,
        "strength": 76
      },
      {
        "id": 92,
        "strength": 75
      },
      {
        "id": 52,
        "strength": 74
      },
      {
        "id": 76,
        "strength": 73
      },
      {
        "id": 56,
        "strength": 72
      },
      {
        "id": 16,
        "strength": 71
      },
      {
        "id": 2,
        "strength": 70
      },
      {
        "id": 10,
        "strength": 69
      },
      {
        "id": 13,
        "strength": 68
      },
      {
        "id": 62,
        "strength": 67
      },
      {
        "id": 51,
        "strength": 66
      },
      {
        "id": 96,
        "strength": 65
      },
      {
        "id": 48,
        "strength": 63.5
      },
      {
        "id": 105,
        "strength": 62.5
      },
      {
        "id": 86,
        "strength": 61.5
      },
      {
        "id": 67,
        "strength": 60.5
      },
      {
        "id": 6,
        "strength": 59.5
      },
      {
        "id": 19,
        "strength": 58.5
      },
      {
        "id": 5,
        "strength": 57.5
      },
      {
        "id": 108,
        "strength": 56.5
      },
      {
        "id": 32,
        "strength": 55.5
      },
      {
        "id": 41,
        "strength": 54.5
      },
      {
        "id": 7,
        "strength": 53.5
      },
      {
        "id": 12,
        "strength": 52.5
      },
      {
        "id": 107,
        "strength": 51.5
      },
      {
        "id": 102,
        "strength": 50.5
      },
      {
        "id": 1,
        "strength": 49.5
      },
      {
        "id": 28,
        "strength": 48.5
      },
      {
        "id": 34,
        "strength": 47.5
      },
      {
        "id": 111,
        "strength": 46.5
      },
      {
        "id": 29,
        "strength": 45.5
      },
      {
        "id": 18,
        "strength": 44.5
      },
      {
        "id": 60,
        "strength": 43.5
      },
      {
        "id": 17,
        "strength": 42.5
      },
      {
        "id": 66,
        "strength": 41.5
      },
      {
        "id": 27,
        "strength": 40.5
      },
      {
        "id": 65,
        "strength": 39.5
      },
      {
        "id": 63,
        "strength": 38.5
      },
      {
        "id": 103,
        "strength": 37.5
      },
      {
        "id": 36,
        "strength": 36.5
      },
      {
        "id": 110,
        "strength": 35.5
      },
      {
        "id": 44,
        "strength": 34.5
      },
      {
        "id": 61,
        "strength": 33.5
      },
      {
        "id": 91,
        "strength": 32.5
      },
      {
        "id": 50,
        "strength": 31.5
      },
      {
        "id": 68,
        "strength": 30.5
      },
      {
        "id": 72,
        "strength": 29.5
      },
      {
        "id": 74,
        "strength": 28.5
      },
      {
        "id": 47,
        "strength": 27.5
      },
      {
        "id": 98,
        "strength": 26.5
      },
      {
        "id": 9,
        "strength": 25.5
      },
      {
        "id": 42,
        "strength": 24.5
      },
      {
        "id": 73,
        "strength": 23.5
      },
      {
        "id": 75,
        "strength": 22.5
      },
      {
        "id": 58,
        "strength": 21.5
      },
      {
        "id": 112,
        "strength": 20.5
      },
      {
        "id": 71,
        "strength": 19.5
      },
      {
        "id": 26,
        "strength": 18.5
      },
      {
        "id": 45,
        "strength": 17.5
      },
      {
        "id": 64,
        "strength": 16.5
      },
      {
        "id": 70,
        "strength": 15.5
      },
      {
        "id": 69,
        "strength": 14.5
      },
      {
        "id": 11,
        "strength": 13.5
      },
      {
        "id": 39,
        "strength": 12.5
      },
      {
        "id": 14,
        "strength": 11.5
      },
      {
        "id": 4,
        "strength": 10.5
      },
      {
        "id": 37,
        "strength": 9.5
      },
      {
        "id": 21,
        "strength": 8.5
      },
      {
        "id": 31,
        "strength": 7.5
      },
      {
        "id": 33,
        "strength": 6.5
      },
      {
        "id": 35,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 77
  },
  "78": {
    "email": "monica_doger@yahoo.com",
    "choices": [
      {
        "id": 3,
        "strength": 117
      },
      {
        "id": 15,
        "strength": 115
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 113
      },
      {
        "id": 35,
        "strength": 112
      },
      {
        "id": 20,
        "strength": 110
      },
      {
        "id": 43,
        "strength": 109
      },
      {
        "id": 23,
        "strength": 108
      },
      {
        "id": 102,
        "strength": 107
      },
      {
        "id": 47,
        "strength": 106
      },
      {
        "id": 42,
        "strength": 105
      },
      {
        "id": 88,
        "strength": 104
      },
      {
        "id": 44,
        "strength": 103
      },
      {
        "id": 26,
        "strength": 102
      },
      {
        "id": 25,
        "strength": 101
      },
      {
        "id": 59,
        "strength": 100
      },
      {
        "id": 104,
        "strength": 99
      },
      {
        "id": 46,
        "strength": 98
      },
      {
        "id": 36,
        "strength": 97
      },
      {
        "id": 66,
        "strength": 96
      },
      {
        "id": 82,
        "strength": 95
      },
      {
        "id": 52,
        "strength": 94
      },
      {
        "id": 16,
        "strength": 93
      },
      {
        "id": 2,
        "strength": 92
      },
      {
        "id": 10,
        "strength": 91
      },
      {
        "id": 13,
        "strength": 90
      },
      {
        "id": 51,
        "strength": 89
      },
      {
        "id": 96,
        "strength": 88
      },
      {
        "id": 28,
        "strength": 86
      },
      {
        "id": 30,
        "strength": 85
      },
      {
        "id": 106,
        "strength": 84
      },
      {
        "id": 79,
        "strength": 83
      },
      {
        "id": 75,
        "strength": 82
      },
      {
        "id": 58,
        "strength": 81
      },
      {
        "id": 49,
        "strength": 80
      },
      {
        "id": 71,
        "strength": 79
      },
      {
        "id": 98,
        "strength": 78
      },
      {
        "id": 109,
        "strength": 77
      },
      {
        "id": 11,
        "strength": 76
      },
      {
        "id": 54,
        "strength": 75
      },
      {
        "id": 34,
        "strength": 74
      },
      {
        "id": 24,
        "strength": 73
      },
      {
        "id": 39,
        "strength": 72
      },
      {
        "id": 40,
        "strength": 71
      },
      {
        "id": 53,
        "strength": 70
      },
      {
        "id": 103,
        "strength": 69
      },
      {
        "id": 27,
        "strength": 68
      },
      {
        "id": 57,
        "strength": 67
      },
      {
        "id": 37,
        "strength": 66
      },
      {
        "id": 8,
        "strength": 65
      },
      {
        "id": 19,
        "strength": 64
      },
      {
        "id": 18,
        "strength": 63
      },
      {
        "id": 97,
        "strength": 62
      },
      {
        "id": 33,
        "strength": 61
      },
      {
        "id": 56,
        "strength": 60
      },
      {
        "id": 29,
        "strength": 59
      },
      {
        "id": 22,
        "strength": 58
      },
      {
        "id": 101,
        "strength": 57
      },
      {
        "id": 105,
        "strength": 56
      },
      {
        "id": 48,
        "strength": 54
      },
      {
        "id": 67,
        "strength": 53
      },
      {
        "id": 5,
        "strength": 52
      },
      {
        "id": 32,
        "strength": 51
      },
      {
        "id": 68,
        "strength": 50
      },
      {
        "id": 9,
        "strength": 49
      },
      {
        "id": 50,
        "strength": 48
      },
      {
        "id": 12,
        "strength": 47
      },
      {
        "id": 91,
        "strength": 46
      },
      {
        "id": 73,
        "strength": 45
      },
      {
        "id": 99,
        "strength": 44
      },
      {
        "id": 112,
        "strength": 43
      },
      {
        "id": 61,
        "strength": 42
      },
      {
        "id": 100,
        "strength": 41
      },
      {
        "id": 93,
        "strength": 40
      },
      {
        "id": 45,
        "strength": 39
      },
      {
        "id": 64,
        "strength": 38
      },
      {
        "id": 70,
        "strength": 37
      },
      {
        "id": 38,
        "strength": 36
      },
      {
        "id": 69,
        "strength": 35
      },
      {
        "id": 1,
        "strength": 34
      },
      {
        "id": 55,
        "strength": 33
      },
      {
        "id": 110,
        "strength": 32
      },
      {
        "id": 84,
        "strength": 31
      },
      {
        "id": 7,
        "strength": 30
      },
      {
        "id": 90,
        "strength": 29
      },
      {
        "id": 41,
        "strength": 28
      },
      {
        "id": 89,
        "strength": 27
      },
      {
        "id": 63,
        "strength": 26
      },
      {
        "id": 65,
        "strength": 25
      },
      {
        "id": 14,
        "strength": 24
      },
      {
        "id": 77,
        "strength": 23
      },
      {
        "id": 4,
        "strength": 22
      },
      {
        "id": 17,
        "strength": 21
      },
      {
        "id": 21,
        "strength": 20
      },
      {
        "id": 60,
        "strength": 19
      },
      {
        "id": 31,
        "strength": 18
      },
      {
        "id": 87,
        "strength": 17
      },
      {
        "id": 74,
        "strength": 16
      },
      {
        "id": 83,
        "strength": 15
      },
      {
        "id": 81,
        "strength": 14
      },
      {
        "id": 85,
        "strength": 13
      },
      {
        "id": 92,
        "strength": 12
      },
      {
        "id": 76,
        "strength": 11
      },
      {
        "id": 111,
        "strength": 10
      },
      {
        "id": 86,
        "strength": 9
      },
      {
        "id": 72,
        "strength": 8
      },
      {
        "id": 62,
        "strength": 7
      },
      {
        "id": 107,
        "strength": 6
      },
      {
        "id": 108,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 78
  },
  "79": {
    "email": "dmartine@uninorte.edu.co",
    "choices": [
      {
        "id": 54,
        "strength": 116
      },
      {
        "id": 16,
        "strength": 115
      },
      {
        "id": 10,
        "strength": 114
      },
      {
        "id": 29,
        "strength": 113
      },
      {
        "id": 23,
        "strength": 111
      },
      {
        "id": 15,
        "strength": 110
      },
      {
        "id": 75,
        "strength": 109
      },
      {
        "id": 95,
        "strength": 108
      },
      {
        "id": 25,
        "strength": 107
      },
      {
        "id": 59,
        "strength": 106
      },
      {
        "id": 24,
        "strength": 105
      },
      {
        "id": 3,
        "strength": 104
      },
      {
        "id": 37,
        "strength": 103
      },
      {
        "id": 13,
        "strength": 102
      },
      {
        "id": 101,
        "strength": 101
      },
      {
        "id": 20,
        "strength": 99
      },
      {
        "id": 102,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 88,
        "strength": 96
      },
      {
        "id": 58,
        "strength": 95
      },
      {
        "id": 49,
        "strength": 94
      },
      {
        "id": 26,
        "strength": 93
      },
      {
        "id": 98,
        "strength": 92
      },
      {
        "id": 80,
        "strength": 91
      },
      {
        "id": 11,
        "strength": 90
      },
      {
        "id": 39,
        "strength": 89
      },
      {
        "id": 104,
        "strength": 88
      },
      {
        "id": 46,
        "strength": 87
      },
      {
        "id": 36,
        "strength": 86
      },
      {
        "id": 103,
        "strength": 85
      },
      {
        "id": 78,
        "strength": 84
      },
      {
        "id": 27,
        "strength": 83
      },
      {
        "id": 66,
        "strength": 82
      },
      {
        "id": 82,
        "strength": 81
      },
      {
        "id": 60,
        "strength": 80
      },
      {
        "id": 31,
        "strength": 79
      },
      {
        "id": 74,
        "strength": 78
      },
      {
        "id": 18,
        "strength": 77
      },
      {
        "id": 97,
        "strength": 76
      },
      {
        "id": 33,
        "strength": 75
      },
      {
        "id": 52,
        "strength": 74
      },
      {
        "id": 2,
        "strength": 73
      },
      {
        "id": 51,
        "strength": 72
      },
      {
        "id": 96,
        "strength": 71
      },
      {
        "id": 48,
        "strength": 69
      },
      {
        "id": 28,
        "strength": 68
      },
      {
        "id": 6,
        "strength": 67
      },
      {
        "id": 43,
        "strength": 66
      },
      {
        "id": 30,
        "strength": 65
      },
      {
        "id": 106,
        "strength": 64
      },
      {
        "id": 50,
        "strength": 63
      },
      {
        "id": 47,
        "strength": 62
      },
      {
        "id": 99,
        "strength": 61
      },
      {
        "id": 71,
        "strength": 60
      },
      {
        "id": 44,
        "strength": 59
      },
      {
        "id": 100,
        "strength": 58
      },
      {
        "id": 93,
        "strength": 57
      },
      {
        "id": 45,
        "strength": 56
      },
      {
        "id": 38,
        "strength": 55
      },
      {
        "id": 109,
        "strength": 54
      },
      {
        "id": 55,
        "strength": 53
      },
      {
        "id": 34,
        "strength": 52
      },
      {
        "id": 84,
        "strength": 51
      },
      {
        "id": 90,
        "strength": 50
      },
      {
        "id": 40,
        "strength": 49
      },
      {
        "id": 53,
        "strength": 48
      },
      {
        "id": 89,
        "strength": 47
      },
      {
        "id": 77,
        "strength": 46
      },
      {
        "id": 57,
        "strength": 45
      },
      {
        "id": 8,
        "strength": 44
      },
      {
        "id": 19,
        "strength": 43
      },
      {
        "id": 87,
        "strength": 42
      },
      {
        "id": 83,
        "strength": 41
      },
      {
        "id": 81,
        "strength": 40
      },
      {
        "id": 35,
        "strength": 39
      },
      {
        "id": 85,
        "strength": 38
      },
      {
        "id": 92,
        "strength": 37
      },
      {
        "id": 76,
        "strength": 36
      },
      {
        "id": 56,
        "strength": 35
      },
      {
        "id": 72,
        "strength": 34
      },
      {
        "id": 62,
        "strength": 33
      },
      {
        "id": 105,
        "strength": 31.5
      },
      {
        "id": 86,
        "strength": 30.5
      },
      {
        "id": 67,
        "strength": 29.5
      },
      {
        "id": 5,
        "strength": 28.5
      },
      {
        "id": 108,
        "strength": 27.5
      },
      {
        "id": 32,
        "strength": 26.5
      },
      {
        "id": 41,
        "strength": 25.5
      },
      {
        "id": 7,
        "strength": 24.5
      },
      {
        "id": 12,
        "strength": 23.5
      },
      {
        "id": 107,
        "strength": 22.5
      },
      {
        "id": 1,
        "strength": 21.5
      },
      {
        "id": 111,
        "strength": 20.5
      },
      {
        "id": 17,
        "strength": 19.5
      },
      {
        "id": 65,
        "strength": 18.5
      },
      {
        "id": 63,
        "strength": 17.5
      },
      {
        "id": 110,
        "strength": 16.5
      },
      {
        "id": 61,
        "strength": 15.5
      },
      {
        "id": 91,
        "strength": 14.5
      },
      {
        "id": 68,
        "strength": 13.5
      },
      {
        "id": 9,
        "strength": 12.5
      },
      {
        "id": 73,
        "strength": 11.5
      },
      {
        "id": 112,
        "strength": 10.5
      },
      {
        "id": 64,
        "strength": 9.5
      },
      {
        "id": 70,
        "strength": 8.5
      },
      {
        "id": 69,
        "strength": 7.5
      },
      {
        "id": 14,
        "strength": 6.5
      },
      {
        "id": 4,
        "strength": 5.5
      },
      {
        "id": 21,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 79
  },
  "80": {
    "email": "juanjo@iteso.mx",
    "choices": [
      {
        "id": 42,
        "strength": 117
      },
      {
        "id": 52,
        "strength": 116
      },
      {
        "id": 47,
        "strength": 114
      },
      {
        "id": 88,
        "strength": 113
      },
      {
        "id": 95,
        "strength": 112
      },
      {
        "id": 25,
        "strength": 111
      },
      {
        "id": 59,
        "strength": 110
      },
      {
        "id": 46,
        "strength": 109
      },
      {
        "id": 3,
        "strength": 108
      },
      {
        "id": 78,
        "strength": 107
      },
      {
        "id": 35,
        "strength": 106
      },
      {
        "id": 16,
        "strength": 105
      },
      {
        "id": 2,
        "strength": 104
      },
      {
        "id": 13,
        "strength": 103
      },
      {
        "id": 96,
        "strength": 102
      },
      {
        "id": 20,
        "strength": 100
      },
      {
        "id": 43,
        "strength": 99
      },
      {
        "id": 23,
        "strength": 98
      },
      {
        "id": 102,
        "strength": 97
      },
      {
        "id": 15,
        "strength": 96
      },
      {
        "id": 49,
        "strength": 95
      },
      {
        "id": 71,
        "strength": 94
      },
      {
        "id": 61,
        "strength": 93
      },
      {
        "id": 26,
        "strength": 92
      },
      {
        "id": 70,
        "strength": 91
      },
      {
        "id": 11,
        "strength": 90
      },
      {
        "id": 34,
        "strength": 89
      },
      {
        "id": 104,
        "strength": 88
      },
      {
        "id": 36,
        "strength": 87
      },
      {
        "id": 103,
        "strength": 86
      },
      {
        "id": 27,
        "strength": 85
      },
      {
        "id": 66,
        "strength": 84
      },
      {
        "id": 82,
        "strength": 83
      },
      {
        "id": 19,
        "strength": 82
      },
      {
        "id": 18,
        "strength": 81
      },
      {
        "id": 33,
        "strength": 80
      },
      {
        "id": 10,
        "strength": 79
      },
      {
        "id": 51,
        "strength": 78
      },
      {
        "id": 105,
        "strength": 77
      },
      {
        "id": 28,
        "strength": 75
      },
      {
        "id": 30,
        "strength": 74
      },
      {
        "id": 32,
        "strength": 73
      },
      {
        "id": 106,
        "strength": 72
      },
      {
        "id": 79,
        "strength": 71
      },
      {
        "id": 12,
        "strength": 70
      },
      {
        "id": 75,
        "strength": 69
      },
      {
        "id": 44,
        "strength": 68
      },
      {
        "id": 98,
        "strength": 67
      },
      {
        "id": 109,
        "strength": 66
      },
      {
        "id": 1,
        "strength": 65
      },
      {
        "id": 54,
        "strength": 64
      },
      {
        "id": 24,
        "strength": 63
      },
      {
        "id": 39,
        "strength": 62
      },
      {
        "id": 40,
        "strength": 61
      },
      {
        "id": 41,
        "strength": 60
      },
      {
        "id": 53,
        "strength": 59
      },
      {
        "id": 63,
        "strength": 58
      },
      {
        "id": 57,
        "strength": 57
      },
      {
        "id": 37,
        "strength": 56
      },
      {
        "id": 8,
        "strength": 55
      },
      {
        "id": 97,
        "strength": 54
      },
      {
        "id": 85,
        "strength": 53
      },
      {
        "id": 56,
        "strength": 52
      },
      {
        "id": 29,
        "strength": 51
      },
      {
        "id": 86,
        "strength": 50
      },
      {
        "id": 72,
        "strength": 49
      },
      {
        "id": 107,
        "strength": 48
      },
      {
        "id": 108,
        "strength": 47
      },
      {
        "id": 101,
        "strength": 46
      },
      {
        "id": 48,
        "strength": 44
      },
      {
        "id": 67,
        "strength": 43
      },
      {
        "id": 5,
        "strength": 42
      },
      {
        "id": 68,
        "strength": 41
      },
      {
        "id": 9,
        "strength": 40
      },
      {
        "id": 50,
        "strength": 39
      },
      {
        "id": 91,
        "strength": 38
      },
      {
        "id": 73,
        "strength": 37
      },
      {
        "id": 58,
        "strength": 36
      },
      {
        "id": 99,
        "strength": 35
      },
      {
        "id": 112,
        "strength": 34
      },
      {
        "id": 100,
        "strength": 33
      },
      {
        "id": 93,
        "strength": 32
      },
      {
        "id": 45,
        "strength": 31
      },
      {
        "id": 64,
        "strength": 30
      },
      {
        "id": 38,
        "strength": 29
      },
      {
        "id": 69,
        "strength": 28
      },
      {
        "id": 55,
        "strength": 27
      },
      {
        "id": 110,
        "strength": 26
      },
      {
        "id": 84,
        "strength": 25
      },
      {
        "id": 7,
        "strength": 24
      },
      {
        "id": 90,
        "strength": 23
      },
      {
        "id": 89,
        "strength": 22
      },
      {
        "id": 65,
        "strength": 21
      },
      {
        "id": 14,
        "strength": 20
      },
      {
        "id": 77,
        "strength": 19
      },
      {
        "id": 4,
        "strength": 18
      },
      {
        "id": 17,
        "strength": 17
      },
      {
        "id": 21,
        "strength": 16
      },
      {
        "id": 60,
        "strength": 15
      },
      {
        "id": 31,
        "strength": 14
      },
      {
        "id": 87,
        "strength": 13
      },
      {
        "id": 74,
        "strength": 12
      },
      {
        "id": 83,
        "strength": 11
      },
      {
        "id": 81,
        "strength": 10
      },
      {
        "id": 92,
        "strength": 9
      },
      {
        "id": 76,
        "strength": 8
      },
      {
        "id": 111,
        "strength": 7
      },
      {
        "id": 62,
        "strength": 6
      },
      {
        "id": 22,
        "strength": 5
      },
      {
        "id": 6,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 80
  },
  "81": {
    "email": "rjimenez@ccc.org.co",
    "choices": [
      {
        "id": 23,
        "strength": 114
      },
      {
        "id": 15,
        "strength": 113
      },
      {
        "id": 59,
        "strength": 112
      },
      {
        "id": 16,
        "strength": 111
      },
      {
        "id": 20,
        "strength": 109
      },
      {
        "id": 6,
        "strength": 108
      },
      {
        "id": 43,
        "strength": 107
      },
      {
        "id": 30,
        "strength": 106
      },
      {
        "id": 106,
        "strength": 105
      },
      {
        "id": 42,
        "strength": 104
      },
      {
        "id": 79,
        "strength": 103
      },
      {
        "id": 88,
        "strength": 102
      },
      {
        "id": 95,
        "strength": 101
      },
      {
        "id": 99,
        "strength": 100
      },
      {
        "id": 49,
        "strength": 99
      },
      {
        "id": 26,
        "strength": 98
      },
      {
        "id": 100,
        "strength": 97
      },
      {
        "id": 93,
        "strength": 96
      },
      {
        "id": 45,
        "strength": 95
      },
      {
        "id": 25,
        "strength": 94
      },
      {
        "id": 38,
        "strength": 93
      },
      {
        "id": 109,
        "strength": 92
      },
      {
        "id": 55,
        "strength": 91
      },
      {
        "id": 80,
        "strength": 90
      },
      {
        "id": 54,
        "strength": 89
      },
      {
        "id": 24,
        "strength": 88
      },
      {
        "id": 84,
        "strength": 87
      },
      {
        "id": 90,
        "strength": 86
      },
      {
        "id": 104,
        "strength": 85
      },
      {
        "id": 40,
        "strength": 84
      },
      {
        "id": 46,
        "strength": 83
      },
      {
        "id": 53,
        "strength": 82
      },
      {
        "id": 36,
        "strength": 81
      },
      {
        "id": 89,
        "strength": 80
      },
      {
        "id": 3,
        "strength": 79
      },
      {
        "id": 78,
        "strength": 78
      },
      {
        "id": 77,
        "strength": 77
      },
      {
        "id": 57,
        "strength": 76
      },
      {
        "id": 8,
        "strength": 75
      },
      {
        "id": 82,
        "strength": 74
      },
      {
        "id": 87,
        "strength": 73
      },
      {
        "id": 83,
        "strength": 72
      },
      {
        "id": 97,
        "strength": 71
      },
      {
        "id": 33,
        "strength": 70
      },
      {
        "id": 85,
        "strength": 69
      },
      {
        "id": 92,
        "strength": 68
      },
      {
        "id": 52,
        "strength": 67
      },
      {
        "id": 76,
        "strength": 66
      },
      {
        "id": 2,
        "strength": 65
      },
      {
        "id": 10,
        "strength": 64
      },
      {
        "id": 29,
        "strength": 63
      },
      {
        "id": 62,
        "strength": 62
      },
      {
        "id": 51,
        "strength": 61
      },
      {
        "id": 96,
        "strength": 60
      },
      {
        "id": 48,
        "strength": 58.5
      },
      {
        "id": 105,
        "strength": 57.5
      },
      {
        "id": 86,
        "strength": 56.5
      },
      {
        "id": 67,
        "strength": 55.5
      },
      {
        "id": 19,
        "strength": 54.5
      },
      {
        "id": 5,
        "strength": 53.5
      },
      {
        "id": 108,
        "strength": 52.5
      },
      {
        "id": 32,
        "strength": 51.5
      },
      {
        "id": 41,
        "strength": 50.5
      },
      {
        "id": 7,
        "strength": 49.5
      },
      {
        "id": 12,
        "strength": 48.5
      },
      {
        "id": 107,
        "strength": 47.5
      },
      {
        "id": 102,
        "strength": 46.5
      },
      {
        "id": 1,
        "strength": 45.5
      },
      {
        "id": 28,
        "strength": 44.5
      },
      {
        "id": 34,
        "strength": 43.5
      },
      {
        "id": 111,
        "strength": 42.5
      },
      {
        "id": 56,
        "strength": 41.5
      },
      {
        "id": 18,
        "strength": 40.5
      },
      {
        "id": 60,
        "strength": 39.5
      },
      {
        "id": 17,
        "strength": 38.5
      },
      {
        "id": 66,
        "strength": 37.5
      },
      {
        "id": 27,
        "strength": 36.5
      },
      {
        "id": 65,
        "strength": 35.5
      },
      {
        "id": 63,
        "strength": 34.5
      },
      {
        "id": 103,
        "strength": 33.5
      },
      {
        "id": 110,
        "strength": 32.5
      },
      {
        "id": 44,
        "strength": 31.5
      },
      {
        "id": 61,
        "strength": 30.5
      },
      {
        "id": 91,
        "strength": 29.5
      },
      {
        "id": 50,
        "strength": 28.5
      },
      {
        "id": 68,
        "strength": 27.5
      },
      {
        "id": 72,
        "strength": 26.5
      },
      {
        "id": 74,
        "strength": 25.5
      },
      {
        "id": 47,
        "strength": 24.5
      },
      {
        "id": 98,
        "strength": 23.5
      },
      {
        "id": 9,
        "strength": 22.5
      },
      {
        "id": 73,
        "strength": 21.5
      },
      {
        "id": 75,
        "strength": 20.5
      },
      {
        "id": 58,
        "strength": 19.5
      },
      {
        "id": 112,
        "strength": 18.5
      },
      {
        "id": 71,
        "strength": 17.5
      },
      {
        "id": 64,
        "strength": 16.5
      },
      {
        "id": 70,
        "strength": 15.5
      },
      {
        "id": 69,
        "strength": 14.5
      },
      {
        "id": 11,
        "strength": 13.5
      },
      {
        "id": 39,
        "strength": 12.5
      },
      {
        "id": 14,
        "strength": 11.5
      },
      {
        "id": 4,
        "strength": 10.5
      },
      {
        "id": 37,
        "strength": 9.5
      },
      {
        "id": 21,
        "strength": 8.5
      },
      {
        "id": 31,
        "strength": 7.5
      },
      {
        "id": 35,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 81
  },
  "82": {
    "email": "patricanales@hotmail.com",
    "choices": [
      {
        "id": 88,
        "strength": 115
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 113
      },
      {
        "id": 104,
        "strength": 112
      },
      {
        "id": 3,
        "strength": 111
      },
      {
        "id": 78,
        "strength": 110
      },
      {
        "id": 51,
        "strength": 109
      },
      {
        "id": 96,
        "strength": 108
      },
      {
        "id": 20,
        "strength": 106
      },
      {
        "id": 43,
        "strength": 105
      },
      {
        "id": 23,
        "strength": 104
      },
      {
        "id": 102,
        "strength": 103
      },
      {
        "id": 47,
        "strength": 102
      },
      {
        "id": 42,
        "strength": 101
      },
      {
        "id": 79,
        "strength": 100
      },
      {
        "id": 26,
        "strength": 99
      },
      {
        "id": 98,
        "strength": 98
      },
      {
        "id": 54,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 46,
        "strength": 95
      },
      {
        "id": 27,
        "strength": 94
      },
      {
        "id": 66,
        "strength": 93
      },
      {
        "id": 97,
        "strength": 92
      },
      {
        "id": 35,
        "strength": 91
      },
      {
        "id": 52,
        "strength": 90
      },
      {
        "id": 16,
        "strength": 89
      },
      {
        "id": 2,
        "strength": 88
      },
      {
        "id": 28,
        "strength": 86
      },
      {
        "id": 30,
        "strength": 85
      },
      {
        "id": 106,
        "strength": 84
      },
      {
        "id": 15,
        "strength": 83
      },
      {
        "id": 75,
        "strength": 82
      },
      {
        "id": 99,
        "strength": 81
      },
      {
        "id": 49,
        "strength": 80
      },
      {
        "id": 71,
        "strength": 79
      },
      {
        "id": 44,
        "strength": 78
      },
      {
        "id": 100,
        "strength": 77
      },
      {
        "id": 93,
        "strength": 76
      },
      {
        "id": 25,
        "strength": 75
      },
      {
        "id": 38,
        "strength": 74
      },
      {
        "id": 109,
        "strength": 73
      },
      {
        "id": 55,
        "strength": 72
      },
      {
        "id": 11,
        "strength": 71
      },
      {
        "id": 34,
        "strength": 70
      },
      {
        "id": 39,
        "strength": 69
      },
      {
        "id": 84,
        "strength": 68
      },
      {
        "id": 90,
        "strength": 67
      },
      {
        "id": 40,
        "strength": 66
      },
      {
        "id": 53,
        "strength": 65
      },
      {
        "id": 36,
        "strength": 64
      },
      {
        "id": 89,
        "strength": 63
      },
      {
        "id": 103,
        "strength": 62
      },
      {
        "id": 77,
        "strength": 61
      },
      {
        "id": 57,
        "strength": 60
      },
      {
        "id": 37,
        "strength": 59
      },
      {
        "id": 8,
        "strength": 58
      },
      {
        "id": 19,
        "strength": 57
      },
      {
        "id": 87,
        "strength": 56
      },
      {
        "id": 83,
        "strength": 55
      },
      {
        "id": 18,
        "strength": 54
      },
      {
        "id": 81,
        "strength": 53
      },
      {
        "id": 33,
        "strength": 52
      },
      {
        "id": 85,
        "strength": 51
      },
      {
        "id": 92,
        "strength": 50
      },
      {
        "id": 76,
        "strength": 49
      },
      {
        "id": 10,
        "strength": 48
      },
      {
        "id": 29,
        "strength": 47
      },
      {
        "id": 13,
        "strength": 46
      },
      {
        "id": 62,
        "strength": 45
      },
      {
        "id": 101,
        "strength": 44
      },
      {
        "id": 105,
        "strength": 43
      },
      {
        "id": 48,
        "strength": 41.5
      },
      {
        "id": 86,
        "strength": 40.5
      },
      {
        "id": 67,
        "strength": 39.5
      },
      {
        "id": 6,
        "strength": 38.5
      },
      {
        "id": 5,
        "strength": 37.5
      },
      {
        "id": 108,
        "strength": 36.5
      },
      {
        "id": 32,
        "strength": 35.5
      },
      {
        "id": 41,
        "strength": 34.5
      },
      {
        "id": 7,
        "strength": 33.5
      },
      {
        "id": 12,
        "strength": 32.5
      },
      {
        "id": 107,
        "strength": 31.5
      },
      {
        "id": 1,
        "strength": 30.5
      },
      {
        "id": 111,
        "strength": 29.5
      },
      {
        "id": 56,
        "strength": 28.5
      },
      {
        "id": 60,
        "strength": 27.5
      },
      {
        "id": 17,
        "strength": 26.5
      },
      {
        "id": 65,
        "strength": 25.5
      },
      {
        "id": 63,
        "strength": 24.5
      },
      {
        "id": 110,
        "strength": 23.5
      },
      {
        "id": 61,
        "strength": 22.5
      },
      {
        "id": 91,
        "strength": 21.5
      },
      {
        "id": 50,
        "strength": 20.5
      },
      {
        "id": 68,
        "strength": 19.5
      },
      {
        "id": 72,
        "strength": 18.5
      },
      {
        "id": 74,
        "strength": 17.5
      },
      {
        "id": 24,
        "strength": 16.5
      },
      {
        "id": 9,
        "strength": 15.5
      },
      {
        "id": 73,
        "strength": 14.5
      },
      {
        "id": 58,
        "strength": 13.5
      },
      {
        "id": 112,
        "strength": 12.5
      },
      {
        "id": 45,
        "strength": 11.5
      },
      {
        "id": 64,
        "strength": 10.5
      },
      {
        "id": 70,
        "strength": 9.5
      },
      {
        "id": 69,
        "strength": 8.5
      },
      {
        "id": 14,
        "strength": 7.5
      },
      {
        "id": 4,
        "strength": 6.5
      },
      {
        "id": 21,
        "strength": 5.5
      },
      {
        "id": 31,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 82
  },
  "83": {
    "email": "rafael.tristan@itesm.mx",
    "choices": [
      {
        "id": 15,
        "strength": 114
      },
      {
        "id": 20,
        "strength": 112
      },
      {
        "id": 43,
        "strength": 111
      },
      {
        "id": 30,
        "strength": 110
      },
      {
        "id": 23,
        "strength": 109
      },
      {
        "id": 106,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 25,
        "strength": 100
      },
      {
        "id": 38,
        "strength": 99
      },
      {
        "id": 109,
        "strength": 98
      },
      {
        "id": 55,
        "strength": 97
      },
      {
        "id": 80,
        "strength": 96
      },
      {
        "id": 54,
        "strength": 95
      },
      {
        "id": 59,
        "strength": 94
      },
      {
        "id": 24,
        "strength": 93
      },
      {
        "id": 84,
        "strength": 92
      },
      {
        "id": 90,
        "strength": 91
      },
      {
        "id": 104,
        "strength": 90
      },
      {
        "id": 40,
        "strength": 89
      },
      {
        "id": 46,
        "strength": 88
      },
      {
        "id": 53,
        "strength": 87
      },
      {
        "id": 89,
        "strength": 86
      },
      {
        "id": 3,
        "strength": 85
      },
      {
        "id": 78,
        "strength": 84
      },
      {
        "id": 77,
        "strength": 83
      },
      {
        "id": 57,
        "strength": 82
      },
      {
        "id": 8,
        "strength": 81
      },
      {
        "id": 82,
        "strength": 80
      },
      {
        "id": 87,
        "strength": 79
      },
      {
        "id": 97,
        "strength": 78
      },
      {
        "id": 81,
        "strength": 77
      },
      {
        "id": 85,
        "strength": 76
      },
      {
        "id": 92,
        "strength": 75
      },
      {
        "id": 52,
        "strength": 74
      },
      {
        "id": 76,
        "strength": 73
      },
      {
        "id": 56,
        "strength": 72
      },
      {
        "id": 16,
        "strength": 71
      },
      {
        "id": 2,
        "strength": 70
      },
      {
        "id": 10,
        "strength": 69
      },
      {
        "id": 13,
        "strength": 68
      },
      {
        "id": 62,
        "strength": 67
      },
      {
        "id": 51,
        "strength": 66
      },
      {
        "id": 96,
        "strength": 65
      },
      {
        "id": 48,
        "strength": 63.5
      },
      {
        "id": 105,
        "strength": 62.5
      },
      {
        "id": 86,
        "strength": 61.5
      },
      {
        "id": 67,
        "strength": 60.5
      },
      {
        "id": 6,
        "strength": 59.5
      },
      {
        "id": 19,
        "strength": 58.5
      },
      {
        "id": 5,
        "strength": 57.5
      },
      {
        "id": 108,
        "strength": 56.5
      },
      {
        "id": 32,
        "strength": 55.5
      },
      {
        "id": 41,
        "strength": 54.5
      },
      {
        "id": 7,
        "strength": 53.5
      },
      {
        "id": 12,
        "strength": 52.5
      },
      {
        "id": 107,
        "strength": 51.5
      },
      {
        "id": 102,
        "strength": 50.5
      },
      {
        "id": 1,
        "strength": 49.5
      },
      {
        "id": 28,
        "strength": 48.5
      },
      {
        "id": 34,
        "strength": 47.5
      },
      {
        "id": 111,
        "strength": 46.5
      },
      {
        "id": 29,
        "strength": 45.5
      },
      {
        "id": 18,
        "strength": 44.5
      },
      {
        "id": 60,
        "strength": 43.5
      },
      {
        "id": 17,
        "strength": 42.5
      },
      {
        "id": 66,
        "strength": 41.5
      },
      {
        "id": 27,
        "strength": 40.5
      },
      {
        "id": 65,
        "strength": 39.5
      },
      {
        "id": 63,
        "strength": 38.5
      },
      {
        "id": 103,
        "strength": 37.5
      },
      {
        "id": 36,
        "strength": 36.5
      },
      {
        "id": 110,
        "strength": 35.5
      },
      {
        "id": 44,
        "strength": 34.5
      },
      {
        "id": 61,
        "strength": 33.5
      },
      {
        "id": 91,
        "strength": 32.5
      },
      {
        "id": 50,
        "strength": 31.5
      },
      {
        "id": 68,
        "strength": 30.5
      },
      {
        "id": 72,
        "strength": 29.5
      },
      {
        "id": 74,
        "strength": 28.5
      },
      {
        "id": 47,
        "strength": 27.5
      },
      {
        "id": 98,
        "strength": 26.5
      },
      {
        "id": 9,
        "strength": 25.5
      },
      {
        "id": 42,
        "strength": 24.5
      },
      {
        "id": 73,
        "strength": 23.5
      },
      {
        "id": 75,
        "strength": 22.5
      },
      {
        "id": 58,
        "strength": 21.5
      },
      {
        "id": 112,
        "strength": 20.5
      },
      {
        "id": 71,
        "strength": 19.5
      },
      {
        "id": 26,
        "strength": 18.5
      },
      {
        "id": 45,
        "strength": 17.5
      },
      {
        "id": 64,
        "strength": 16.5
      },
      {
        "id": 70,
        "strength": 15.5
      },
      {
        "id": 69,
        "strength": 14.5
      },
      {
        "id": 11,
        "strength": 13.5
      },
      {
        "id": 39,
        "strength": 12.5
      },
      {
        "id": 14,
        "strength": 11.5
      },
      {
        "id": 4,
        "strength": 10.5
      },
      {
        "id": 37,
        "strength": 9.5
      },
      {
        "id": 21,
        "strength": 8.5
      },
      {
        "id": 31,
        "strength": 7.5
      },
      {
        "id": 33,
        "strength": 6.5
      },
      {
        "id": 35,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 83
  },
  "84": {
    "email": "lperez@pronacom.org",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 25,
        "strength": 100
      },
      {
        "id": 38,
        "strength": 99
      },
      {
        "id": 109,
        "strength": 98
      },
      {
        "id": 55,
        "strength": 97
      },
      {
        "id": 80,
        "strength": 96
      },
      {
        "id": 54,
        "strength": 95
      },
      {
        "id": 59,
        "strength": 94
      },
      {
        "id": 90,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 40,
        "strength": 91
      },
      {
        "id": 46,
        "strength": 90
      },
      {
        "id": 53,
        "strength": 89
      },
      {
        "id": 89,
        "strength": 88
      },
      {
        "id": 3,
        "strength": 87
      },
      {
        "id": 78,
        "strength": 86
      },
      {
        "id": 77,
        "strength": 85
      },
      {
        "id": 57,
        "strength": 84
      },
      {
        "id": 8,
        "strength": 83
      },
      {
        "id": 82,
        "strength": 82
      },
      {
        "id": 87,
        "strength": 81
      },
      {
        "id": 83,
        "strength": 80
      },
      {
        "id": 18,
        "strength": 79
      },
      {
        "id": 97,
        "strength": 78
      },
      {
        "id": 81,
        "strength": 77
      },
      {
        "id": 85,
        "strength": 76
      },
      {
        "id": 92,
        "strength": 75
      },
      {
        "id": 52,
        "strength": 74
      },
      {
        "id": 76,
        "strength": 73
      },
      {
        "id": 16,
        "strength": 72
      },
      {
        "id": 2,
        "strength": 71
      },
      {
        "id": 29,
        "strength": 70
      },
      {
        "id": 62,
        "strength": 69
      },
      {
        "id": 51,
        "strength": 68
      },
      {
        "id": 96,
        "strength": 67
      },
      {
        "id": 48,
        "strength": 65.5
      },
      {
        "id": 105,
        "strength": 64.5
      },
      {
        "id": 86,
        "strength": 63.5
      },
      {
        "id": 67,
        "strength": 62.5
      },
      {
        "id": 6,
        "strength": 61.5
      },
      {
        "id": 19,
        "strength": 60.5
      },
      {
        "id": 5,
        "strength": 59.5
      },
      {
        "id": 108,
        "strength": 58.5
      },
      {
        "id": 32,
        "strength": 57.5
      },
      {
        "id": 41,
        "strength": 56.5
      },
      {
        "id": 7,
        "strength": 55.5
      },
      {
        "id": 12,
        "strength": 54.5
      },
      {
        "id": 107,
        "strength": 53.5
      },
      {
        "id": 102,
        "strength": 52.5
      },
      {
        "id": 1,
        "strength": 51.5
      },
      {
        "id": 28,
        "strength": 50.5
      },
      {
        "id": 34,
        "strength": 49.5
      },
      {
        "id": 111,
        "strength": 48.5
      },
      {
        "id": 56,
        "strength": 47.5
      },
      {
        "id": 60,
        "strength": 46.5
      },
      {
        "id": 17,
        "strength": 45.5
      },
      {
        "id": 66,
        "strength": 44.5
      },
      {
        "id": 27,
        "strength": 43.5
      },
      {
        "id": 65,
        "strength": 42.5
      },
      {
        "id": 63,
        "strength": 41.5
      },
      {
        "id": 103,
        "strength": 40.5
      },
      {
        "id": 36,
        "strength": 39.5
      },
      {
        "id": 110,
        "strength": 38.5
      },
      {
        "id": 44,
        "strength": 37.5
      },
      {
        "id": 61,
        "strength": 36.5
      },
      {
        "id": 91,
        "strength": 35.5
      },
      {
        "id": 50,
        "strength": 34.5
      },
      {
        "id": 68,
        "strength": 33.5
      },
      {
        "id": 72,
        "strength": 32.5
      },
      {
        "id": 74,
        "strength": 31.5
      },
      {
        "id": 24,
        "strength": 30.5
      },
      {
        "id": 47,
        "strength": 29.5
      },
      {
        "id": 98,
        "strength": 28.5
      },
      {
        "id": 9,
        "strength": 27.5
      },
      {
        "id": 42,
        "strength": 26.5
      },
      {
        "id": 73,
        "strength": 25.5
      },
      {
        "id": 75,
        "strength": 24.5
      },
      {
        "id": 58,
        "strength": 23.5
      },
      {
        "id": 112,
        "strength": 22.5
      },
      {
        "id": 71,
        "strength": 21.5
      },
      {
        "id": 26,
        "strength": 20.5
      },
      {
        "id": 45,
        "strength": 19.5
      },
      {
        "id": 64,
        "strength": 18.5
      },
      {
        "id": 70,
        "strength": 17.5
      },
      {
        "id": 69,
        "strength": 16.5
      },
      {
        "id": 11,
        "strength": 15.5
      },
      {
        "id": 39,
        "strength": 14.5
      },
      {
        "id": 14,
        "strength": 13.5
      },
      {
        "id": 4,
        "strength": 12.5
      },
      {
        "id": 37,
        "strength": 11.5
      },
      {
        "id": 21,
        "strength": 10.5
      },
      {
        "id": 31,
        "strength": 9.5
      },
      {
        "id": 33,
        "strength": 8.5
      },
      {
        "id": 35,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 84
  },
  "85": {
    "email": "Rodrigo@nvm.org.mx",
    "choices": [
      {
        "id": 15,
        "strength": 114
      },
      {
        "id": 25,
        "strength": 113
      },
      {
        "id": 80,
        "strength": 112
      },
      {
        "id": 59,
        "strength": 111
      },
      {
        "id": 52,
        "strength": 110
      },
      {
        "id": 16,
        "strength": 109
      },
      {
        "id": 2,
        "strength": 108
      },
      {
        "id": 13,
        "strength": 107
      },
      {
        "id": 20,
        "strength": 105
      },
      {
        "id": 43,
        "strength": 104
      },
      {
        "id": 30,
        "strength": 103
      },
      {
        "id": 32,
        "strength": 102
      },
      {
        "id": 23,
        "strength": 101
      },
      {
        "id": 106,
        "strength": 100
      },
      {
        "id": 47,
        "strength": 99
      },
      {
        "id": 42,
        "strength": 98
      },
      {
        "id": 79,
        "strength": 97
      },
      {
        "id": 12,
        "strength": 96
      },
      {
        "id": 88,
        "strength": 95
      },
      {
        "id": 95,
        "strength": 94
      },
      {
        "id": 99,
        "strength": 93
      },
      {
        "id": 49,
        "strength": 92
      },
      {
        "id": 71,
        "strength": 91
      },
      {
        "id": 61,
        "strength": 90
      },
      {
        "id": 100,
        "strength": 89
      },
      {
        "id": 93,
        "strength": 88
      },
      {
        "id": 70,
        "strength": 87
      },
      {
        "id": 38,
        "strength": 86
      },
      {
        "id": 109,
        "strength": 85
      },
      {
        "id": 1,
        "strength": 84
      },
      {
        "id": 55,
        "strength": 83
      },
      {
        "id": 11,
        "strength": 82
      },
      {
        "id": 54,
        "strength": 81
      },
      {
        "id": 24,
        "strength": 80
      },
      {
        "id": 84,
        "strength": 79
      },
      {
        "id": 90,
        "strength": 78
      },
      {
        "id": 104,
        "strength": 77
      },
      {
        "id": 40,
        "strength": 76
      },
      {
        "id": 41,
        "strength": 75
      },
      {
        "id": 46,
        "strength": 74
      },
      {
        "id": 53,
        "strength": 73
      },
      {
        "id": 89,
        "strength": 72
      },
      {
        "id": 3,
        "strength": 71
      },
      {
        "id": 78,
        "strength": 70
      },
      {
        "id": 27,
        "strength": 69
      },
      {
        "id": 77,
        "strength": 68
      },
      {
        "id": 57,
        "strength": 67
      },
      {
        "id": 8,
        "strength": 66
      },
      {
        "id": 82,
        "strength": 65
      },
      {
        "id": 87,
        "strength": 64
      },
      {
        "id": 83,
        "strength": 63
      },
      {
        "id": 97,
        "strength": 62
      },
      {
        "id": 81,
        "strength": 61
      },
      {
        "id": 33,
        "strength": 60
      },
      {
        "id": 35,
        "strength": 59
      },
      {
        "id": 92,
        "strength": 58
      },
      {
        "id": 76,
        "strength": 57
      },
      {
        "id": 56,
        "strength": 56
      },
      {
        "id": 10,
        "strength": 55
      },
      {
        "id": 72,
        "strength": 54
      },
      {
        "id": 62,
        "strength": 53
      },
      {
        "id": 51,
        "strength": 52
      },
      {
        "id": 96,
        "strength": 51
      },
      {
        "id": 48,
        "strength": 49.5
      },
      {
        "id": 105,
        "strength": 48.5
      },
      {
        "id": 86,
        "strength": 47.5
      },
      {
        "id": 67,
        "strength": 46.5
      },
      {
        "id": 6,
        "strength": 45.5
      },
      {
        "id": 19,
        "strength": 44.5
      },
      {
        "id": 5,
        "strength": 43.5
      },
      {
        "id": 108,
        "strength": 42.5
      },
      {
        "id": 7,
        "strength": 41.5
      },
      {
        "id": 107,
        "strength": 40.5
      },
      {
        "id": 102,
        "strength": 39.5
      },
      {
        "id": 28,
        "strength": 38.5
      },
      {
        "id": 34,
        "strength": 37.5
      },
      {
        "id": 111,
        "strength": 36.5
      },
      {
        "id": 29,
        "strength": 35.5
      },
      {
        "id": 18,
        "strength": 34.5
      },
      {
        "id": 60,
        "strength": 33.5
      },
      {
        "id": 17,
        "strength": 32.5
      },
      {
        "id": 66,
        "strength": 31.5
      },
      {
        "id": 65,
        "strength": 30.5
      },
      {
        "id": 63,
        "strength": 29.5
      },
      {
        "id": 103,
        "strength": 28.5
      },
      {
        "id": 36,
        "strength": 27.5
      },
      {
        "id": 110,
        "strength": 26.5
      },
      {
        "id": 44,
        "strength": 25.5
      },
      {
        "id": 91,
        "strength": 24.5
      },
      {
        "id": 50,
        "strength": 23.5
      },
      {
        "id": 68,
        "strength": 22.5
      },
      {
        "id": 74,
        "strength": 21.5
      },
      {
        "id": 98,
        "strength": 20.5
      },
      {
        "id": 9,
        "strength": 19.5
      },
      {
        "id": 73,
        "strength": 18.5
      },
      {
        "id": 75,
        "strength": 17.5
      },
      {
        "id": 58,
        "strength": 16.5
      },
      {
        "id": 112,
        "strength": 15.5
      },
      {
        "id": 26,
        "strength": 14.5
      },
      {
        "id": 45,
        "strength": 13.5
      },
      {
        "id": 64,
        "strength": 12.5
      },
      {
        "id": 69,
        "strength": 11.5
      },
      {
        "id": 39,
        "strength": 10.5
      },
      {
        "id": 14,
        "strength": 9.5
      },
      {
        "id": 4,
        "strength": 8.5
      },
      {
        "id": 37,
        "strength": 7.5
      },
      {
        "id": 21,
        "strength": 6.5
      },
      {
        "id": 31,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 85
  },
  "86": {
    "email": "tom.flanagan@dit.ie",
    "choices": [
      {
        "id": 61,
        "strength": 114
      },
      {
        "id": 70,
        "strength": 113
      },
      {
        "id": 80,
        "strength": 112
      },
      {
        "id": 34,
        "strength": 111
      },
      {
        "id": 36,
        "strength": 110
      },
      {
        "id": 103,
        "strength": 109
      },
      {
        "id": 63,
        "strength": 108
      },
      {
        "id": 19,
        "strength": 107
      },
      {
        "id": 13,
        "strength": 106
      },
      {
        "id": 107,
        "strength": 105
      },
      {
        "id": 108,
        "strength": 104
      },
      {
        "id": 105,
        "strength": 103
      },
      {
        "id": 20,
        "strength": 101
      },
      {
        "id": 48,
        "strength": 100
      },
      {
        "id": 28,
        "strength": 99
      },
      {
        "id": 43,
        "strength": 98
      },
      {
        "id": 30,
        "strength": 97
      },
      {
        "id": 67,
        "strength": 96
      },
      {
        "id": 5,
        "strength": 95
      },
      {
        "id": 32,
        "strength": 94
      },
      {
        "id": 23,
        "strength": 93
      },
      {
        "id": 102,
        "strength": 92
      },
      {
        "id": 68,
        "strength": 91
      },
      {
        "id": 9,
        "strength": 90
      },
      {
        "id": 106,
        "strength": 89
      },
      {
        "id": 15,
        "strength": 88
      },
      {
        "id": 50,
        "strength": 87
      },
      {
        "id": 47,
        "strength": 86
      },
      {
        "id": 42,
        "strength": 85
      },
      {
        "id": 12,
        "strength": 84
      },
      {
        "id": 91,
        "strength": 83
      },
      {
        "id": 73,
        "strength": 82
      },
      {
        "id": 88,
        "strength": 81
      },
      {
        "id": 75,
        "strength": 80
      },
      {
        "id": 95,
        "strength": 79
      },
      {
        "id": 58,
        "strength": 78
      },
      {
        "id": 112,
        "strength": 77
      },
      {
        "id": 49,
        "strength": 76
      },
      {
        "id": 71,
        "strength": 75
      },
      {
        "id": 44,
        "strength": 74
      },
      {
        "id": 26,
        "strength": 73
      },
      {
        "id": 45,
        "strength": 72
      },
      {
        "id": 64,
        "strength": 71
      },
      {
        "id": 25,
        "strength": 70
      },
      {
        "id": 109,
        "strength": 69
      },
      {
        "id": 69,
        "strength": 68
      },
      {
        "id": 1,
        "strength": 67
      },
      {
        "id": 110,
        "strength": 66
      },
      {
        "id": 11,
        "strength": 65
      },
      {
        "id": 59,
        "strength": 64
      },
      {
        "id": 24,
        "strength": 63
      },
      {
        "id": 39,
        "strength": 62
      },
      {
        "id": 7,
        "strength": 61
      },
      {
        "id": 40,
        "strength": 60
      },
      {
        "id": 41,
        "strength": 59
      },
      {
        "id": 46,
        "strength": 58
      },
      {
        "id": 53,
        "strength": 57
      },
      {
        "id": 3,
        "strength": 56
      },
      {
        "id": 78,
        "strength": 55
      },
      {
        "id": 65,
        "strength": 54
      },
      {
        "id": 27,
        "strength": 53
      },
      {
        "id": 14,
        "strength": 52
      },
      {
        "id": 57,
        "strength": 51
      },
      {
        "id": 66,
        "strength": 50
      },
      {
        "id": 4,
        "strength": 49
      },
      {
        "id": 17,
        "strength": 48
      },
      {
        "id": 37,
        "strength": 47
      },
      {
        "id": 8,
        "strength": 46
      },
      {
        "id": 21,
        "strength": 45
      },
      {
        "id": 60,
        "strength": 44
      },
      {
        "id": 31,
        "strength": 43
      },
      {
        "id": 74,
        "strength": 42
      },
      {
        "id": 18,
        "strength": 41
      },
      {
        "id": 33,
        "strength": 40
      },
      {
        "id": 35,
        "strength": 39
      },
      {
        "id": 52,
        "strength": 38
      },
      {
        "id": 56,
        "strength": 37
      },
      {
        "id": 16,
        "strength": 36
      },
      {
        "id": 2,
        "strength": 35
      },
      {
        "id": 10,
        "strength": 34
      },
      {
        "id": 29,
        "strength": 33
      },
      {
        "id": 111,
        "strength": 32
      },
      {
        "id": 72,
        "strength": 31
      },
      {
        "id": 22,
        "strength": 30
      },
      {
        "id": 96,
        "strength": 29
      },
      {
        "id": 101,
        "strength": 28
      },
      {
        "id": 6,
        "strength": 26.5
      },
      {
        "id": 38,
        "strength": 25.5
      },
      {
        "id": 62,
        "strength": 24.5
      },
      {
        "id": 92,
        "strength": 23.5
      },
      {
        "id": 85,
        "strength": 22.5
      },
      {
        "id": 81,
        "strength": 21.5
      },
      {
        "id": 87,
        "strength": 20.5
      },
      {
        "id": 82,
        "strength": 19.5
      },
      {
        "id": 90,
        "strength": 18.5
      },
      {
        "id": 84,
        "strength": 17.5
      },
      {
        "id": 55,
        "strength": 16.5
      },
      {
        "id": 100,
        "strength": 15.5
      },
      {
        "id": 93,
        "strength": 14.5
      },
      {
        "id": 99,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 86
  },
  "87": {
    "email": "pfigueroa@pdpyme.com",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 38,
        "strength": 100
      },
      {
        "id": 109,
        "strength": 99
      },
      {
        "id": 55,
        "strength": 98
      },
      {
        "id": 80,
        "strength": 97
      },
      {
        "id": 54,
        "strength": 96
      },
      {
        "id": 59,
        "strength": 95
      },
      {
        "id": 84,
        "strength": 94
      },
      {
        "id": 90,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 40,
        "strength": 91
      },
      {
        "id": 46,
        "strength": 90
      },
      {
        "id": 53,
        "strength": 89
      },
      {
        "id": 89,
        "strength": 88
      },
      {
        "id": 3,
        "strength": 87
      },
      {
        "id": 78,
        "strength": 86
      },
      {
        "id": 27,
        "strength": 85
      },
      {
        "id": 77,
        "strength": 84
      },
      {
        "id": 57,
        "strength": 83
      },
      {
        "id": 8,
        "strength": 82
      },
      {
        "id": 82,
        "strength": 81
      },
      {
        "id": 83,
        "strength": 79
      },
      {
        "id": 97,
        "strength": 78
      },
      {
        "id": 81,
        "strength": 77
      },
      {
        "id": 85,
        "strength": 76
      },
      {
        "id": 92,
        "strength": 75
      },
      {
        "id": 52,
        "strength": 74
      },
      {
        "id": 76,
        "strength": 73
      },
      {
        "id": 16,
        "strength": 72
      },
      {
        "id": 2,
        "strength": 71
      },
      {
        "id": 62,
        "strength": 70
      },
      {
        "id": 51,
        "strength": 69
      },
      {
        "id": 96,
        "strength": 68
      },
      {
        "id": 48,
        "strength": 66.5
      },
      {
        "id": 105,
        "strength": 65.5
      },
      {
        "id": 86,
        "strength": 64.5
      },
      {
        "id": 67,
        "strength": 63.5
      },
      {
        "id": 6,
        "strength": 62.5
      },
      {
        "id": 19,
        "strength": 61.5
      },
      {
        "id": 5,
        "strength": 60.5
      },
      {
        "id": 108,
        "strength": 59.5
      },
      {
        "id": 32,
        "strength": 58.5
      },
      {
        "id": 41,
        "strength": 57.5
      },
      {
        "id": 7,
        "strength": 56.5
      },
      {
        "id": 12,
        "strength": 55.5
      },
      {
        "id": 107,
        "strength": 54.5
      },
      {
        "id": 102,
        "strength": 53.5
      },
      {
        "id": 1,
        "strength": 52.5
      },
      {
        "id": 28,
        "strength": 51.5
      },
      {
        "id": 34,
        "strength": 50.5
      },
      {
        "id": 111,
        "strength": 49.5
      },
      {
        "id": 29,
        "strength": 48.5
      },
      {
        "id": 56,
        "strength": 47.5
      },
      {
        "id": 18,
        "strength": 46.5
      },
      {
        "id": 60,
        "strength": 45.5
      },
      {
        "id": 17,
        "strength": 44.5
      },
      {
        "id": 66,
        "strength": 43.5
      },
      {
        "id": 65,
        "strength": 42.5
      },
      {
        "id": 63,
        "strength": 41.5
      },
      {
        "id": 103,
        "strength": 40.5
      },
      {
        "id": 36,
        "strength": 39.5
      },
      {
        "id": 110,
        "strength": 38.5
      },
      {
        "id": 25,
        "strength": 37.5
      },
      {
        "id": 44,
        "strength": 36.5
      },
      {
        "id": 61,
        "strength": 35.5
      },
      {
        "id": 91,
        "strength": 34.5
      },
      {
        "id": 50,
        "strength": 33.5
      },
      {
        "id": 68,
        "strength": 32.5
      },
      {
        "id": 72,
        "strength": 31.5
      },
      {
        "id": 74,
        "strength": 30.5
      },
      {
        "id": 24,
        "strength": 29.5
      },
      {
        "id": 47,
        "strength": 28.5
      },
      {
        "id": 98,
        "strength": 27.5
      },
      {
        "id": 9,
        "strength": 26.5
      },
      {
        "id": 42,
        "strength": 25.5
      },
      {
        "id": 73,
        "strength": 24.5
      },
      {
        "id": 75,
        "strength": 23.5
      },
      {
        "id": 58,
        "strength": 22.5
      },
      {
        "id": 112,
        "strength": 21.5
      },
      {
        "id": 71,
        "strength": 20.5
      },
      {
        "id": 26,
        "strength": 19.5
      },
      {
        "id": 45,
        "strength": 18.5
      },
      {
        "id": 64,
        "strength": 17.5
      },
      {
        "id": 70,
        "strength": 16.5
      },
      {
        "id": 69,
        "strength": 15.5
      },
      {
        "id": 11,
        "strength": 14.5
      },
      {
        "id": 39,
        "strength": 13.5
      },
      {
        "id": 14,
        "strength": 12.5
      },
      {
        "id": 4,
        "strength": 11.5
      },
      {
        "id": 37,
        "strength": 10.5
      },
      {
        "id": 21,
        "strength": 9.5
      },
      {
        "id": 31,
        "strength": 8.5
      },
      {
        "id": 33,
        "strength": 7.5
      },
      {
        "id": 35,
        "strength": 6.5
      },
      {
        "id": 10,
        "strength": 5.5
      },
      {
        "id": 13,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      },
      {
        "id": 101,
        "strength": 1.5
      }
    ],
    "id": 87
  },
  "88": {
    "email": "elara@cenpromype.org",
    "choices": [
      {
        "id": 80,
        "strength": 116
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 104,
        "strength": 113
      },
      {
        "id": 3,
        "strength": 112
      },
      {
        "id": 78,
        "strength": 111
      },
      {
        "id": 82,
        "strength": 110
      },
      {
        "id": 51,
        "strength": 109
      },
      {
        "id": 20,
        "strength": 107
      },
      {
        "id": 43,
        "strength": 106
      },
      {
        "id": 23,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 47,
        "strength": 103
      },
      {
        "id": 42,
        "strength": 102
      },
      {
        "id": 79,
        "strength": 101
      },
      {
        "id": 26,
        "strength": 100
      },
      {
        "id": 98,
        "strength": 99
      },
      {
        "id": 54,
        "strength": 98
      },
      {
        "id": 34,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 46,
        "strength": 95
      },
      {
        "id": 36,
        "strength": 94
      },
      {
        "id": 103,
        "strength": 93
      },
      {
        "id": 27,
        "strength": 92
      },
      {
        "id": 66,
        "strength": 91
      },
      {
        "id": 19,
        "strength": 90
      },
      {
        "id": 97,
        "strength": 89
      },
      {
        "id": 35,
        "strength": 88
      },
      {
        "id": 52,
        "strength": 87
      },
      {
        "id": 16,
        "strength": 86
      },
      {
        "id": 2,
        "strength": 85
      },
      {
        "id": 105,
        "strength": 84
      },
      {
        "id": 28,
        "strength": 82
      },
      {
        "id": 30,
        "strength": 81
      },
      {
        "id": 106,
        "strength": 80
      },
      {
        "id": 15,
        "strength": 79
      },
      {
        "id": 75,
        "strength": 78
      },
      {
        "id": 99,
        "strength": 77
      },
      {
        "id": 49,
        "strength": 76
      },
      {
        "id": 71,
        "strength": 75
      },
      {
        "id": 61,
        "strength": 74
      },
      {
        "id": 44,
        "strength": 73
      },
      {
        "id": 100,
        "strength": 72
      },
      {
        "id": 93,
        "strength": 71
      },
      {
        "id": 25,
        "strength": 70
      },
      {
        "id": 70,
        "strength": 69
      },
      {
        "id": 38,
        "strength": 68
      },
      {
        "id": 109,
        "strength": 67
      },
      {
        "id": 55,
        "strength": 66
      },
      {
        "id": 11,
        "strength": 65
      },
      {
        "id": 39,
        "strength": 64
      },
      {
        "id": 84,
        "strength": 63
      },
      {
        "id": 90,
        "strength": 62
      },
      {
        "id": 40,
        "strength": 61
      },
      {
        "id": 53,
        "strength": 60
      },
      {
        "id": 89,
        "strength": 59
      },
      {
        "id": 63,
        "strength": 58
      },
      {
        "id": 77,
        "strength": 57
      },
      {
        "id": 57,
        "strength": 56
      },
      {
        "id": 37,
        "strength": 55
      },
      {
        "id": 8,
        "strength": 54
      },
      {
        "id": 87,
        "strength": 53
      },
      {
        "id": 83,
        "strength": 52
      },
      {
        "id": 18,
        "strength": 51
      },
      {
        "id": 81,
        "strength": 50
      },
      {
        "id": 33,
        "strength": 49
      },
      {
        "id": 85,
        "strength": 48
      },
      {
        "id": 92,
        "strength": 47
      },
      {
        "id": 76,
        "strength": 46
      },
      {
        "id": 10,
        "strength": 45
      },
      {
        "id": 29,
        "strength": 44
      },
      {
        "id": 13,
        "strength": 43
      },
      {
        "id": 86,
        "strength": 42
      },
      {
        "id": 62,
        "strength": 41
      },
      {
        "id": 96,
        "strength": 40
      },
      {
        "id": 107,
        "strength": 39
      },
      {
        "id": 108,
        "strength": 38
      },
      {
        "id": 101,
        "strength": 37
      },
      {
        "id": 48,
        "strength": 35.5
      },
      {
        "id": 67,
        "strength": 34.5
      },
      {
        "id": 6,
        "strength": 33.5
      },
      {
        "id": 5,
        "strength": 32.5
      },
      {
        "id": 32,
        "strength": 31.5
      },
      {
        "id": 41,
        "strength": 30.5
      },
      {
        "id": 7,
        "strength": 29.5
      },
      {
        "id": 12,
        "strength": 28.5
      },
      {
        "id": 1,
        "strength": 27.5
      },
      {
        "id": 111,
        "strength": 26.5
      },
      {
        "id": 56,
        "strength": 25.5
      },
      {
        "id": 60,
        "strength": 24.5
      },
      {
        "id": 17,
        "strength": 23.5
      },
      {
        "id": 65,
        "strength": 22.5
      },
      {
        "id": 110,
        "strength": 21.5
      },
      {
        "id": 91,
        "strength": 20.5
      },
      {
        "id": 50,
        "strength": 19.5
      },
      {
        "id": 68,
        "strength": 18.5
      },
      {
        "id": 72,
        "strength": 17.5
      },
      {
        "id": 74,
        "strength": 16.5
      },
      {
        "id": 24,
        "strength": 15.5
      },
      {
        "id": 9,
        "strength": 14.5
      },
      {
        "id": 73,
        "strength": 13.5
      },
      {
        "id": 58,
        "strength": 12.5
      },
      {
        "id": 112,
        "strength": 11.5
      },
      {
        "id": 45,
        "strength": 10.5
      },
      {
        "id": 64,
        "strength": 9.5
      },
      {
        "id": 69,
        "strength": 8.5
      },
      {
        "id": 14,
        "strength": 7.5
      },
      {
        "id": 4,
        "strength": 6.5
      },
      {
        "id": 21,
        "strength": 5.5
      },
      {
        "id": 31,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 88
  },
  "89": {
    "email": "mduran@conamype.gob.sv",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 38,
        "strength": 100
      },
      {
        "id": 109,
        "strength": 99
      },
      {
        "id": 55,
        "strength": 98
      },
      {
        "id": 80,
        "strength": 97
      },
      {
        "id": 54,
        "strength": 96
      },
      {
        "id": 59,
        "strength": 95
      },
      {
        "id": 84,
        "strength": 94
      },
      {
        "id": 90,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 40,
        "strength": 91
      },
      {
        "id": 46,
        "strength": 90
      },
      {
        "id": 53,
        "strength": 89
      },
      {
        "id": 3,
        "strength": 88
      },
      {
        "id": 78,
        "strength": 87
      },
      {
        "id": 27,
        "strength": 86
      },
      {
        "id": 77,
        "strength": 85
      },
      {
        "id": 57,
        "strength": 84
      },
      {
        "id": 8,
        "strength": 83
      },
      {
        "id": 82,
        "strength": 82
      },
      {
        "id": 87,
        "strength": 81
      },
      {
        "id": 83,
        "strength": 80
      },
      {
        "id": 97,
        "strength": 79
      },
      {
        "id": 81,
        "strength": 78
      },
      {
        "id": 85,
        "strength": 77
      },
      {
        "id": 92,
        "strength": 76
      },
      {
        "id": 52,
        "strength": 75
      },
      {
        "id": 76,
        "strength": 74
      },
      {
        "id": 16,
        "strength": 73
      },
      {
        "id": 2,
        "strength": 72
      },
      {
        "id": 62,
        "strength": 71
      },
      {
        "id": 51,
        "strength": 70
      },
      {
        "id": 96,
        "strength": 69
      },
      {
        "id": 48,
        "strength": 67.5
      },
      {
        "id": 105,
        "strength": 66.5
      },
      {
        "id": 86,
        "strength": 65.5
      },
      {
        "id": 67,
        "strength": 64.5
      },
      {
        "id": 6,
        "strength": 63.5
      },
      {
        "id": 19,
        "strength": 62.5
      },
      {
        "id": 5,
        "strength": 61.5
      },
      {
        "id": 108,
        "strength": 60.5
      },
      {
        "id": 32,
        "strength": 59.5
      },
      {
        "id": 41,
        "strength": 58.5
      },
      {
        "id": 7,
        "strength": 57.5
      },
      {
        "id": 12,
        "strength": 56.5
      },
      {
        "id": 107,
        "strength": 55.5
      },
      {
        "id": 102,
        "strength": 54.5
      },
      {
        "id": 1,
        "strength": 53.5
      },
      {
        "id": 28,
        "strength": 52.5
      },
      {
        "id": 34,
        "strength": 51.5
      },
      {
        "id": 111,
        "strength": 50.5
      },
      {
        "id": 29,
        "strength": 49.5
      },
      {
        "id": 56,
        "strength": 48.5
      },
      {
        "id": 18,
        "strength": 47.5
      },
      {
        "id": 60,
        "strength": 46.5
      },
      {
        "id": 17,
        "strength": 45.5
      },
      {
        "id": 66,
        "strength": 44.5
      },
      {
        "id": 65,
        "strength": 43.5
      },
      {
        "id": 63,
        "strength": 42.5
      },
      {
        "id": 103,
        "strength": 41.5
      },
      {
        "id": 36,
        "strength": 40.5
      },
      {
        "id": 110,
        "strength": 39.5
      },
      {
        "id": 25,
        "strength": 38.5
      },
      {
        "id": 44,
        "strength": 37.5
      },
      {
        "id": 61,
        "strength": 36.5
      },
      {
        "id": 91,
        "strength": 35.5
      },
      {
        "id": 50,
        "strength": 34.5
      },
      {
        "id": 68,
        "strength": 33.5
      },
      {
        "id": 72,
        "strength": 32.5
      },
      {
        "id": 74,
        "strength": 31.5
      },
      {
        "id": 24,
        "strength": 30.5
      },
      {
        "id": 47,
        "strength": 29.5
      },
      {
        "id": 98,
        "strength": 28.5
      },
      {
        "id": 9,
        "strength": 27.5
      },
      {
        "id": 42,
        "strength": 26.5
      },
      {
        "id": 73,
        "strength": 25.5
      },
      {
        "id": 75,
        "strength": 24.5
      },
      {
        "id": 58,
        "strength": 23.5
      },
      {
        "id": 112,
        "strength": 22.5
      },
      {
        "id": 71,
        "strength": 21.5
      },
      {
        "id": 26,
        "strength": 20.5
      },
      {
        "id": 45,
        "strength": 19.5
      },
      {
        "id": 64,
        "strength": 18.5
      },
      {
        "id": 70,
        "strength": 17.5
      },
      {
        "id": 69,
        "strength": 16.5
      },
      {
        "id": 11,
        "strength": 15.5
      },
      {
        "id": 39,
        "strength": 14.5
      },
      {
        "id": 14,
        "strength": 13.5
      },
      {
        "id": 4,
        "strength": 12.5
      },
      {
        "id": 37,
        "strength": 11.5
      },
      {
        "id": 21,
        "strength": 10.5
      },
      {
        "id": 31,
        "strength": 9.5
      },
      {
        "id": 33,
        "strength": 8.5
      },
      {
        "id": 35,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 89
  },
  "90": {
    "email": "luis.zuniga@cdmype.org.sv",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 38,
        "strength": 100
      },
      {
        "id": 109,
        "strength": 99
      },
      {
        "id": 55,
        "strength": 98
      },
      {
        "id": 80,
        "strength": 97
      },
      {
        "id": 54,
        "strength": 96
      },
      {
        "id": 59,
        "strength": 95
      },
      {
        "id": 84,
        "strength": 94
      },
      {
        "id": 104,
        "strength": 93
      },
      {
        "id": 40,
        "strength": 92
      },
      {
        "id": 46,
        "strength": 91
      },
      {
        "id": 53,
        "strength": 90
      },
      {
        "id": 89,
        "strength": 89
      },
      {
        "id": 3,
        "strength": 88
      },
      {
        "id": 78,
        "strength": 87
      },
      {
        "id": 27,
        "strength": 86
      },
      {
        "id": 77,
        "strength": 85
      },
      {
        "id": 57,
        "strength": 84
      },
      {
        "id": 8,
        "strength": 83
      },
      {
        "id": 82,
        "strength": 82
      },
      {
        "id": 87,
        "strength": 81
      },
      {
        "id": 83,
        "strength": 80
      },
      {
        "id": 97,
        "strength": 79
      },
      {
        "id": 81,
        "strength": 78
      },
      {
        "id": 85,
        "strength": 77
      },
      {
        "id": 92,
        "strength": 76
      },
      {
        "id": 52,
        "strength": 75
      },
      {
        "id": 76,
        "strength": 74
      },
      {
        "id": 16,
        "strength": 73
      },
      {
        "id": 2,
        "strength": 72
      },
      {
        "id": 62,
        "strength": 71
      },
      {
        "id": 51,
        "strength": 70
      },
      {
        "id": 96,
        "strength": 69
      },
      {
        "id": 48,
        "strength": 67.5
      },
      {
        "id": 105,
        "strength": 66.5
      },
      {
        "id": 86,
        "strength": 65.5
      },
      {
        "id": 67,
        "strength": 64.5
      },
      {
        "id": 6,
        "strength": 63.5
      },
      {
        "id": 19,
        "strength": 62.5
      },
      {
        "id": 5,
        "strength": 61.5
      },
      {
        "id": 108,
        "strength": 60.5
      },
      {
        "id": 32,
        "strength": 59.5
      },
      {
        "id": 41,
        "strength": 58.5
      },
      {
        "id": 7,
        "strength": 57.5
      },
      {
        "id": 12,
        "strength": 56.5
      },
      {
        "id": 107,
        "strength": 55.5
      },
      {
        "id": 102,
        "strength": 54.5
      },
      {
        "id": 1,
        "strength": 53.5
      },
      {
        "id": 28,
        "strength": 52.5
      },
      {
        "id": 34,
        "strength": 51.5
      },
      {
        "id": 111,
        "strength": 50.5
      },
      {
        "id": 29,
        "strength": 49.5
      },
      {
        "id": 56,
        "strength": 48.5
      },
      {
        "id": 18,
        "strength": 47.5
      },
      {
        "id": 60,
        "strength": 46.5
      },
      {
        "id": 17,
        "strength": 45.5
      },
      {
        "id": 66,
        "strength": 44.5
      },
      {
        "id": 65,
        "strength": 43.5
      },
      {
        "id": 63,
        "strength": 42.5
      },
      {
        "id": 103,
        "strength": 41.5
      },
      {
        "id": 36,
        "strength": 40.5
      },
      {
        "id": 110,
        "strength": 39.5
      },
      {
        "id": 25,
        "strength": 38.5
      },
      {
        "id": 44,
        "strength": 37.5
      },
      {
        "id": 61,
        "strength": 36.5
      },
      {
        "id": 91,
        "strength": 35.5
      },
      {
        "id": 50,
        "strength": 34.5
      },
      {
        "id": 68,
        "strength": 33.5
      },
      {
        "id": 72,
        "strength": 32.5
      },
      {
        "id": 74,
        "strength": 31.5
      },
      {
        "id": 24,
        "strength": 30.5
      },
      {
        "id": 47,
        "strength": 29.5
      },
      {
        "id": 98,
        "strength": 28.5
      },
      {
        "id": 9,
        "strength": 27.5
      },
      {
        "id": 42,
        "strength": 26.5
      },
      {
        "id": 73,
        "strength": 25.5
      },
      {
        "id": 75,
        "strength": 24.5
      },
      {
        "id": 58,
        "strength": 23.5
      },
      {
        "id": 112,
        "strength": 22.5
      },
      {
        "id": 71,
        "strength": 21.5
      },
      {
        "id": 26,
        "strength": 20.5
      },
      {
        "id": 45,
        "strength": 19.5
      },
      {
        "id": 64,
        "strength": 18.5
      },
      {
        "id": 70,
        "strength": 17.5
      },
      {
        "id": 69,
        "strength": 16.5
      },
      {
        "id": 11,
        "strength": 15.5
      },
      {
        "id": 39,
        "strength": 14.5
      },
      {
        "id": 14,
        "strength": 13.5
      },
      {
        "id": 4,
        "strength": 12.5
      },
      {
        "id": 37,
        "strength": 11.5
      },
      {
        "id": 21,
        "strength": 10.5
      },
      {
        "id": 31,
        "strength": 9.5
      },
      {
        "id": 33,
        "strength": 8.5
      },
      {
        "id": 35,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 90
  },
  "91": {
    "email": "dwebster@miic.gov.jm",
    "choices": [
      {
        "id": 59,
        "strength": 114
      },
      {
        "id": 20,
        "strength": 112
      },
      {
        "id": 48,
        "strength": 111
      },
      {
        "id": 28,
        "strength": 110
      },
      {
        "id": 43,
        "strength": 109
      },
      {
        "id": 30,
        "strength": 108
      },
      {
        "id": 67,
        "strength": 107
      },
      {
        "id": 5,
        "strength": 106
      },
      {
        "id": 32,
        "strength": 105
      },
      {
        "id": 23,
        "strength": 104
      },
      {
        "id": 102,
        "strength": 103
      },
      {
        "id": 68,
        "strength": 102
      },
      {
        "id": 9,
        "strength": 101
      },
      {
        "id": 106,
        "strength": 100
      },
      {
        "id": 15,
        "strength": 99
      },
      {
        "id": 50,
        "strength": 98
      },
      {
        "id": 47,
        "strength": 97
      },
      {
        "id": 42,
        "strength": 96
      },
      {
        "id": 12,
        "strength": 95
      },
      {
        "id": 73,
        "strength": 94
      },
      {
        "id": 75,
        "strength": 93
      },
      {
        "id": 95,
        "strength": 92
      },
      {
        "id": 58,
        "strength": 91
      },
      {
        "id": 112,
        "strength": 90
      },
      {
        "id": 49,
        "strength": 89
      },
      {
        "id": 71,
        "strength": 88
      },
      {
        "id": 61,
        "strength": 87
      },
      {
        "id": 44,
        "strength": 86
      },
      {
        "id": 26,
        "strength": 85
      },
      {
        "id": 45,
        "strength": 84
      },
      {
        "id": 64,
        "strength": 83
      },
      {
        "id": 25,
        "strength": 82
      },
      {
        "id": 70,
        "strength": 81
      },
      {
        "id": 109,
        "strength": 80
      },
      {
        "id": 69,
        "strength": 79
      },
      {
        "id": 1,
        "strength": 78
      },
      {
        "id": 110,
        "strength": 77
      },
      {
        "id": 80,
        "strength": 76
      },
      {
        "id": 11,
        "strength": 75
      },
      {
        "id": 34,
        "strength": 74
      },
      {
        "id": 24,
        "strength": 73
      },
      {
        "id": 39,
        "strength": 72
      },
      {
        "id": 7,
        "strength": 71
      },
      {
        "id": 40,
        "strength": 70
      },
      {
        "id": 41,
        "strength": 69
      },
      {
        "id": 46,
        "strength": 68
      },
      {
        "id": 53,
        "strength": 67
      },
      {
        "id": 36,
        "strength": 66
      },
      {
        "id": 103,
        "strength": 65
      },
      {
        "id": 63,
        "strength": 64
      },
      {
        "id": 3,
        "strength": 63
      },
      {
        "id": 78,
        "strength": 62
      },
      {
        "id": 65,
        "strength": 61
      },
      {
        "id": 27,
        "strength": 60
      },
      {
        "id": 14,
        "strength": 59
      },
      {
        "id": 57,
        "strength": 58
      },
      {
        "id": 66,
        "strength": 57
      },
      {
        "id": 4,
        "strength": 56
      },
      {
        "id": 17,
        "strength": 55
      },
      {
        "id": 37,
        "strength": 54
      },
      {
        "id": 8,
        "strength": 53
      },
      {
        "id": 21,
        "strength": 52
      },
      {
        "id": 19,
        "strength": 51
      },
      {
        "id": 60,
        "strength": 50
      },
      {
        "id": 31,
        "strength": 49
      },
      {
        "id": 74,
        "strength": 48
      },
      {
        "id": 18,
        "strength": 47
      },
      {
        "id": 33,
        "strength": 46
      },
      {
        "id": 35,
        "strength": 45
      },
      {
        "id": 52,
        "strength": 44
      },
      {
        "id": 56,
        "strength": 43
      },
      {
        "id": 16,
        "strength": 42
      },
      {
        "id": 2,
        "strength": 41
      },
      {
        "id": 10,
        "strength": 40
      },
      {
        "id": 29,
        "strength": 39
      },
      {
        "id": 111,
        "strength": 38
      },
      {
        "id": 13,
        "strength": 37
      },
      {
        "id": 86,
        "strength": 36
      },
      {
        "id": 72,
        "strength": 35
      },
      {
        "id": 22,
        "strength": 34
      },
      {
        "id": 107,
        "strength": 33
      },
      {
        "id": 108,
        "strength": 32
      },
      {
        "id": 101,
        "strength": 31
      },
      {
        "id": 105,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 91
  },
  "92": {
    "email": "rortiz@conamype.gob.sv",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 38,
        "strength": 100
      },
      {
        "id": 109,
        "strength": 99
      },
      {
        "id": 55,
        "strength": 98
      },
      {
        "id": 80,
        "strength": 97
      },
      {
        "id": 54,
        "strength": 96
      },
      {
        "id": 59,
        "strength": 95
      },
      {
        "id": 84,
        "strength": 94
      },
      {
        "id": 90,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 40,
        "strength": 91
      },
      {
        "id": 46,
        "strength": 90
      },
      {
        "id": 53,
        "strength": 89
      },
      {
        "id": 89,
        "strength": 88
      },
      {
        "id": 3,
        "strength": 87
      },
      {
        "id": 78,
        "strength": 86
      },
      {
        "id": 27,
        "strength": 85
      },
      {
        "id": 77,
        "strength": 84
      },
      {
        "id": 57,
        "strength": 83
      },
      {
        "id": 8,
        "strength": 82
      },
      {
        "id": 82,
        "strength": 81
      },
      {
        "id": 87,
        "strength": 80
      },
      {
        "id": 83,
        "strength": 79
      },
      {
        "id": 97,
        "strength": 78
      },
      {
        "id": 81,
        "strength": 77
      },
      {
        "id": 85,
        "strength": 76
      },
      {
        "id": 52,
        "strength": 75
      },
      {
        "id": 76,
        "strength": 74
      },
      {
        "id": 16,
        "strength": 73
      },
      {
        "id": 2,
        "strength": 72
      },
      {
        "id": 62,
        "strength": 71
      },
      {
        "id": 51,
        "strength": 70
      },
      {
        "id": 96,
        "strength": 69
      },
      {
        "id": 48,
        "strength": 67.5
      },
      {
        "id": 105,
        "strength": 66.5
      },
      {
        "id": 86,
        "strength": 65.5
      },
      {
        "id": 67,
        "strength": 64.5
      },
      {
        "id": 6,
        "strength": 63.5
      },
      {
        "id": 19,
        "strength": 62.5
      },
      {
        "id": 5,
        "strength": 61.5
      },
      {
        "id": 108,
        "strength": 60.5
      },
      {
        "id": 32,
        "strength": 59.5
      },
      {
        "id": 41,
        "strength": 58.5
      },
      {
        "id": 7,
        "strength": 57.5
      },
      {
        "id": 12,
        "strength": 56.5
      },
      {
        "id": 107,
        "strength": 55.5
      },
      {
        "id": 102,
        "strength": 54.5
      },
      {
        "id": 1,
        "strength": 53.5
      },
      {
        "id": 28,
        "strength": 52.5
      },
      {
        "id": 34,
        "strength": 51.5
      },
      {
        "id": 111,
        "strength": 50.5
      },
      {
        "id": 29,
        "strength": 49.5
      },
      {
        "id": 56,
        "strength": 48.5
      },
      {
        "id": 18,
        "strength": 47.5
      },
      {
        "id": 60,
        "strength": 46.5
      },
      {
        "id": 17,
        "strength": 45.5
      },
      {
        "id": 66,
        "strength": 44.5
      },
      {
        "id": 65,
        "strength": 43.5
      },
      {
        "id": 63,
        "strength": 42.5
      },
      {
        "id": 103,
        "strength": 41.5
      },
      {
        "id": 36,
        "strength": 40.5
      },
      {
        "id": 110,
        "strength": 39.5
      },
      {
        "id": 25,
        "strength": 38.5
      },
      {
        "id": 44,
        "strength": 37.5
      },
      {
        "id": 61,
        "strength": 36.5
      },
      {
        "id": 91,
        "strength": 35.5
      },
      {
        "id": 50,
        "strength": 34.5
      },
      {
        "id": 68,
        "strength": 33.5
      },
      {
        "id": 72,
        "strength": 32.5
      },
      {
        "id": 74,
        "strength": 31.5
      },
      {
        "id": 24,
        "strength": 30.5
      },
      {
        "id": 47,
        "strength": 29.5
      },
      {
        "id": 98,
        "strength": 28.5
      },
      {
        "id": 9,
        "strength": 27.5
      },
      {
        "id": 42,
        "strength": 26.5
      },
      {
        "id": 73,
        "strength": 25.5
      },
      {
        "id": 75,
        "strength": 24.5
      },
      {
        "id": 58,
        "strength": 23.5
      },
      {
        "id": 112,
        "strength": 22.5
      },
      {
        "id": 71,
        "strength": 21.5
      },
      {
        "id": 26,
        "strength": 20.5
      },
      {
        "id": 45,
        "strength": 19.5
      },
      {
        "id": 64,
        "strength": 18.5
      },
      {
        "id": 70,
        "strength": 17.5
      },
      {
        "id": 69,
        "strength": 16.5
      },
      {
        "id": 11,
        "strength": 15.5
      },
      {
        "id": 39,
        "strength": 14.5
      },
      {
        "id": 14,
        "strength": 13.5
      },
      {
        "id": 4,
        "strength": 12.5
      },
      {
        "id": 37,
        "strength": 11.5
      },
      {
        "id": 21,
        "strength": 10.5
      },
      {
        "id": 31,
        "strength": 9.5
      },
      {
        "id": 33,
        "strength": 8.5
      },
      {
        "id": 35,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 92
  },
  "93": {
    "email": "irogel@conamype.gob.sv",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 99,
        "strength": 104
      },
      {
        "id": 49,
        "strength": 103
      },
      {
        "id": 100,
        "strength": 102
      },
      {
        "id": 38,
        "strength": 101
      },
      {
        "id": 109,
        "strength": 100
      },
      {
        "id": 55,
        "strength": 99
      },
      {
        "id": 80,
        "strength": 98
      },
      {
        "id": 54,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 84,
        "strength": 95
      },
      {
        "id": 90,
        "strength": 94
      },
      {
        "id": 104,
        "strength": 93
      },
      {
        "id": 40,
        "strength": 92
      },
      {
        "id": 46,
        "strength": 91
      },
      {
        "id": 53,
        "strength": 90
      },
      {
        "id": 89,
        "strength": 89
      },
      {
        "id": 3,
        "strength": 88
      },
      {
        "id": 78,
        "strength": 87
      },
      {
        "id": 27,
        "strength": 86
      },
      {
        "id": 77,
        "strength": 85
      },
      {
        "id": 57,
        "strength": 84
      },
      {
        "id": 8,
        "strength": 83
      },
      {
        "id": 82,
        "strength": 82
      },
      {
        "id": 87,
        "strength": 81
      },
      {
        "id": 83,
        "strength": 80
      },
      {
        "id": 97,
        "strength": 79
      },
      {
        "id": 81,
        "strength": 78
      },
      {
        "id": 85,
        "strength": 77
      },
      {
        "id": 92,
        "strength": 76
      },
      {
        "id": 52,
        "strength": 75
      },
      {
        "id": 76,
        "strength": 74
      },
      {
        "id": 16,
        "strength": 73
      },
      {
        "id": 2,
        "strength": 72
      },
      {
        "id": 62,
        "strength": 71
      },
      {
        "id": 51,
        "strength": 70
      },
      {
        "id": 96,
        "strength": 69
      },
      {
        "id": 48,
        "strength": 67.5
      },
      {
        "id": 105,
        "strength": 66.5
      },
      {
        "id": 86,
        "strength": 65.5
      },
      {
        "id": 67,
        "strength": 64.5
      },
      {
        "id": 6,
        "strength": 63.5
      },
      {
        "id": 19,
        "strength": 62.5
      },
      {
        "id": 5,
        "strength": 61.5
      },
      {
        "id": 108,
        "strength": 60.5
      },
      {
        "id": 32,
        "strength": 59.5
      },
      {
        "id": 41,
        "strength": 58.5
      },
      {
        "id": 7,
        "strength": 57.5
      },
      {
        "id": 12,
        "strength": 56.5
      },
      {
        "id": 107,
        "strength": 55.5
      },
      {
        "id": 102,
        "strength": 54.5
      },
      {
        "id": 1,
        "strength": 53.5
      },
      {
        "id": 28,
        "strength": 52.5
      },
      {
        "id": 34,
        "strength": 51.5
      },
      {
        "id": 111,
        "strength": 50.5
      },
      {
        "id": 29,
        "strength": 49.5
      },
      {
        "id": 56,
        "strength": 48.5
      },
      {
        "id": 18,
        "strength": 47.5
      },
      {
        "id": 60,
        "strength": 46.5
      },
      {
        "id": 17,
        "strength": 45.5
      },
      {
        "id": 66,
        "strength": 44.5
      },
      {
        "id": 65,
        "strength": 43.5
      },
      {
        "id": 63,
        "strength": 42.5
      },
      {
        "id": 103,
        "strength": 41.5
      },
      {
        "id": 36,
        "strength": 40.5
      },
      {
        "id": 110,
        "strength": 39.5
      },
      {
        "id": 25,
        "strength": 38.5
      },
      {
        "id": 44,
        "strength": 37.5
      },
      {
        "id": 61,
        "strength": 36.5
      },
      {
        "id": 91,
        "strength": 35.5
      },
      {
        "id": 50,
        "strength": 34.5
      },
      {
        "id": 68,
        "strength": 33.5
      },
      {
        "id": 72,
        "strength": 32.5
      },
      {
        "id": 74,
        "strength": 31.5
      },
      {
        "id": 24,
        "strength": 30.5
      },
      {
        "id": 47,
        "strength": 29.5
      },
      {
        "id": 98,
        "strength": 28.5
      },
      {
        "id": 9,
        "strength": 27.5
      },
      {
        "id": 42,
        "strength": 26.5
      },
      {
        "id": 73,
        "strength": 25.5
      },
      {
        "id": 75,
        "strength": 24.5
      },
      {
        "id": 58,
        "strength": 23.5
      },
      {
        "id": 112,
        "strength": 22.5
      },
      {
        "id": 71,
        "strength": 21.5
      },
      {
        "id": 26,
        "strength": 20.5
      },
      {
        "id": 45,
        "strength": 19.5
      },
      {
        "id": 64,
        "strength": 18.5
      },
      {
        "id": 70,
        "strength": 17.5
      },
      {
        "id": 69,
        "strength": 16.5
      },
      {
        "id": 11,
        "strength": 15.5
      },
      {
        "id": 39,
        "strength": 14.5
      },
      {
        "id": 14,
        "strength": 13.5
      },
      {
        "id": 4,
        "strength": 12.5
      },
      {
        "id": 37,
        "strength": 11.5
      },
      {
        "id": 21,
        "strength": 10.5
      },
      {
        "id": 31,
        "strength": 9.5
      },
      {
        "id": 33,
        "strength": 8.5
      },
      {
        "id": 35,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 93
  },
  "94": {
    "email": "tzerda@gmail.com",
    "choices": [
      {
        "id": 7,
        "strength": 113
      },
      {
        "id": 23,
        "strength": 111.5
      },
      {
        "id": 48,
        "strength": 110.5
      },
      {
        "id": 105,
        "strength": 109.5
      },
      {
        "id": 86,
        "strength": 108.5
      },
      {
        "id": 67,
        "strength": 107.5
      },
      {
        "id": 6,
        "strength": 106.5
      },
      {
        "id": 19,
        "strength": 105.5
      },
      {
        "id": 5,
        "strength": 104.5
      },
      {
        "id": 108,
        "strength": 103.5
      },
      {
        "id": 8,
        "strength": 102.5
      },
      {
        "id": 20,
        "strength": 101.5
      },
      {
        "id": 32,
        "strength": 100.5
      },
      {
        "id": 41,
        "strength": 99.5
      },
      {
        "id": 38,
        "strength": 98.5
      },
      {
        "id": 106,
        "strength": 97.5
      },
      {
        "id": 43,
        "strength": 96.5
      },
      {
        "id": 12,
        "strength": 95.5
      },
      {
        "id": 107,
        "strength": 94.5
      },
      {
        "id": 102,
        "strength": 93.5
      },
      {
        "id": 1,
        "strength": 92.5
      },
      {
        "id": 28,
        "strength": 91.5
      },
      {
        "id": 30,
        "strength": 90.5
      },
      {
        "id": 34,
        "strength": 89.5
      },
      {
        "id": 96,
        "strength": 88.5
      },
      {
        "id": 62,
        "strength": 87.5
      },
      {
        "id": 111,
        "strength": 86.5
      },
      {
        "id": 29,
        "strength": 85.5
      },
      {
        "id": 56,
        "strength": 84.5
      },
      {
        "id": 92,
        "strength": 83.5
      },
      {
        "id": 85,
        "strength": 82.5
      },
      {
        "id": 81,
        "strength": 81.5
      },
      {
        "id": 18,
        "strength": 80.5
      },
      {
        "id": 87,
        "strength": 79.5
      },
      {
        "id": 60,
        "strength": 78.5
      },
      {
        "id": 82,
        "strength": 77.5
      },
      {
        "id": 17,
        "strength": 76.5
      },
      {
        "id": 66,
        "strength": 75.5
      },
      {
        "id": 57,
        "strength": 74.5
      },
      {
        "id": 27,
        "strength": 73.5
      },
      {
        "id": 65,
        "strength": 72.5
      },
      {
        "id": 63,
        "strength": 71.5
      },
      {
        "id": 103,
        "strength": 70.5
      },
      {
        "id": 36,
        "strength": 69.5
      },
      {
        "id": 46,
        "strength": 68.5
      },
      {
        "id": 90,
        "strength": 67.5
      },
      {
        "id": 84,
        "strength": 66.5
      },
      {
        "id": 59,
        "strength": 65.5
      },
      {
        "id": 80,
        "strength": 64.5
      },
      {
        "id": 55,
        "strength": 63.5
      },
      {
        "id": 110,
        "strength": 62.5
      },
      {
        "id": 25,
        "strength": 61.5
      },
      {
        "id": 100,
        "strength": 60.5
      },
      {
        "id": 93,
        "strength": 59.5
      },
      {
        "id": 44,
        "strength": 58.5
      },
      {
        "id": 61,
        "strength": 57.5
      },
      {
        "id": 49,
        "strength": 56.5
      },
      {
        "id": 99,
        "strength": 55.5
      },
      {
        "id": 95,
        "strength": 54.5
      },
      {
        "id": 88,
        "strength": 53.5
      },
      {
        "id": 91,
        "strength": 52.5
      },
      {
        "id": 79,
        "strength": 51.5
      },
      {
        "id": 50,
        "strength": 50.5
      },
      {
        "id": 68,
        "strength": 49.5
      },
      {
        "id": 72,
        "strength": 48.5
      },
      {
        "id": 74,
        "strength": 47.5
      },
      {
        "id": 24,
        "strength": 46.5
      },
      {
        "id": 47,
        "strength": 45.5
      },
      {
        "id": 98,
        "strength": 44.5
      },
      {
        "id": 77,
        "strength": 43.5
      },
      {
        "id": 9,
        "strength": 42.5
      },
      {
        "id": 15,
        "strength": 41.5
      },
      {
        "id": 42,
        "strength": 40.5
      },
      {
        "id": 73,
        "strength": 39.5
      },
      {
        "id": 75,
        "strength": 38.5
      },
      {
        "id": 58,
        "strength": 37.5
      },
      {
        "id": 112,
        "strength": 36.5
      },
      {
        "id": 71,
        "strength": 35.5
      },
      {
        "id": 26,
        "strength": 34.5
      },
      {
        "id": 45,
        "strength": 33.5
      },
      {
        "id": 64,
        "strength": 32.5
      },
      {
        "id": 70,
        "strength": 31.5
      },
      {
        "id": 109,
        "strength": 30.5
      },
      {
        "id": 69,
        "strength": 29.5
      },
      {
        "id": 54,
        "strength": 28.5
      },
      {
        "id": 11,
        "strength": 27.5
      },
      {
        "id": 39,
        "strength": 26.5
      },
      {
        "id": 104,
        "strength": 25.5
      },
      {
        "id": 40,
        "strength": 24.5
      },
      {
        "id": 53,
        "strength": 23.5
      },
      {
        "id": 89,
        "strength": 22.5
      },
      {
        "id": 78,
        "strength": 21.5
      },
      {
        "id": 3,
        "strength": 20.5
      },
      {
        "id": 14,
        "strength": 19.5
      },
      {
        "id": 4,
        "strength": 18.5
      },
      {
        "id": 37,
        "strength": 17.5
      },
      {
        "id": 21,
        "strength": 16.5
      },
      {
        "id": 31,
        "strength": 15.5
      },
      {
        "id": 83,
        "strength": 14.5
      },
      {
        "id": 97,
        "strength": 13.5
      },
      {
        "id": 33,
        "strength": 12.5
      },
      {
        "id": 35,
        "strength": 11.5
      },
      {
        "id": 52,
        "strength": 10.5
      },
      {
        "id": 76,
        "strength": 9.5
      },
      {
        "id": 16,
        "strength": 8.5
      },
      {
        "id": 2,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 22,
        "strength": 4.5
      },
      {
        "id": 51,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 94
  },
  "95": {
    "email": "enrique.reyes@catolica.edu.sv",
    "choices": [
      {
        "id": 3,
        "strength": 116
      },
      {
        "id": 102,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 113
      },
      {
        "id": 78,
        "strength": 112
      },
      {
        "id": 27,
        "strength": 111
      },
      {
        "id": 16,
        "strength": 110
      },
      {
        "id": 20,
        "strength": 108
      },
      {
        "id": 43,
        "strength": 107
      },
      {
        "id": 23,
        "strength": 106
      },
      {
        "id": 15,
        "strength": 105
      },
      {
        "id": 47,
        "strength": 104
      },
      {
        "id": 42,
        "strength": 103
      },
      {
        "id": 79,
        "strength": 102
      },
      {
        "id": 88,
        "strength": 101
      },
      {
        "id": 75,
        "strength": 100
      },
      {
        "id": 49,
        "strength": 99
      },
      {
        "id": 44,
        "strength": 98
      },
      {
        "id": 26,
        "strength": 97
      },
      {
        "id": 98,
        "strength": 96
      },
      {
        "id": 25,
        "strength": 95
      },
      {
        "id": 11,
        "strength": 94
      },
      {
        "id": 54,
        "strength": 93
      },
      {
        "id": 59,
        "strength": 92
      },
      {
        "id": 104,
        "strength": 91
      },
      {
        "id": 46,
        "strength": 90
      },
      {
        "id": 103,
        "strength": 89
      },
      {
        "id": 66,
        "strength": 88
      },
      {
        "id": 37,
        "strength": 87
      },
      {
        "id": 82,
        "strength": 86
      },
      {
        "id": 97,
        "strength": 85
      },
      {
        "id": 35,
        "strength": 84
      },
      {
        "id": 52,
        "strength": 83
      },
      {
        "id": 2,
        "strength": 82
      },
      {
        "id": 10,
        "strength": 81
      },
      {
        "id": 29,
        "strength": 80
      },
      {
        "id": 13,
        "strength": 79
      },
      {
        "id": 51,
        "strength": 78
      },
      {
        "id": 96,
        "strength": 77
      },
      {
        "id": 101,
        "strength": 76
      },
      {
        "id": 48,
        "strength": 74
      },
      {
        "id": 28,
        "strength": 73
      },
      {
        "id": 30,
        "strength": 72
      },
      {
        "id": 106,
        "strength": 71
      },
      {
        "id": 50,
        "strength": 70
      },
      {
        "id": 58,
        "strength": 69
      },
      {
        "id": 71,
        "strength": 68
      },
      {
        "id": 109,
        "strength": 67
      },
      {
        "id": 34,
        "strength": 66
      },
      {
        "id": 24,
        "strength": 65
      },
      {
        "id": 39,
        "strength": 64
      },
      {
        "id": 40,
        "strength": 63
      },
      {
        "id": 53,
        "strength": 62
      },
      {
        "id": 36,
        "strength": 61
      },
      {
        "id": 57,
        "strength": 60
      },
      {
        "id": 8,
        "strength": 59
      },
      {
        "id": 19,
        "strength": 58
      },
      {
        "id": 60,
        "strength": 57
      },
      {
        "id": 31,
        "strength": 56
      },
      {
        "id": 74,
        "strength": 55
      },
      {
        "id": 18,
        "strength": 54
      },
      {
        "id": 33,
        "strength": 53
      },
      {
        "id": 105,
        "strength": 52
      },
      {
        "id": 67,
        "strength": 50
      },
      {
        "id": 5,
        "strength": 49
      },
      {
        "id": 32,
        "strength": 48
      },
      {
        "id": 68,
        "strength": 47
      },
      {
        "id": 9,
        "strength": 46
      },
      {
        "id": 12,
        "strength": 45
      },
      {
        "id": 91,
        "strength": 44
      },
      {
        "id": 73,
        "strength": 43
      },
      {
        "id": 99,
        "strength": 42
      },
      {
        "id": 112,
        "strength": 41
      },
      {
        "id": 61,
        "strength": 40
      },
      {
        "id": 100,
        "strength": 39
      },
      {
        "id": 93,
        "strength": 38
      },
      {
        "id": 45,
        "strength": 37
      },
      {
        "id": 64,
        "strength": 36
      },
      {
        "id": 70,
        "strength": 35
      },
      {
        "id": 38,
        "strength": 34
      },
      {
        "id": 69,
        "strength": 33
      },
      {
        "id": 1,
        "strength": 32
      },
      {
        "id": 55,
        "strength": 31
      },
      {
        "id": 110,
        "strength": 30
      },
      {
        "id": 84,
        "strength": 29
      },
      {
        "id": 7,
        "strength": 28
      },
      {
        "id": 90,
        "strength": 27
      },
      {
        "id": 41,
        "strength": 26
      },
      {
        "id": 89,
        "strength": 25
      },
      {
        "id": 63,
        "strength": 24
      },
      {
        "id": 65,
        "strength": 23
      },
      {
        "id": 14,
        "strength": 22
      },
      {
        "id": 77,
        "strength": 21
      },
      {
        "id": 4,
        "strength": 20
      },
      {
        "id": 17,
        "strength": 19
      },
      {
        "id": 21,
        "strength": 18
      },
      {
        "id": 87,
        "strength": 17
      },
      {
        "id": 83,
        "strength": 16
      },
      {
        "id": 81,
        "strength": 15
      },
      {
        "id": 85,
        "strength": 14
      },
      {
        "id": 92,
        "strength": 13
      },
      {
        "id": 76,
        "strength": 12
      },
      {
        "id": 56,
        "strength": 11
      },
      {
        "id": 111,
        "strength": 10
      },
      {
        "id": 86,
        "strength": 9
      },
      {
        "id": 72,
        "strength": 8
      },
      {
        "id": 62,
        "strength": 7
      },
      {
        "id": 22,
        "strength": 6
      },
      {
        "id": 107,
        "strength": 5
      },
      {
        "id": 108,
        "strength": 4
      },
      {
        "id": 6,
        "strength": 2.5
      },
      {
        "id": 94,
        "strength": 1.5
      }
    ],
    "id": 95
  },
  "96": {
    "email": "vrivas@cenpromype.org",
    "choices": [
      {
        "id": 80,
        "strength": 116
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 104,
        "strength": 113
      },
      {
        "id": 3,
        "strength": 112
      },
      {
        "id": 78,
        "strength": 111
      },
      {
        "id": 82,
        "strength": 110
      },
      {
        "id": 51,
        "strength": 109
      },
      {
        "id": 20,
        "strength": 107
      },
      {
        "id": 43,
        "strength": 106
      },
      {
        "id": 23,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 47,
        "strength": 103
      },
      {
        "id": 42,
        "strength": 102
      },
      {
        "id": 79,
        "strength": 101
      },
      {
        "id": 26,
        "strength": 100
      },
      {
        "id": 98,
        "strength": 99
      },
      {
        "id": 54,
        "strength": 98
      },
      {
        "id": 34,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 46,
        "strength": 95
      },
      {
        "id": 36,
        "strength": 94
      },
      {
        "id": 103,
        "strength": 93
      },
      {
        "id": 27,
        "strength": 92
      },
      {
        "id": 66,
        "strength": 91
      },
      {
        "id": 19,
        "strength": 90
      },
      {
        "id": 97,
        "strength": 89
      },
      {
        "id": 35,
        "strength": 88
      },
      {
        "id": 52,
        "strength": 87
      },
      {
        "id": 16,
        "strength": 86
      },
      {
        "id": 2,
        "strength": 85
      },
      {
        "id": 105,
        "strength": 84
      },
      {
        "id": 28,
        "strength": 82
      },
      {
        "id": 30,
        "strength": 81
      },
      {
        "id": 106,
        "strength": 80
      },
      {
        "id": 15,
        "strength": 79
      },
      {
        "id": 88,
        "strength": 78
      },
      {
        "id": 75,
        "strength": 77
      },
      {
        "id": 99,
        "strength": 76
      },
      {
        "id": 49,
        "strength": 75
      },
      {
        "id": 71,
        "strength": 74
      },
      {
        "id": 61,
        "strength": 73
      },
      {
        "id": 44,
        "strength": 72
      },
      {
        "id": 100,
        "strength": 71
      },
      {
        "id": 93,
        "strength": 70
      },
      {
        "id": 25,
        "strength": 69
      },
      {
        "id": 70,
        "strength": 68
      },
      {
        "id": 38,
        "strength": 67
      },
      {
        "id": 109,
        "strength": 66
      },
      {
        "id": 55,
        "strength": 65
      },
      {
        "id": 11,
        "strength": 64
      },
      {
        "id": 39,
        "strength": 63
      },
      {
        "id": 84,
        "strength": 62
      },
      {
        "id": 90,
        "strength": 61
      },
      {
        "id": 40,
        "strength": 60
      },
      {
        "id": 53,
        "strength": 59
      },
      {
        "id": 89,
        "strength": 58
      },
      {
        "id": 63,
        "strength": 57
      },
      {
        "id": 77,
        "strength": 56
      },
      {
        "id": 57,
        "strength": 55
      },
      {
        "id": 37,
        "strength": 54
      },
      {
        "id": 8,
        "strength": 53
      },
      {
        "id": 87,
        "strength": 52
      },
      {
        "id": 83,
        "strength": 51
      },
      {
        "id": 18,
        "strength": 50
      },
      {
        "id": 81,
        "strength": 49
      },
      {
        "id": 33,
        "strength": 48
      },
      {
        "id": 85,
        "strength": 47
      },
      {
        "id": 92,
        "strength": 46
      },
      {
        "id": 76,
        "strength": 45
      },
      {
        "id": 10,
        "strength": 44
      },
      {
        "id": 29,
        "strength": 43
      },
      {
        "id": 13,
        "strength": 42
      },
      {
        "id": 86,
        "strength": 41
      },
      {
        "id": 62,
        "strength": 40
      },
      {
        "id": 107,
        "strength": 39
      },
      {
        "id": 108,
        "strength": 38
      },
      {
        "id": 101,
        "strength": 37
      },
      {
        "id": 48,
        "strength": 35.5
      },
      {
        "id": 67,
        "strength": 34.5
      },
      {
        "id": 6,
        "strength": 33.5
      },
      {
        "id": 5,
        "strength": 32.5
      },
      {
        "id": 32,
        "strength": 31.5
      },
      {
        "id": 41,
        "strength": 30.5
      },
      {
        "id": 7,
        "strength": 29.5
      },
      {
        "id": 12,
        "strength": 28.5
      },
      {
        "id": 1,
        "strength": 27.5
      },
      {
        "id": 111,
        "strength": 26.5
      },
      {
        "id": 56,
        "strength": 25.5
      },
      {
        "id": 60,
        "strength": 24.5
      },
      {
        "id": 17,
        "strength": 23.5
      },
      {
        "id": 65,
        "strength": 22.5
      },
      {
        "id": 110,
        "strength": 21.5
      },
      {
        "id": 91,
        "strength": 20.5
      },
      {
        "id": 50,
        "strength": 19.5
      },
      {
        "id": 68,
        "strength": 18.5
      },
      {
        "id": 72,
        "strength": 17.5
      },
      {
        "id": 74,
        "strength": 16.5
      },
      {
        "id": 24,
        "strength": 15.5
      },
      {
        "id": 9,
        "strength": 14.5
      },
      {
        "id": 73,
        "strength": 13.5
      },
      {
        "id": 58,
        "strength": 12.5
      },
      {
        "id": 112,
        "strength": 11.5
      },
      {
        "id": 45,
        "strength": 10.5
      },
      {
        "id": 64,
        "strength": 9.5
      },
      {
        "id": 69,
        "strength": 8.5
      },
      {
        "id": 14,
        "strength": 7.5
      },
      {
        "id": 4,
        "strength": 6.5
      },
      {
        "id": 21,
        "strength": 5.5
      },
      {
        "id": 31,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 96
  },
  "97": {
    "email": "rgimenez@fundacionparaguaya.org.py",
    "choices": [
      {
        "id": 3,
        "strength": 116
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 102,
        "strength": 111
      },
      {
        "id": 15,
        "strength": 110
      },
      {
        "id": 79,
        "strength": 109
      },
      {
        "id": 88,
        "strength": 108
      },
      {
        "id": 49,
        "strength": 107
      },
      {
        "id": 44,
        "strength": 106
      },
      {
        "id": 98,
        "strength": 105
      },
      {
        "id": 80,
        "strength": 104
      },
      {
        "id": 54,
        "strength": 103
      },
      {
        "id": 104,
        "strength": 102
      },
      {
        "id": 78,
        "strength": 101
      },
      {
        "id": 82,
        "strength": 100
      },
      {
        "id": 16,
        "strength": 99
      },
      {
        "id": 51,
        "strength": 98
      },
      {
        "id": 96,
        "strength": 97
      },
      {
        "id": 20,
        "strength": 95
      },
      {
        "id": 48,
        "strength": 94
      },
      {
        "id": 30,
        "strength": 93
      },
      {
        "id": 23,
        "strength": 92
      },
      {
        "id": 106,
        "strength": 91
      },
      {
        "id": 50,
        "strength": 90
      },
      {
        "id": 47,
        "strength": 89
      },
      {
        "id": 42,
        "strength": 88
      },
      {
        "id": 75,
        "strength": 87
      },
      {
        "id": 58,
        "strength": 86
      },
      {
        "id": 99,
        "strength": 85
      },
      {
        "id": 26,
        "strength": 84
      },
      {
        "id": 100,
        "strength": 83
      },
      {
        "id": 93,
        "strength": 82
      },
      {
        "id": 25,
        "strength": 81
      },
      {
        "id": 38,
        "strength": 80
      },
      {
        "id": 109,
        "strength": 79
      },
      {
        "id": 55,
        "strength": 78
      },
      {
        "id": 11,
        "strength": 77
      },
      {
        "id": 59,
        "strength": 76
      },
      {
        "id": 24,
        "strength": 75
      },
      {
        "id": 84,
        "strength": 74
      },
      {
        "id": 90,
        "strength": 73
      },
      {
        "id": 40,
        "strength": 72
      },
      {
        "id": 46,
        "strength": 71
      },
      {
        "id": 53,
        "strength": 70
      },
      {
        "id": 89,
        "strength": 69
      },
      {
        "id": 103,
        "strength": 68
      },
      {
        "id": 27,
        "strength": 67
      },
      {
        "id": 77,
        "strength": 66
      },
      {
        "id": 57,
        "strength": 65
      },
      {
        "id": 66,
        "strength": 64
      },
      {
        "id": 37,
        "strength": 63
      },
      {
        "id": 8,
        "strength": 62
      },
      {
        "id": 60,
        "strength": 61
      },
      {
        "id": 31,
        "strength": 60
      },
      {
        "id": 87,
        "strength": 59
      },
      {
        "id": 74,
        "strength": 58
      },
      {
        "id": 83,
        "strength": 57
      },
      {
        "id": 81,
        "strength": 56
      },
      {
        "id": 35,
        "strength": 55
      },
      {
        "id": 85,
        "strength": 54
      },
      {
        "id": 92,
        "strength": 53
      },
      {
        "id": 52,
        "strength": 52
      },
      {
        "id": 76,
        "strength": 51
      },
      {
        "id": 2,
        "strength": 50
      },
      {
        "id": 10,
        "strength": 49
      },
      {
        "id": 29,
        "strength": 48
      },
      {
        "id": 13,
        "strength": 47
      },
      {
        "id": 62,
        "strength": 46
      },
      {
        "id": 101,
        "strength": 45
      },
      {
        "id": 105,
        "strength": 44
      },
      {
        "id": 86,
        "strength": 42.5
      },
      {
        "id": 67,
        "strength": 41.5
      },
      {
        "id": 6,
        "strength": 40.5
      },
      {
        "id": 19,
        "strength": 39.5
      },
      {
        "id": 5,
        "strength": 38.5
      },
      {
        "id": 108,
        "strength": 37.5
      },
      {
        "id": 32,
        "strength": 36.5
      },
      {
        "id": 41,
        "strength": 35.5
      },
      {
        "id": 7,
        "strength": 34.5
      },
      {
        "id": 12,
        "strength": 33.5
      },
      {
        "id": 107,
        "strength": 32.5
      },
      {
        "id": 1,
        "strength": 31.5
      },
      {
        "id": 28,
        "strength": 30.5
      },
      {
        "id": 34,
        "strength": 29.5
      },
      {
        "id": 111,
        "strength": 28.5
      },
      {
        "id": 56,
        "strength": 27.5
      },
      {
        "id": 18,
        "strength": 26.5
      },
      {
        "id": 17,
        "strength": 25.5
      },
      {
        "id": 65,
        "strength": 24.5
      },
      {
        "id": 63,
        "strength": 23.5
      },
      {
        "id": 36,
        "strength": 22.5
      },
      {
        "id": 110,
        "strength": 21.5
      },
      {
        "id": 61,
        "strength": 20.5
      },
      {
        "id": 91,
        "strength": 19.5
      },
      {
        "id": 68,
        "strength": 18.5
      },
      {
        "id": 72,
        "strength": 17.5
      },
      {
        "id": 9,
        "strength": 16.5
      },
      {
        "id": 73,
        "strength": 15.5
      },
      {
        "id": 112,
        "strength": 14.5
      },
      {
        "id": 71,
        "strength": 13.5
      },
      {
        "id": 45,
        "strength": 12.5
      },
      {
        "id": 64,
        "strength": 11.5
      },
      {
        "id": 70,
        "strength": 10.5
      },
      {
        "id": 69,
        "strength": 9.5
      },
      {
        "id": 39,
        "strength": 8.5
      },
      {
        "id": 14,
        "strength": 7.5
      },
      {
        "id": 4,
        "strength": 6.5
      },
      {
        "id": 21,
        "strength": 5.5
      },
      {
        "id": 33,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 97
  },
  "98": {
    "email": "idaniaguillenrivera@gmail.com",
    "choices": [
      {
        "id": 102,
        "strength": 115
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 3,
        "strength": 113
      },
      {
        "id": 27,
        "strength": 112
      },
      {
        "id": 47,
        "strength": 110
      },
      {
        "id": 42,
        "strength": 109
      },
      {
        "id": 79,
        "strength": 108
      },
      {
        "id": 88,
        "strength": 107
      },
      {
        "id": 75,
        "strength": 106
      },
      {
        "id": 44,
        "strength": 105
      },
      {
        "id": 26,
        "strength": 104
      },
      {
        "id": 25,
        "strength": 103
      },
      {
        "id": 80,
        "strength": 102
      },
      {
        "id": 11,
        "strength": 101
      },
      {
        "id": 54,
        "strength": 100
      },
      {
        "id": 104,
        "strength": 99
      },
      {
        "id": 103,
        "strength": 98
      },
      {
        "id": 78,
        "strength": 97
      },
      {
        "id": 66,
        "strength": 96
      },
      {
        "id": 37,
        "strength": 95
      },
      {
        "id": 82,
        "strength": 94
      },
      {
        "id": 97,
        "strength": 93
      },
      {
        "id": 35,
        "strength": 92
      },
      {
        "id": 16,
        "strength": 91
      },
      {
        "id": 10,
        "strength": 90
      },
      {
        "id": 29,
        "strength": 89
      },
      {
        "id": 13,
        "strength": 88
      },
      {
        "id": 51,
        "strength": 87
      },
      {
        "id": 96,
        "strength": 86
      },
      {
        "id": 101,
        "strength": 85
      },
      {
        "id": 20,
        "strength": 83
      },
      {
        "id": 48,
        "strength": 82
      },
      {
        "id": 28,
        "strength": 81
      },
      {
        "id": 43,
        "strength": 80
      },
      {
        "id": 23,
        "strength": 79
      },
      {
        "id": 15,
        "strength": 78
      },
      {
        "id": 50,
        "strength": 77
      },
      {
        "id": 58,
        "strength": 76
      },
      {
        "id": 49,
        "strength": 75
      },
      {
        "id": 71,
        "strength": 74
      },
      {
        "id": 34,
        "strength": 73
      },
      {
        "id": 59,
        "strength": 72
      },
      {
        "id": 24,
        "strength": 71
      },
      {
        "id": 39,
        "strength": 70
      },
      {
        "id": 46,
        "strength": 69
      },
      {
        "id": 36,
        "strength": 68
      },
      {
        "id": 19,
        "strength": 67
      },
      {
        "id": 60,
        "strength": 66
      },
      {
        "id": 31,
        "strength": 65
      },
      {
        "id": 74,
        "strength": 64
      },
      {
        "id": 18,
        "strength": 63
      },
      {
        "id": 33,
        "strength": 62
      },
      {
        "id": 52,
        "strength": 61
      },
      {
        "id": 2,
        "strength": 60
      },
      {
        "id": 105,
        "strength": 59
      },
      {
        "id": 86,
        "strength": 57.5
      },
      {
        "id": 67,
        "strength": 56.5
      },
      {
        "id": 6,
        "strength": 55.5
      },
      {
        "id": 5,
        "strength": 54.5
      },
      {
        "id": 108,
        "strength": 53.5
      },
      {
        "id": 8,
        "strength": 52.5
      },
      {
        "id": 32,
        "strength": 51.5
      },
      {
        "id": 41,
        "strength": 50.5
      },
      {
        "id": 7,
        "strength": 49.5
      },
      {
        "id": 38,
        "strength": 48.5
      },
      {
        "id": 106,
        "strength": 47.5
      },
      {
        "id": 12,
        "strength": 46.5
      },
      {
        "id": 107,
        "strength": 45.5
      },
      {
        "id": 1,
        "strength": 44.5
      },
      {
        "id": 30,
        "strength": 43.5
      },
      {
        "id": 62,
        "strength": 42.5
      },
      {
        "id": 111,
        "strength": 41.5
      },
      {
        "id": 56,
        "strength": 40.5
      },
      {
        "id": 92,
        "strength": 39.5
      },
      {
        "id": 85,
        "strength": 38.5
      },
      {
        "id": 81,
        "strength": 37.5
      },
      {
        "id": 87,
        "strength": 36.5
      },
      {
        "id": 17,
        "strength": 35.5
      },
      {
        "id": 57,
        "strength": 34.5
      },
      {
        "id": 65,
        "strength": 33.5
      },
      {
        "id": 63,
        "strength": 32.5
      },
      {
        "id": 90,
        "strength": 31.5
      },
      {
        "id": 84,
        "strength": 30.5
      },
      {
        "id": 55,
        "strength": 29.5
      },
      {
        "id": 110,
        "strength": 28.5
      },
      {
        "id": 100,
        "strength": 27.5
      },
      {
        "id": 93,
        "strength": 26.5
      },
      {
        "id": 61,
        "strength": 25.5
      },
      {
        "id": 99,
        "strength": 24.5
      },
      {
        "id": 91,
        "strength": 23.5
      },
      {
        "id": 68,
        "strength": 22.5
      },
      {
        "id": 72,
        "strength": 21.5
      },
      {
        "id": 77,
        "strength": 20.5
      },
      {
        "id": 9,
        "strength": 19.5
      },
      {
        "id": 73,
        "strength": 18.5
      },
      {
        "id": 112,
        "strength": 17.5
      },
      {
        "id": 45,
        "strength": 16.5
      },
      {
        "id": 64,
        "strength": 15.5
      },
      {
        "id": 70,
        "strength": 14.5
      },
      {
        "id": 109,
        "strength": 13.5
      },
      {
        "id": 69,
        "strength": 12.5
      },
      {
        "id": 40,
        "strength": 11.5
      },
      {
        "id": 53,
        "strength": 10.5
      },
      {
        "id": 89,
        "strength": 9.5
      },
      {
        "id": 14,
        "strength": 8.5
      },
      {
        "id": 4,
        "strength": 7.5
      },
      {
        "id": 21,
        "strength": 6.5
      },
      {
        "id": 83,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 98
  },
  "99": {
    "email": "Esly_monchez@yahoo.com",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 30,
        "strength": 111
      },
      {
        "id": 23,
        "strength": 110
      },
      {
        "id": 106,
        "strength": 109
      },
      {
        "id": 15,
        "strength": 108
      },
      {
        "id": 79,
        "strength": 107
      },
      {
        "id": 88,
        "strength": 106
      },
      {
        "id": 95,
        "strength": 105
      },
      {
        "id": 49,
        "strength": 104
      },
      {
        "id": 100,
        "strength": 103
      },
      {
        "id": 93,
        "strength": 102
      },
      {
        "id": 38,
        "strength": 101
      },
      {
        "id": 109,
        "strength": 100
      },
      {
        "id": 55,
        "strength": 99
      },
      {
        "id": 80,
        "strength": 98
      },
      {
        "id": 54,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 84,
        "strength": 95
      },
      {
        "id": 90,
        "strength": 94
      },
      {
        "id": 104,
        "strength": 93
      },
      {
        "id": 40,
        "strength": 92
      },
      {
        "id": 46,
        "strength": 91
      },
      {
        "id": 53,
        "strength": 90
      },
      {
        "id": 89,
        "strength": 89
      },
      {
        "id": 3,
        "strength": 88
      },
      {
        "id": 78,
        "strength": 87
      },
      {
        "id": 27,
        "strength": 86
      },
      {
        "id": 77,
        "strength": 85
      },
      {
        "id": 57,
        "strength": 84
      },
      {
        "id": 8,
        "strength": 83
      },
      {
        "id": 82,
        "strength": 82
      },
      {
        "id": 87,
        "strength": 81
      },
      {
        "id": 83,
        "strength": 80
      },
      {
        "id": 97,
        "strength": 79
      },
      {
        "id": 81,
        "strength": 78
      },
      {
        "id": 85,
        "strength": 77
      },
      {
        "id": 92,
        "strength": 76
      },
      {
        "id": 52,
        "strength": 75
      },
      {
        "id": 76,
        "strength": 74
      },
      {
        "id": 16,
        "strength": 73
      },
      {
        "id": 2,
        "strength": 72
      },
      {
        "id": 62,
        "strength": 71
      },
      {
        "id": 51,
        "strength": 70
      },
      {
        "id": 96,
        "strength": 69
      },
      {
        "id": 48,
        "strength": 67.5
      },
      {
        "id": 105,
        "strength": 66.5
      },
      {
        "id": 86,
        "strength": 65.5
      },
      {
        "id": 67,
        "strength": 64.5
      },
      {
        "id": 6,
        "strength": 63.5
      },
      {
        "id": 19,
        "strength": 62.5
      },
      {
        "id": 5,
        "strength": 61.5
      },
      {
        "id": 108,
        "strength": 60.5
      },
      {
        "id": 32,
        "strength": 59.5
      },
      {
        "id": 41,
        "strength": 58.5
      },
      {
        "id": 7,
        "strength": 57.5
      },
      {
        "id": 12,
        "strength": 56.5
      },
      {
        "id": 107,
        "strength": 55.5
      },
      {
        "id": 102,
        "strength": 54.5
      },
      {
        "id": 1,
        "strength": 53.5
      },
      {
        "id": 28,
        "strength": 52.5
      },
      {
        "id": 34,
        "strength": 51.5
      },
      {
        "id": 111,
        "strength": 50.5
      },
      {
        "id": 29,
        "strength": 49.5
      },
      {
        "id": 56,
        "strength": 48.5
      },
      {
        "id": 18,
        "strength": 47.5
      },
      {
        "id": 60,
        "strength": 46.5
      },
      {
        "id": 17,
        "strength": 45.5
      },
      {
        "id": 66,
        "strength": 44.5
      },
      {
        "id": 65,
        "strength": 43.5
      },
      {
        "id": 63,
        "strength": 42.5
      },
      {
        "id": 103,
        "strength": 41.5
      },
      {
        "id": 36,
        "strength": 40.5
      },
      {
        "id": 110,
        "strength": 39.5
      },
      {
        "id": 25,
        "strength": 38.5
      },
      {
        "id": 44,
        "strength": 37.5
      },
      {
        "id": 61,
        "strength": 36.5
      },
      {
        "id": 91,
        "strength": 35.5
      },
      {
        "id": 50,
        "strength": 34.5
      },
      {
        "id": 68,
        "strength": 33.5
      },
      {
        "id": 72,
        "strength": 32.5
      },
      {
        "id": 74,
        "strength": 31.5
      },
      {
        "id": 24,
        "strength": 30.5
      },
      {
        "id": 47,
        "strength": 29.5
      },
      {
        "id": 98,
        "strength": 28.5
      },
      {
        "id": 9,
        "strength": 27.5
      },
      {
        "id": 42,
        "strength": 26.5
      },
      {
        "id": 73,
        "strength": 25.5
      },
      {
        "id": 75,
        "strength": 24.5
      },
      {
        "id": 58,
        "strength": 23.5
      },
      {
        "id": 112,
        "strength": 22.5
      },
      {
        "id": 71,
        "strength": 21.5
      },
      {
        "id": 26,
        "strength": 20.5
      },
      {
        "id": 45,
        "strength": 19.5
      },
      {
        "id": 64,
        "strength": 18.5
      },
      {
        "id": 70,
        "strength": 17.5
      },
      {
        "id": 69,
        "strength": 16.5
      },
      {
        "id": 11,
        "strength": 15.5
      },
      {
        "id": 39,
        "strength": 14.5
      },
      {
        "id": 14,
        "strength": 13.5
      },
      {
        "id": 4,
        "strength": 12.5
      },
      {
        "id": 37,
        "strength": 11.5
      },
      {
        "id": 21,
        "strength": 10.5
      },
      {
        "id": 31,
        "strength": 9.5
      },
      {
        "id": 33,
        "strength": 8.5
      },
      {
        "id": 35,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 99
  },
  "100": {
    "email": "ing.echague@gmail.com",
    "choices": [
      {
        "id": 3,
        "strength": 114
      },
      {
        "id": 20,
        "strength": 112
      },
      {
        "id": 43,
        "strength": 111
      },
      {
        "id": 30,
        "strength": 110
      },
      {
        "id": 23,
        "strength": 109
      },
      {
        "id": 106,
        "strength": 108
      },
      {
        "id": 15,
        "strength": 107
      },
      {
        "id": 79,
        "strength": 106
      },
      {
        "id": 88,
        "strength": 105
      },
      {
        "id": 95,
        "strength": 104
      },
      {
        "id": 99,
        "strength": 103
      },
      {
        "id": 49,
        "strength": 102
      },
      {
        "id": 93,
        "strength": 101
      },
      {
        "id": 38,
        "strength": 100
      },
      {
        "id": 109,
        "strength": 99
      },
      {
        "id": 55,
        "strength": 98
      },
      {
        "id": 80,
        "strength": 97
      },
      {
        "id": 54,
        "strength": 96
      },
      {
        "id": 59,
        "strength": 95
      },
      {
        "id": 84,
        "strength": 94
      },
      {
        "id": 90,
        "strength": 93
      },
      {
        "id": 104,
        "strength": 92
      },
      {
        "id": 40,
        "strength": 91
      },
      {
        "id": 46,
        "strength": 90
      },
      {
        "id": 53,
        "strength": 89
      },
      {
        "id": 89,
        "strength": 88
      },
      {
        "id": 78,
        "strength": 87
      },
      {
        "id": 77,
        "strength": 86
      },
      {
        "id": 57,
        "strength": 85
      },
      {
        "id": 8,
        "strength": 84
      },
      {
        "id": 82,
        "strength": 83
      },
      {
        "id": 87,
        "strength": 82
      },
      {
        "id": 83,
        "strength": 81
      },
      {
        "id": 97,
        "strength": 80
      },
      {
        "id": 81,
        "strength": 79
      },
      {
        "id": 85,
        "strength": 78
      },
      {
        "id": 92,
        "strength": 77
      },
      {
        "id": 52,
        "strength": 76
      },
      {
        "id": 76,
        "strength": 75
      },
      {
        "id": 16,
        "strength": 74
      },
      {
        "id": 2,
        "strength": 73
      },
      {
        "id": 62,
        "strength": 72
      },
      {
        "id": 51,
        "strength": 71
      },
      {
        "id": 96,
        "strength": 70
      },
      {
        "id": 48,
        "strength": 68.5
      },
      {
        "id": 105,
        "strength": 67.5
      },
      {
        "id": 86,
        "strength": 66.5
      },
      {
        "id": 67,
        "strength": 65.5
      },
      {
        "id": 6,
        "strength": 64.5
      },
      {
        "id": 19,
        "strength": 63.5
      },
      {
        "id": 5,
        "strength": 62.5
      },
      {
        "id": 108,
        "strength": 61.5
      },
      {
        "id": 32,
        "strength": 60.5
      },
      {
        "id": 41,
        "strength": 59.5
      },
      {
        "id": 7,
        "strength": 58.5
      },
      {
        "id": 12,
        "strength": 57.5
      },
      {
        "id": 107,
        "strength": 56.5
      },
      {
        "id": 102,
        "strength": 55.5
      },
      {
        "id": 1,
        "strength": 54.5
      },
      {
        "id": 28,
        "strength": 53.5
      },
      {
        "id": 34,
        "strength": 52.5
      },
      {
        "id": 111,
        "strength": 51.5
      },
      {
        "id": 29,
        "strength": 50.5
      },
      {
        "id": 56,
        "strength": 49.5
      },
      {
        "id": 18,
        "strength": 48.5
      },
      {
        "id": 60,
        "strength": 47.5
      },
      {
        "id": 17,
        "strength": 46.5
      },
      {
        "id": 66,
        "strength": 45.5
      },
      {
        "id": 27,
        "strength": 44.5
      },
      {
        "id": 65,
        "strength": 43.5
      },
      {
        "id": 63,
        "strength": 42.5
      },
      {
        "id": 103,
        "strength": 41.5
      },
      {
        "id": 36,
        "strength": 40.5
      },
      {
        "id": 110,
        "strength": 39.5
      },
      {
        "id": 25,
        "strength": 38.5
      },
      {
        "id": 44,
        "strength": 37.5
      },
      {
        "id": 61,
        "strength": 36.5
      },
      {
        "id": 91,
        "strength": 35.5
      },
      {
        "id": 50,
        "strength": 34.5
      },
      {
        "id": 68,
        "strength": 33.5
      },
      {
        "id": 72,
        "strength": 32.5
      },
      {
        "id": 74,
        "strength": 31.5
      },
      {
        "id": 24,
        "strength": 30.5
      },
      {
        "id": 47,
        "strength": 29.5
      },
      {
        "id": 98,
        "strength": 28.5
      },
      {
        "id": 9,
        "strength": 27.5
      },
      {
        "id": 42,
        "strength": 26.5
      },
      {
        "id": 73,
        "strength": 25.5
      },
      {
        "id": 75,
        "strength": 24.5
      },
      {
        "id": 58,
        "strength": 23.5
      },
      {
        "id": 112,
        "strength": 22.5
      },
      {
        "id": 71,
        "strength": 21.5
      },
      {
        "id": 26,
        "strength": 20.5
      },
      {
        "id": 45,
        "strength": 19.5
      },
      {
        "id": 64,
        "strength": 18.5
      },
      {
        "id": 70,
        "strength": 17.5
      },
      {
        "id": 69,
        "strength": 16.5
      },
      {
        "id": 11,
        "strength": 15.5
      },
      {
        "id": 39,
        "strength": 14.5
      },
      {
        "id": 14,
        "strength": 13.5
      },
      {
        "id": 4,
        "strength": 12.5
      },
      {
        "id": 37,
        "strength": 11.5
      },
      {
        "id": 21,
        "strength": 10.5
      },
      {
        "id": 31,
        "strength": 9.5
      },
      {
        "id": 33,
        "strength": 8.5
      },
      {
        "id": 35,
        "strength": 7.5
      },
      {
        "id": 10,
        "strength": 6.5
      },
      {
        "id": 13,
        "strength": 5.5
      },
      {
        "id": 94,
        "strength": 4.5
      },
      {
        "id": 22,
        "strength": 3.5
      },
      {
        "id": 101,
        "strength": 2.5
      }
    ],
    "id": 100
  },
  "101": {
    "email": "ycarasco@hotmail.com",
    "choices": [
      {
        "id": 75,
        "strength": 116
      },
      {
        "id": 37,
        "strength": 115
      },
      {
        "id": 10,
        "strength": 114
      },
      {
        "id": 29,
        "strength": 113
      },
      {
        "id": 13,
        "strength": 112
      },
      {
        "id": 102,
        "strength": 110
      },
      {
        "id": 79,
        "strength": 109
      },
      {
        "id": 95,
        "strength": 108
      },
      {
        "id": 58,
        "strength": 107
      },
      {
        "id": 25,
        "strength": 106
      },
      {
        "id": 11,
        "strength": 105
      },
      {
        "id": 54,
        "strength": 104
      },
      {
        "id": 24,
        "strength": 103
      },
      {
        "id": 39,
        "strength": 102
      },
      {
        "id": 103,
        "strength": 101
      },
      {
        "id": 3,
        "strength": 100
      },
      {
        "id": 27,
        "strength": 99
      },
      {
        "id": 66,
        "strength": 98
      },
      {
        "id": 60,
        "strength": 97
      },
      {
        "id": 31,
        "strength": 96
      },
      {
        "id": 74,
        "strength": 95
      },
      {
        "id": 18,
        "strength": 94
      },
      {
        "id": 16,
        "strength": 93
      },
      {
        "id": 20,
        "strength": 91
      },
      {
        "id": 48,
        "strength": 90
      },
      {
        "id": 28,
        "strength": 89
      },
      {
        "id": 23,
        "strength": 88
      },
      {
        "id": 15,
        "strength": 87
      },
      {
        "id": 50,
        "strength": 86
      },
      {
        "id": 47,
        "strength": 85
      },
      {
        "id": 42,
        "strength": 84
      },
      {
        "id": 49,
        "strength": 83
      },
      {
        "id": 71,
        "strength": 82
      },
      {
        "id": 44,
        "strength": 81
      },
      {
        "id": 26,
        "strength": 80
      },
      {
        "id": 98,
        "strength": 79
      },
      {
        "id": 80,
        "strength": 78
      },
      {
        "id": 34,
        "strength": 77
      },
      {
        "id": 59,
        "strength": 76
      },
      {
        "id": 46,
        "strength": 75
      },
      {
        "id": 36,
        "strength": 74
      },
      {
        "id": 78,
        "strength": 73
      },
      {
        "id": 19,
        "strength": 72
      },
      {
        "id": 33,
        "strength": 71
      },
      {
        "id": 35,
        "strength": 70
      },
      {
        "id": 52,
        "strength": 69
      },
      {
        "id": 56,
        "strength": 68
      },
      {
        "id": 2,
        "strength": 67
      },
      {
        "id": 72,
        "strength": 66
      },
      {
        "id": 43,
        "strength": 64
      },
      {
        "id": 30,
        "strength": 63
      },
      {
        "id": 67,
        "strength": 62
      },
      {
        "id": 5,
        "strength": 61
      },
      {
        "id": 32,
        "strength": 60
      },
      {
        "id": 68,
        "strength": 59
      },
      {
        "id": 9,
        "strength": 58
      },
      {
        "id": 106,
        "strength": 57
      },
      {
        "id": 12,
        "strength": 56
      },
      {
        "id": 91,
        "strength": 55
      },
      {
        "id": 73,
        "strength": 54
      },
      {
        "id": 88,
        "strength": 53
      },
      {
        "id": 112,
        "strength": 52
      },
      {
        "id": 61,
        "strength": 51
      },
      {
        "id": 45,
        "strength": 50
      },
      {
        "id": 64,
        "strength": 49
      },
      {
        "id": 70,
        "strength": 48
      },
      {
        "id": 109,
        "strength": 47
      },
      {
        "id": 69,
        "strength": 46
      },
      {
        "id": 1,
        "strength": 45
      },
      {
        "id": 110,
        "strength": 44
      },
      {
        "id": 7,
        "strength": 43
      },
      {
        "id": 104,
        "strength": 42
      },
      {
        "id": 40,
        "strength": 41
      },
      {
        "id": 41,
        "strength": 40
      },
      {
        "id": 53,
        "strength": 39
      },
      {
        "id": 63,
        "strength": 38
      },
      {
        "id": 65,
        "strength": 37
      },
      {
        "id": 14,
        "strength": 36
      },
      {
        "id": 57,
        "strength": 35
      },
      {
        "id": 4,
        "strength": 34
      },
      {
        "id": 17,
        "strength": 33
      },
      {
        "id": 8,
        "strength": 32
      },
      {
        "id": 21,
        "strength": 31
      },
      {
        "id": 82,
        "strength": 30
      },
      {
        "id": 97,
        "strength": 29
      },
      {
        "id": 111,
        "strength": 28
      },
      {
        "id": 86,
        "strength": 27
      },
      {
        "id": 22,
        "strength": 26
      },
      {
        "id": 51,
        "strength": 25
      },
      {
        "id": 96,
        "strength": 24
      },
      {
        "id": 107,
        "strength": 23
      },
      {
        "id": 108,
        "strength": 22
      },
      {
        "id": 105,
        "strength": 21
      },
      {
        "id": 6,
        "strength": 19.5
      },
      {
        "id": 38,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 85,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 55,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 101
  },
  "102": {
    "email": "c.brathwaite@lokjackgsb.edu.tt",
    "choices": [
      {
        "id": 95,
        "strength": 116
      },
      {
        "id": 3,
        "strength": 115
      },
      {
        "id": 47,
        "strength": 113
      },
      {
        "id": 42,
        "strength": 112
      },
      {
        "id": 75,
        "strength": 111
      },
      {
        "id": 44,
        "strength": 110
      },
      {
        "id": 26,
        "strength": 109
      },
      {
        "id": 98,
        "strength": 108
      },
      {
        "id": 25,
        "strength": 107
      },
      {
        "id": 80,
        "strength": 106
      },
      {
        "id": 11,
        "strength": 105
      },
      {
        "id": 103,
        "strength": 104
      },
      {
        "id": 78,
        "strength": 103
      },
      {
        "id": 27,
        "strength": 102
      },
      {
        "id": 66,
        "strength": 101
      },
      {
        "id": 37,
        "strength": 100
      },
      {
        "id": 35,
        "strength": 99
      },
      {
        "id": 16,
        "strength": 98
      },
      {
        "id": 10,
        "strength": 97
      },
      {
        "id": 29,
        "strength": 96
      },
      {
        "id": 13,
        "strength": 95
      },
      {
        "id": 101,
        "strength": 94
      },
      {
        "id": 20,
        "strength": 92
      },
      {
        "id": 48,
        "strength": 91
      },
      {
        "id": 28,
        "strength": 90
      },
      {
        "id": 43,
        "strength": 89
      },
      {
        "id": 23,
        "strength": 88
      },
      {
        "id": 15,
        "strength": 87
      },
      {
        "id": 50,
        "strength": 86
      },
      {
        "id": 79,
        "strength": 85
      },
      {
        "id": 88,
        "strength": 84
      },
      {
        "id": 58,
        "strength": 83
      },
      {
        "id": 49,
        "strength": 82
      },
      {
        "id": 71,
        "strength": 81
      },
      {
        "id": 54,
        "strength": 80
      },
      {
        "id": 34,
        "strength": 79
      },
      {
        "id": 59,
        "strength": 78
      },
      {
        "id": 24,
        "strength": 77
      },
      {
        "id": 39,
        "strength": 76
      },
      {
        "id": 104,
        "strength": 75
      },
      {
        "id": 46,
        "strength": 74
      },
      {
        "id": 36,
        "strength": 73
      },
      {
        "id": 82,
        "strength": 72
      },
      {
        "id": 19,
        "strength": 71
      },
      {
        "id": 60,
        "strength": 70
      },
      {
        "id": 31,
        "strength": 69
      },
      {
        "id": 74,
        "strength": 68
      },
      {
        "id": 18,
        "strength": 67
      },
      {
        "id": 97,
        "strength": 66
      },
      {
        "id": 33,
        "strength": 65
      },
      {
        "id": 52,
        "strength": 64
      },
      {
        "id": 2,
        "strength": 63
      },
      {
        "id": 51,
        "strength": 62
      },
      {
        "id": 96,
        "strength": 61
      },
      {
        "id": 105,
        "strength": 60
      },
      {
        "id": 30,
        "strength": 58
      },
      {
        "id": 67,
        "strength": 57
      },
      {
        "id": 5,
        "strength": 56
      },
      {
        "id": 32,
        "strength": 55
      },
      {
        "id": 68,
        "strength": 54
      },
      {
        "id": 9,
        "strength": 53
      },
      {
        "id": 106,
        "strength": 52
      },
      {
        "id": 12,
        "strength": 51
      },
      {
        "id": 91,
        "strength": 50
      },
      {
        "id": 73,
        "strength": 49
      },
      {
        "id": 112,
        "strength": 48
      },
      {
        "id": 61,
        "strength": 47
      },
      {
        "id": 45,
        "strength": 46
      },
      {
        "id": 64,
        "strength": 45
      },
      {
        "id": 70,
        "strength": 44
      },
      {
        "id": 109,
        "strength": 43
      },
      {
        "id": 69,
        "strength": 42
      },
      {
        "id": 1,
        "strength": 41
      },
      {
        "id": 110,
        "strength": 40
      },
      {
        "id": 7,
        "strength": 39
      },
      {
        "id": 40,
        "strength": 38
      },
      {
        "id": 41,
        "strength": 37
      },
      {
        "id": 53,
        "strength": 36
      },
      {
        "id": 63,
        "strength": 35
      },
      {
        "id": 65,
        "strength": 34
      },
      {
        "id": 14,
        "strength": 33
      },
      {
        "id": 57,
        "strength": 32
      },
      {
        "id": 4,
        "strength": 31
      },
      {
        "id": 17,
        "strength": 30
      },
      {
        "id": 8,
        "strength": 29
      },
      {
        "id": 21,
        "strength": 28
      },
      {
        "id": 56,
        "strength": 27
      },
      {
        "id": 111,
        "strength": 26
      },
      {
        "id": 86,
        "strength": 25
      },
      {
        "id": 72,
        "strength": 24
      },
      {
        "id": 22,
        "strength": 23
      },
      {
        "id": 107,
        "strength": 22
      },
      {
        "id": 108,
        "strength": 21
      },
      {
        "id": 6,
        "strength": 19.5
      },
      {
        "id": 38,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 85,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 55,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 102
  },
  "103": {
    "email": "mf@vhnordjylland.dk",
    "choices": [
      {
        "id": 102,
        "strength": 115
      },
      {
        "id": 75,
        "strength": 114
      },
      {
        "id": 95,
        "strength": 113
      },
      {
        "id": 25,
        "strength": 112
      },
      {
        "id": 80,
        "strength": 111
      },
      {
        "id": 11,
        "strength": 110
      },
      {
        "id": 34,
        "strength": 109
      },
      {
        "id": 36,
        "strength": 108
      },
      {
        "id": 3,
        "strength": 107
      },
      {
        "id": 27,
        "strength": 106
      },
      {
        "id": 37,
        "strength": 105
      },
      {
        "id": 19,
        "strength": 104
      },
      {
        "id": 16,
        "strength": 103
      },
      {
        "id": 10,
        "strength": 102
      },
      {
        "id": 29,
        "strength": 101
      },
      {
        "id": 13,
        "strength": 100
      },
      {
        "id": 101,
        "strength": 99
      },
      {
        "id": 20,
        "strength": 97
      },
      {
        "id": 48,
        "strength": 96
      },
      {
        "id": 28,
        "strength": 95
      },
      {
        "id": 23,
        "strength": 94
      },
      {
        "id": 15,
        "strength": 93
      },
      {
        "id": 50,
        "strength": 92
      },
      {
        "id": 47,
        "strength": 91
      },
      {
        "id": 42,
        "strength": 90
      },
      {
        "id": 79,
        "strength": 89
      },
      {
        "id": 88,
        "strength": 88
      },
      {
        "id": 58,
        "strength": 87
      },
      {
        "id": 49,
        "strength": 86
      },
      {
        "id": 71,
        "strength": 85
      },
      {
        "id": 61,
        "strength": 84
      },
      {
        "id": 44,
        "strength": 83
      },
      {
        "id": 26,
        "strength": 82
      },
      {
        "id": 98,
        "strength": 81
      },
      {
        "id": 70,
        "strength": 80
      },
      {
        "id": 54,
        "strength": 79
      },
      {
        "id": 59,
        "strength": 78
      },
      {
        "id": 24,
        "strength": 77
      },
      {
        "id": 39,
        "strength": 76
      },
      {
        "id": 46,
        "strength": 75
      },
      {
        "id": 63,
        "strength": 74
      },
      {
        "id": 78,
        "strength": 73
      },
      {
        "id": 66,
        "strength": 72
      },
      {
        "id": 60,
        "strength": 71
      },
      {
        "id": 31,
        "strength": 70
      },
      {
        "id": 74,
        "strength": 69
      },
      {
        "id": 18,
        "strength": 68
      },
      {
        "id": 33,
        "strength": 67
      },
      {
        "id": 35,
        "strength": 66
      },
      {
        "id": 52,
        "strength": 65
      },
      {
        "id": 2,
        "strength": 64
      },
      {
        "id": 86,
        "strength": 63
      },
      {
        "id": 96,
        "strength": 62
      },
      {
        "id": 107,
        "strength": 61
      },
      {
        "id": 108,
        "strength": 60
      },
      {
        "id": 105,
        "strength": 59
      },
      {
        "id": 43,
        "strength": 57
      },
      {
        "id": 30,
        "strength": 56
      },
      {
        "id": 67,
        "strength": 55
      },
      {
        "id": 5,
        "strength": 54
      },
      {
        "id": 32,
        "strength": 53
      },
      {
        "id": 68,
        "strength": 52
      },
      {
        "id": 9,
        "strength": 51
      },
      {
        "id": 106,
        "strength": 50
      },
      {
        "id": 12,
        "strength": 49
      },
      {
        "id": 91,
        "strength": 48
      },
      {
        "id": 73,
        "strength": 47
      },
      {
        "id": 112,
        "strength": 46
      },
      {
        "id": 45,
        "strength": 45
      },
      {
        "id": 64,
        "strength": 44
      },
      {
        "id": 109,
        "strength": 43
      },
      {
        "id": 69,
        "strength": 42
      },
      {
        "id": 1,
        "strength": 41
      },
      {
        "id": 110,
        "strength": 40
      },
      {
        "id": 7,
        "strength": 39
      },
      {
        "id": 104,
        "strength": 38
      },
      {
        "id": 40,
        "strength": 37
      },
      {
        "id": 41,
        "strength": 36
      },
      {
        "id": 53,
        "strength": 35
      },
      {
        "id": 65,
        "strength": 34
      },
      {
        "id": 14,
        "strength": 33
      },
      {
        "id": 57,
        "strength": 32
      },
      {
        "id": 4,
        "strength": 31
      },
      {
        "id": 17,
        "strength": 30
      },
      {
        "id": 8,
        "strength": 29
      },
      {
        "id": 21,
        "strength": 28
      },
      {
        "id": 82,
        "strength": 27
      },
      {
        "id": 97,
        "strength": 26
      },
      {
        "id": 56,
        "strength": 25
      },
      {
        "id": 111,
        "strength": 24
      },
      {
        "id": 72,
        "strength": 23
      },
      {
        "id": 22,
        "strength": 22
      },
      {
        "id": 51,
        "strength": 21
      },
      {
        "id": 6,
        "strength": 19.5
      },
      {
        "id": 38,
        "strength": 18.5
      },
      {
        "id": 62,
        "strength": 17.5
      },
      {
        "id": 92,
        "strength": 16.5
      },
      {
        "id": 85,
        "strength": 15.5
      },
      {
        "id": 81,
        "strength": 14.5
      },
      {
        "id": 87,
        "strength": 13.5
      },
      {
        "id": 90,
        "strength": 12.5
      },
      {
        "id": 84,
        "strength": 11.5
      },
      {
        "id": 55,
        "strength": 10.5
      },
      {
        "id": 100,
        "strength": 9.5
      },
      {
        "id": 93,
        "strength": 8.5
      },
      {
        "id": 99,
        "strength": 7.5
      },
      {
        "id": 77,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 103
  },
  "104": {
    "email": "luisbanauge@gmail.com",
    "choices": [
      {
        "id": 88,
        "strength": 115
      },
      {
        "id": 95,
        "strength": 114
      },
      {
        "id": 80,
        "strength": 113
      },
      {
        "id": 3,
        "strength": 112
      },
      {
        "id": 78,
        "strength": 111
      },
      {
        "id": 82,
        "strength": 110
      },
      {
        "id": 51,
        "strength": 109
      },
      {
        "id": 96,
        "strength": 108
      },
      {
        "id": 20,
        "strength": 106
      },
      {
        "id": 43,
        "strength": 105
      },
      {
        "id": 23,
        "strength": 104
      },
      {
        "id": 102,
        "strength": 103
      },
      {
        "id": 47,
        "strength": 102
      },
      {
        "id": 42,
        "strength": 101
      },
      {
        "id": 79,
        "strength": 100
      },
      {
        "id": 26,
        "strength": 99
      },
      {
        "id": 98,
        "strength": 98
      },
      {
        "id": 54,
        "strength": 97
      },
      {
        "id": 59,
        "strength": 96
      },
      {
        "id": 46,
        "strength": 95
      },
      {
        "id": 66,
        "strength": 94
      },
      {
        "id": 97,
        "strength": 93
      },
      {
        "id": 35,
        "strength": 92
      },
      {
        "id": 52,
        "strength": 91
      },
      {
        "id": 16,
        "strength": 90
      },
      {
        "id": 2,
        "strength": 89
      },
      {
        "id": 28,
        "strength": 87
      },
      {
        "id": 30,
        "strength": 86
      },
      {
        "id": 5,
        "strength": 85
      },
      {
        "id": 106,
        "strength": 84
      },
      {
        "id": 15,
        "strength": 83
      },
      {
        "id": 75,
        "strength": 82
      },
      {
        "id": 99,
        "strength": 81
      },
      {
        "id": 49,
        "strength": 80
      },
      {
        "id": 71,
        "strength": 79
      },
      {
        "id": 44,
        "strength": 78
      },
      {
        "id": 100,
        "strength": 77
      },
      {
        "id": 93,
        "strength": 76
      },
      {
        "id": 25,
        "strength": 75
      },
      {
        "id": 38,
        "strength": 74
      },
      {
        "id": 109,
        "strength": 73
      },
      {
        "id": 55,
        "strength": 72
      },
      {
        "id": 11,
        "strength": 71
      },
      {
        "id": 34,
        "strength": 70
      },
      {
        "id": 39,
        "strength": 69
      },
      {
        "id": 84,
        "strength": 68
      },
      {
        "id": 90,
        "strength": 67
      },
      {
        "id": 40,
        "strength": 66
      },
      {
        "id": 53,
        "strength": 65
      },
      {
        "id": 36,
        "strength": 64
      },
      {
        "id": 89,
        "strength": 63
      },
      {
        "id": 103,
        "strength": 62
      },
      {
        "id": 27,
        "strength": 61
      },
      {
        "id": 77,
        "strength": 60
      },
      {
        "id": 57,
        "strength": 59
      },
      {
        "id": 37,
        "strength": 58
      },
      {
        "id": 8,
        "strength": 57
      },
      {
        "id": 19,
        "strength": 56
      },
      {
        "id": 87,
        "strength": 55
      },
      {
        "id": 74,
        "strength": 54
      },
      {
        "id": 83,
        "strength": 53
      },
      {
        "id": 18,
        "strength": 52
      },
      {
        "id": 81,
        "strength": 51
      },
      {
        "id": 33,
        "strength": 50
      },
      {
        "id": 85,
        "strength": 49
      },
      {
        "id": 92,
        "strength": 48
      },
      {
        "id": 76,
        "strength": 47
      },
      {
        "id": 56,
        "strength": 46
      },
      {
        "id": 10,
        "strength": 45
      },
      {
        "id": 29,
        "strength": 44
      },
      {
        "id": 13,
        "strength": 43
      },
      {
        "id": 62,
        "strength": 42
      },
      {
        "id": 101,
        "strength": 41
      },
      {
        "id": 105,
        "strength": 40
      },
      {
        "id": 48,
        "strength": 38.5
      },
      {
        "id": 86,
        "strength": 37.5
      },
      {
        "id": 67,
        "strength": 36.5
      },
      {
        "id": 6,
        "strength": 35.5
      },
      {
        "id": 108,
        "strength": 34.5
      },
      {
        "id": 32,
        "strength": 33.5
      },
      {
        "id": 41,
        "strength": 32.5
      },
      {
        "id": 7,
        "strength": 31.5
      },
      {
        "id": 12,
        "strength": 30.5
      },
      {
        "id": 107,
        "strength": 29.5
      },
      {
        "id": 1,
        "strength": 28.5
      },
      {
        "id": 111,
        "strength": 27.5
      },
      {
        "id": 60,
        "strength": 26.5
      },
      {
        "id": 17,
        "strength": 25.5
      },
      {
        "id": 65,
        "strength": 24.5
      },
      {
        "id": 63,
        "strength": 23.5
      },
      {
        "id": 110,
        "strength": 22.5
      },
      {
        "id": 61,
        "strength": 21.5
      },
      {
        "id": 91,
        "strength": 20.5
      },
      {
        "id": 50,
        "strength": 19.5
      },
      {
        "id": 68,
        "strength": 18.5
      },
      {
        "id": 72,
        "strength": 17.5
      },
      {
        "id": 24,
        "strength": 16.5
      },
      {
        "id": 9,
        "strength": 15.5
      },
      {
        "id": 73,
        "strength": 14.5
      },
      {
        "id": 58,
        "strength": 13.5
      },
      {
        "id": 112,
        "strength": 12.5
      },
      {
        "id": 45,
        "strength": 11.5
      },
      {
        "id": 64,
        "strength": 10.5
      },
      {
        "id": 70,
        "strength": 9.5
      },
      {
        "id": 69,
        "strength": 8.5
      },
      {
        "id": 14,
        "strength": 7.5
      },
      {
        "id": 4,
        "strength": 6.5
      },
      {
        "id": 21,
        "strength": 5.5
      },
      {
        "id": 31,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 22,
        "strength": 2.5
      }
    ],
    "id": 104
  },
  "105": {
    "email": "yebibie@entreprenarium.org",
    "choices": [
      {
        "id": 34,
        "strength": 116
      },
      {
        "id": 30,
        "strength": 114
      },
      {
        "id": 47,
        "strength": 113
      },
      {
        "id": 80,
        "strength": 112
      },
      {
        "id": 3,
        "strength": 111
      },
      {
        "id": 43,
        "strength": 109
      },
      {
        "id": 67,
        "strength": 108
      },
      {
        "id": 32,
        "strength": 107
      },
      {
        "id": 102,
        "strength": 106
      },
      {
        "id": 106,
        "strength": 105
      },
      {
        "id": 50,
        "strength": 104
      },
      {
        "id": 42,
        "strength": 103
      },
      {
        "id": 88,
        "strength": 102
      },
      {
        "id": 95,
        "strength": 101
      },
      {
        "id": 61,
        "strength": 100
      },
      {
        "id": 44,
        "strength": 99
      },
      {
        "id": 26,
        "strength": 98
      },
      {
        "id": 70,
        "strength": 97
      },
      {
        "id": 7,
        "strength": 96
      },
      {
        "id": 36,
        "strength": 95
      },
      {
        "id": 103,
        "strength": 94
      },
      {
        "id": 63,
        "strength": 93
      },
      {
        "id": 78,
        "strength": 92
      },
      {
        "id": 66,
        "strength": 91
      },
      {
        "id": 8,
        "strength": 90
      },
      {
        "id": 19,
        "strength": 89
      },
      {
        "id": 35,
        "strength": 88
      },
      {
        "id": 16,
        "strength": 87
      },
      {
        "id": 13,
        "strength": 86
      },
      {
        "id": 86,
        "strength": 85
      },
      {
        "id": 96,
        "strength": 84
      },
      {
        "id": 107,
        "strength": 83
      },
      {
        "id": 108,
        "strength": 82
      },
      {
        "id": 20,
        "strength": 80
      },
      {
        "id": 48,
        "strength": 79
      },
      {
        "id": 28,
        "strength": 78
      },
      {
        "id": 5,
        "strength": 77
      },
      {
        "id": 23,
        "strength": 76
      },
      {
        "id": 68,
        "strength": 75
      },
      {
        "id": 9,
        "strength": 74
      },
      {
        "id": 15,
        "strength": 73
      },
      {
        "id": 12,
        "strength": 72
      },
      {
        "id": 91,
        "strength": 71
      },
      {
        "id": 73,
        "strength": 70
      },
      {
        "id": 75,
        "strength": 69
      },
      {
        "id": 58,
        "strength": 68
      },
      {
        "id": 112,
        "strength": 67
      },
      {
        "id": 49,
        "strength": 66
      },
      {
        "id": 71,
        "strength": 65
      },
      {
        "id": 98,
        "strength": 64
      },
      {
        "id": 45,
        "strength": 63
      },
      {
        "id": 64,
        "strength": 62
      },
      {
        "id": 25,
        "strength": 61
      },
      {
        "id": 109,
        "strength": 60
      },
      {
        "id": 69,
        "strength": 59
      },
      {
        "id": 1,
        "strength": 58
      },
      {
        "id": 110,
        "strength": 57
      },
      {
        "id": 11,
        "strength": 56
      },
      {
        "id": 59,
        "strength": 55
      },
      {
        "id": 24,
        "strength": 54
      },
      {
        "id": 39,
        "strength": 53
      },
      {
        "id": 104,
        "strength": 52
      },
      {
        "id": 40,
        "strength": 51
      },
      {
        "id": 41,
        "strength": 50
      },
      {
        "id": 46,
        "strength": 49
      },
      {
        "id": 53,
        "strength": 48
      },
      {
        "id": 65,
        "strength": 47
      },
      {
        "id": 27,
        "strength": 46
      },
      {
        "id": 14,
        "strength": 45
      },
      {
        "id": 57,
        "strength": 44
      },
      {
        "id": 4,
        "strength": 43
      },
      {
        "id": 17,
        "strength": 42
      },
      {
        "id": 37,
        "strength": 41
      },
      {
        "id": 21,
        "strength": 40
      },
      {
        "id": 82,
        "strength": 39
      },
      {
        "id": 60,
        "strength": 38
      },
      {
        "id": 31,
        "strength": 37
      },
      {
        "id": 74,
        "strength": 36
      },
      {
        "id": 18,
        "strength": 35
      },
      {
        "id": 97,
        "strength": 34
      },
      {
        "id": 33,
        "strength": 33
      },
      {
        "id": 52,
        "strength": 32
      },
      {
        "id": 56,
        "strength": 31
      },
      {
        "id": 2,
        "strength": 30
      },
      {
        "id": 10,
        "strength": 29
      },
      {
        "id": 29,
        "strength": 28
      },
      {
        "id": 111,
        "strength": 27
      },
      {
        "id": 72,
        "strength": 26
      },
      {
        "id": 22,
        "strength": 25
      },
      {
        "id": 51,
        "strength": 24
      },
      {
        "id": 101,
        "strength": 23
      },
      {
        "id": 6,
        "strength": 21.5
      },
      {
        "id": 38,
        "strength": 20.5
      },
      {
        "id": 62,
        "strength": 19.5
      },
      {
        "id": 92,
        "strength": 18.5
      },
      {
        "id": 85,
        "strength": 17.5
      },
      {
        "id": 81,
        "strength": 16.5
      },
      {
        "id": 87,
        "strength": 15.5
      },
      {
        "id": 90,
        "strength": 14.5
      },
      {
        "id": 84,
        "strength": 13.5
      },
      {
        "id": 55,
        "strength": 12.5
      },
      {
        "id": 100,
        "strength": 11.5
      },
      {
        "id": 93,
        "strength": 10.5
      },
      {
        "id": 99,
        "strength": 9.5
      },
      {
        "id": 79,
        "strength": 8.5
      },
      {
        "id": 77,
        "strength": 7.5
      },
      {
        "id": 54,
        "strength": 6.5
      },
      {
        "id": 89,
        "strength": 5.5
      },
      {
        "id": 83,
        "strength": 4.5
      },
      {
        "id": 76,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 105
  },
  "106": {
    "email": "daniel.ras-vidal@abelia.no",
    "choices": [
      {
        "id": 30,
        "strength": 115
      },
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 43,
        "strength": 112
      },
      {
        "id": 23,
        "strength": 111
      },
      {
        "id": 15,
        "strength": 110
      },
      {
        "id": 95,
        "strength": 109
      },
      {
        "id": 49,
        "strength": 108
      },
      {
        "id": 109,
        "strength": 107
      },
      {
        "id": 80,
        "strength": 106
      },
      {
        "id": 59,
        "strength": 105
      },
      {
        "id": 40,
        "strength": 104
      },
      {
        "id": 46,
        "strength": 103
      },
      {
        "id": 53,
        "strength": 102
      },
      {
        "id": 3,
        "strength": 101
      },
      {
        "id": 78,
        "strength": 100
      },
      {
        "id": 57,
        "strength": 99
      },
      {
        "id": 8,
        "strength": 98
      },
      {
        "id": 52,
        "strength": 97
      },
      {
        "id": 16,
        "strength": 96
      },
      {
        "id": 2,
        "strength": 95
      },
      {
        "id": 105,
        "strength": 94
      },
      {
        "id": 48,
        "strength": 92
      },
      {
        "id": 28,
        "strength": 91
      },
      {
        "id": 67,
        "strength": 90
      },
      {
        "id": 5,
        "strength": 89
      },
      {
        "id": 32,
        "strength": 88
      },
      {
        "id": 102,
        "strength": 87
      },
      {
        "id": 68,
        "strength": 86
      },
      {
        "id": 9,
        "strength": 85
      },
      {
        "id": 50,
        "strength": 84
      },
      {
        "id": 47,
        "strength": 83
      },
      {
        "id": 42,
        "strength": 82
      },
      {
        "id": 79,
        "strength": 81
      },
      {
        "id": 12,
        "strength": 80
      },
      {
        "id": 91,
        "strength": 79
      },
      {
        "id": 73,
        "strength": 78
      },
      {
        "id": 88,
        "strength": 77
      },
      {
        "id": 75,
        "strength": 76
      },
      {
        "id": 58,
        "strength": 75
      },
      {
        "id": 99,
        "strength": 74
      },
      {
        "id": 112,
        "strength": 73
      },
      {
        "id": 71,
        "strength": 72
      },
      {
        "id": 61,
        "strength": 71
      },
      {
        "id": 44,
        "strength": 70
      },
      {
        "id": 26,
        "strength": 69
      },
      {
        "id": 100,
        "strength": 68
      },
      {
        "id": 93,
        "strength": 67
      },
      {
        "id": 45,
        "strength": 66
      },
      {
        "id": 64,
        "strength": 65
      },
      {
        "id": 25,
        "strength": 64
      },
      {
        "id": 70,
        "strength": 63
      },
      {
        "id": 38,
        "strength": 62
      },
      {
        "id": 69,
        "strength": 61
      },
      {
        "id": 1,
        "strength": 60
      },
      {
        "id": 55,
        "strength": 59
      },
      {
        "id": 110,
        "strength": 58
      },
      {
        "id": 11,
        "strength": 57
      },
      {
        "id": 54,
        "strength": 56
      },
      {
        "id": 34,
        "strength": 55
      },
      {
        "id": 24,
        "strength": 54
      },
      {
        "id": 39,
        "strength": 53
      },
      {
        "id": 84,
        "strength": 52
      },
      {
        "id": 7,
        "strength": 51
      },
      {
        "id": 90,
        "strength": 50
      },
      {
        "id": 104,
        "strength": 49
      },
      {
        "id": 41,
        "strength": 48
      },
      {
        "id": 36,
        "strength": 47
      },
      {
        "id": 89,
        "strength": 46
      },
      {
        "id": 103,
        "strength": 45
      },
      {
        "id": 63,
        "strength": 44
      },
      {
        "id": 65,
        "strength": 43
      },
      {
        "id": 27,
        "strength": 42
      },
      {
        "id": 14,
        "strength": 41
      },
      {
        "id": 77,
        "strength": 40
      },
      {
        "id": 66,
        "strength": 39
      },
      {
        "id": 4,
        "strength": 38
      },
      {
        "id": 17,
        "strength": 37
      },
      {
        "id": 37,
        "strength": 36
      },
      {
        "id": 21,
        "strength": 35
      },
      {
        "id": 82,
        "strength": 34
      },
      {
        "id": 19,
        "strength": 33
      },
      {
        "id": 60,
        "strength": 32
      },
      {
        "id": 31,
        "strength": 31
      },
      {
        "id": 87,
        "strength": 30
      },
      {
        "id": 74,
        "strength": 29
      },
      {
        "id": 83,
        "strength": 28
      },
      {
        "id": 18,
        "strength": 27
      },
      {
        "id": 97,
        "strength": 26
      },
      {
        "id": 81,
        "strength": 25
      },
      {
        "id": 33,
        "strength": 24
      },
      {
        "id": 35,
        "strength": 23
      },
      {
        "id": 85,
        "strength": 22
      },
      {
        "id": 92,
        "strength": 21
      },
      {
        "id": 76,
        "strength": 20
      },
      {
        "id": 56,
        "strength": 19
      },
      {
        "id": 10,
        "strength": 18
      },
      {
        "id": 29,
        "strength": 17
      },
      {
        "id": 111,
        "strength": 16
      },
      {
        "id": 13,
        "strength": 15
      },
      {
        "id": 86,
        "strength": 14
      },
      {
        "id": 72,
        "strength": 13
      },
      {
        "id": 62,
        "strength": 12
      },
      {
        "id": 22,
        "strength": 11
      },
      {
        "id": 51,
        "strength": 10
      },
      {
        "id": 96,
        "strength": 9
      },
      {
        "id": 107,
        "strength": 8
      },
      {
        "id": 108,
        "strength": 7
      },
      {
        "id": 101,
        "strength": 6
      },
      {
        "id": 6,
        "strength": 4.5
      },
      {
        "id": 98,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 106
  },
  "107": {
    "email": "wenchuan@iii.org.tw",
    "choices": [
      {
        "id": 61,
        "strength": 114
      },
      {
        "id": 70,
        "strength": 113
      },
      {
        "id": 80,
        "strength": 112
      },
      {
        "id": 34,
        "strength": 111
      },
      {
        "id": 36,
        "strength": 110
      },
      {
        "id": 103,
        "strength": 109
      },
      {
        "id": 63,
        "strength": 108
      },
      {
        "id": 19,
        "strength": 107
      },
      {
        "id": 86,
        "strength": 106
      },
      {
        "id": 108,
        "strength": 105
      },
      {
        "id": 105,
        "strength": 104
      },
      {
        "id": 20,
        "strength": 102
      },
      {
        "id": 48,
        "strength": 101
      },
      {
        "id": 28,
        "strength": 100
      },
      {
        "id": 43,
        "strength": 99
      },
      {
        "id": 30,
        "strength": 98
      },
      {
        "id": 67,
        "strength": 97
      },
      {
        "id": 5,
        "strength": 96
      },
      {
        "id": 32,
        "strength": 95
      },
      {
        "id": 23,
        "strength": 94
      },
      {
        "id": 102,
        "strength": 93
      },
      {
        "id": 68,
        "strength": 92
      },
      {
        "id": 9,
        "strength": 91
      },
      {
        "id": 106,
        "strength": 90
      },
      {
        "id": 15,
        "strength": 89
      },
      {
        "id": 50,
        "strength": 88
      },
      {
        "id": 47,
        "strength": 87
      },
      {
        "id": 42,
        "strength": 86
      },
      {
        "id": 12,
        "strength": 85
      },
      {
        "id": 91,
        "strength": 84
      },
      {
        "id": 73,
        "strength": 83
      },
      {
        "id": 88,
        "strength": 82
      },
      {
        "id": 75,
        "strength": 81
      },
      {
        "id": 95,
        "strength": 80
      },
      {
        "id": 58,
        "strength": 79
      },
      {
        "id": 112,
        "strength": 78
      },
      {
        "id": 49,
        "strength": 77
      },
      {
        "id": 71,
        "strength": 76
      },
      {
        "id": 44,
        "strength": 75
      },
      {
        "id": 26,
        "strength": 74
      },
      {
        "id": 45,
        "strength": 73
      },
      {
        "id": 64,
        "strength": 72
      },
      {
        "id": 25,
        "strength": 71
      },
      {
        "id": 109,
        "strength": 70
      },
      {
        "id": 69,
        "strength": 69
      },
      {
        "id": 1,
        "strength": 68
      },
      {
        "id": 110,
        "strength": 67
      },
      {
        "id": 11,
        "strength": 66
      },
      {
        "id": 59,
        "strength": 65
      },
      {
        "id": 24,
        "strength": 64
      },
      {
        "id": 39,
        "strength": 63
      },
      {
        "id": 7,
        "strength": 62
      },
      {
        "id": 40,
        "strength": 61
      },
      {
        "id": 41,
        "strength": 60
      },
      {
        "id": 46,
        "strength": 59
      },
      {
        "id": 53,
        "strength": 58
      },
      {
        "id": 3,
        "strength": 57
      },
      {
        "id": 78,
        "strength": 56
      },
      {
        "id": 65,
        "strength": 55
      },
      {
        "id": 27,
        "strength": 54
      },
      {
        "id": 14,
        "strength": 53
      },
      {
        "id": 57,
        "strength": 52
      },
      {
        "id": 66,
        "strength": 51
      },
      {
        "id": 4,
        "strength": 50
      },
      {
        "id": 17,
        "strength": 49
      },
      {
        "id": 37,
        "strength": 48
      },
      {
        "id": 8,
        "strength": 47
      },
      {
        "id": 21,
        "strength": 46
      },
      {
        "id": 60,
        "strength": 45
      },
      {
        "id": 31,
        "strength": 44
      },
      {
        "id": 74,
        "strength": 43
      },
      {
        "id": 18,
        "strength": 42
      },
      {
        "id": 33,
        "strength": 41
      },
      {
        "id": 35,
        "strength": 40
      },
      {
        "id": 52,
        "strength": 39
      },
      {
        "id": 56,
        "strength": 38
      },
      {
        "id": 16,
        "strength": 37
      },
      {
        "id": 2,
        "strength": 36
      },
      {
        "id": 10,
        "strength": 35
      },
      {
        "id": 29,
        "strength": 34
      },
      {
        "id": 111,
        "strength": 33
      },
      {
        "id": 13,
        "strength": 32
      },
      {
        "id": 72,
        "strength": 31
      },
      {
        "id": 22,
        "strength": 30
      },
      {
        "id": 96,
        "strength": 29
      },
      {
        "id": 101,
        "strength": 28
      },
      {
        "id": 6,
        "strength": 26.5
      },
      {
        "id": 38,
        "strength": 25.5
      },
      {
        "id": 62,
        "strength": 24.5
      },
      {
        "id": 92,
        "strength": 23.5
      },
      {
        "id": 85,
        "strength": 22.5
      },
      {
        "id": 81,
        "strength": 21.5
      },
      {
        "id": 87,
        "strength": 20.5
      },
      {
        "id": 82,
        "strength": 19.5
      },
      {
        "id": 90,
        "strength": 18.5
      },
      {
        "id": 84,
        "strength": 17.5
      },
      {
        "id": 55,
        "strength": 16.5
      },
      {
        "id": 100,
        "strength": 15.5
      },
      {
        "id": 93,
        "strength": 14.5
      },
      {
        "id": 99,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 107
  },
  "108": {
    "email": "wilson.ko@iii.org.tw",
    "choices": [
      {
        "id": 61,
        "strength": 114
      },
      {
        "id": 70,
        "strength": 113
      },
      {
        "id": 80,
        "strength": 112
      },
      {
        "id": 34,
        "strength": 111
      },
      {
        "id": 36,
        "strength": 110
      },
      {
        "id": 103,
        "strength": 109
      },
      {
        "id": 63,
        "strength": 108
      },
      {
        "id": 19,
        "strength": 107
      },
      {
        "id": 86,
        "strength": 106
      },
      {
        "id": 107,
        "strength": 105
      },
      {
        "id": 105,
        "strength": 104
      },
      {
        "id": 20,
        "strength": 102
      },
      {
        "id": 48,
        "strength": 101
      },
      {
        "id": 28,
        "strength": 100
      },
      {
        "id": 43,
        "strength": 99
      },
      {
        "id": 30,
        "strength": 98
      },
      {
        "id": 67,
        "strength": 97
      },
      {
        "id": 5,
        "strength": 96
      },
      {
        "id": 32,
        "strength": 95
      },
      {
        "id": 23,
        "strength": 94
      },
      {
        "id": 102,
        "strength": 93
      },
      {
        "id": 68,
        "strength": 92
      },
      {
        "id": 9,
        "strength": 91
      },
      {
        "id": 106,
        "strength": 90
      },
      {
        "id": 15,
        "strength": 89
      },
      {
        "id": 50,
        "strength": 88
      },
      {
        "id": 47,
        "strength": 87
      },
      {
        "id": 42,
        "strength": 86
      },
      {
        "id": 12,
        "strength": 85
      },
      {
        "id": 91,
        "strength": 84
      },
      {
        "id": 73,
        "strength": 83
      },
      {
        "id": 88,
        "strength": 82
      },
      {
        "id": 75,
        "strength": 81
      },
      {
        "id": 95,
        "strength": 80
      },
      {
        "id": 58,
        "strength": 79
      },
      {
        "id": 112,
        "strength": 78
      },
      {
        "id": 49,
        "strength": 77
      },
      {
        "id": 71,
        "strength": 76
      },
      {
        "id": 44,
        "strength": 75
      },
      {
        "id": 26,
        "strength": 74
      },
      {
        "id": 45,
        "strength": 73
      },
      {
        "id": 64,
        "strength": 72
      },
      {
        "id": 25,
        "strength": 71
      },
      {
        "id": 109,
        "strength": 70
      },
      {
        "id": 69,
        "strength": 69
      },
      {
        "id": 1,
        "strength": 68
      },
      {
        "id": 110,
        "strength": 67
      },
      {
        "id": 11,
        "strength": 66
      },
      {
        "id": 59,
        "strength": 65
      },
      {
        "id": 24,
        "strength": 64
      },
      {
        "id": 39,
        "strength": 63
      },
      {
        "id": 7,
        "strength": 62
      },
      {
        "id": 40,
        "strength": 61
      },
      {
        "id": 41,
        "strength": 60
      },
      {
        "id": 46,
        "strength": 59
      },
      {
        "id": 53,
        "strength": 58
      },
      {
        "id": 3,
        "strength": 57
      },
      {
        "id": 78,
        "strength": 56
      },
      {
        "id": 65,
        "strength": 55
      },
      {
        "id": 27,
        "strength": 54
      },
      {
        "id": 14,
        "strength": 53
      },
      {
        "id": 57,
        "strength": 52
      },
      {
        "id": 66,
        "strength": 51
      },
      {
        "id": 4,
        "strength": 50
      },
      {
        "id": 17,
        "strength": 49
      },
      {
        "id": 37,
        "strength": 48
      },
      {
        "id": 8,
        "strength": 47
      },
      {
        "id": 21,
        "strength": 46
      },
      {
        "id": 60,
        "strength": 45
      },
      {
        "id": 31,
        "strength": 44
      },
      {
        "id": 74,
        "strength": 43
      },
      {
        "id": 18,
        "strength": 42
      },
      {
        "id": 33,
        "strength": 41
      },
      {
        "id": 35,
        "strength": 40
      },
      {
        "id": 52,
        "strength": 39
      },
      {
        "id": 56,
        "strength": 38
      },
      {
        "id": 16,
        "strength": 37
      },
      {
        "id": 2,
        "strength": 36
      },
      {
        "id": 10,
        "strength": 35
      },
      {
        "id": 29,
        "strength": 34
      },
      {
        "id": 111,
        "strength": 33
      },
      {
        "id": 13,
        "strength": 32
      },
      {
        "id": 72,
        "strength": 31
      },
      {
        "id": 22,
        "strength": 30
      },
      {
        "id": 96,
        "strength": 29
      },
      {
        "id": 101,
        "strength": 28
      },
      {
        "id": 6,
        "strength": 26.5
      },
      {
        "id": 38,
        "strength": 25.5
      },
      {
        "id": 62,
        "strength": 24.5
      },
      {
        "id": 92,
        "strength": 23.5
      },
      {
        "id": 85,
        "strength": 22.5
      },
      {
        "id": 81,
        "strength": 21.5
      },
      {
        "id": 87,
        "strength": 20.5
      },
      {
        "id": 82,
        "strength": 19.5
      },
      {
        "id": 90,
        "strength": 18.5
      },
      {
        "id": 84,
        "strength": 17.5
      },
      {
        "id": 55,
        "strength": 16.5
      },
      {
        "id": 100,
        "strength": 15.5
      },
      {
        "id": 93,
        "strength": 14.5
      },
      {
        "id": 99,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 108
  },
  "109": {
    "email": "joseantoniopadilla21@yahoo.com",
    "choices": [
      {
        "id": 20,
        "strength": 114
      },
      {
        "id": 43,
        "strength": 113
      },
      {
        "id": 30,
        "strength": 112
      },
      {
        "id": 23,
        "strength": 111
      },
      {
        "id": 106,
        "strength": 110
      },
      {
        "id": 15,
        "strength": 109
      },
      {
        "id": 95,
        "strength": 108
      },
      {
        "id": 49,
        "strength": 107
      },
      {
        "id": 80,
        "strength": 106
      },
      {
        "id": 59,
        "strength": 105
      },
      {
        "id": 40,
        "strength": 104
      },
      {
        "id": 46,
        "strength": 103
      },
      {
        "id": 53,
        "strength": 102
      },
      {
        "id": 3,
        "strength": 101
      },
      {
        "id": 78,
        "strength": 100
      },
      {
        "id": 57,
        "strength": 99
      },
      {
        "id": 8,
        "strength": 98
      },
      {
        "id": 52,
        "strength": 97
      },
      {
        "id": 16,
        "strength": 96
      },
      {
        "id": 2,
        "strength": 95
      },
      {
        "id": 48,
        "strength": 93
      },
      {
        "id": 28,
        "strength": 92
      },
      {
        "id": 67,
        "strength": 91
      },
      {
        "id": 5,
        "strength": 90
      },
      {
        "id": 32,
        "strength": 89
      },
      {
        "id": 102,
        "strength": 88
      },
      {
        "id": 68,
        "strength": 87
      },
      {
        "id": 9,
        "strength": 86
      },
      {
        "id": 50,
        "strength": 85
      },
      {
        "id": 47,
        "strength": 84
      },
      {
        "id": 42,
        "strength": 83
      },
      {
        "id": 79,
        "strength": 82
      },
      {
        "id": 12,
        "strength": 81
      },
      {
        "id": 91,
        "strength": 80
      },
      {
        "id": 73,
        "strength": 79
      },
      {
        "id": 88,
        "strength": 78
      },
      {
        "id": 75,
        "strength": 77
      },
      {
        "id": 58,
        "strength": 76
      },
      {
        "id": 99,
        "strength": 75
      },
      {
        "id": 112,
        "strength": 74
      },
      {
        "id": 71,
        "strength": 73
      },
      {
        "id": 61,
        "strength": 72
      },
      {
        "id": 44,
        "strength": 71
      },
      {
        "id": 26,
        "strength": 70
      },
      {
        "id": 100,
        "strength": 69
      },
      {
        "id": 93,
        "strength": 68
      },
      {
        "id": 45,
        "strength": 67
      },
      {
        "id": 64,
        "strength": 66
      },
      {
        "id": 25,
        "strength": 65
      },
      {
        "id": 70,
        "strength": 64
      },
      {
        "id": 38,
        "strength": 63
      },
      {
        "id": 69,
        "strength": 62
      },
      {
        "id": 1,
        "strength": 61
      },
      {
        "id": 55,
        "strength": 60
      },
      {
        "id": 110,
        "strength": 59
      },
      {
        "id": 11,
        "strength": 58
      },
      {
        "id": 54,
        "strength": 57
      },
      {
        "id": 34,
        "strength": 56
      },
      {
        "id": 24,
        "strength": 55
      },
      {
        "id": 39,
        "strength": 54
      },
      {
        "id": 84,
        "strength": 53
      },
      {
        "id": 7,
        "strength": 52
      },
      {
        "id": 90,
        "strength": 51
      },
      {
        "id": 104,
        "strength": 50
      },
      {
        "id": 41,
        "strength": 49
      },
      {
        "id": 36,
        "strength": 48
      },
      {
        "id": 89,
        "strength": 47
      },
      {
        "id": 103,
        "strength": 46
      },
      {
        "id": 63,
        "strength": 45
      },
      {
        "id": 65,
        "strength": 44
      },
      {
        "id": 27,
        "strength": 43
      },
      {
        "id": 14,
        "strength": 42
      },
      {
        "id": 77,
        "strength": 41
      },
      {
        "id": 66,
        "strength": 40
      },
      {
        "id": 4,
        "strength": 39
      },
      {
        "id": 17,
        "strength": 38
      },
      {
        "id": 37,
        "strength": 37
      },
      {
        "id": 21,
        "strength": 36
      },
      {
        "id": 82,
        "strength": 35
      },
      {
        "id": 19,
        "strength": 34
      },
      {
        "id": 60,
        "strength": 33
      },
      {
        "id": 31,
        "strength": 32
      },
      {
        "id": 87,
        "strength": 31
      },
      {
        "id": 74,
        "strength": 30
      },
      {
        "id": 83,
        "strength": 29
      },
      {
        "id": 18,
        "strength": 28
      },
      {
        "id": 97,
        "strength": 27
      },
      {
        "id": 81,
        "strength": 26
      },
      {
        "id": 33,
        "strength": 25
      },
      {
        "id": 35,
        "strength": 24
      },
      {
        "id": 85,
        "strength": 23
      },
      {
        "id": 92,
        "strength": 22
      },
      {
        "id": 76,
        "strength": 21
      },
      {
        "id": 56,
        "strength": 20
      },
      {
        "id": 10,
        "strength": 19
      },
      {
        "id": 29,
        "strength": 18
      },
      {
        "id": 111,
        "strength": 17
      },
      {
        "id": 13,
        "strength": 16
      },
      {
        "id": 86,
        "strength": 15
      },
      {
        "id": 72,
        "strength": 14
      },
      {
        "id": 62,
        "strength": 13
      },
      {
        "id": 22,
        "strength": 12
      },
      {
        "id": 51,
        "strength": 11
      },
      {
        "id": 96,
        "strength": 10
      },
      {
        "id": 107,
        "strength": 9
      },
      {
        "id": 108,
        "strength": 8
      },
      {
        "id": 101,
        "strength": 7
      },
      {
        "id": 105,
        "strength": 6
      },
      {
        "id": 6,
        "strength": 4.5
      },
      {
        "id": 98,
        "strength": 3.5
      },
      {
        "id": 94,
        "strength": 2.5
      }
    ],
    "id": 109
  },
  "110": {
    "email": "juana.franklin-leacock@barbados.gov.bb",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 48,
        "strength": 112
      },
      {
        "id": 28,
        "strength": 111
      },
      {
        "id": 43,
        "strength": 110
      },
      {
        "id": 30,
        "strength": 109
      },
      {
        "id": 67,
        "strength": 108
      },
      {
        "id": 5,
        "strength": 107
      },
      {
        "id": 32,
        "strength": 106
      },
      {
        "id": 23,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 68,
        "strength": 103
      },
      {
        "id": 9,
        "strength": 102
      },
      {
        "id": 106,
        "strength": 101
      },
      {
        "id": 15,
        "strength": 100
      },
      {
        "id": 50,
        "strength": 99
      },
      {
        "id": 47,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 12,
        "strength": 96
      },
      {
        "id": 91,
        "strength": 95
      },
      {
        "id": 73,
        "strength": 94
      },
      {
        "id": 75,
        "strength": 93
      },
      {
        "id": 95,
        "strength": 92
      },
      {
        "id": 58,
        "strength": 91
      },
      {
        "id": 112,
        "strength": 90
      },
      {
        "id": 49,
        "strength": 89
      },
      {
        "id": 71,
        "strength": 88
      },
      {
        "id": 61,
        "strength": 87
      },
      {
        "id": 44,
        "strength": 86
      },
      {
        "id": 26,
        "strength": 85
      },
      {
        "id": 45,
        "strength": 84
      },
      {
        "id": 64,
        "strength": 83
      },
      {
        "id": 25,
        "strength": 82
      },
      {
        "id": 70,
        "strength": 81
      },
      {
        "id": 109,
        "strength": 80
      },
      {
        "id": 69,
        "strength": 79
      },
      {
        "id": 1,
        "strength": 78
      },
      {
        "id": 80,
        "strength": 77
      },
      {
        "id": 11,
        "strength": 76
      },
      {
        "id": 34,
        "strength": 75
      },
      {
        "id": 59,
        "strength": 74
      },
      {
        "id": 24,
        "strength": 73
      },
      {
        "id": 39,
        "strength": 72
      },
      {
        "id": 7,
        "strength": 71
      },
      {
        "id": 40,
        "strength": 70
      },
      {
        "id": 41,
        "strength": 69
      },
      {
        "id": 46,
        "strength": 68
      },
      {
        "id": 53,
        "strength": 67
      },
      {
        "id": 36,
        "strength": 66
      },
      {
        "id": 103,
        "strength": 65
      },
      {
        "id": 63,
        "strength": 64
      },
      {
        "id": 3,
        "strength": 63
      },
      {
        "id": 78,
        "strength": 62
      },
      {
        "id": 65,
        "strength": 61
      },
      {
        "id": 27,
        "strength": 60
      },
      {
        "id": 14,
        "strength": 59
      },
      {
        "id": 57,
        "strength": 58
      },
      {
        "id": 66,
        "strength": 57
      },
      {
        "id": 4,
        "strength": 56
      },
      {
        "id": 17,
        "strength": 55
      },
      {
        "id": 37,
        "strength": 54
      },
      {
        "id": 8,
        "strength": 53
      },
      {
        "id": 21,
        "strength": 52
      },
      {
        "id": 19,
        "strength": 51
      },
      {
        "id": 60,
        "strength": 50
      },
      {
        "id": 31,
        "strength": 49
      },
      {
        "id": 74,
        "strength": 48
      },
      {
        "id": 18,
        "strength": 47
      },
      {
        "id": 33,
        "strength": 46
      },
      {
        "id": 35,
        "strength": 45
      },
      {
        "id": 52,
        "strength": 44
      },
      {
        "id": 56,
        "strength": 43
      },
      {
        "id": 16,
        "strength": 42
      },
      {
        "id": 2,
        "strength": 41
      },
      {
        "id": 10,
        "strength": 40
      },
      {
        "id": 29,
        "strength": 39
      },
      {
        "id": 111,
        "strength": 38
      },
      {
        "id": 13,
        "strength": 37
      },
      {
        "id": 86,
        "strength": 36
      },
      {
        "id": 72,
        "strength": 35
      },
      {
        "id": 22,
        "strength": 34
      },
      {
        "id": 107,
        "strength": 33
      },
      {
        "id": 108,
        "strength": 32
      },
      {
        "id": 101,
        "strength": 31
      },
      {
        "id": 105,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 110
  },
  "111": {
    "email": "tk@vhsj.dk",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 48,
        "strength": 112
      },
      {
        "id": 28,
        "strength": 111
      },
      {
        "id": 43,
        "strength": 110
      },
      {
        "id": 30,
        "strength": 109
      },
      {
        "id": 67,
        "strength": 108
      },
      {
        "id": 5,
        "strength": 107
      },
      {
        "id": 32,
        "strength": 106
      },
      {
        "id": 23,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 68,
        "strength": 103
      },
      {
        "id": 9,
        "strength": 102
      },
      {
        "id": 106,
        "strength": 101
      },
      {
        "id": 15,
        "strength": 100
      },
      {
        "id": 50,
        "strength": 99
      },
      {
        "id": 47,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 12,
        "strength": 96
      },
      {
        "id": 91,
        "strength": 95
      },
      {
        "id": 73,
        "strength": 94
      },
      {
        "id": 75,
        "strength": 93
      },
      {
        "id": 95,
        "strength": 92
      },
      {
        "id": 58,
        "strength": 91
      },
      {
        "id": 112,
        "strength": 90
      },
      {
        "id": 49,
        "strength": 89
      },
      {
        "id": 71,
        "strength": 88
      },
      {
        "id": 61,
        "strength": 87
      },
      {
        "id": 44,
        "strength": 86
      },
      {
        "id": 26,
        "strength": 85
      },
      {
        "id": 45,
        "strength": 84
      },
      {
        "id": 64,
        "strength": 83
      },
      {
        "id": 25,
        "strength": 82
      },
      {
        "id": 70,
        "strength": 81
      },
      {
        "id": 109,
        "strength": 80
      },
      {
        "id": 69,
        "strength": 79
      },
      {
        "id": 1,
        "strength": 78
      },
      {
        "id": 110,
        "strength": 77
      },
      {
        "id": 80,
        "strength": 76
      },
      {
        "id": 11,
        "strength": 75
      },
      {
        "id": 34,
        "strength": 74
      },
      {
        "id": 59,
        "strength": 73
      },
      {
        "id": 24,
        "strength": 72
      },
      {
        "id": 39,
        "strength": 71
      },
      {
        "id": 7,
        "strength": 70
      },
      {
        "id": 40,
        "strength": 69
      },
      {
        "id": 41,
        "strength": 68
      },
      {
        "id": 46,
        "strength": 67
      },
      {
        "id": 53,
        "strength": 66
      },
      {
        "id": 36,
        "strength": 65
      },
      {
        "id": 103,
        "strength": 64
      },
      {
        "id": 63,
        "strength": 63
      },
      {
        "id": 3,
        "strength": 62
      },
      {
        "id": 78,
        "strength": 61
      },
      {
        "id": 65,
        "strength": 60
      },
      {
        "id": 27,
        "strength": 59
      },
      {
        "id": 14,
        "strength": 58
      },
      {
        "id": 57,
        "strength": 57
      },
      {
        "id": 66,
        "strength": 56
      },
      {
        "id": 4,
        "strength": 55
      },
      {
        "id": 17,
        "strength": 54
      },
      {
        "id": 37,
        "strength": 53
      },
      {
        "id": 8,
        "strength": 52
      },
      {
        "id": 21,
        "strength": 51
      },
      {
        "id": 19,
        "strength": 50
      },
      {
        "id": 60,
        "strength": 49
      },
      {
        "id": 31,
        "strength": 48
      },
      {
        "id": 74,
        "strength": 47
      },
      {
        "id": 18,
        "strength": 46
      },
      {
        "id": 33,
        "strength": 45
      },
      {
        "id": 35,
        "strength": 44
      },
      {
        "id": 52,
        "strength": 43
      },
      {
        "id": 56,
        "strength": 42
      },
      {
        "id": 16,
        "strength": 41
      },
      {
        "id": 2,
        "strength": 40
      },
      {
        "id": 10,
        "strength": 39
      },
      {
        "id": 29,
        "strength": 38
      },
      {
        "id": 13,
        "strength": 37
      },
      {
        "id": 86,
        "strength": 36
      },
      {
        "id": 72,
        "strength": 35
      },
      {
        "id": 22,
        "strength": 34
      },
      {
        "id": 107,
        "strength": 33
      },
      {
        "id": 108,
        "strength": 32
      },
      {
        "id": 101,
        "strength": 31
      },
      {
        "id": 105,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 111
  },
  "112": {
    "email": "fenelonempowerment@yahoo.com",
    "choices": [
      {
        "id": 20,
        "strength": 113
      },
      {
        "id": 48,
        "strength": 112
      },
      {
        "id": 28,
        "strength": 111
      },
      {
        "id": 43,
        "strength": 110
      },
      {
        "id": 30,
        "strength": 109
      },
      {
        "id": 67,
        "strength": 108
      },
      {
        "id": 5,
        "strength": 107
      },
      {
        "id": 32,
        "strength": 106
      },
      {
        "id": 23,
        "strength": 105
      },
      {
        "id": 102,
        "strength": 104
      },
      {
        "id": 68,
        "strength": 103
      },
      {
        "id": 9,
        "strength": 102
      },
      {
        "id": 106,
        "strength": 101
      },
      {
        "id": 15,
        "strength": 100
      },
      {
        "id": 50,
        "strength": 99
      },
      {
        "id": 47,
        "strength": 98
      },
      {
        "id": 42,
        "strength": 97
      },
      {
        "id": 12,
        "strength": 96
      },
      {
        "id": 91,
        "strength": 95
      },
      {
        "id": 73,
        "strength": 94
      },
      {
        "id": 75,
        "strength": 93
      },
      {
        "id": 95,
        "strength": 92
      },
      {
        "id": 58,
        "strength": 91
      },
      {
        "id": 49,
        "strength": 90
      },
      {
        "id": 71,
        "strength": 89
      },
      {
        "id": 61,
        "strength": 88
      },
      {
        "id": 44,
        "strength": 87
      },
      {
        "id": 26,
        "strength": 86
      },
      {
        "id": 45,
        "strength": 85
      },
      {
        "id": 64,
        "strength": 84
      },
      {
        "id": 25,
        "strength": 83
      },
      {
        "id": 70,
        "strength": 82
      },
      {
        "id": 109,
        "strength": 81
      },
      {
        "id": 69,
        "strength": 80
      },
      {
        "id": 1,
        "strength": 79
      },
      {
        "id": 110,
        "strength": 78
      },
      {
        "id": 80,
        "strength": 77
      },
      {
        "id": 11,
        "strength": 76
      },
      {
        "id": 34,
        "strength": 75
      },
      {
        "id": 59,
        "strength": 74
      },
      {
        "id": 24,
        "strength": 73
      },
      {
        "id": 39,
        "strength": 72
      },
      {
        "id": 7,
        "strength": 71
      },
      {
        "id": 40,
        "strength": 70
      },
      {
        "id": 41,
        "strength": 69
      },
      {
        "id": 46,
        "strength": 68
      },
      {
        "id": 53,
        "strength": 67
      },
      {
        "id": 36,
        "strength": 66
      },
      {
        "id": 103,
        "strength": 65
      },
      {
        "id": 63,
        "strength": 64
      },
      {
        "id": 3,
        "strength": 63
      },
      {
        "id": 78,
        "strength": 62
      },
      {
        "id": 65,
        "strength": 61
      },
      {
        "id": 27,
        "strength": 60
      },
      {
        "id": 14,
        "strength": 59
      },
      {
        "id": 57,
        "strength": 58
      },
      {
        "id": 66,
        "strength": 57
      },
      {
        "id": 4,
        "strength": 56
      },
      {
        "id": 17,
        "strength": 55
      },
      {
        "id": 37,
        "strength": 54
      },
      {
        "id": 8,
        "strength": 53
      },
      {
        "id": 21,
        "strength": 52
      },
      {
        "id": 19,
        "strength": 51
      },
      {
        "id": 60,
        "strength": 50
      },
      {
        "id": 31,
        "strength": 49
      },
      {
        "id": 74,
        "strength": 48
      },
      {
        "id": 18,
        "strength": 47
      },
      {
        "id": 33,
        "strength": 46
      },
      {
        "id": 35,
        "strength": 45
      },
      {
        "id": 52,
        "strength": 44
      },
      {
        "id": 56,
        "strength": 43
      },
      {
        "id": 16,
        "strength": 42
      },
      {
        "id": 2,
        "strength": 41
      },
      {
        "id": 10,
        "strength": 40
      },
      {
        "id": 29,
        "strength": 39
      },
      {
        "id": 111,
        "strength": 38
      },
      {
        "id": 13,
        "strength": 37
      },
      {
        "id": 86,
        "strength": 36
      },
      {
        "id": 72,
        "strength": 35
      },
      {
        "id": 22,
        "strength": 34
      },
      {
        "id": 107,
        "strength": 33
      },
      {
        "id": 108,
        "strength": 32
      },
      {
        "id": 101,
        "strength": 31
      },
      {
        "id": 105,
        "strength": 30
      },
      {
        "id": 6,
        "strength": 28.5
      },
      {
        "id": 38,
        "strength": 27.5
      },
      {
        "id": 96,
        "strength": 26.5
      },
      {
        "id": 62,
        "strength": 25.5
      },
      {
        "id": 92,
        "strength": 24.5
      },
      {
        "id": 85,
        "strength": 23.5
      },
      {
        "id": 81,
        "strength": 22.5
      },
      {
        "id": 87,
        "strength": 21.5
      },
      {
        "id": 82,
        "strength": 20.5
      },
      {
        "id": 90,
        "strength": 19.5
      },
      {
        "id": 84,
        "strength": 18.5
      },
      {
        "id": 55,
        "strength": 17.5
      },
      {
        "id": 100,
        "strength": 16.5
      },
      {
        "id": 93,
        "strength": 15.5
      },
      {
        "id": 99,
        "strength": 14.5
      },
      {
        "id": 88,
        "strength": 13.5
      },
      {
        "id": 79,
        "strength": 12.5
      },
      {
        "id": 98,
        "strength": 11.5
      },
      {
        "id": 77,
        "strength": 10.5
      },
      {
        "id": 54,
        "strength": 9.5
      },
      {
        "id": 104,
        "strength": 8.5
      },
      {
        "id": 89,
        "strength": 7.5
      },
      {
        "id": 83,
        "strength": 6.5
      },
      {
        "id": 97,
        "strength": 5.5
      },
      {
        "id": 76,
        "strength": 4.5
      },
      {
        "id": 94,
        "strength": 3.5
      },
      {
        "id": 51,
        "strength": 2.5
      }
    ],
    "id": 112
  }
};



module.exports = staticDb;
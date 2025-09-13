
(function(){
  var state = {
    uid: "u1",
    route: window.location.hash || "#/",
    theme: localStorage.getItem("ugap-theme") || "dark",
    search: "",
    tag: "all",
    pageSize: 4,
    showMoreDash: false,
    pf: JSON.parse(localStorage.getItem("ugap-pf") || '{"steam":true,"xbox":true,"riot":true,"wow":true}')
  };
  if(state.theme === "light"){ document.documentElement.classList.add("light"); }

var USERS=[{"id": "u1", "name": "Asta", "platforms": ["steam", "xbox", "wow"]}, {"id": "u2", "name": "Ben", "platforms": ["steam", "riot"]}, {"id": "u3", "name": "Cara", "platforms": ["steam", "xbox", "riot"]}, {"id": "u4", "name": "Dov", "platforms": ["steam", "wow"]}];
var GAMES=[{"id": "g1", "platform": "steam", "name": "Counter-Strike 2", "genres": ["Shooter"]}, {"id": "g2", "platform": "steam", "name": "Elden Ring", "genres": ["RPG"]}, {"id": "g3", "platform": "xbox", "name": "Halo Infinite", "genres": ["Shooter"]}, {"id": "g4", "platform": "riot", "name": "VALORANT", "genres": ["Shooter"]}, {"id": "g5", "platform": "riot", "name": "League of Legends", "genres": ["MOBA"]}, {"id": "g6", "platform": "wow", "name": "World of Warcraft", "genres": ["MMO", "RPG"]}, {"id": "g7", "platform": "steam", "name": "Hades II", "genres": ["Rogue-lite", "Action"]}, {"id": "g8", "platform": "steam", "name": "Baldur's Gate 3", "genres": ["RPG", "Adventure"]}];
var ACH=[{"id": "a1", "gameId": "g1", "name": "Season Clear", "rarityGlobal": 32.8, "tags": ["raid", "season"]}, {"id": "a2", "gameId": "g1", "name": "Marathon 10", "rarityGlobal": 14.9, "tags": ["boss", "kill"]}, {"id": "a3", "gameId": "g1", "name": "Raid Clear", "rarityGlobal": null, "tags": ["progress", "win"]}, {"id": "a4", "gameId": "g1", "name": "Season Clear", "rarityGlobal": 42.5, "tags": ["progress", "season"]}, {"id": "a5", "gameId": "g1", "name": "Raid Clear", "rarityGlobal": null, "tags": ["boss", "win"]}, {"id": "a6", "gameId": "g1", "name": "First Win", "rarityGlobal": null, "tags": ["kill", "rank"]}, {"id": "a7", "gameId": "g2", "name": "Raid Clear", "rarityGlobal": null, "tags": ["collect", "explore"]}, {"id": "a8", "gameId": "g2", "name": "Season Clear", "rarityGlobal": null, "tags": ["progress", "explore"]}, {"id": "a9", "gameId": "g2", "name": "Explorer", "rarityGlobal": null, "tags": ["rank", "collect"]}, {"id": "a10", "gameId": "g2", "name": "Boss Down", "rarityGlobal": null, "tags": ["season", "boss"]}, {"id": "a11", "gameId": "g2", "name": "Legend Rank", "rarityGlobal": 29.2, "tags": ["boss", "win"]}, {"id": "a12", "gameId": "g2", "name": "Collector", "rarityGlobal": null, "tags": ["collect", "win"]}, {"id": "a13", "gameId": "g3", "name": "Legend Rank", "rarityGlobal": 34.0, "tags": ["boss", "season"]}, {"id": "a14", "gameId": "g3", "name": "Sharpshooter", "rarityGlobal": 44.8, "tags": ["boss", "explore"]}, {"id": "a15", "gameId": "g3", "name": "Boss Down", "rarityGlobal": 24.6, "tags": ["marathon", "collect"]}, {"id": "a16", "gameId": "g3", "name": "First Win", "rarityGlobal": null, "tags": ["kill", "progress"]}, {"id": "a17", "gameId": "g3", "name": "Season Clear", "rarityGlobal": null, "tags": ["raid", "collect"]}, {"id": "a18", "gameId": "g3", "name": "Legend Rank", "rarityGlobal": null, "tags": ["progress", "headshot"]}, {"id": "a19", "gameId": "g4", "name": "Collector", "rarityGlobal": 9.9, "tags": ["win", "explore"]}, {"id": "a20", "gameId": "g4", "name": "First Win", "rarityGlobal": 60.8, "tags": ["collect", "marathon"]}, {"id": "a21", "gameId": "g4", "name": "First Win", "rarityGlobal": null, "tags": ["marathon", "collect"]}, {"id": "a22", "gameId": "g4", "name": "Sharpshooter", "rarityGlobal": null, "tags": ["explore", "headshot"]}, {"id": "a23", "gameId": "g4", "name": "Collector", "rarityGlobal": null, "tags": ["season", "collect"]}, {"id": "a24", "gameId": "g4", "name": "Sharpshooter", "rarityGlobal": 3.1, "tags": ["season", "kill"]}, {"id": "a25", "gameId": "g5", "name": "Marathon 10", "rarityGlobal": 10.7, "tags": ["headshot", "marathon"]}, {"id": "a26", "gameId": "g5", "name": "Collector", "rarityGlobal": 44.7, "tags": ["season", "collect"]}, {"id": "a27", "gameId": "g5", "name": "Raid Clear", "rarityGlobal": null, "tags": ["collect", "headshot"]}, {"id": "a28", "gameId": "g5", "name": "Legend Rank", "rarityGlobal": null, "tags": ["win", "boss"]}, {"id": "a29", "gameId": "g5", "name": "Collector", "rarityGlobal": 9.4, "tags": ["headshot", "explore"]}, {"id": "a30", "gameId": "g5", "name": "Explorer", "rarityGlobal": 30.6, "tags": ["raid", "marathon"]}, {"id": "a31", "gameId": "g6", "name": "Marathon 10", "rarityGlobal": null, "tags": ["collect", "kill"]}, {"id": "a32", "gameId": "g6", "name": "Explorer", "rarityGlobal": null, "tags": ["collect", "progress"]}, {"id": "a33", "gameId": "g6", "name": "Explorer", "rarityGlobal": null, "tags": ["headshot", "kill"]}, {"id": "a34", "gameId": "g6", "name": "Marathon 10", "rarityGlobal": null, "tags": ["explore", "rank"]}, {"id": "a35", "gameId": "g6", "name": "Boss Down", "rarityGlobal": null, "tags": ["rank", "marathon"]}, {"id": "a36", "gameId": "g6", "name": "Raid Clear", "rarityGlobal": 62.6, "tags": ["season", "marathon"]}, {"id": "a37", "gameId": "g7", "name": "Season Clear", "rarityGlobal": null, "tags": ["rank", "explore"]}, {"id": "a38", "gameId": "g7", "name": "Boss Down", "rarityGlobal": null, "tags": ["kill", "boss"]}, {"id": "a39", "gameId": "g7", "name": "Marathon 10", "rarityGlobal": 51.7, "tags": ["boss", "progress"]}, {"id": "a40", "gameId": "g7", "name": "First Win", "rarityGlobal": 32.8, "tags": ["marathon", "rank"]}, {"id": "a41", "gameId": "g7", "name": "Boss Down", "rarityGlobal": 25.9, "tags": ["headshot", "win"]}, {"id": "a42", "gameId": "g7", "name": "Legend Rank", "rarityGlobal": null, "tags": ["headshot", "season"]}, {"id": "a43", "gameId": "g8", "name": "Boss Down", "rarityGlobal": null, "tags": ["boss", "progress"]}, {"id": "a44", "gameId": "g8", "name": "Sharpshooter", "rarityGlobal": 69.5, "tags": ["headshot", "season"]}, {"id": "a45", "gameId": "g8", "name": "Raid Clear", "rarityGlobal": 33.1, "tags": ["boss", "raid"]}, {"id": "a46", "gameId": "g8", "name": "Explorer", "rarityGlobal": null, "tags": ["season", "boss"]}, {"id": "a47", "gameId": "g8", "name": "Boss Down", "rarityGlobal": null, "tags": ["kill", "season"]}, {"id": "a48", "gameId": "g8", "name": "Explorer", "rarityGlobal": 46.9, "tags": ["win", "rank"]}];
var USER_ACH=[{"userId": "u1", "achId": "a20", "unlockedAt": "2025-07-12T01:52:09Z"}, {"userId": "u1", "achId": "a10", "unlockedAt": "2025-06-19T01:52:09Z"}, {"userId": "u1", "achId": "a44", "unlockedAt": "2025-08-04T01:52:09Z"}, {"userId": "u1", "achId": "a40", "unlockedAt": "2025-06-26T01:52:09Z"}, {"userId": "u1", "achId": "a13", "unlockedAt": "2025-07-18T01:52:09Z"}, {"userId": "u1", "achId": "a34", "unlockedAt": "2025-08-03T01:52:09Z"}, {"userId": "u1", "achId": "a11", "unlockedAt": "2025-09-04T01:52:09Z"}, {"userId": "u1", "achId": "a22", "unlockedAt": "2025-09-09T01:52:09Z"}, {"userId": "u1", "achId": "a29", "unlockedAt": "2025-08-09T01:52:09Z"}, {"userId": "u1", "achId": "a32", "unlockedAt": "2025-06-28T01:52:09Z"}, {"userId": "u1", "achId": "a16", "unlockedAt": "2025-09-08T01:52:09Z"}, {"userId": "u1", "achId": "a21", "unlockedAt": "2025-06-19T01:52:09Z"}, {"userId": "u1", "achId": "a26", "unlockedAt": "2025-06-15T01:52:09Z"}, {"userId": "u1", "achId": "a17", "unlockedAt": "2025-08-09T01:52:09Z"}, {"userId": "u1", "achId": "a46", "unlockedAt": "2025-07-02T01:52:09Z"}, {"userId": "u1", "achId": "a28", "unlockedAt": "2025-07-30T01:52:09Z"}, {"userId": "u1", "achId": "a43", "unlockedAt": "2025-08-05T01:52:09Z"}, {"userId": "u1", "achId": "a45", "unlockedAt": "2025-06-22T01:52:09Z"}, {"userId": "u1", "achId": "a7", "unlockedAt": "2025-07-03T01:52:09Z"}, {"userId": "u1", "achId": "a39", "unlockedAt": "2025-09-11T01:52:09Z"}, {"userId": "u1", "achId": "a8", "unlockedAt": "2025-06-23T01:52:09Z"}, {"userId": "u1", "achId": "a19", "unlockedAt": "2025-08-27T01:52:09Z"}, {"userId": "u1", "achId": "a42", "unlockedAt": "2025-07-24T01:52:09Z"}, {"userId": "u1", "achId": "a30", "unlockedAt": "2025-07-17T01:52:09Z"}, {"userId": "u1", "achId": "a5", "unlockedAt": "2025-08-20T01:52:09Z"}, {"userId": "u1", "achId": "a24", "unlockedAt": "2025-09-10T01:52:09Z"}, {"userId": "u1", "achId": "a38", "unlockedAt": "2025-08-10T01:52:09Z"}, {"userId": "u1", "achId": "a12", "unlockedAt": "2025-08-14T01:52:09Z"}, {"userId": "u1", "achId": "a2", "unlockedAt": "2025-08-26T01:52:09Z"}, {"userId": "u1", "achId": "a3", "unlockedAt": "2025-09-07T01:52:09Z"}, {"userId": "u1", "achId": "a9", "unlockedAt": "2025-06-25T01:52:09Z"}, {"userId": "u1", "achId": "a6", "unlockedAt": "2025-08-30T01:52:09Z"}, {"userId": "u1", "achId": "a4", "unlockedAt": "2025-07-18T01:52:09Z"}, {"userId": "u1", "achId": "a33", "unlockedAt": "2025-08-31T01:52:09Z"}, {"userId": "u1", "achId": "a15", "unlockedAt": "2025-06-25T01:52:09Z"}, {"userId": "u1", "achId": "a23", "unlockedAt": "2025-07-07T01:52:09Z"}, {"userId": "u1", "achId": "a41", "unlockedAt": "2025-06-22T01:52:09Z"}, {"userId": "u1", "achId": "a25", "unlockedAt": "2025-06-24T01:52:09Z"}, {"userId": "u1", "achId": "a36", "unlockedAt": "2025-07-28T01:52:09Z"}, {"userId": "u1", "achId": "a18", "unlockedAt": "2025-09-04T01:52:09Z"}, {"userId": "u2", "achId": "a44", "unlockedAt": "2025-08-13T01:52:09Z"}, {"userId": "u2", "achId": "a13", "unlockedAt": "2025-07-26T01:52:09Z"}, {"userId": "u2", "achId": "a47", "unlockedAt": "2025-09-02T01:52:09Z"}, {"userId": "u2", "achId": "a31", "unlockedAt": "2025-08-05T01:52:09Z"}, {"userId": "u2", "achId": "a17", "unlockedAt": "2025-07-07T01:52:09Z"}, {"userId": "u2", "achId": "a12", "unlockedAt": "2025-08-03T01:52:09Z"}, {"userId": "u2", "achId": "a1", "unlockedAt": "2025-08-11T01:52:09Z"}, {"userId": "u2", "achId": "a45", "unlockedAt": "2025-09-11T01:52:09Z"}, {"userId": "u2", "achId": "a35", "unlockedAt": "2025-07-31T01:52:09Z"}, {"userId": "u2", "achId": "a3", "unlockedAt": "2025-07-11T01:52:09Z"}, {"userId": "u2", "achId": "a43", "unlockedAt": "2025-09-03T01:52:09Z"}, {"userId": "u2", "achId": "a15", "unlockedAt": "2025-09-09T01:52:09Z"}, {"userId": "u2", "achId": "a18", "unlockedAt": "2025-07-19T01:52:09Z"}, {"userId": "u2", "achId": "a23", "unlockedAt": "2025-08-01T01:52:09Z"}, {"userId": "u2", "achId": "a34", "unlockedAt": "2025-07-05T01:52:09Z"}, {"userId": "u2", "achId": "a33", "unlockedAt": "2025-07-22T01:52:09Z"}, {"userId": "u2", "achId": "a11", "unlockedAt": "2025-08-09T01:52:09Z"}, {"userId": "u2", "achId": "a46", "unlockedAt": "2025-07-13T01:52:09Z"}, {"userId": "u2", "achId": "a28", "unlockedAt": "2025-09-10T01:52:09Z"}, {"userId": "u2", "achId": "a26", "unlockedAt": "2025-08-17T01:52:09Z"}, {"userId": "u2", "achId": "a40", "unlockedAt": "2025-09-05T01:52:09Z"}, {"userId": "u2", "achId": "a8", "unlockedAt": "2025-07-21T01:52:09Z"}, {"userId": "u2", "achId": "a39", "unlockedAt": "2025-09-09T01:52:09Z"}, {"userId": "u2", "achId": "a14", "unlockedAt": "2025-08-22T01:52:09Z"}, {"userId": "u2", "achId": "a24", "unlockedAt": "2025-07-07T01:52:09Z"}, {"userId": "u2", "achId": "a41", "unlockedAt": "2025-08-02T01:52:09Z"}, {"userId": "u2", "achId": "a5", "unlockedAt": "2025-06-18T01:52:09Z"}, {"userId": "u2", "achId": "a37", "unlockedAt": "2025-08-27T01:52:09Z"}, {"userId": "u2", "achId": "a21", "unlockedAt": "2025-07-15T01:52:09Z"}, {"userId": "u2", "achId": "a7", "unlockedAt": "2025-08-25T01:52:09Z"}, {"userId": "u2", "achId": "a42", "unlockedAt": "2025-07-09T01:52:09Z"}, {"userId": "u2", "achId": "a30", "unlockedAt": "2025-07-09T01:52:09Z"}, {"userId": "u2", "achId": "a32", "unlockedAt": "2025-06-19T01:52:09Z"}, {"userId": "u2", "achId": "a27", "unlockedAt": "2025-06-17T01:52:09Z"}, {"userId": "u2", "achId": "a6", "unlockedAt": "2025-07-19T01:52:09Z"}, {"userId": "u2", "achId": "a16", "unlockedAt": "2025-07-12T01:52:09Z"}, {"userId": "u2", "achId": "a4", "unlockedAt": "2025-07-01T01:52:09Z"}, {"userId": "u2", "achId": "a2", "unlockedAt": "2025-06-17T01:52:09Z"}, {"userId": "u2", "achId": "a48", "unlockedAt": "2025-09-02T01:52:09Z"}, {"userId": "u2", "achId": "a38", "unlockedAt": "2025-08-16T01:52:09Z"}, {"userId": "u3", "achId": "a29", "unlockedAt": "2025-07-23T01:52:09Z"}, {"userId": "u3", "achId": "a34", "unlockedAt": "2025-07-24T01:52:09Z"}, {"userId": "u3", "achId": "a36", "unlockedAt": "2025-08-10T01:52:09Z"}, {"userId": "u3", "achId": "a19", "unlockedAt": "2025-08-13T01:52:09Z"}, {"userId": "u3", "achId": "a46", "unlockedAt": "2025-07-15T01:52:09Z"}, {"userId": "u3", "achId": "a41", "unlockedAt": "2025-07-12T01:52:09Z"}, {"userId": "u3", "achId": "a11", "unlockedAt": "2025-08-28T01:52:09Z"}, {"userId": "u3", "achId": "a47", "unlockedAt": "2025-08-01T01:52:09Z"}, {"userId": "u3", "achId": "a33", "unlockedAt": "2025-07-20T01:52:09Z"}, {"userId": "u3", "achId": "a44", "unlockedAt": "2025-07-15T01:52:09Z"}, {"userId": "u3", "achId": "a17", "unlockedAt": "2025-07-08T01:52:09Z"}, {"userId": "u3", "achId": "a20", "unlockedAt": "2025-08-04T01:52:09Z"}, {"userId": "u3", "achId": "a25", "unlockedAt": "2025-08-31T01:52:09Z"}, {"userId": "u3", "achId": "a14", "unlockedAt": "2025-08-20T01:52:09Z"}, {"userId": "u3", "achId": "a37", "unlockedAt": "2025-07-22T01:52:09Z"}, {"userId": "u3", "achId": "a10", "unlockedAt": "2025-06-26T01:52:09Z"}, {"userId": "u3", "achId": "a18", "unlockedAt": "2025-09-10T01:52:09Z"}, {"userId": "u3", "achId": "a45", "unlockedAt": "2025-08-11T01:52:09Z"}, {"userId": "u3", "achId": "a16", "unlockedAt": "2025-08-28T01:52:09Z"}, {"userId": "u3", "achId": "a7", "unlockedAt": "2025-06-16T01:52:09Z"}, {"userId": "u3", "achId": "a35", "unlockedAt": "2025-09-11T01:52:09Z"}, {"userId": "u3", "achId": "a32", "unlockedAt": "2025-09-09T01:52:09Z"}, {"userId": "u3", "achId": "a4", "unlockedAt": "2025-08-20T01:52:09Z"}, {"userId": "u3", "achId": "a38", "unlockedAt": "2025-08-25T01:52:09Z"}, {"userId": "u3", "achId": "a1", "unlockedAt": "2025-08-15T01:52:09Z"}, {"userId": "u3", "achId": "a43", "unlockedAt": "2025-09-12T01:52:09Z"}, {"userId": "u3", "achId": "a13", "unlockedAt": "2025-06-18T01:52:09Z"}, {"userId": "u3", "achId": "a24", "unlockedAt": "2025-08-08T01:52:09Z"}, {"userId": "u3", "achId": "a27", "unlockedAt": "2025-08-03T01:52:09Z"}, {"userId": "u3", "achId": "a2", "unlockedAt": "2025-07-30T01:52:09Z"}, {"userId": "u3", "achId": "a39", "unlockedAt": "2025-08-13T01:52:09Z"}, {"userId": "u3", "achId": "a22", "unlockedAt": "2025-06-26T01:52:09Z"}, {"userId": "u3", "achId": "a26", "unlockedAt": "2025-07-12T01:52:09Z"}, {"userId": "u3", "achId": "a8", "unlockedAt": "2025-08-31T01:52:09Z"}, {"userId": "u3", "achId": "a31", "unlockedAt": "2025-07-12T01:52:09Z"}, {"userId": "u3", "achId": "a12", "unlockedAt": "2025-07-01T01:52:09Z"}, {"userId": "u3", "achId": "a3", "unlockedAt": "2025-08-29T01:52:09Z"}, {"userId": "u3", "achId": "a28", "unlockedAt": "2025-07-10T01:52:09Z"}, {"userId": "u3", "achId": "a9", "unlockedAt": "2025-06-26T01:52:09Z"}, {"userId": "u3", "achId": "a15", "unlockedAt": "2025-08-12T01:52:09Z"}, {"userId": "u4", "achId": "a46", "unlockedAt": "2025-07-22T01:52:09Z"}, {"userId": "u4", "achId": "a13", "unlockedAt": "2025-07-06T01:52:09Z"}, {"userId": "u4", "achId": "a45", "unlockedAt": "2025-06-15T01:52:09Z"}, {"userId": "u4", "achId": "a34", "unlockedAt": "2025-08-28T01:52:09Z"}, {"userId": "u4", "achId": "a28", "unlockedAt": "2025-08-19T01:52:09Z"}, {"userId": "u4", "achId": "a2", "unlockedAt": "2025-07-24T01:52:09Z"}, {"userId": "u4", "achId": "a25", "unlockedAt": "2025-06-25T01:52:09Z"}, {"userId": "u4", "achId": "a41", "unlockedAt": "2025-06-18T01:52:09Z"}, {"userId": "u4", "achId": "a27", "unlockedAt": "2025-09-11T01:52:09Z"}, {"userId": "u4", "achId": "a48", "unlockedAt": "2025-09-01T01:52:09Z"}, {"userId": "u4", "achId": "a11", "unlockedAt": "2025-08-19T01:52:09Z"}, {"userId": "u4", "achId": "a35", "unlockedAt": "2025-07-03T01:52:09Z"}, {"userId": "u4", "achId": "a14", "unlockedAt": "2025-06-18T01:52:09Z"}, {"userId": "u4", "achId": "a37", "unlockedAt": "2025-07-30T01:52:09Z"}, {"userId": "u4", "achId": "a36", "unlockedAt": "2025-07-29T01:52:09Z"}, {"userId": "u4", "achId": "a39", "unlockedAt": "2025-08-30T01:52:09Z"}, {"userId": "u4", "achId": "a9", "unlockedAt": "2025-06-15T01:52:09Z"}, {"userId": "u4", "achId": "a8", "unlockedAt": "2025-07-11T01:52:09Z"}, {"userId": "u4", "achId": "a30", "unlockedAt": "2025-06-24T01:52:09Z"}, {"userId": "u4", "achId": "a24", "unlockedAt": "2025-08-01T01:52:09Z"}, {"userId": "u4", "achId": "a21", "unlockedAt": "2025-07-11T01:52:09Z"}, {"userId": "u4", "achId": "a26", "unlockedAt": "2025-06-18T01:52:09Z"}, {"userId": "u4", "achId": "a12", "unlockedAt": "2025-08-20T01:52:09Z"}, {"userId": "u4", "achId": "a6", "unlockedAt": "2025-09-04T01:52:09Z"}, {"userId": "u4", "achId": "a38", "unlockedAt": "2025-07-14T01:52:09Z"}, {"userId": "u4", "achId": "a20", "unlockedAt": "2025-08-31T01:52:09Z"}, {"userId": "u4", "achId": "a29", "unlockedAt": "2025-09-10T01:52:09Z"}, {"userId": "u4", "achId": "a7", "unlockedAt": "2025-09-09T01:52:09Z"}, {"userId": "u4", "achId": "a44", "unlockedAt": "2025-07-05T01:52:09Z"}, {"userId": "u4", "achId": "a23", "unlockedAt": "2025-06-27T01:52:09Z"}, {"userId": "u4", "achId": "a4", "unlockedAt": "2025-07-10T01:52:09Z"}, {"userId": "u4", "achId": "a5", "unlockedAt": "2025-07-03T01:52:09Z"}, {"userId": "u4", "achId": "a31", "unlockedAt": "2025-07-14T01:52:09Z"}, {"userId": "u4", "achId": "a3", "unlockedAt": "2025-08-26T01:52:09Z"}, {"userId": "u4", "achId": "a40", "unlockedAt": "2025-08-20T01:52:09Z"}, {"userId": "u4", "achId": "a43", "unlockedAt": "2025-08-21T01:52:09Z"}, {"userId": "u4", "achId": "a17", "unlockedAt": "2025-08-30T01:52:09Z"}, {"userId": "u4", "achId": "a19", "unlockedAt": "2025-08-18T01:52:09Z"}, {"userId": "u4", "achId": "a47", "unlockedAt": "2025-08-22T01:52:09Z"}, {"userId": "u4", "achId": "a22", "unlockedAt": "2025-08-24T01:52:09Z"}];


  function byId(arr,id){ for(var i=0;i<arr.length;i++){ if(arr[i].id===id) return arr[i]; } return null; }
  function gameOf(ach){ return byId(GAMES, ach.gameId); }
  function h(tag, attrs, html){ var el=document.createElement(tag); if(attrs){ for(var k in attrs){ if(k==="class") el.className=attrs[k]; else el.setAttribute(k,attrs[k]); } } if(html!=null){el.innerHTML=html;} return el; }
  function formatDate(iso){ var d=new Date(iso); return d.toLocaleDateString(); }
  function setActiveTab(){ var tabs=document.querySelectorAll(".nav a"); for(var i=0;i<tabs.length;i++){ tabs[i].classList.remove("active"); } var id=state.route.split("?")[0].replace("#/",""); var map={"":"tab-dash","platforms":"tab-platforms","games":"tab-games","meta":"tab-meta","compare":"tab-compare","leaderboard":"tab-leaderboard","wrapped":"tab-wrapped"}; var el=document.getElementById(map[id]||"tab-dash"); if(el) el.classList.add("active"); document.getElementById("pageTitle").textContent = (USERS.filter(function(u){return u.id===state.uid;})[0]||USERS[0]).name + ' • ' + (id||'dashboard'); }
  function platformChip(p){ return '<span class="platform-chip"><span class="platform-dot '+("p-"+p)+'"></span>'+p.toUpperCase()+'</span>'; }
  function toast(msg){ var t=document.getElementById("toast"); var div=h("div",{class:"item"},msg); t.appendChild(div); setTimeout(function(){div.remove();},2000); }
  function percent(n,d){ return d? Math.round((n/d)*100):0; }
  function rarityClass(r){ if(r==null) return 'rarity-common'; if(r<3) return 'rarity-ultra'; if(r<10) return 'rarity-rare'; return 'rarity-common'; }

  function savePf(){ localStorage.setItem("ugap-pf", JSON.stringify(state.pf)); }

  // PF chips
  function pfChips(){
    var keys=["steam","xbox","riot","wow"];
    return keys.map(function(k){
      var on = state.pf[k];
      var cls = on ? 'badge sel' : 'badge';
      return '<button class="'+cls+' pf" data-pf="'+k+'">'+k.toUpperCase()+'</button>';
    }).join("");
  }
  function attachPfHandlers(scope){
    var btns = (scope||document).querySelectorAll(".pf[data-pf]");
    for(var i=0;i<btns.length;i++){
      btns[i].onclick = function(){
        var k=this.getAttribute("data-pf");
        state.pf[k]=!state.pf[k];
        savePf();
        render();
      };
    }
  }

  // SVG donut with centered text and small label below
  function donut(pct, label){
    var v = Math.max(0, Math.min(100, pct|0));
    return '<svg class="full" viewBox="0 0 160 120" aria-label="'+(label||"Donut chart")+'">'+
      '<defs><linearGradient id="gr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent-2)"/></linearGradient></defs>'+
      '<g transform="translate(20,10)">'+
        '<circle cx="60" cy="50" r="45" stroke="rgba(255,255,255,.14)" stroke-width="14" fill="none"/>'+
        '<circle cx="60" cy="50" r="45" stroke="url(#gr)" stroke-width="14" stroke-linecap="round" fill="none" stroke-dasharray="'+(2*Math.PI*45)+'" stroke-dashoffset="'+((1-v/100)*(2*Math.PI*45))+'"/>'+
        '<text x="60" y="55" text-anchor="middle" font-size="28" font-weight="800" fill="var(--fg)">'+v+'%</text>'+
        '<text x="60" y="78" text-anchor="middle" font-size="12" fill="var(--muted)">'+(label||"")+'</text>'+
      '</g>'+
    '</svg>';
  }

  // Bars
  function bars(data){
    var max = data.reduce(function(m,x){ return Math.max(m,x[1]); }, 1);
    var rows = data.map(function(x){
      var w = Math.round((x[1]/max)*100);
      return '<div class="row" style="gap:6px"><div style="min-width:140px">'+x[0]+'</div><div class="progress" style="flex:1"><span style="width:'+w+'%"></span></div><div class="badge">'+x[1]+'</div></div>';
    }).join("");
    return '<div class="col">'+rows+'</div>';
  }

  function Dashboard(user){
    var my = USER_ACH.filter(function(u){ return u.userId===user.id; }).filter(function(x){ var a=byId(ACH,x.achId); var g=gameOf(a); return state.pf[g.platform]; });
    var total = my.length;
    var rare = my.filter(function(u){ var a=byId(ACH,u.achId); var r=a && a.rarityGlobal!=null ? a.rarityGlobal : 100; return r<5; }).length;
    var days = {}; my.forEach(function(x){ days[formatDate(x.unlockedAt)] = true; });
    var streak=0; var cur=new Date(); for(var i=0;i<365;i++){ var key=cur.toLocaleDateString(); if(days[key]){ streak++; cur.setDate(cur.getDate()-1);} else break; }
    var per = {}; my.forEach(function(x){ var g=gameOf(byId(ACH,x.achId)); per[g.platform]=(per[g.platform]||0)+1; });
    var pRows = Object.keys(per).map(function(p){ return [p, per[p]]; }).sort(function(a,b){return b[1]-a[1]});
    var topGame = (function(){ var t={}; my.forEach(function(x){ var a=byId(ACH,x.achId); var g=gameOf(a); t[g.name]=(t[g.name]||0)+1; }); var arr=Object.keys(t).map(function(k){return [k,t[k]]}).sort(function(a,b){return b[1]-a[1]}); return arr[0]?arr[0][0]:'—'; })();
    var rarest = my.map(function(x){ var a=byId(ACH,x.achId); return {a:a, r:a.rarityGlobal==null?100:a.rarityGlobal}; }).sort(function(a,b){ return a.r-b.r; })[0];

    var grid = h("div",{class:"grid fade"},"");
    grid.appendChild(h("div",{class:"card g3 kpi"}, '<div class="emoji">🏆</div><div><div class="overline">Total</div><div class="num">'+total+'</div><div class="badge">All-time</div></div>'));
    grid.appendChild(h("div",{class:"card g3 kpi"}, '<div class="emoji">💎</div><div><div class="overline">Rare (&lt;5%)</div><div class="num">'+rare+'</div><div class="badge">Trophy count</div></div>'));
    grid.appendChild(h("div",{class:"card g3 kpi"}, '<div class="emoji">🔥</div><div><div class="overline">Daily streak</div><div class="num">'+streak+'</div><div class="badge">consecutive days</div></div>'));
    grid.appendChild(h("div",{class:"card g3 kpi"}, '<div class="emoji">🎯</div><div><div class="overline">Top game</div><div class="num">'+topGame+'</div><div class="badge">favorite</div></div>'));

    var totalPlat = pRows.reduce(function(a,b){return a+b[1];},0);
    var steamPct = percent(per["steam"]||0, totalPlat);
    grid.appendChild(h("div",{class:"card g6"}, '<div class="section-title">Platform share</div>'+donut(steamPct, "Steam")));
    grid.appendChild(h("div",{class:"card g6"}, '<div class="section-title">By platform</div>'+bars(pRows)));

    grid.appendChild(h("div",{class:"card g12"}, '<div class="section-title">Rarest trophy</div><div class="'+rarityClass(rarest&&rarest.a?rarest.a.rarityGlobal:null)+'">'+(rarest && rarest.a ? rarest.a.name+' · '+(rarest.a.rarityGlobal!=null?rarest.a.rarityGlobal+'%':'—') : '—')+'</div>'));

    var recent = my.slice().sort(function(a,b){ return new Date(b.unlockedAt)-new Date(a.unlockedAt); });
    var rows = recent.slice(0, state.showMoreDash?20:8).map(function(row){ var A=byId(ACH,row.achId), G=gameOf(A); return '<tr><td>'+formatDate(row.unlockedAt)+'</td><td>'+G.name+'</td><td class="'+rarityClass(A.rarityGlobal)+'">'+A.name+'</td><td>'+(A.rarityGlobal!=null?A.rarityGlobal+'%':'—')+'</td></tr>'; }).join("");
    grid.appendChild(h("div",{class:"card g12"}, '<div class="section-title">Recent</div><table class="table"><thead><tr><th>When</th><th>Game</th><th>Achievement</th><th>Rarity</th></tr></thead><tbody>'+rows+'</tbody></table>'));

    grid.appendChild(h("div",{class:"card g12"}, '<div class="section-title">Filters</div><div class="row">'+pfChips()+'</div>'));
    setTimeout(function(){ attachPfHandlers(grid); },0);
    return grid;
  }

  function Platforms(user){
    var platforms = ["steam","xbox","riot","wow"];
    var wrap = h("div",{class:"grid fade"},"");
    wrap.appendChild(h("div",{class:"card g12"}, '<div class="section-title">Global platform filter</div><div class="row">'+pfChips()+'</div>'));
    platforms.forEach(function(p){
      var rows = USER_ACH.filter(function(x){ return x.userId===user.id; }).filter(function(x){ var a=byId(ACH,x.achId); var g=gameOf(a); return g.platform===p; });
      var total = rows.length;
      var rare = rows.filter(function(x){ var a=byId(ACH,x.achId); var r=a && a.rarityGlobal!=null ? a.rarityGlobal : 100; return r<5; }).length;
      var now = new Date(); var last7 = rows.filter(function(x){ return (now - new Date(x.unlockedAt)) <= 7*24*3600*1000; }).length;
      var pct = total ? Math.round((rare/Math.max(1,total))*100) : 0;
      wrap.appendChild(h("div",{class:"card g6"}, '<div class="row" style="justify-content:space-between"><div class="row">'+platformChip(p)+' <b>'+p.toUpperCase()+'</b></div><div class="row"><div class="badge">Total: '+total+'</div><div class="badge">Rare: '+rare+'</div><div class="badge">7d: '+last7+'</div></div></div>'+donut(pct, "Rare %")));
    });
    setTimeout(function(){ attachPfHandlers(wrap); },0);
    return wrap;
  }

  function Games(user){
    var my = USER_ACH.filter(function(u){ return u.userId===user.id; });
    var perGame = {}; my.forEach(function(x){ var a=byId(ACH,x.achId); var g=gameOf(a); if(!state.pf[g.platform]) return; perGame[a.gameId]=(perGame[a.gameId]||[]); perGame[a.gameId].push(a.id); });

    var container = h("div",{class:"fade"},"");
    var grid = h("div",{class:"grid-games"},"");
    function coverText(name){ return name.split(' ').slice(0,2).map(function(s){return s[0]}).join('').toUpperCase(); }
    Object.keys(perGame).forEach(function(id){
      var g = byId(GAMES,id); var unlocked = perGame[id].map(function(aid){return byId(ACH,aid); });
      var rare = unlocked.filter(function(a){ return a.rarityGlobal!=null && a.rarityGlobal<5; }).length;
      var card = h("div",{class:"game-card"},
        '<div class="cover">'+coverText(g.name)+'</div>'+
        '<div class="game-body"><div class="title">'+g.name+'</div>'+
        '<div class="meta">'+g.genres.join(", ")+' · '+g.platform.toUpperCase()+'</div>'+
        '<div class="row" style="margin-top:6px"><div class="badge">Total '+unlocked.length+'</div><div class="badge">Rares '+rare+'</div><button class="btn" data-open="'+g.id+'">Details</button></div>'+
        '</div>'
      );
      grid.appendChild(card);
    });
    container.appendChild(h("div",{class:"card"}, '<div class="section-title">Filters</div><div class="row">'+pfChips()+'</div>'));
    container.appendChild(grid);
    setTimeout(function(){
      attachPfHandlers(container);
      var btns = container.querySelectorAll('button[data-open]');
      for(var i=0;i<btns.length;i++){
        btns[i].onclick = function(){
          var id = this.getAttribute("data-open");
          var g = byId(GAMES,id); var unlocked = perGame[id].map(function(aid){return byId(ACH,aid); });
          var rows = unlocked.slice(0,10).map(function(a){ return '<tr><td class="'+rarityClass(a.rarityGlobal)+'">'+a.name+'</td><td>'+(a.rarityGlobal!=null?a.rarityGlobal+'%':'—')+'</td><td>'+a.tags.join(", ")+'</td></tr>'; }).join("");
          var dlg = h("div",{class:"cmd"}, '<div class="cmd-card"><div class="section-title">'+g.name+'</div><table class="table"><thead><tr><th>Achievement</th><th>Rarity</th><th>Tags</th></tr></thead><tbody>'+rows+'</tbody></table><div class="row" style="justify-content:flex-end"><button class="btn" id="closeDlg">Close</button></div></div>');
          document.body.appendChild(dlg);
          dlg.onclick=function(e){ if(e.target===dlg){ dlg.remove(); } };
          dlg.querySelector("#closeDlg").onclick=function(){ dlg.remove(); };
        };
      }
    },0);
    return container;
  }

  function Compare(){
    var users = ["u1","u2","u3","u4"].map(function(id){ return byId(USERS,id); });
    var data = users.map(function(u){
      var rows=USER_ACH.filter(function(x){ if(x.userId!==u.id) return false; var a=byId(ACH,x.achId); var g=gameOf(a); return state.pf[g.platform]; });
      var rare=rows.filter(function(x){ var a=byId(ACH,x.achId); var r=a && a.rarityGlobal!=null ? a.rarityGlobal : 100; return r<5; }).length;
      return {name:u.name,total:rows.length,rare:rare};
    });
    var max = data.reduce(function(m,x){ return Math.max(m, x.total); }, 1);
    var barsHTML = data.map(function(x){
      var w = Math.round((x.total/max)*100);
      return '<div class="row" style="gap:6px"><div style="min-width:110px">'+x.name+'</div><div class="progress" style="flex:1"><span style="width:'+w+'%"></span></div><div class="badge">'+x.total+' · 💎 '+x.rare+'</div></div>';
    }).join("");
    var wrap = h("div",{class:"fade"},"");
    wrap.appendChild(h("div",{class:"card"}, '<div class="section-title">Filters</div><div class="row">'+pfChips()+'</div>'));
    wrap.appendChild(h("div",{class:"card"}, barsHTML));
    setTimeout(function(){ attachPfHandlers(wrap); },0);
    return wrap;
  }

  function Leaderboard(){
    var metric="total", gameId="all", sortDir="desc";
    function valueOf(u){
      var rows=USER_ACH.filter(function(x){ if(x.userId!==u.id) return false; var a=byId(ACH,x.achId); var g=gameOf(a); if(!state.pf[g.platform]) return false; if(gameId!=="all" && a.gameId!==gameId) return false; return true; });
      if(metric==="total") return rows.length;
      if(metric==="rare") return rows.filter(function(x){ var a=byId(ACH,x.achId); var r=a && a.rarityGlobal!=null ? a.rarityGlobal : 100; return r<5; }).length;
      if(metric==="rarePct"){ var r=rows.filter(function(x){ var a=byId(ACH,x.achId); var rr=a && a.rarityGlobal!=null ? a.rarityGlobal : 100; return rr<5; }).length; return rows.length? Math.round((r/rows.length)*100):0; }
      return 0;
    }
    function renderLB(){
      var sorted = USERS.slice().sort(function(a,b){ return (sortDir==="desc"?1:-1)*(valueOf(b)-valueOf(a)); });
      var rows = sorted.map(function(u,i){ return '<tr><td>'+(i+1)+'</td><td>'+u.name+'</td><td>'+valueOf(u)+'</td></tr>'; }).join("");
      table.innerHTML = '<table class="table"><thead><tr><th>#</th><th>User</th><th>Value</th></tr></thead><tbody>'+rows+'</tbody></table>';
    }
    var controls = h("div",{class:"card"},
      '<div class="row">'+
        '<label>Metric <select id="met" class="select"><option value="total">Total</option><option value="rare">Rare</option><option value="rarePct">Rare %</option></select></label>'+
        '<label> Game <select id="game" class="select"><option value="all">All games</option>'+GAMES.map(function(g){return '<option value="'+g.id+'">'+g.name+'</option>';}).join("")+'</select></label>'+
        '<label> Sort <select id="dir" class="select"><option value="desc">Desc</option><option value="asc">Asc</option></select></label>'+
      '</div><div class="row" style="margin-top:6px">'+pfChips()+'</div>'
    );
    var table = h("div",{class:"card"},"");
    var wrap = h("div",{class:"fade"},"");
    wrap.appendChild(controls); wrap.appendChild(table);
    setTimeout(function(){
      document.getElementById("met").onchange = function(){ metric = this.value; renderLB(); };
      document.getElementById("game").onchange = function(){ gameId = this.value; renderLB(); };
      document.getElementById("dir").onchange = function(){ sortDir = this.value; renderLB(); };
      attachPfHandlers(wrap); renderLB();
    },0);
    return wrap;
  }

  function Meta(){
    var list=[
      {id:"m1",name:"Tri-Headshot",desc:"3 headshots across 3 shooters",icon:"🎯",progress:40},
      {id:"m2",name:"Streak 7",desc:"Unlock on 7 consecutive days",icon:"🔥",progress:70},
      {id:"m3",name:"Rare Hunter",desc:"Any rarity < 5%",icon:"💎",progress:10},
      {id:"m4",name:"Platform Hopper",desc:"Unlock on 3 platforms in 24h",icon:"🪂",progress:20}
    ];
    var html=list.map(function(m){ return '<div class="card g6"><div class="row" style="justify-content:space-between"><div class="row">'+m.icon+' <b>'+m.name+'</b></div><div class="badge">'+m.progress+'%</div></div><div class="badge">'+m.desc+'</div><div class="progress" style="margin-top:8px"><span style="width:'+m.progress+'%"></span></div></div>'; }).join("");
    return h("div",{class:"grid fade"}, html);
  }

  function Wrapped(user){
    var my=USER_ACH.filter(function(u){return u.userId===user.id;}).filter(function(x){ var a=byId(ACH,x.achId); var g=gameOf(a); return state.pf[g.platform]; });
    var total=my.length;
    var rare=my.filter(function(x){var a=byId(ACH,x.achId); var r=a && a.rarityGlobal!=null ? a.rarityGlobal : 100; return r<5;}).length;
    var top={}; for(var i=0;i<my.length;i++){ var a=byId(ACH,my[i].achId); var g=gameOf(a); top[g.name]=(top[g.name]||0)+1; }
    var top3=Object.keys(top).map(function(k){return [k,top[k]]}).sort(function(a,b){return b[1]-a[1]}).slice(0,5);
    var per = {}; my.forEach(function(x){ var g=gameOf(byId(ACH,x.achId)); per[g.platform]=(per[g.platform]||0)+1; });
    var shareDen = (per["steam"]||0)+(per["xbox"]||0)+(per["riot"]||0)+(per["wow"]||0);
    var card = h("div",{class:"card fade"},
      '<div class="section-title">Your Year in Games</div>'+
      '<div class="row badges"><div class="badge">Total: '+total+'</div><div class="badge">Rare: '+rare+'</div></div>'+
      '<div class="grid" style="margin-top:6px">'+
      '<div class="g6">'+donut(percent(per["steam"]||0, shareDen), "Steam share")+'</div>'+
      '<div class="g6">'+bars(top3)+'</div>'+
      '</div>'
    );
    return card;
  }

  function render(){
    setActiveTab();
    var user=USERS.filter(function(u){return u.id===state.uid;})[0]||USERS[0];
    var view=document.getElementById("view"); view.innerHTML="";
    var page=state.route.replace("#/","");
    if(page===""||page==="dash"){ view.appendChild(Dashboard(user)); }
    else if(page==="platforms"){ view.appendChild(Platforms(user)); }
    else if(page==="games"){ view.appendChild(Games(user)); }
    else if(page==="meta"){ view.appendChild(Meta(user)); }
    else if(page==="compare"){ view.appendChild(Compare()); }
    else if(page==="leaderboard"){ view.appendChild(Leaderboard()); }
    else if(page==="wrapped"){ view.appendChild(Wrapped(user)); }
    else { view.appendChild(h("div",{class:"card fade"}, "Not found")); }
  }

  // Floating user bubble
  function renderUserBubble(){
    var fab=document.getElementById("userFab"); var panel=document.getElementById("userFabPanel");
    var current=USERS.filter(function(u){return u.id===state.uid;})[0]||USERS[0];
    fab.querySelector(".fab-avatar").textContent=current.name[0];
    panel.innerHTML=USERS.map(function(u){ var active=u.id===state.uid?" active":""; return '<button class="user-pill'+active+'" data-id="'+u.id+'"><span class="user-avatar">'+u.name[0]+'</span>'+u.name+'</button>'; }).join("");
    fab.onclick=function(){ panel.classList.toggle("open"); };
    document.addEventListener("click", function(e){ if(!panel.contains(e.target)&&!fab.contains(e.target)){ panel.classList.remove("open"); } });
    var btns=panel.querySelectorAll(".user-pill"); for(var i=0;i<btns.length;i++){ btns[i].onclick=function(){ state.uid=this.getAttribute("data-id"); renderUserBubble(); render(); toast("Switched user"); }; }
  }

  // Command palette
  function openCmd(){
    var cmd=document.getElementById("cmd"), input=document.getElementById("cmdInput"), list=document.getElementById("cmdList");
    cmd.classList.remove("hide"); input.value=""; list.innerHTML=""; input.focus();
    var options=[ {k:"dashboard",label:"Go to Dashboard",hash:"#/"}, {k:"platforms",label:"Go to Platforms",hash:"#/platforms"}, {k:"games",label:"Go to Games",hash:"#/games"}, {k:"meta",label:"Go to Meta",hash:"#/meta"}, {k:"compare",label:"Go to Compare",hash:"#/compare"}, {k:"leaders",label:"Go to Leaderboard",hash:"#/leaderboard"}, {k:"wrapped",label:"Go to Wrapped",hash:"#/wrapped"} ];
    function renderOps(q){ list.innerHTML=options.filter(function(o){return o.label.toLowerCase().indexOf(q.toLowerCase())!==-1;}).map(function(o){return '<div class="cmd-item" data-hash="'+o.hash+'">'+o.label+'</div>';}).join(""); var items=list.querySelectorAll(".cmd-item"); for(var i=0;i<items.length;i++){ items[i].onclick=function(){ window.location.hash=this.getAttribute("data-hash"); closeCmd(); }; } }
    function closeCmd(){ cmd.classList.add("hide"); }
    input.oninput=function(){ renderOps(input.value); };
    cmd.onclick=function(e){ if(e.target===cmd) closeCmd(); };
    window.addEventListener("keydown", function esc(e){ if(e.key==="/"||e.key==="Escape"){ closeCmd(); window.removeEventListener("keydown", esc); } });
    renderOps("");
  }

  function init(){
    document.getElementById("themeBtn").onclick=function(){ var isLight=document.documentElement.classList.toggle("light"); localStorage.setItem("ugap-theme", isLight?"light":"dark"); };
    var dense = localStorage.getItem("ugap-dense")==="1";
    document.getElementById("densityToggle").checked = dense;
    document.documentElement.classList.toggle("dense", dense);
    document.getElementById("densityToggle").onchange=function(){ document.documentElement.classList.toggle("dense", this.checked); localStorage.setItem("ugap-dense", this.checked ? "1":"0"); };
    window.addEventListener("keydown", function(e){ if(e.key==="/"){ e.preventDefault(); openCmd(); } });
    renderUserBubble();
    render();
  }

  window.addEventListener("hashchange", function(){ state.route=window.location.hash||"#/"; render(); });
  window.addEventListener("DOMContentLoaded", init);
})();
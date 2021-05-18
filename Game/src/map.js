export var maps = [
    {
        "isReplacing":false,
        "level":"beginner",
        "startDirection":"right",
        "baseText":[],
        "inputIDs": [],
        "variable": [""],
        "lowerBoundary":[""],
        "upperBoundary":[""],
        "increment":[0],
        "command":[""],
        "coordinates":[{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:4,y:3},{x:4,y:2}]
    },
    {
        "isReplacing":false,
        "level":"advanced",
        "startDirection":"down",
        "baseText":[],
        "inputIDs": [],
        "variable": [""],
        "lowerBoundary":[""],
        "upperBoundary":[""],
        "increment": [0],
        "command":[""],
        "coordinates":[{x:3,y:10},{x:4,y:10},{x:5,y:10},{x:6,y:10},{x:7,y:10},{x:8,y:10},{x:9,y:10}]
    },
    {
        "isReplacing":true,
        "level":"advanced",
        "startDirection":"down",
        "baseText": ["for(int i = 3; i < 10; i = i + 1){&#&}"],
        "inputIDs": ["command"],
        "variable": ["i"],
        "lowerBoundary":["3"],
        "upperBoundary":["10"],
        "increment": [1],
        "command":[""],
        "coordinates":[{x:3,y:10},{x:4,y:10},{x:5,y:10},{x:6,y:10},{x:7,y:10},{x:8,y:10},{x:9,y:10}]
    },
    
    {
        "isReplacing":true,
        "level":"advanced",
        "startDirection":"down",
        "baseText": ["for(int i = 3; i < #; i = i + 1){&%#&}","int i = 0;&while(i < 6){&%#&%i = i + 1;&}"],
        "inputIDs":["upperBoundary","command","command"],
        "variable": ["i","i"],
        "lowerBoundary":["3","0"],
        "upperBoundary":["","6"],
        "increment": [1,1],
        "command":["",""],
        "coordinates":[{x:3,y:10},{x:4,y:10},{x:5,y:10},{x:6,y:10},{x:7,y:10},{x:8,y:10},{x:9,y:10},{x:9,y:9},{x:9,y:8},{x:9,y:7},{x:9,y:6},{x:9,y:5}]
    },
    
    {
        "isReplacing":true,
        "level":"advanced",
        "startDirection":"left",
        "baseText": ["int i = 0&while(i < 7){&%if(The Y position of finish < The Y position of character){&%#","%}else{&%#&%}&%i = i + 1;&}"],
        "inputIDs":["command","command"],
        "variable": ["i","i"],
        "lowerBoundary":["0","3"],
        "upperBoundary":["4","8"],
        "increment": [1,1],
        "command":["",""],
        "coordinates":[{x:9,y:6},{x:9,y:5},{x:9,y:4},{x:9,y:3},{x:8,y:3},{x:7,y:3},{x:6,y:3},{x:5,y:3}]
    },
    {
        "isReplacing":true,
        "level":"advanced",
        "startDirection":"right",
        "baseText": ["while(true){&%#&%if(The Y position of character == The Y position of finish){","&%#&%}&}",""],
        "inputIDs":["command","command","command"],
        "variable": ["i","i","i"],
        "lowerBoundary":["0","0","0"],
        "upperBoundary":["9","2","8"],
        "increment": [1,1,1],
        "command":["","","Y = Y + 1"],
        "coordinates":[{x:5,y:1},{x:5,y:2},{x:5,y:3},{x:5,y:4},{x:5,y:5},{x:5,y:6},{x:5,y:7},{x:5,y:8},{x:5,y:9}]
    }
]
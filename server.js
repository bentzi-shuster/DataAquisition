let express = require('express');
let fs = require('fs');
let app = express();
let port = process.env.PORT || 3000;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
app.use(express.static('public'));
let socket = require('socket.io');
let server = app.listen(3000, function(){
    console.log('listening to port 3000.at http://localhost:3000');
});
let io = socket(server);
//to write to csv file, dont have it open, and open the browser 
const csvWriter = createCsvWriter({
    path: 'exampleHandData.csv',
    header: [
        {id: 'timeStamp', title: 'Time stamp'},
        {id: 'handPalmx', title: 'Hand palm positionX'},
        {id: 'handPalmy', title: 'Hand palm positionY'},
        {id: 'handPalmz', title: 'Hand palm positionZ'},
        {id: 'palmNormx', title: 'Palm normX'},
        {id: 'palmNormy', title: 'Palm normY'},
        {id: 'palmNormz', title: 'Palm normZ'},
        {id: 'wristx', title: 'Wrist PositionX'},
        {id: 'wristy', title: 'Wrist PositionY'},
        {id: 'wristz', title: 'Wrist PositionZ'},
        {id: 'ThumbMETACARPALx', title: 'Thumb TYPE_METACARPALX'},
        {id: 'ThumbMETACARPALy', title: 'Thumb TYPE_METACARPALY'},
        {id: 'ThumbMETACARPALz', title: 'Thumb TYPE_METACARPALZ'},
        {id: 'ThumbPROXIMALx', title: 'Thumb TYPE_PROXIMALX'},
        {id: 'ThumbPROXIMALy', title: 'Thumb TYPE_PROXIMALY'},
        {id: 'ThumbPROXIMALz', title: 'Thumb TYPE_PROXIMALZ'},
        {id: 'ThumbINTERMEDIATEx', title: 'Thumb TYPE_INTERMEDIATEX'},
        {id: 'ThumbINTERMEDIAATEy', title: 'Thumb TYPE_INTERMEDIATEY'},
        {id: 'ThumbINTERMEDIATEz', title: 'Thumb TYPE_INTERMEDIATEZ'},
         {id: 'ThumbDISTALx', title: 'Thumb TYPE_DISTALX'},
        {id: 'ThumbDISTALy', title: 'Thumb TYPE_DISTALY'},
        {id: 'ThumbDISTALz', title: 'Thumb TYPE_DISTALZ'},
        {id: 'ThumbFingerTipx', title: 'Thumb TYPE_FINGERTIPX'},
        {id: 'ThumbFingerTipy', title: 'Thumb TYPE_FINGERTIPY'},
        {id: 'ThumbFingerTipz', title: 'Thumb TYPE_FINGERTIPZ'},
        {id: 'IndexMETACARPALx', title: 'Index TYPE_METACARPALX'},
        {id: 'IndexMETACARPALy', title: 'Index TYPE_METACARPALY'},
        {id: 'IndexMETACARPALz', title: 'Index TYPE_METACARPALZ'},
        {id: 'IndexPROXIMALx', title: 'Index TYPE_PROXIMALX'},
        {id: 'IndexPROXIMALy', title: 'Index TYPE_PROXIMALY'},
        {id: 'IndexPROXIMALz', title: 'Index TYPE_PROXIMALZ'},
       {id: 'IndexINTERMEDIATEx', title: 'Index TYPE_INTERMEDIATEX'},
        {id: 'IndexINTERMEDIAATEy', title: 'Index TYPE_INTERMEDIATEY'},
        {id: 'IndexINTERMEDIATEz', title: 'Index TYPE_INTERMEDIATEZ'},
         {id: 'IndexDISTALx', title: 'Index TYPE_DISTALX'},
        {id: 'IndexDISTALy', title: 'Index TYPE_DISTALY'},
        {id: 'IndexDISTALz', title: 'Index TYPE_DISTALZ'},
        {id: 'IndexFingerTipx', title: 'Index TYPE_FINGERTIPX'},
        {id: 'IndexFingerTipy', title: 'Index TYPE_FINGERTIPY'},
        {id: 'IndexFingerTipz', title: 'Index TYPE_FINGERTIPZ'},
        {id: 'MiddleMETACARPALx', title: 'Middle TYPE_METACARPALX'},
        {id: 'MiddleMETACARPALy', title: 'Middle TYPE_METACARPALY'},
        {id: 'MiddleMETACARPALz', title: 'Middle TYPE_METACARPALZ'},
        {id: 'MiddlePROXIMALx', title: 'Middle TYPE_PROXIMALX'},
        {id: 'MiddlePROXIMALy', title: 'Middle TYPE_PROXIMALY'},
        {id: 'MiddlePROXIMALz', title: 'Middle TYPE_PROXIMALZ'},
      {id: 'MiddleINTERMEDIATEx', title: 'Middle TYPE_INTERMEDIATEX'},
        {id: 'MiddleINTERMEDIAATEy', title: 'Middle TYPE_INTERMEDIATEY'},
        {id: 'MiddleINTERMEDIATEz', title: 'Middle TYPE_INTERMEDIATEZ'},
          {id: 'MiddleDISTALx', title: 'Middle TYPE_DISTALX'},
        {id: 'MiddleDISTALy', title: 'Middle TYPE_DISTALY'},
        {id: 'MiddleDISTALz', title: 'Middle TYPE_DISTALZ'},
        {id: 'MiddleFingerTipx', title: 'Middle TYPE_FINGERTIPX'},
        {id: 'MiddleFingerTipy', title: 'Middle TYPE_FINGERTIPY'},
        {id: 'MiddleFingerTipz', title: 'Middle TYPE_FINGERTIPZ'},
        {id: 'RingMETACARPALx', title: 'Ring TYPE_METACARPALX'},
        {id: 'RingMETACARPALy', title: 'Ring TYPE_METACARPALY'},
        {id: 'RingMETACARPALz', title: 'Ring TYPE_METACARPALZ'},
        {id: 'RingPROXIMALx', title: 'Ring TYPE_PROXIMALX'},
        {id: 'RingPROXIMALy', title: 'Ring TYPE_PROXIMALY'},
        {id: 'RingPROXIMALz', title: 'Ring TYPE_PROXIMALZ'},
       {id: 'RingINTERMEDIATEx', title: 'Ring TYPE_INTERMEDIATEX'},
        {id: 'RingINTERMEDIAATEy', title: 'Ring TYPE_INTERMEDIATEY'},
        {id: 'RingINTERMEDIATEz', title: 'Ring TYPE_INTERMEDIATEZ'},
         {id: 'RingDISTALx', title: 'Ring TYPE_DISTALX'},
        {id: 'RingDISTALy', title: 'Ring TYPE_DISTALY'},
        {id: 'RingDISTALz', title: 'Ring TYPE_DISTALZ'},
        {id: 'RingFingerTipx', title: 'Ring TYPE_FINGERTIPX'},
        {id: 'RingFingerTipy', title: 'Ring TYPE_FINGERTIPY'},
        {id: 'RingFingerTipz', title: 'Ring TYPE_FINGERTIPZ'},
        {id: 'PinkyMETACARPALx', title: 'Pinky TYPE_METACARPALX'},
        {id: 'PinkyMETACARPALy', title: 'Pinky TYPE_METACARPALY'},
        {id: 'PinkyMETACARPALz', title: 'Pinky TYPE_METACARPALZ'},
        {id: 'PinkyPROXIMALx', title: 'Pinky TYPE_PROXIMALX'},
        {id: 'PinkyPROXIMALy', title: 'Pinky TYPE_PROXIMALY'},
        {id: 'PinkyPROXIMALz', title: 'Pinky TYPE_PROXIMALZ'},
            {id: 'PinkyINTERMEDIATEx', title: 'Pinky TYPE_INTERMEDIATEX'},
        {id: 'PinkyINTERMEDIAATEy', title: 'Pinky TYPE_INTERMEDIATEY'},
        {id: 'PinkyINTERMEDIATEz', title: 'Pinky TYPE_INTERMEDIATEZ'},
          {id: 'PinkyDISTALx', title: 'Pinky TYPE_DISTALX'},
        {id: 'PinkyDISTALy', title: 'Pinky TYPE_DISTALY'},
        {id: 'PinkyDISTALz', title: 'Pinky TYPE_DISTALZ'},
  
        {id: 'PinkyFingerTipx', title: 'Pinky TYPE_FINGERTIPX'},
        {id: 'PinkyFingerTipy', title: 'Pinky TYPE_FINGERTIPY'},
        {id: 'PinkyFingerTipz', title: 'Pinky TYPE_FINGERTIPZ'},

    
        
    ]
  });
 
// fs.writeFileSync('data.json', '{}');
io.on('connection', function(socket){
    console.log('made socket connection', socket.id);
    let run=false;
    let startTime=0;
    let indexx=0;
    socket.on('data', function(data){
        //CLOSE THE BROWSER AFTER RECORDING
        if(!run){
             startTime = new Date().getTime();
                run=true;
        }
       // console.log(data.multiHandLandmarks);
    for (let i = 0; i < data.multiHandLandmarks.length; i++) {
        // let handLM=data.multiHandLandmarks[i]; //pixel coordinates
        let handLM=data.multiHandWorldLandmarks[i];//meters



        let hand =data.multiHandedness[0].label;
        let pointData=[];
        // let hand = data.multihandedness.hand;
            let timeelapsed = new Date().getTime() - startTime;
            // console.log(j);
            // {time:timee,point:j,x:hand[j].x,y:hand[j].y,z:hand[j].z}];
            // console.log(handLM.length);
            let row={
                timeStamp:timeelapsed,
                handPalmx:0,
                handPalmy:0,
                handPalmz:0,
                palmNormx:0,
                palmNormy:0,
                palmNormz:0,
                wristx:handLM[0].x,
                wristy:handLM[0].y,
                wristz:handLM[0].z,
                ThumbMETACARPALx:0,
                ThumbMETACARPALy:0,
                ThumbMETACARPALz:0,
                ThumbPROXIMALx:handLM[1].x,
                ThumbPROXIMALy:handLM[1].y,
                ThumbPROXIMALz:handLM[1].z,
                ThumbINTERMEDIATEx:handLM[2].x,
                ThumbINTERMEDIAATEy:handLM[2].y,
                ThumbINTERMEDIATEz:handLM[2].z,
                ThumbDISTALx:handLM[3].x,
                ThumbDISTALy:handLM[3].y,
                ThumbDISTALz:handLM[3].z,
                ThumbFingerTipx:handLM[4].x,
                ThumbFingerTipy:handLM[4].y,
                ThumbFingerTipz:handLM[4].z,
                IndexMETACARPALx:0,
                IndexMETACARPALy:0,
                IndexMETACARPALz:0,
                IndexPROXIMALx:handLM[5].x,
                IndexPROXIMALy:handLM[5].y,
                IndexPROXIMALz:handLM[5].z,
                IndexINTERMEDIATEx:handLM[6].x,
                IndexINTERMEDIAATEy:handLM[6].y,
                IndexINTERMEDIATEz:handLM[6].z,
                IndexDISTALx:handLM[7].x,
                IndexDISTALy:handLM[7].y,
                IndexDISTALz:handLM[7].z,
                IndexFingerTipx:handLM[8].x,
                IndexFingerTipy:handLM[8].y,
                IndexFingerTipz:handLM[8].z,
                MiddleMETACARPALx:0,
                MiddleMETACARPALy:0,
                MiddleMETACARPALz:0,
                MiddlePROXIMALx:handLM[9].x,
                MiddlePROXIMALy:handLM[9].y,
                MiddlePROXIMALz:handLM[9].z,
                MiddleINTERMEDIATEx:handLM[10].x,
                MiddleINTERMEDIAATEy:handLM[10].y,
                MiddleINTERMEDIATEz:handLM[10].z,
                MiddleDISTALx:handLM[11].x,
                MiddleDISTALy:handLM[11].y,
                MiddleDISTALz:handLM[11].z,
                MiddleFingerTipx:handLM[12].x,
                MiddleFingerTipy:handLM[12].y,
                MiddleFingerTipz:handLM[12].z,
                RingMETACARPALx:0,
                RingMETACARPALy:0,
                RingMETACARPALz:0,
                RingPROXIMALx:handLM[13].x,
                RingPROXIMALy:handLM[13].y,
                RingPROXIMALz:handLM[13].z,
                RingINTERMEDIATEx:handLM[14].x,
                RingINTERMEDIAATEy:handLM[14].y,
                RingINTERMEDIATEz:handLM[14].z,
                RingDISTALx:handLM[15].x,
                RingDISTALy:handLM[15].y,
                RingDISTALz:handLM[15].z,
                RingFingerTipx:handLM[16].x,
                RingFingerTipy:handLM[16].y,
                RingFingerTipz:handLM[16].z,
                PinkyMETACARPALx:0,
                PinkyMETACARPALy:0,
                PinkyMETACARPALz:0,
                PinkyPROXIMALx:handLM[17].x,
                PinkyPROXIMALy:handLM[17].y,
                PinkyPROXIMALz:handLM[17].z,
                PinkyINTERMEDIATEx:handLM[18].x,
                PinkyINTERMEDIAATEy:handLM[18].y,
                PinkyINTERMEDIATEz:handLM[18].z,
                PinkyDISTALx:handLM[19].x,
                PinkyDISTALy:handLM[19].y,
                PinkyDISTALz:handLM[19].z,
                PinkyFingerTipx:handLM[20].x,
                PinkyFingerTipy:handLM[20].y,   
                PinkyFingerTipz:handLM[20].z,
            }
            pointData.push(row);
            
        
        csvWriter.writeRecords(pointData)
    }
       indexx++;
       
    });
});

/* IMPORTANT:

multi_hand_landmarks

Collection of detected/tracked hands, where each hand is represented as a list of 21 hand landmarks and each landmark is composed of x, y and z. x and y are normalized to [0.0, 1.0] by the image width and height respectively. z represents the landmark depth with the depth at the wrist being the origin, and the smaller the value the closer the landmark is to the camera. The magnitude of z uses roughly the same scale as x.

multi_hand_world_landmarks

Collection of detected/tracked hands, where each hand is represented as a list of 21 hand landmarks in world coordinates. Each landmark is composed of x, y and z: real-world 3D coordinates in meters with the origin at the hand’s approximate geometric center.

*/
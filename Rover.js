let rover = {
  Position : "N",
  Coords: [0,0]
}
tracking = [];
commandLine = 'lrlrflr';

function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.Position) {
    case "N":
    rover.Position = "W"
    break;
    case "W":
    rover.Position = "S"
    break;
    case "S":
    rover.Position = "E"
    break;
    case "E":
    rover.Position = "N"
    break;
}
console.log(`Rover Direction is now ${rover.Position}`)
}


function turnRight(){
  console.log("turnRight was called!");
  switch (rover.Position){
    case "N":
    rover.Position = "E"
    break;
    case "W":
    rover.Position = "N"
    break;
    case "S":
    rover.Position = "W"
    break;
    case "E":
    rover.Position = "S"
    break;
}
  console.log(`Rover Direction is now ${rover.Position}`)
}

function moveForward(){
  console.log("moveForward was called");
  switch(rover.Position){
    case "N":
    rover.Coords[1] = rover.Coords[1]-1
    tracking.push(rover.Coords)
    break;
    case "E":
    rover.Coords[0] = rover.Coords[0]+1
    tracking.push(rover.Coords)
    break;
    case "W":
    rover.Coords[0] = rover.Coords[0]-1
    tracking.push(rover.Coords)
    break;
    case "S":
    rover.Coords[1] = rover.Coords[1]+1
    tracking.push(rover.Coords)
    break;
  }
  return console.log(`The new coordinates are: ${rover.Coords}`)
}

function moveBackward(){
  console.log("moveForward was called");
  switch(rover.Position){
    case "N":
      if (rover.Coords[1]<10){
        rover.Coords[1] = rover.Coords[1]+1
      }else{
        console.log('The Rover cannot move outside the grid boundaries!')
                    }
    tracking.push(rover.Coords)
    break;
    case "E":
        if (rover.Coords[1]>0){
    rover.Coords[0] = rover.Coords[0]-1
        }else{
          console.log('The Rover cannot move outside the grid boundaries!')
        }    
      tracking.push(rover.Coords)
    break;
    case "W":
      if (rover.Coords[0]<10){
    rover.Coords[0] = rover.Coords[0]+1
      }else {
        console.log('The Rover cannot move outside the grid boundaries!')
        }
    tracking.push(rover.Coords)
    break;
    case "S":
      if (rover.Coords[1]>0){
        rover.Coords[1] = rover.Coords[1]-1
      }else {console.log('The Rover cannot move outside the grid boundaries!')
            }
    tracking.push(rover.Coords)
    break;
  }
  
  return console.log(`The new coordinates are: ${rover.Coords}`)
}

function commands(){
  for (let i = 0; i < commandLine.length; i++){
    switch(commandLine[i]){
      case "l":
        turnLeft()
        break;
      case "r":
        turnRight()
        break;
      case "f":
        moveForward()
        break;
      case "b":
        moveBackward()
        break;
      default:
        console.log('Wrong command');
    }}}
commands();
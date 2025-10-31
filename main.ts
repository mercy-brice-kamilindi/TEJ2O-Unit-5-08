/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by:Mercy 
 * Created on: Oct 2025
 * This program ...
*/

// variable
let distanceOfObstacle: number = 0

// clean
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// car start
while (true) {
    distanceOfObstacle = sonar.ping(
        DigitalPin.P12,
        DigitalPin.P13,
        PingUnit.Centimeters
    )
   if (distanceOfObstacle > 10) {
       
   }

}
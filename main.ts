/* Copyright (c) 2025 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Oct 2025
 * This program uses forever statements.
*/

// variables
let distanceToObject: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    distanceToObject = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber(distanceToObject)
    if (distanceToObject < 10) {
        basic.pause(500)
        robotbit.StpCarMove(-10, 48)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
    }
    robotbit.StpCarMove(10, 48)
}
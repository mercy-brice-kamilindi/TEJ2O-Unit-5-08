/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Oct 2025
 * This program moves a cool car
*/

// / variables
let distanceToObject: number = 0

// Clean
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    distanceToObject = sonar.ping(
        DigitalPin.P12,
        DigitalPin.P13,
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

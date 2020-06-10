# Calibrating the weight on the bioreactor

[Home](../../README.md)

## Context

The weight cells return fairly random values that indicate the variation of the internal resistance. These values have to be converted to weight in grams using a rule of three. For this, we have to make a calibration.

## Serial commands

All the available serial commands of the bioreactor concerning the weight can be seen using the help command `w`. Use the command `wt` tp acquire the weight 10 times. This allows you to see if the measurements are reliable.

## Procedure

**Warning:** You need a functional bioreactor accessible from the Arduino IDE serial monitor to do the calibration. Be sure to select **Both CR+NL** in the serial monitor.

### Empty

- Place the empty tank you will use to contain the liquid on the bioreactor.
- Send the `we` command to set the empty weight

### Empty + 1kg

- Fill the tank with 1kg of water
- Send the `wk` command to calibrate the kilogram

### Low level

- Fill the tank the minimal level of liquid acceptable. The bioreactor will empty the tank until it reaches this level every time it adds food.
- Send the `wl` command to calibrate the kilogram

### High level

- Fill the to the maximal level of liquid you want. The bioreactor will keep the liquid level at this level.
- Send the `wh` command to set the high liquid level weight


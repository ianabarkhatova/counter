Counter Project

Initial State:

- Max and start values equal to 0
- "set", "inc" and 'reset' buttons are disabled
- "Enter start and max values and press 'set'" notification is show on the Counter display

Steps:

1. Set start and max values. "set" button will be enabled. Start value can be left as 0.

* start and max values cannot be equal - "Start and max values cannot be equal"
warning will appear.
** Min value cannot be greater than max value - "Start value cannot be greater than max value"
warning will appear.
*** In above cases, "set" button will become inactive.

2. Click "set".

"Enter start and max values and press 'set'" on the Counter display will 
be changed to the Counter starting value.

3. Click "inc". 

After clicking "inc" the first time, Counter value will be incremented by 1. "reset" button 
will become active.

4. Continue clicking "inc" button until the max value is reached on the Counter display. 

When the max value is reached, the Counter display value will be colored in red, "inc" button 
will become disabled, and "reset" button will be enabled.

5. Click "reset". 

Counter display value will be reset to the start value, "inc" button will become active,
"reset" button will be disabled. You can continue clicking "inc" until the max value will be 
reached again.

* Everytime you try changing max/start values, "Enter start and max values and press 'set'" 
notification will be shown on the Counter display again.

** Max and start values cannot be less than 0 due to validation.






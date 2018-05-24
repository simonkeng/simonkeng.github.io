# `while` vs `for`

First a few imports we'll use. I love these.

```python
import arrow
import numpy as np
```

### while code

```python
t = arrow.now()
while True:
	n = np.random.randint(0, 999999) * np.random.randint(0, 999999)
    print n
    if ((arrow.now() - t).total_seconds()) / 60 > 3: # minutes
		break    
```
We record the initial time `t` when the script is run, then execute the while loop. The loop consists of calculating a number, printing the number, then checking the time, and repeat until 3 mins have passed. We generate random numbers between `0` and `999999` using the numpy random.randint method, multiply those numbers together and print the result.


### for code

```python
t = arrow.now()
iter = 100000
for j in range(iter):
	n = np.random.randint(0, 999999) * np.random.randint(0, 999999)
    print n
    if ((arrow.now() - t).total_seconds()) / 60 > 3:
    	break
    else:
    	iter += 10000
        print iter

```

# `ls -R` vs `python`

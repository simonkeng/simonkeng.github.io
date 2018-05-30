# Data Team Best Practices


## Personal Scripts 

For personal scripts, the minimum requirement is a docstring at the top of the file, like:

```python
'''
Name of script, what it does

Install:
...

Usage:
...

'''

import os
import sys
import numpy

```

For example:

```python
'''
Script for processing PK assay files for project Gladiator

Dependancies:
pip install requests
pip install arrow
pip install textract
brew install unar

Usage:
python script.py [arg1] [arg2] [--options]

Options:
[--to-sdf]      ...
[--to-csv]      ...

Questions:
first.last@schrodinger.com

'''
import requests
import arrow
import textract

```

## Web Apps (e.g. DataPortal, EM)

Documentation on these systems is critical, as their scope and number of levels of abstraction make these web apps very complex and more difficult to collaborate on, without high quality documentation. 

The best practices minimum, for our full stack web developers:

- docstrings on fuctions
- use logging instead of print



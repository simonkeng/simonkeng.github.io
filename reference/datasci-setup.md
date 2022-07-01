# Simple Data Science Development Environment

Simple walkthrough of a basic data science setup. 

1. If using macOS, install [Homebrew](https://brew.sh/).

```bash

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"    

```

2. Install the Python 3.7 version of [miniconda](https://docs.conda.io/en/latest/miniconda.html).

3. Optional: create a conda virtual environment. 

```bash

conda create -n env_name python=3.7

# after created..

source activate env_name

```

4. Install [Jupyter](https://jupyter.readthedocs.io/en/latest/install.html).

```bash

pip install --upgrade pip

pip install jupyter 

```

5. Install [Pandas](https://pandas.pydata.org/) and [NumPy](http://www.numpy.org/), if not installed already from anaconda.

```bash

conda install pandas

pip install numpy

```

import argparse
import os
import shutil
import tempfile
import time

import numpy as np
import sympy as sp
from PIL import Image




x, y, z = sp.symbols('x y z')


def F(i: int = 0):
    f = (x + i)**3 + y**4
    print(type(f))
    return f


def graph(f, xr: list, yr: list, image: str) -> None:
    """
    :param xr: range of x values
    """
    sp.plotting.plot3d(
        (f, (x, xr[0], xr[1]), (y, yr[0], yr[1])),
        show=False
    ).save(image)


def animate(cwd: str, gif: str, tmpdir_path: str, iterations: int) -> None:
    print('Collecting plots to generate animation.')
    images = [Image.open(f'{tmpdir_path}/{n}.png') for n in range(iterations)]
    images[0].save(gif,
                   save_all=True,
                   append_images=images[1:],
                   duration=100,
                   loop=0)
    time.sleep(5)
    shutil.move(gif, cwd)
    print(f'Animation {gif.split("/")[-1]} successfully created.')




def run_loop():

    args = get_args()

    with tempfile.TemporaryDirectory() as tmpdir:
        iterations = 0

        print(f'Function: {F()}')
        print(f'Plotting min: {args.min} to max: {args.max}')
        for i, j in enumerate(
                np.arange(float(args.min), float(args.max), float(args.step))):
            iterations += 1
            image_file = f'{tmpdir}/{i}.png'
            print(f'Plotting {F(j)} in {image_file}')
            graph(F(j), [-5, 5], [-5, 5], image_file)

        cwd = os.getcwd()
        gif = f'{tmpdir}/{args.name}.gif'

        animate(cwd, gif, tmpdir, iterations)


def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--name', '-n', help='Filename for the output gif.')
    parser.add_argument('--min')
    parser.add_argument('--max')
    parser.add_argument('--step', '-s')
    return parser.parse_args()


if __name__ == '__main__':
    run_loop()

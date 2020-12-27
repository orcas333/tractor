from tqdm import tqdm

from .env import build_env
from .agent import Baseline

class Trainer:

    def __init__(self, cfg):
        self.env = build_env(cfg)
        self.agent = Baseline()

    def run(self):
        for i in tqdm(range(1000)):
            pass
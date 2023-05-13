# python-node-simple-ipc-experiment
Node.js uses a Python script

Motivation: my Express.js server uses a Python script (AI model) for each request. This is highly inefficient. This experiment is a way to achieve effective "module caching", i.e. I keep the script running at all times.

import json
import sys

# Read filename from standard input
filename = sys.stdin.readline().strip()

# Run the AI model with filename as input
output = {'result': filename}

# Write JSON response to standard output
json.dump(output, sys.stdout)

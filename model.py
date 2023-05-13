import json

def doSomething(x = 2):
    return x * 2

def process_input(input_text):
    try:
        # evaluate the input as a Python expression
        input_data = eval(input_text)
        # do some computation here...
        output_data = {"result": input_data, "count": count}
    except Exception as e:
        # if there was an error, return an error message
        output_data = {"error": str(e)}
    # convert the output to JSON and print it
    output_text = json.dumps(output_data)
    print(output_text)

# read input from stdin, process it, and write output to stdout
while True:
    input_text = input().strip()
    if not input_text:
        break
    process_input(input_text)

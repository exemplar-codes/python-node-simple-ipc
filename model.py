import json

def test_repl(x=3):
    return x * 3

class REPLyify:
    def __init__(self):
        self.count = 0

    def process_input(self, input_text):
        try:
            # evaluate the input as a Python expression
            input_data = eval(input_text)
            # do some computation here...
            output_data = {"result": input_data, "count": self.count}
        except Exception as e:
            # if there was an error, return an error message
            output_data = {"error": str(e)}
        # convert the output to JSON and print it
        output_text = json.dumps(output_data)
        print(output_text)

    def start_listening(self):
        # read input from stdin, process it, and write output to stdout
        while True:
            input_text = input().strip()
            self.count += 1
            if not input_text:
                break
            self.process_input(input_text)

if __name__ == "__main__":
    REPLyify().start_listening()

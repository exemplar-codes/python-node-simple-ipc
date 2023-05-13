from replify import REPLify


def do_something(x=2):
    return x * 2


repl = REPLify({"do_something": do_something})
repl.start_listening()

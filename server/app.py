from flask import Flask, request, jsonify
import db

app = Flask(__name__)

@app.route('/icon/<name>')
def get_icon_url(name:str):
    return f"https://img.pokemondb.net/sprites/silver/normal/{name}.png"


@app.route('/')
def hello():
    # Get the page number and page size from the query parameters
    page = request.args.get('page', 1, type=int)
    page_size = request.args.get('page_size', 10, type=int)

    # Calculate the start and end indices for the current page
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    data = db.get()

    # Slice the data based on the pagination parameters
    items = data[start_index:end_index]

    # Create a dictionary with the "done" boolean and the "data" property
    done = len(data) < end_index
    result = {"done": done, "result": items}

    return jsonify(result)


if __name__=='__main__':
    app.run(port=8080)
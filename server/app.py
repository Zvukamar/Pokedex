from flask import Flask, request, jsonify
import db

app = Flask(__name__)

@app.route('/')
def fetchAllPokemons():
    # Get the page number and page size from the query parameters
    filterArg = request.args.get('filter', '').lower()
    page = request.args.get('page', 1, type=int)
    page_size = request.args.get('page_size', 10, type=int)
    sort_order = request.args.get('sort_order', 'asc')

    # Calculate the start and end indices for the current page
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    data = db.get()

    if filterArg:
        # Perform a filter using the filterArg from query
        data = [pokemon for pokemon in data if filterArg in pokemon['type_one'].lower() or filterArg in pokemon['type_two'].lower()]

    # Sort the items based on the 'number' key
    data = sorted(data, key=lambda x: x['number'], reverse=(sort_order == 'desc'))

    # Slice the data based on the pagination parameters
    items = data[start_index:end_index]

    for item in items:
        item["imageUrl"] = getPokemonUrlByName(item["name"].lower())

    # Create a dictionary with the "done" boolean and the "data" property
    done = len(data) < end_index
    result = {"done": done, "result": items}

    return jsonify(result)

def getPokemonUrlByName(name):
    return "https://img.pokemondb.net/sprites/silver/normal/{}.png".format(name)

if __name__=='__main__':
    app.run(port=8080)
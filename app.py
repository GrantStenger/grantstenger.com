# Install Dependencies
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/lists')
def lists():
    return render_template('lists.html')

@app.route('/albums')
def albums():
    return render_template('albums.html')

@app.route('/books')
def books():
    return render_template('books.html')

@app.route('/essays')
def essays():
    return render_template('essays.html')

@app.route('/papers')
def papers():
    return render_template('papers.html')

@app.route('/gift-ideas')
def gift_ideas():
    return render_template('gift-ideas.html')

@app.route('/nfts')
def nfts():
    return render_template('nfts.html')

if __name__ == "__main__":
    app.run(debug=True)

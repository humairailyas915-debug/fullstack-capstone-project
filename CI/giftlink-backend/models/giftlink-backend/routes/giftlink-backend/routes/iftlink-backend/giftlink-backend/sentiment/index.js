const natural = require('natural');

function analyzeSentiment(text) {
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer("English", stemmer, "afinn");
    const tokenizer = new natural.WordTokenizer();
    const tokenizedText = tokenizer.tokenize(text);
    return analyzer.getSentiment(tokenizedText);
}

module.exports = analyzeSentiment;

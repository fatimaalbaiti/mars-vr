import axios from 'axios';

class NanoScoreHelper {
  constructor() {
    this.leaderboard = [];
    this.frequency = 5000;
    this.jsonUrl = "http://172.17.42.120/mars-exploration/game.saved";

    // this.jsonUrl = "http://localhost:3000/nano.json";

    // this.mockData();

    this.fetchData();
  }

  fetchData() {
    setInterval(() => {
      axios.get(this.jsonUrl)
          .then((response) => {

            const data = response.data;

            let totals = [];

            Object.keys(data).forEach(k => {
              const sceneScores = data[k].scores
                  .reverse()
                  .map(s => ({ ...s, score: Number(s.score) }))
                  .sort((a, b) => b.score - a.score);

              let added = [];
              sceneScores.forEach(s => {
                if (added.includes(s.name)) {
                  return;
                }

                const existing = totals.find(t => t.name === s.name);

                if (existing) {
                  existing.score += Number(s.score);
                } else {
                  totals.push({ ...s, score: Number(s.score) })
                }

                added.push(s.name);
              });

            });

            totals = totals.map(t => ({
              id: t.name,
              name: t.name,
              score: Number(t.score),
              progress: parseInt(t.score / 900 * 100, 10),
              photoUrl: `/img/${t.avatar}.svg`,
            }));

            this.leaderboard = totals.sort((a, b) => (b.score - a.score)).slice(0,5);

            this.leaderboard = this.leaderboard.map((l, i) => ({
              ...l,
              rank: i + 1,
            }));
          })
          .catch((error) => {
            console.log(error);
          });
    }, this.frequency);
  }

  watch(callback) {
    callback(this.leaderboard.sort((a, b) => a.rank - b.rank));

    setInterval(() => {
      const sorted = this.leaderboard.sort((a, b) => a.rank - b.rank);
      callback(sorted);
    }, this.frequency);
  }

  mockData() {
    this.leaderboard = require('./nano.json');

    setInterval(() => {
      this.leaderboard.forEach(item => {
        item.score *= Math.random() * 2;
        item.score = parseInt(item.score, 10) + 10;
      });

      this.leaderboard.sort((a, b) => (b.score - a.score));

      this.leaderboard = this.leaderboard.map((l, i) => ({
        ...l,
        rank: i + 1,
      }));
    }, this.frequency);
  }
}

export default NanoScoreHelper;
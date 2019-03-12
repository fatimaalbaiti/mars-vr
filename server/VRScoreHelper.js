import axios from 'axios';

class VRScoreHelper {
	constructor() {
	  this.leaderboard = [];
      this.frequency = 5000;
      this.jsonUrl = "http://default-environment.w7cqwpcgjc.us-east-2.elasticbeanstalk.com/";

      // this.jsonUrl = "http://localhost:3000/vr.json";

      // this.mockData();

      this.fetchData();
	}

    fetchData() {
      setInterval(() => {
        axios.get(this.jsonUrl)
          .then((response) => {
            const scores = response.data
                .reverse()
                .map(s => ({ ...s, score: Number(s.score) }))
                .sort((a, b) => b.score - a.score)
                .slice(0,10);

            this.leaderboard = scores.map(({id, name, score}) => ({
              id,
              name: name.slice(0, 7),
              score: +String(score).substring(0, 6),
              "heart": parseInt(score / 1234),
              "oxygen": parseInt(score / 1105),
              "hydro": parseInt(score / 999),
            }));

            this.leaderboard = this.leaderboard.map((l, i) => ({
              ...l,
              rank: i + 1,
              "photoUrl": `/img/rank-${i + 1}.png`
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
	  this.leaderboard = require('./vr.json');

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

export default VRScoreHelper;
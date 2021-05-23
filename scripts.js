(function () {
  Vue.createApp({
    data() {
      return {
        points: {
          1: 0,
          2: 0
        },
        tempCard: null,
        totalFlipped: 0,
        player: 1,
        cards: [{
          id: 1,
          image: './images/01.jpeg',
          flipped: false,
          duplicated: false
        }, {
          id: 2,
          image: './images/02.jpeg',
          flipped: false,
          duplicated: false
        }, {
          id: 3,
          image: './images/03.jpeg',
          flipped: false,
          duplicated: false
        }, {
          id: 4,
          image: './images/04.jpeg',
          flipped: false,
          duplicated: false
        }, {
          id: 5,
          image: './images/05.jpeg',
          flipped: false,
          duplicated: false
        }, {
          id: 6,
          image: './images/06.jpeg',
          flipped: false,
          duplicated: false
        }, {
          id: 7,
          image: './images/07.jpeg',
          flipped: false,
          duplicated: false
        }, {
          id: 8,
          image: './images/08.jpeg',
          flipped: false,
          duplicated: false
        }, {
          id: 9,
          image: './images/09.jpeg',
          flipped: false,
          duplicated: false
        }]
      }
    },
    methods: {
      switchPlayer: function () {
        if (this.player === 1) {
          this.player = 2;
        } else {
          this.player = 1;
        }
      },
      onFlipCard: function (card) {
        if (this.totalFlipped < 2 && !card.flipped) {
          this.totalFlipped++;
          card.flipped = !card.flipped;
          if (this.tempCard !== null) {
            setTimeout(() => {
              if (this.tempCard.id !== card.id) {
                this.tempCard.flipped = !this.tempCard.flipped;
                card.flipped = !card.flipped;
              } else {
                this.points[this.player]++;
              }
              this.tempCard = null;
              this.totalFlipped = 0;
              this.switchPlayer();
            }, [1000]);
          } else {
            this.tempCard = card;
          }
        }

      },
      refresh: function () {
        this.cards.sort(() => .5 - Math.random()).map(item => {
          item.flipped = false;
          return item;
        });
        this.tempCard = null
        this.totalFlipped = 0;
        this.points[1] = 0;
        this.points[2] = 0;
        this.player = 1;
      }
    },
    created() {
      this.cards = this.cards.reduce(function (res, current, index, array) {
        const duplicated = { ...current, duplicated: true };
        return res.concat([{ ...duplicated }, { ...current }]);
      }, []);
      this.refresh();
    }
  }).mount('#app')
})();
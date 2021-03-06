const nameset = document.querySelector('.nameset');
const nameForm = document.querySelector('.nameForm');

const setUserName = () => ({
  user: '',
  User(name) {
    return {
      name,
      score: [],
    };
  },
  grabUserName() {

  },


  setGameData() {
    const data = { name: 'ninjaskrill' };
    const link = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    fetch(link, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => res);
  },
  updateData(user) {
    localStorage.setItem('person', JSON.stringify(user));
  },
  getUserData() {
    let person;
    if (localStorage.length < 1) {
      nameset.classList.remove('d-none');
      nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const res = nameForm.username.value;

        if (res.length) {
          nameset.classList.add('d-none');
          person = this.User(res);
          this.updateData(person);
        } else {
          this.getUserData();
        }
      });
    } else {
      const perData = localStorage.getItem('person');
      person = JSON.parse(perData);
    }
    return person;
  },

});

export default setUserName;

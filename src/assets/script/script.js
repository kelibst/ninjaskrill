const nameset = document.querySelector('.nameset');
const nameForm = document.querySelector('.nameForm');

const setUserName = () => ({
  user: '',
  User(name){
    return{
        name: name,
        score: 0
    }
  },
  grabUserName() {
    nameset.classList.remove('d-none');
    nameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const res = nameForm.username.innerText;
      if (res.length) {
        nameset.classList.add('d-none');
      }
      return res;
    });
  },


  setGameData() {
    const data = { name: 'ninjaskrill' };
    const link = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    fetch(link, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => res);
  },
  getUserData() {
    let person;
    if (localStorage.length < 1) {
      this.grabUserName();
      person = this.User(this.grabUserName());

      localStorage.setItem('person', JSON.stringify(person));
    } else {
      const perData = localStorage.getItem('person');
      person = JSON.parse(perData);
      return person;
    }
    return person;
  },

});

export default setUserName;

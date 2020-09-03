const nameset = document.querySelector('.nameset');
const nameForm = document.querySelector('.nameForm');

const User = (name) => ({
  name,
  score: 0,
});

const setUserName = () => ({
  user: '',
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
    const link = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${data}`;
    fetch(link, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => res);
  },
  getUserData() {
    let person;
    if (localStorage.length < 1) {
      this.grabUserName();
      const user = User(this.grabUserName());

      localStorage.setItem('person', JSON.stringify(user));
    } else {
      const perData = localStorage.getItem('person');
      person = JSON.parse(perData);
    }
    return person;
  },

});

function initializeApp() {

  var firebaseConfig = {
    apiKey: "AIzaSyC0HWYaatUJw4YdjM_U8r7mb0piiXNTZBw",
    authDomain: "qadisiya-english-school.firebaseapp.com",
    databaseURL: "https://qadisiya-english-school-default-rtdb.firebaseio.com",
    projectId: "qadisiya-english-school",
    storageBucket: "qadisiya-english-school.appspot.com",
    messagingSenderId: "860776905251",
    appId: "1:860776905251:web:229e007c80f63b48494f96",
    measurementId: "G-X1E27MP34P"
  };

  //intialize 

  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const firestore = firebase.firestore()

  //reference database

  const qadisiyaEnglishSchoolDB = firebase.database().ref("qadisiyaEnglishSchool");
  document.getElementById('qadisiyaEnglishSchool').addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    
    saveMesseges(name,email);
  }

  const saveMesseges = (name,email)=>{
    var newContactForm = qadisiyaEnglishSchoolDB.push();

    newContactForm.set({
      name: name,
      email: email
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

}

/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

/*SHOW*/
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


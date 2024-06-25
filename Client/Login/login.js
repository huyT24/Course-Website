 "use strict";
 (function() {
   window.addEventListener("load", init);
 
   /**
    * TODO: What do we need to initialize?
    */
   function init() {
    const userInfoLogin = {
      username : qs('#user'),
      password : qs('#password'),
    }
    let submit  = qs('#submit')
     let button = submit.addEventListener('click', () => {
         alert(userInfoLogin.username);
    //    makeRequest(userInfoLogin);
     })

   }
 
   /**
    * TODO: Fetch data from the ajax pets API!
    */
   function makeRequest(userInfoLogin) {
    const loginURL = "file:///Users/macbook/WorkSpace/MyProjects/WPR_project/Client/Login/login.html";
    fetch(loginURL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userInfoLogin.username.value,
        password: userInfoLogin.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("Error Password or Username"); /*displays error message*/
        } else {
          window.open(
            "file:///Users/macbook/WorkSpace/MyProjects/WPR_project/Client/HomePage/index.html"
          ); /*opens the target page while Id & password matches*/
        }
      })
      .catch((err) => {
        console.log(err);
      });
   }
 
   /**
    * TODO: Implement any other functions you need
    */
 
   /* ------------------------------ Helper Functions  ------------------------------ */
 
   /**
    * Helper function to return the response's result text if successful, otherwise
    * returns the rejected Promise result with an error status and corresponding text
    * @param {object} res - response to check for success/error
    * @return {object} - valid response if response was successful, otherwise rejected
    *                    Promise result
    */
   async function statusCheck(res) {
     if (!res.ok) {
       throw new Error(await res.text());
     }
     return res;
   }
 
   /**
    * Returns the element that has the ID attribute with the specified value.
    * @param {string} id - element ID
    * @return {object} DOM object associated with id.
    */
   function id(id) {
     return document.getElementById(id);
   }
 
   /**
    * Returns the first element that matches the given CSS selector.
    * @param {string} query - CSS query selector.
    * @returns {object[]} array of DOM objects matching the query.
    */
   function qs(query) {
     return document.querySelector(query);
   }
 
   /**
    * Returns the array of elements that match the given CSS selector.
    * @param {string} query - CSS query selector
    * @returns {object[]} array of DOM objects matching the query.
    */
   function qsa(query) {
     return document.querySelectorAll(query);
   }
 })();
 
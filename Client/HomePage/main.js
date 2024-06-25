"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    let inputButtons = qsa("input")
    for (let i = 0; i < inputButtons.length; i++){
        inputButtons[i].addEventListener('change', function() {
          makeRequest(inputButtons[i].value)
        })
    }
  }

  /**
   * TODO: Fetch data from the ajax pets API!
   */
  function makeRequest(animal) {
    let baseURL = "https://hanustartup.org/wpr/api/pets/index.php?animal=" + animal
    fetch(baseURL)
      .then(statusCheck)
      .then(res => res.text())
      .then(function(data){
          let div = id("pictures")
          div.innerHTML = ''
          let links = data.split('\r\n')
          for(let i = 0; i < links.length; i++) {
            let img = document.createElement("img")
            img.src = links[i]
            div.appendChild(img)
          }
      })
      .catch(function(error) {
        console.log(error)
      })
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

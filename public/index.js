init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    console.log('inside init')
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}


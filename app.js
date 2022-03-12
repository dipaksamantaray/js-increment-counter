const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;
  const UpdateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    // console.log(typeof targetCount);

    //console.log(targetCount);
    const startingCount = Number(counter.innerHTML);
    const incr = targetCount / 100;
    if (startingCount < targetCount) {
      counter.innerHTML = `${Math.round(startingCount + incr)}`;
      setTimeout(UpdateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  UpdateCounter();
});

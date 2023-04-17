let gearPath = document.getElementById("gearContainer")
document.addEventListener('DOMContentLoaded', rotateGear)

function rotateGear() {
  let gearSvg = document.getElementById("gear")
  let outerGear = document.getElementById("outer-gear")
  let gearGroup = document.getElementById("gear-group")
  let angle = 0
  const animationStep = 2
  const animationInterval = 100

  setInterval(() => {
    // gear.setAttribute('transform', `translate(-77.761906,-52.815477) rotate(${angle}, 19-77.761906, 19-52.815477)`)
    // gear.setAttribute('transform', `rotate(${angle}, 58.7619, 33.81547) translate(-77.761906,-52.815477)` )
    // gear.setAttribute('transform', `rotate(${angle}, 19, 19)` )
    gearGroup.setAttribute('transform', `rotate(${angle}, 19, 19)` )
    outerGear.setAttribute('transform', `translate(-77.761906,-52.815477)`)
    // gear.setAttribute('transform', `rotate(${angle}, -19,-19)`);
    // gear.setAttribute('transform', `matrix(-0.3347678,0.03294799,0.0328597,0.33388352,113.6454,35.886502) rotate(${angle}, 100, 100)`);
    // gear.setAttribute('transform', `rotate(${angle} 50 50)`);

    angle = (angle + animationStep) % 360
    // gear.classList.toggle("render")
    // gear.innerHTML += ""
  }, animationInterval)

}

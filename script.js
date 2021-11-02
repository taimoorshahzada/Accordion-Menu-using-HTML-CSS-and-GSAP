const accordian1 = gsap.timeline({
    paused: "true",
    reversed: "true"
})
const accordian2 = gsap.timeline({
    paused: "true",
    reversed: "true"
})
const accordian3 = gsap.timeline({
    paused: "true",
    reversed: "true"
})
accordian1.to("#accordian-inner-1", {
    duration: .3,
    y: 0,
    opacity: 1,
    display: "block"
})
accordian1.to("#accordian-heading-1 #accordian-logo-1", {
    duration: 0,
    display: "none"
})
accordian1.to("#accordian-heading-1 #accordian-logo-2", {
    duration: 0,
    display: "block"
})
accordian2.to("#accordian-inner-2", {
    duration: .3,
    y: 0,
    opacity: 1,
    display: "block"
})
accordian2.to("#accordian-heading-2 #accordian-logo-1", {
    duration: 0,
    display: "none"
})
accordian2.to("#accordian-heading-2 #accordian-logo-2", {
    duration: 0,
    display: "block"
})
accordian3.to("#accordian-inner-3", {
    duration: .3,
    y: 0,
    opacity: 1,
    display: "block"
})
accordian3.to("#accordian-heading-3 #accordian-logo-1", {
    duration: 0,
    display: "none"
})
accordian3.to("#accordian-heading-3 #accordian-logo-2", {
    duration: 0,
    display: "block"
})
function toggle(event){
    event.reversed() ? event.play() : event.reverse();
}
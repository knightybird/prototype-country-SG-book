// function openSM() {
//     document.getElementById("mySidemenu").style.width = "450px";
//     document.getElementById("pg-content").style.marginLeft = "450px";
//     document.getElementById("pg-head").style.marginLeft = "450px";
//     document.getElementById("navbar").style.marginLeft = "-450px";
//     document.getElementById("parallax").style.marginLeft = "450px";
//     document.getElementById("carousel").style.marginLeft = "450px";
//     document.getElementById("wrapper").style.paddingLeft = "-450px";
// }

// function closeSM(){
//     document.getElementById("mySidemenu").style.width = "0";
//     document.getElementById("pg-content").style.marginLeft = "0";
//     document.getElementById("pg-head").style.marginLeft = "0";
//     document.getElementById("navbar").style.marginLeft = "0";
//     document.getElementById("parallax").style.marginLeft = "0";
//     document.getElementById("carousel").style.marginLeft = "0";
//     document.getElementById("wrapper").style.paddingLeft = "64px";

// }

// when user scrolls page, execute myFunction
// window.onscroll = function(){
//     stickyNav()
//     stickySection1()
//     stickySection2()
//     stickySection3()
//     stickySection4()
//     stickySection5()
//     // stickySM()
//     myFunction()
// };

// const navbar = document.getElementById("navbar");
// const section1 = document.getElementById("section1");
// const section2 = document.getElementById("section2");
// const section3 = document.getElementById("section3");
// const section4 = document.getElementById("section4");
// const section5 = document.getElementById("section5");
// const section6 = document.getElementById("section6");
// // const smButton = document.getElementById("SM-button")

// // Get the offset position of the navbar
// const sticky = navbar.offsetTop;
// const sticky1 = section1.offsetTop;
// const sticky2 = section2.offsetTop;
// const sticky3 = section3.offsetTop;
// const sticky4 = section4.offsetTop;
// const sticky5 = section5.offsetTop;
// // const SMButton = smButton.offsetTop;

// // Add the sticky class when reach scroll position. Remove when leave scroll position.
// function stickyNav() {
//     if (window.pageYOffset >= sticky)
//     {
//         navbar.classList.add("sticky")
//         document.getElementById("SM-button").style.top = "70px";
//         document.getElementById("SM-button").style.left = "15px";
//         // 76px height, remove stutter
//         document.getElementById("pg-content").style.marginTop = "120px";
//         document.getElementById("navbar").style.width = "100%";
//         document.getElementById("scrollIndicator").style.top = "60px";
//     } 
//     else {
//         navbar.classList.remove("sticky");
//         document.getElementById("SM-button").style.top = "-70px";
//         document.getElementById("SM-button").style.left = "-15px";
//         document.getElementById("pg-content").style.marginTop = "0";
//         document.getElementById("navbar").style.width = "100%";
//         document.getElementById("scrollIndicator").style.top = "136px";

//     }

// }
// // offset: -100 - (base(70) -- section height(37)) + margintop(120) = 50 50 90 130
// // this wont work since its based on body
// // number increases based on content.
// // solution: remove the spacings or just change the height
// console.log(window.pageYOffset);
// console.log(section1.offsetTop); //532
// console.log(section2.offsetTop); //1020
// console.log(section3.offsetTop); //1481
// console.log(section4.offsetTop); //1943
// function stickySection1() {
//     if (window.pageYOffset >= sticky1)
//     {
//         section1.classList.add("section1-active");
//     } else {
//         // section1.classList.remove("section1-active");
//     }
// }

// function stickySection2() {
//     if (window.pageYOffset >= sticky2)
//     {
//         section2.classList.add("section2-active");
//     } else {
//         section2.classList.remove("section2-active");
//     }
// }

// function stickySection3() {
//     if (window.pageYOffset >= sticky3)
//     {
//         section3.classList.add("section3-active");
//     } else {
//         section3.classList.remove("section3-active");
//     }
// }

// function stickySection4() {
//     if (window.pageYOffset >= sticky4)
//     {
//         section4.classList.add("section4-active");
//     } else {
//         section4.classList.remove("section4-active");
//     }
// }
// function stickySection5() {
//     if (window.pageYOffset >= sticky5)
//     {
//         section5.classList.add("section5-active");
//     } else {
//         section5.classList.remove("section5-active");
//     }
// }


// // When the user scrolls the page, execute myFunction 
// // window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }
const header=document.querySelector(".main-header"),navToggle=document.querySelector(".main-header__toggle"),hero=document.querySelector(".hero");header.classList.remove("main-header--no-js"),hero.classList.remove("hero--no-js"),navToggle.addEventListener("click",(()=>{header.classList.contains("main-header--opened")?header.classList.remove("main-header--opened"):header.classList.add("main-header--opened")}));
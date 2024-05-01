import{S as a,N as d,K as u,M as m,A as x,i as S,a as f,b as P}from"./assets/vendor-129bc8d0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const y of r.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const $=document.querySelector(".accordion-panel"),B=document.querySelectorAll(".accordion-header"),I=document.querySelector(".about-us"),N=document.querySelector(".mobile-open-us");$.style.maxHeight="100%";I.classList.add("active");N.style.transform="rotate(180deg)";B.forEach(e=>{e.addEventListener("click",function(){const t=e.closest(".about-us"),n=t.querySelector(".accordion-panel"),s=e.querySelector(".mobile-open-us");t.classList.toggle("active"),t.classList.contains("active")?(n.style.maxHeight=n.scrollHeight+"px",s.style.transform="rotate(180deg)"):(n.style.maxHeight="0",s.style.transform="rotate(0deg)")})});const T=new a(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[d,u,m],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.querySelector(".about-swiper-button").addEventListener("click",()=>{T.slideNext()});const l=new a(".swiper-container",{modules:[u,m,d],speed:500,direction:"horizontal",slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0},mousewheel:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{spaceBetween:32}}}),M=document.getElementById("slide1"),V=document.getElementById("slide2"),A=document.getElementById("slide3");M.addEventListener("keydown",function(e){e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),l.slideNext())});V.addEventListener("keydown",function(e){e.key==="Tab"&&e.shiftKey?(e.preventDefault(),l.slidePrev()):e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),l.slideNext())});A.addEventListener("keydown",function(e){e.key==="Tab"&&e.shiftKey&&(e.preventDefault(),l.slidePrev())});const O=Array.from(document.querySelectorAll(".accordion-container"));new x(O,{duration:800,showMultiple:!0});new a(".reviews-wrapper",{modules:[d,u,m],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const C="https://portfolio-js.b.goit.study/api",H="/reviews",D=`${C}${H}`;let _=1;const z={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};R(_).then(e=>{z.container.insertAdjacentHTML("beforeend",j(e))}).catch(e=>{console.log(e),S.error({title:"Error",message:"Not found"})});async function R(e){const{data:t}=await f.get(D,{params:{id:e}});return t}function j(e){return e.map(({_id:t,author:n,avatar_url:s,review:o})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${s}" alt="${n}"/>
    
    <p class="reviews-text">${o}</p>
    <h2 class="reviews-subtitle">${n}</h2>

    </li>
    
    `).join("")}const v=document.querySelector(".covers");function K(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function W(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{v&&K(v)&&W()});new a(".reviews-wrapper",{modules:[d,u,m],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,height:302,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const F="https://portfolio-js.b.goit.study/api",G="/reviews",U=`${F}${G}`;let J=1;const h={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};Q(J).then(e=>{h.container.innerHTML="",h.container.insertAdjacentHTML("beforeend",X(e))}).catch(e=>{console.log(e),S.error({title:"Error",message:"Not found"})});async function Q(e){const{data:t}=await f.get(U,{params:{id:e}});return t}function X(e){return e.map(({_id:t,author:n,avatar_url:s,review:o})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${s}" alt="${n}"/>
    
    <p class="reviews-text">${o}</p>
    <h2 class="reviews-subtitle">${n}</h2>

    </li>
    
    `).join("")}const b=document.querySelector(".modal-backdrop"),Y=document.querySelector(".modal"),Z=document.querySelector(".modal-close");Z.addEventListener("click",g);b.addEventListener("click",function(e){e.target===e.currentTarget&&g()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!Y.contains(e.target)&&g()});function ee(){b.classList.remove("is-hidden")}function g(e){b.classList.add("is-hidden")}const te="https://portfolio-js.b.goit.study/api",oe="/requests",L=document.querySelector(".user-form"),E=document.querySelector(".footer-submit-input"),i=document.querySelector(".validation-text"),w=document.querySelector(".footer-form-frame");L.addEventListener("submit",se);E.addEventListener("input",()=>{ne(E,40)});function ne(e,t){if(e.value.length>t){const n=e.value.substring(0,t),s=e.value.substring(t).replace(/./g,".");e.value=n+s}}async function se(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),n=e.currentTarget.elements.comments.value.trim();t&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",w.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",w.style.borderBottomColor="rgba(231, 74, 59, 1)"),await re({email:t,comment:n})}async function re(e){try{const t=await f.post(`${te}${oe}`,e);i.style.visibility="hidden",w.style.borderBottomColor="rgba(250, 250, 250, 0.20)",L.reset(),ee()}catch(t){P.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${t.message}</p>
		</div>
		`).show()}}document.querySelector("nav-list");const ie=document.getElementById("menu-toggle"),c=document.getElementById("menu");ie.addEventListener("click",k);c.addEventListener("click",k);const q=document.querySelector(".backdrop"),ce=document.querySelector(".burger-icon");ce.addEventListener("click",ue);const le=document.querySelector(".mobile-heder-btn"),ae=document.querySelector(".mobile-menu-list"),de=document.querySelector(".xclose-btn-mob");de.addEventListener("click",p);ae.addEventListener("click",p);le.addEventListener("click",p);function k(){c.style.display==="block"?c.style.display="none":c.style.display="block",console.log("clickMenu")}function ue(){q.classList.add("is-open"),console.log("isOpen"),window.addEventListener("resize",me)}function me(){window.innerWidth>767&&p()}function p(){q.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map
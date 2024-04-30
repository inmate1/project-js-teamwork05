import{S as l,N as a,K as u,M as d,A as $,i as S,a as w,b as x}from"./assets/vendor-129bc8d0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const k=document.querySelectorAll(".accordion-header"),P=document.querySelector(".accordion-panel"),B=document.querySelector(".about-us"),I=document.querySelector(".mobile-open-us");P.style.maxHeight="100%";B.classList.add("active");I.style.transform="rotate(180deg)";k.forEach(e=>{e.addEventListener("click",function(){const t=e.closest(".about-us"),n=t.querySelector(".accordion-panel"),s=e.querySelector(".mobile-open-us");t.classList.toggle("active"),t.classList.contains("active")?(n.style.maxHeight=n.scrollHeight+"px",s.style.transform="rotate(180deg)"):(n.style.maxHeight="0",s.style.transform="rotate(0deg)")})});const M=new l(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[a,u,d],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.querySelector(".about-swiper-button").addEventListener("click",()=>{M.slideNext()});new l(".swiper-container",{modules:[u,d,a],speed:500,direction:"horizontal",slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0},mousewheel:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{spaceBetween:32}}});const N=Array.from(document.querySelectorAll(".accordion-container"));new $(N,{duration:800,showMultiple:!0});new l(".reviews-wrapper",{modules:[a,u,d],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const T="https://portfolio-js.b.goit.study/api",V="/reviews",A=`${T}${V}`;let C=1;const O={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};H(C).then(e=>{console.log(e),O.container.insertAdjacentHTML("beforeend",_(e))}).catch(e=>{console.log(e),S.error({title:"Error",message:"Not found"})});async function H(e){const{data:t}=await w.get(A,{params:{id:e}});return t}function _(e){return e.map(({_id:t,author:n,avatar_url:s,review:o})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${s}" alt="${n}"/>
    
    <p class="reviews-text">${o}</p>
    <h2 class="reviews-subtitle">${n}</h2>

    </li>
    
    `).join("")}const g=document.querySelector(".covers");function z(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function R(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{g&&z(g)&&R()});new l(".reviews-wrapper",{modules:[a,u,d],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,height:302,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const j="https://portfolio-js.b.goit.study/api",D="/reviews",W=`${j}${D}`;let F=1;const h={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};G(F).then(e=>{h.container.innerHTML="",h.container.insertAdjacentHTML("beforeend",K(e))}).catch(e=>{console.log(e),S.error({title:"Error",message:"Not found"})});async function G(e){const{data:t}=await w.get(W,{params:{id:e}});return t}function K(e){return e.map(({_id:t,author:n,avatar_url:s,review:o})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${s}" alt="${n}"/>
    
    <p class="reviews-text">${o}</p>
    <h2 class="reviews-subtitle">${n}</h2>

    </li>
    
    `).join("")}const b=document.querySelector(".modal-backdrop"),U=document.querySelector(".modal"),J=document.querySelector(".modal-close");J.addEventListener("click",y);b.addEventListener("click",function(e){e.target===e.currentTarget&&y()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!U.contains(e.target)&&y()});function Q(){b.classList.remove("is-hidden")}function y(e){b.classList.add("is-hidden")}const X="https://portfolio-js.b.goit.study/api",Y="/requests",L=document.querySelector(".user-form"),E=document.querySelector(".footer-submit-input"),i=document.querySelector(".validation-text"),p=document.querySelector(".footer-form-frame");L.addEventListener("submit",ee);E.addEventListener("input",()=>{Z(E,40)});function Z(e,t){if(e.value.length>t){const n=e.value.substring(0,t),s=e.value.substring(t).replace(/./g,".");e.value=n+s}}async function ee(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),n=e.currentTarget.elements.comments.value.trim();t&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",p.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",p.style.borderBottomColor="rgba(231, 74, 59, 1)"),await te({email:t,comment:n})}async function te(e){try{const t=await w.post(`${X}${Y}`,e);i.style.visibility="hidden",p.style.borderBottomColor="rgba(250, 250, 250, 0.20)",L.reset(),Q()}catch(t){x.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${t.message}</p>
		</div>
		`).show()}}document.querySelector("nav-list");const oe=document.getElementById("menu-toggle"),c=document.getElementById("menu");oe.addEventListener("click",f);c.addEventListener("click",f);const q=document.querySelector(".backdrop"),ne=document.querySelector(".burger-icon");ne.addEventListener("click",ie);const se=document.querySelector(".mobile-menu-list"),re=document.querySelector(".xclose-btn-mob");re.addEventListener("click",v);se.addEventListener("click",v);function f(){c.style.display==="block"?c.style.display="none":c.style.display="block",console.log("clickMenu")}function ie(){q.classList.add("is-open"),console.log("isOpen"),window.addEventListener("resize",ce)}function ce(){window.innerWidth>767&&v()}function v(){q.classList.remove("is-open"),console.log("isClose")}c.addEventListener("mouseout",function(){f()});
//# sourceMappingURL=commonHelpers.js.map

"use client"

import { useEffect } from "react"

export default function Page() {
    
    useEffect(() => {
      (function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();function g(t){t.forEach(e=>{const r=`<tr class="hover:bg-gray-50">
      <th class="flex gap-3 px-6 py-4 font-normal text-white">
        <div class="relative h-10 w-10">
          <img
            class="h-full w-full rounded-full object-cover object-center"
            src="${e.imgSrc}"
            alt=""
          />
          <span
            class="absolute right-0 bottom-0 h-2 w-2 rounded-full ${e.available?"bg-emerald-400":"bg-red-400"} ring ring-white"
          ></span>
        </div>
        <div class="text-sm">
          <div class="font-medium text-gray-700">${e.name}</div>
          <div class="text-gray-400">${e.deviceType}</div>
        </div>
      </th>
      <td class="px-6 py-4">
        <div data-scooter-available-${e.id}>
          <span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
            Verfügbar
          </span>
        </div>
        <div class="hidden" data-scooter-booked-${e.id}>
          <span class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-red-600"></span>
            Ausgeliehen
          </span>
        </div>
      </td>
      <td class="px-6 py-4">${e.pricePerMin.toFixed(2)}</td>
      <td class="px-6 py-4">${e.pricePerKm.toFixed(2)}</td>
      <td class="px-6 py-4">
        <div class="flex gap-2">
          <span
            id="scooter-timer-${e.id}"
            class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
          >
            ${e.rentingTimer}
          </span>
        </div>
      </td>
      <td class="px-6 py-4">
        <div class="flex justify-end gap-4">
          <button
            data-scooterid="${e.id}"
            data-type="book"
            class="bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded-full book-scooter"
          >
            Ausleihen
          </button>
          <button
            data-scooterid="${e.id}"
            data-type="return"
            class="hidden bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-full return-scooter"
          >
            Zurückgeben
          </button>
        </div>
      </td>
    </tr>`;document.querySelector("#table-body")?.insertAdjacentHTML("beforebegin",r)})}function p(t,e){let r=t.rentingPeriod/60*t.pricePerMin,l=e*t.pricePerKm;return r>l?l:r}function f(t){let e=0,r=0;return setInterval(()=>{e++,t.rentingPeriod++,e===60&&(e=0,r++);const i=r.toString().padStart(2,"0")+":"+e.toString().padStart(2,"0");t.rentingTimer=i,document.querySelector(`#scooter-timer-${t.id}`).innerHTML=i},1e3)}function b(t){document.querySelector(`#scooter-timer-${t}`).innerHTML="00:00"}function s(t){var e,r;(e=document.querySelector(`[data-scooter-available-${t}]`))==null||e.classList.toggle("hidden"),(r=document.querySelector(`[data-scooter-booked-${t}]`))==null||r.classList.toggle("hidden")}function u(t){var e;(e=document.querySelector(`[data-type="book"][data-scooterid="${t}"]`))==null||e.classList.toggle("hidden"),document.querySelector(`[data-type="return"][data-scooterid="${t}"]`).classList.toggle("hidden")}let c=0,o=document.getElementById("distance");const a=[{id:1,name:"E-Scooter 1",imgSrc:"https://im.cyberport.de/is/image/cyberport/210719113700800301900075T?$Zoom_2000$",deviceType:"SoFlow SO3 Gen 2",available:!0,pricePerMin:.15,pricePerKm:.2,rentingTimer:"00:00",rentingPeriod:0,interval:null},{id:2,name:"E-Scooter 2",imgSrc:"https://im.cyberport.de/is/image/cyberport/210719113700800301900075T?$Zoom_2000$",deviceType:"SoFlow SO3 Gen 2",available:!0,pricePerMin:.15,pricePerKm:.2,rentingTimer:"00:00",rentingPeriod:0,interval:null},{id:3,name:"E-Scooter 3",imgSrc:"https://im.cyberport.de/is/image/cyberport/210719113700800301900075T?$Zoom_2000$",deviceType:"SoFlow SO3 Gen 2",available:!0,pricePerMin:.15,pricePerKm:.2,rentingTimer:"00:00",rentingPeriod:0,interval:null},{id:4,name:"E-Roller 4",imgSrc:"https://www.elektro2rad.de/images/product_images/original_images/NINEBOT_ES125S_ATLANTIC_BLUE_ELEKTRO2RAD.jpeg",deviceType:"Segway E125S",available:!0,pricePerMin:.3,pricePerKm:.4,rentingTimer:"00:00",rentingPeriod:0,interval:null}];function v(t){const e=a.filter(l=>l.id==t)[0];e.available=!1;const r=f(e);e.interval=r,s(t),u(t)}function m(t){if(o.value==""){alert("Bitte gib die zurückgelegte Stecke an.");return}if(o.value<0){alert("Bitte gib eine positive Kilometerzahl an.");return}const e=a.filter(r=>r.id==t)[0];e.available=!0,clearInterval(e.interval),s(t),u(t),b(t),c+=p(e,o.value),document.querySelector(".endSum").textContent=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(c),e.rentingPeriod=0}function y(){if(o.value==""){alert("Bitte gib die zurückgelegte Stecke an.");return}if(o.value<0){alert("Bitte gib eine positive Kilometerzahl an.");return}const t=a.filter(e=>e.available===!1);for(const e of t)m(e.id)}g(a);document.querySelectorAll(".book-scooter").forEach(t=>{t.addEventListener("click",e=>{const r=e.target.getAttribute("data-scooterid");v(r)})});document.querySelectorAll(".return-scooter").forEach(t=>{t.addEventListener("click",e=>{const r=e.target.getAttribute("data-scooterid");m(r)})});document.querySelector(".return-all").addEventListener("click",()=>{y()});

    })
    return (
        <div class="m-5">
  <div class="mx-auto max-w-screen-lg">
    <h1 class="text-center mt-10 text-3xl font-extrabold text-gray-90 md:text-5xl lg:text-6xl">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-violet-400">ScooTeq GmbH</span>
    </h1>
    <div class="overflow-hidden rounded-lg border border-gray-900 shadow-md mt-14 mb-7">
      <table class="w-full border-collapse bg-black text-left text-sm text-gray-200">
        <thead class="bg-black">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-200">
              Scooter
            </th>
            <th scope="col" class="flex px-6 py-4 font-medium text-gray-200">
              Ausleihstatus
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-200">
              Minutenpreis
              <div class="text-gray-400">€/min</div>
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-200">
              Kilometerpreis
              <div class="text-gray-400">€/km</div>
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-200">
              Ausleihdauer
              <div class="text-gray-400">Minuten</div>
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-200"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t" id="table-body"></tbody>
      </table>
    </div>

    <div class="button-container flex justify-between">
      <div>
        <label for="distance" class="block pl-1 text-sm font-medium text-gray-200">Gesamtstrecke in km</label>
        <div class="mt-1">
          <input type="number" min="0" name="distance" id="distance"
            class="block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-transparent"
            placeholder="Gesamtstrecke"/>
        </div>
      </div>
      <button class="return-all h-full bg-violet-500 hover:bg-violet-700 text-gray-200 font-bold py-2 px-4 rounded-full">
        Alle Scooter zurückgeben
      </button>
    </div>
    <div
      class="px-6 py-4 overflow-hidden rounded-lg border border-gray-900 shadow-md mt-10 flex justify-between font-bold text-lg text-gray-200">
      <span>Gesamtpreis</span>
      <span class="endSum">0,00 €</span>
    </div>
  </div>
  
</div>
    )
}
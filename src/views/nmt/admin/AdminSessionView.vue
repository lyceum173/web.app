<template math>
  <HeaderLogin relative></HeaderLogin>
  <main class="main" nmt>
    <div class="main__container">
      <h2>Панель управління</h2>
      <TabsComponent :sub=subjectsArray></TabsComponent>
      <div class="test-wrapper">
        <div class="test-content">
          <header class="test-header">
            <!-- <nav class="test-breadcrumbs">
              <a href="./" class="test-breadcrumb">Іспит</a>
              <span class="icon fa fa-angle-right" aria-hidden="true"></span>
              <a href="./" class="test-breadcrumb">{{ examTitle }}</a>
              <span class="icon fa fa-angle-right" aria-hidden="true"></span>
              <a href="./" class="test-breadcrumb">{{ examBlockTitle }}</a>
            </nav> -->

            <!-- <i class="fullscreen-button fs-expand" aria-hidden="true" id="fullscreen">
               <svg>
                            <use xlink:href="#ico-fs-expand"></use>
                          </svg> 
            </i> -->
          </header>
          <main class="test">
            <div class="info">
              <h2>Сесія </h2>
            <br>
            <div class="info-item">
              <p>Статус сесії:</p>
              <span class="badge">Створено</span>
            </div>
            <div class="info-item">
              <p>Назва аудиторії:</p>
              <span>326</span>
            </div>
            <div class="info-item">
              <p>Назви блоків:</p>
              <ul>
                <li>Математика</li>
                <li>Українська мова</li>
                <li>Історія України</li>
                <li>Англійська Мова</li>
              </ul>
            </div>
            <div class="info-item">
              <p>Дата та час початку:</p>
              <span>13.06.2025, 11:00</span>
            </div>
            <div class="info-item">
              <p>Зміна:</p>
              <span>1-ий день, 1-ша зміна</span>
            </div>
            <div class="info-item">
              <p>Кількість учасників:</p>
              <span>13</span>
            </div>
            </div>
            <div class="controls">

            </div>
          </main>
          <details>
            <summary>Список учасників</summary>
            <table>
              <thead>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
              </tbody>
            </table>
          </details>

        </div>
      </div>
    </div>
  </main>

</template>

<script setup>
import TabsComponent from './components/TabsComponent.vue'
import HeaderLogin from '@/components/nmt/HeaderLogin.vue'

import('https://cdn.jsdelivr.net/npm/@thumbmarkjs/thumbmarkjs/dist/thumbmark.umd.js')
.then(() => {
    ThumbmarkJS.getFingerprint().then((fp) => { console.log(fp)})
})

</script>



<style scoped>
main {
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
}

h3 {
  margin-bottom: 10px;
  font-size: 1.35em;
  font-weight: 400;
  line-height: 1.4em;
}
table {
  width: 100%;
  border: #ccc solid 1px;
  text-align: leftd;
}
td {
  font-size: normal !important;
}
.question {
  position: relative;
  width: 100%;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.question:has(.answer-saved) .short-answer input {
  border-color: var(--nmt);
}
.submit {
  margin-top: 20px;
  margin-bottom: 1.25rem;
}

.answer-saved {
  margin-top: 0px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
  color: green;
}

.test-breadcrumbs {
  width: 100%;
  color: #308bcc !important;
  display: flex !important;
  flex-direction: row;
  gap: 0.5rem !important;
  border-bottom: 1px solid #c8c8c8;
  transition: all 5s !important;
}

.test-breadcrumb {
  transition: all 5s !important;
}

.test-breadcrumb:hover {
  color: #1d5379 !important;
  /* text-decoration: underline; */
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
}

.test-wrapper {
  position: relative;
  display: flex;
  align-items: flex-start;
}

.main__container {
  width: 100%;
  padding-top: 4rem;
}

.test-content {
  width: 100%;
}

.test-content main {
  padding: 20px;
}

.test-header {
  padding: 0;
}

.test-breadcrumbs {
  border: 1px solid #c8c8c8;
  border-bottom: none;
  padding: 20px
}

.test-breadcrumbs span {
  color: #313131;
}

main.test {
  padding-top: 0;
  margin-bottom: 7rem;
  border: none !important;
  width: 100%;
}

.task-block.active {

  font-weight: bold;
}

.tab-text {
  font-size: 1rem;
  ;
}

.test-nav {
  position: sticky;
  top: 100px;
  flex: 1 0 190px !important;

  /* Adjust based on your layout, e.g., header height */
  flex: 1 0 190px;
  width: auto;
  max-width: 190px;
  border: 1px solid #d3d8e1;
  border-radius: 4px;
  text-align: center;
  padding: 15px 0;
  margin-left: 5px;
  box-sizing: border-box;
  max-height: calc(100vh - 150px);
  /* Optional: keeps it scrollable within viewport */
  overflow-y: auto;
  background-color: white;
  /* Helps when scrolling under content */
  z-index: 1000;
  /* Ensures it stays on top if needed */
}

.side-navigation-items {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  justify-content: center;

}

.side-navigation-items a {
  cursor: pointer;
}

.side-navigation-items a {
  width: 42px !important;
  height: 47px !important;
  box-sizing: border-box !important;
  text-decoration: none !important;
  border-radius: 4px;
  border: 1px solid #c5cbd6;
  border-top-color: rgb(197, 203, 214);
  border-right-color: rgb(197, 203, 214);
  border-bottom-color: rgb(197, 203, 214);
  border-left-color: rgb(197, 203, 214);
  background: #f2f6f8;
  color: #000;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 3px;
  position: relative;
  font-size: 15px !important;
}


.side-navigation-items a,
.side-navigation-items a:focus {
  background: #fff;
  border-color: #000;
  color: #000 !important;
  transition: all 0.3s;
}

.side-navigation-items a.submitted {
  background: #e62050 !important;
  color: #fff !important;
  border-color: #e62050;
}

pre {
  background: #E620513E !important;
  border-radius: 0.375rem;
  padding: 0.5rem;
  font-size: 0.5rem;
  margin-bottom: 1rem;
}

.side-navigation-items a:not(.submitted):hover {
  text-decoration: none !important;
  border-color: #e62050;
  color: #e62050 !important;
  cursor: pointer;
  background: rgba(230, 32, 80, 0.14);
}

.side-navigation-items a.submitted.active {
  color: black !important;
  border: black solid 1px !important;

}

.sequence-nav {
  white-space: nowrap;
  width: 100%;
  display: flex;
  overflow-x: auto;
}
.sequence-nav.bottom button {
  max-width: 4rem;
}
.sequence-nav ol {
  display: flex;
}

.sequence-nav li {
  flex: 1 1;
}

.sequence-nav ol li {
  box-sizing: border-box;
  min-width: 40px;
  height: 49px !important;
  flex-grow: 1;

}

.sequence-nav-button {
  min-width: 120px;
  max-width: 200px;
  text-overflow: ellipsis;
}

.sequence-nav {
  margin: 0 auto 20px;
  position: relative;
  /* border-bottom: none; */
  z-index: 0;
  height: 50px;
  display: flex;
  justify-content: center;
}

.sequence-nav button {
  flex: 1 1;
  border-radius: 0px !important;
  height: 49px;
  &:hover {

    border-radius: 0px !important;
    background: #fffefe !important;
    text-shadow: none;
    box-shadow: none;

  }
}

.sequence-nav {
  margin-top: 1rem;
}

.sequence-nav nav {
  width: 100%;
}

.sequence-nav ol li button {
  width: 100%;
  height: 49px;
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
  /* border-color: #E7E7E700 !important; */
  /* border-width: 1px;

  border-bottom-style: solid; */
  box-sizing: border-box;
  overflow: visible;
}

.sequence-nav-button {
  display: block;
  position: relative;
  top: 0;
  /* min-width: 40px;
  max-width: 40px; */
  height: 100%;
  text-shadow: none;
  background: none;
  background-color: #fffefe !important;
  border-color: #e7e7e7 !important;
  box-shadow: none;
  font-size: inherit;
  font-weight: normal;
  padding: 0;
  white-space: nowrap;
  overflow-x: hidden;
}



.sequence-nav button.active {
  border-bottom: 3px solid #eb4e74;
  background-color: #fffefe;
  color: #eb4e74;

}

.sequence-nav button {
  background-color: rgba(0, 0, 0, 0) !important;
  background-color: #fffefe !important;
  border-color: #e7e7e7;
  color: black;
  border-color: #e7e7e7;

}

.sequence-nav button:focus:active {
  box-shadow: none;
  border-color: #e7e7e7;
  border-bottom: 3px solid #eb4e74;
  background-color: #fffefe;
  color: #eb4e74;
}

.sequence-nav button:not(.active, :disabled):hover {
  border-bottom: 3px solid #eb4e74 !important;
  background-color: #fffefe;
  color: #000000FF;
  border-color: #e7e7e7;
  border-radius: 0px !important
}

.sequence-nav button.active:hover {
  border-bottom: 3px solid #eb4e74 !important;
  background-color: #fffefe;
  color: #eb4e74;
  border-color: #e7e7e7;
  border-radius: 0px !important
}
.sequence-nav button:not(.active, :disabled):hover span.tab-text {
  position: absolute;
  transform: translate(-50%, calc(-50% + 1.2px)) !important;
}
.sequence-nav button:disabled:hover  {
  /* position: absolute; */
  cursor: not-allowed !important;
  /* transform: translate(-50%, calc(-50% + 1.2px)) !important; */
}
.sequence-nav button:disabled:hover span.tab-text {
  position: absolute !important;
  transform: translate(-50%, calc(-50% + 1.2px)) !important;
}
.sequence-nav button.active span {
  position: absolute;
  transform: translate(-50%, calc(-50% + 1.2px)) !important;
}

.sequence-nav-button.button-next {
  order: 999
}

.sequence-nav ol li {
  box-sizing: border-box;
  min-width: 40px;
  flex-grow: 1;
  /* border-color: #2CB5FFFF;
  border-width: 1px !important;
  border-top-style: solid; */
}

.sequence-nav button {
  transition: all 0s !important;
}

.sequence-bottom {
  position: relative;
  height: 45px;
  margin: 2.8315em auto;
  display: flex;
  justify-content: center;
}

.sequence-nav-button {
  display: block;
  top: 0;
  width: 100%;
  border-radius: 0 !important;
  height: 100%;
  text-shadow: none;
  background: none;
  background-color: rgba(0, 0, 0, 0);
  background-color: #fffefe;
  border-color: #e7e7e7;
  box-shadow: none;
  font-size: inherit;
  font-weight: normal;
  padding: 0;
  white-space: nowrap;
  overflow-x: hidden;
}
.sequence-nav-button.button-previous svg {
  transform: rotate(180deg);;
}

.sequence-nav-button > span {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  gap:0.125rem;
  justify-self: center;
  max-width: min-content;
  width: 100%;
  transform: translate(-50%, -50%);
}
.sequence-nav-button > span svg {
  align-self: center;
  & * {
    stroke: #7c7c7c
  }
  
}
.sequence-nav-button:hover > span svg {
  & * {
    stroke: #000000FF 
  }
}
.sequence-nav-button:hover > span {
  transform: translate(-50%, calc(-50% + 1px));
}
.wrapper-footer {

  padding-right: 2%;
  padding-left: 2%;
}

footer.wrapper-footer {
  width: 100%;
  background: #f3f3f4;
  padding: 50px 0;
  padding-right: 0px;
  padding-left: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center !important;
  text-align: center;
}

.wrapper-footer {
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.1);
  border-top: 1px solid #c5c6c7;
  padding: 25px 10px 30px 10px;
  background: #fff;
  clear: both;
}

select {
  border: grey solid !important;
}

.test h2{
  font-weight: normal;
  margin-top: 2rem;
}

.info-item {
  display: flex;
  gap:0.5rem ;
  align-items: center;
  margin-top: 1rem;
}
.info-item ul {
  margin-left: 1rem;
}

.info-item ul li:not(:first-child) {
  margin-top: 0.5rem;
}
.info-item > p{
  font-weight: bold;
}
.info-item span.badge {
  background-color: #25B769;
  color: white;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  align-self: center;
  border-radius: .75rem;
}
</style>

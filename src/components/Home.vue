<template>
  <div class="container">
    <div class="container__block">
      <div class="container__block__inline">
        <div class="container__block__inline__company-description">
                <div class="container__block__inline__company-description--intro">
                 This year, <div class="remote-owls">remote owls</div>
                 collaborating more than ever
                 before, with billion animals
                 and counting.
                 </div>
                 <div class="container__block__inline__company-description--para">
                 You’re transcending borders
                 and barriers of all varieties
                 to create something unquantifiable:
                 a community of leaders, dreamers,
                 dissenters, tinkerers, and doers
                 building the way for.
                 </div>
                 <div class="container__block__inline__company-description--para">
                 To celebrate a year of teamwork across
                 time zones, programming languages,
                 and billions of lines of code, let’s
                 take a look back on the communities
                 and projects you’ve created in 2018.
               </div>
          </div>
        </div>
        <div class="container__block__inline">
          <div class="container__block__inline__illustration"><img src="../images/remote-hero.svg"/></div>
        </div>
      </div>
      <div class="no-results"></div>
    <div class="container__filter-container">
      <div class="grid grid--filter">
          <form v-on:submit="getfilteredData">
            <div class="search-container">
              <input type="text" class="search-container--search-input form-control" placeholder="Type to search..." v-model="search" v-on:keyup="getfilteredData"></input>
            </div>
          </form>
          <div class="accordion-container">
            <article class="message">
              <div class="message-header showDesc" id="showDesc1" @click="showDesc" :class="[collapsed ? 'chev-up' : 'chev-down']">Sort By</div>
                <div class="message-body">
                  <div class="message-content descContainer" :class="{ show: Show.showDesc1 }">
                      <ul>
                        <li><input type="radio"  id="radio-1" name="sort" @change="checkSort" value="Alphabetical" class="styled-checkbox"></input><label for="radio-1" class="radio-label">Alphabetical</label></li>
                        <li><input type="radio" id="radio-2" name="sort" @change="checkSort" value="Recently Updated" class="styled-checkbox"></input><label for="radio-2" class="radio-label">Recently Updated</label></li>
                      </ul>
                  </div>
                </div>
            </article>
            <article class="message">
              <div class="message-header showDesc" id="showDesc2" @click="showDesc" :class="[collapsed ? 'chev-up' : 'chev-down']">Region</div>
                <div class="message-body">
                  <div class="message-content descContainer" :class="{ show: Show.showDesc2 }">
                    <ul>
                      <li><input type="radio" id="radio-3" name="region" @change="checkFilter" value="Any" class="styled-checkbox1"></input><label for="radio-3" class="radio-label">Any</label></li>
                      <li><input type="radio" id="radio-4" name="region" @change="checkFilter" value="USA" class="styled-checkbox1"></input><label for="radio-4" class="radio-label">USA</label></li>
                      <li><input type="radio" id="radio-5" name="region" @change="checkFilter" value="Europe" class="styled-checkbox1"></input><label for="radio-5" class="radio-label">Europe</label></li>
                    </ul>
                  </div>
                </div>
            </article>
            <article class="message">
              <div class="message-header showDesc" id="showDesc3" @click="showDesc" :class="[collapsed ? 'chev-up' : 'chev-down']">Size</div>
                <div class="message-body">
                  <div class="message-content descContainer" :class="{ show: Show.showDesc3 }">
                    <ul>
                      <li><input type="radio" id="radio-6" name="employees" @change="checkFilter" value="Any" class="styled-checkbox2"></input><label for="radio-6" class="radio-label">Any</label></li>
                      <li><input type="radio" id="radio-7" name="employees" @change="checkFilter" value="1-10" class="styled-checkbox2"></input><label for="radio-7" class="radio-label">1-10</label></li>
                      <li><input type="radio" id="radio-8" name="employees" @change="checkFilter" value="11-50" class="styled-checkbox2"></input><label for="radio-8" class="radio-label">11-50</label></li>
                      <li><input type="radio" id="radio-9" name="employees" @change="checkFilter" value="51-100" class="styled-checkbox2"></input><label for="radio-9" class="radio-label">51-100</label></li>
                      <li><input type="radio" id="radio-10" name="employees" @change="checkFilter" value="101-500" class="styled-checkbox2"></input><label for="radio-10" class="radio-label">101-500</label></li>
                      <li><input type="radio" id="radio-11" name="employees" @change="checkFilter" value="500+" class="styled-checkbox2"></input><label for="radio-11" class="radio-label">500+</label></li>
                    </ul>
                  </div>
                </div>
            </article>
            <article class="message">
              <div class="message-header showDesc" id="showDesc4" @click="showDesc" :class="[collapsed ? 'chev-up' : 'chev-down']">Business Model</div>
                <div class="message-body">
                  <div class="message-content descContainer" :class="{ show: Show.showDesc4 }">
                    <ul>
                      <li><input type="radio" id="radio-12" name="business" @change="checkFilter" value="Agency" class="styled-checkbox3"></input><label for="radio-12" class="radio-label">Agency</label></li>
                      <li><input type="radio" id="radio-13" name="business" @change="checkFilter" value="SaaS" class="styled-checkbox3"></input><label for="radio-13" class="radio-label">SaaS</label></li>
                    </ul>
                  </div>
                </div>
            </article>
            <article class="message">
              <div class="message-header showDesc" id="showDesc5" @click="showDesc" :class="[collapsed ? 'chev-up' : 'chev-down']">Remote Type</div>
                <div class="message-body">
                  <div class="message-content descContainer" :class="{ show: Show.showDesc5 }">
                    <ul>
                      <li><input type="radio" id="radio-14" name="remote" @change="checkFilter" value="Fully Remote" class="styled-checkbox4"></input><label for="radio-14" class="radio-label">Fully Remote</label></li>
                      <li><input type="radio" id="radio-15" name="remote" @change="checkFilter" value="Remote First" class="styled-checkbox4"></input><label for="radio-15" class="radio-label">Remote First</label></li>
                      <li><input type="radio" id="radio-16" name="remote" @change="checkFilter" value="Remote Friendly" class="styled-checkbox4"></input><label for="radio-16" class="radio-label">Remote Friendly</label></li>
                      <li><input type="radio" id="radio-17" name="remote" @change="checkFilter" value="Partially Remote" class="styled-checkbox4"></input><label for="radio-17" class="radio-label">Partially Remote</label></li>
                    </ul>
                  </div>
                </div>
            </article>
            <div><button @click="clearResults">Clear Results</button></div>
          </div>
        </div>
      <item-card v-for="(item, index) in filteredData" :key="index" :item="item"></item-card>
    </div>
  </div>
</template>

<script>
import ItemCard from './ItemCard';
import data from '../data/data';
import $ from 'jquery';
export default {
  name: 'Home',
  components: {
    'item-card': ItemCard,
  },
  data () {
    return {
      filteredData: data,
      search: '',
      collapsed: false,
      initialData: [],
      Show: {
      	showDesc1: false,
        showDesc2: false,
        showDesc3: false,
        showDesc4: false,
        showDesc5: false,
      },
    }
  },
     methods: {
         showDesc: function(e) {
      		this.Show[e.target.id] = !this.Show[e.target.id];

           if(this.collapsed){
             this.collapsed = false;
           }else{
             this.collapsed = true;
           }
        },
        clearResults: function()  {
          this.initialData = data;
        },
        getfilteredData: function() {
          this.initialData = data;
          let filteredDataBySearch = [];
          //filter according to keyword
          if (this.search !== '') {
            filteredDataBySearch = this.filteredData.filter(obj => obj.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0);
            this.filteredData = filteredDataBySearch;
          } else if (this.search === ''){
            this.filteredData = data;
          }
        },
        checkSort: function() {
          let checkSort = $(".styled-checkbox:checked").val();
          let checkRegion = $(".styled-checkbox1:checked").val();
          let checkEmployeeNum = $(".styled-checkbox2:checked").val();
            if (checkSort === "Alphabetical"){
                this.filteredData.sort(function(a, b){
                  if (a.name < b.name)
                      return -1;
                    if (a.name > b.name)
                      return 1;
                    return 0;
                });
              }
            if (checkSort === "Recently Updated"){
                this.filteredData.sort(function(a, b){
                  a = new Date(a.dateUpdated);
                  b = new Date(b.dateUpdated);
                  return a>b ? -1 : a<b ? 1 : 0;
                });
              }
          console.log(checkSort);
        },
          checkFilter: function() {
            console.log(data);
            this.filteredData = data;
            let filteredDataByFilters = this.filteredData;
            let checkSort = $(".styled-checkbox:checked").val();
            let checkEmployeeNum = $(".styled-checkbox2:checked").val();
            let checkRegion = $(".styled-checkbox1:checked").val();
            let checkType = $(".styled-checkbox3:checked").val();
            let checkRemote = $(".styled-checkbox4:checked").val();
            let resultArray;
            let noResults = $("<div>No Results Found</div>")

            // Check combination of filters that include the value "Any"
            if (checkRegion === "Any" && checkEmployeeNum === "Any"){
              resultArray = filteredDataByFilters;
              if (checkType !== undefined && checkRemote !== undefined) {
                resultArray = filteredDataByFilters.filter(company => company.type === checkType && company.remote === checkRemote);
              } else if (checkType !== undefined) {
                resultArray = filteredDataByFilters.filter(company => company.type === checkType);
              } else if (checkRemote !== undefined) {
                resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote);
              }
            }
            // Check combination of filters that include value "Any" in region
            else if (checkRegion === "Any"){
              resultArray = filteredDataByFilters;
              if (checkType !== undefined && checkRemote !== undefined && checkEmployeeNum !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.type === checkType && company.remote === checkRemote && company.employeeNum === checkEmployeeNum);
              }
              else if (checkType !== undefined && checkEmployeeNum !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.type === checkType && company.employeeNum === checkEmployeeNum);
              }
              else if (checkRemote !== undefined && checkEmployeeNum !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote && company.employeeNum === checkEmployeeNum);
              }
              else if (checkType !== undefined && checkRemote !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.type === checkType && company.remote === checkRemote);
              }
              else if (checkEmployeeNum !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.employeeNum === checkEmployeeNum);
              }
              else if (checkType !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.type === checkType);
              }
              else if (checkRemote !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote);
              }
            }
            // Check combination of filters that include value "Any" in employeeNum
            else if (checkEmployeeNum === "Any"){
              resultArray = filteredDataByFilters;
              if (checkType !== undefined && checkRemote !== undefined && checkRegion !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.type === checkType && company.remote === checkRemote && company.region === checkRegion);
              }
              else if (checkType !== undefined && checkRemote !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.type === checkType && company.remote === checkRemote);
              }
              else if (checkRemote !== undefined && checkRegion !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote && company.region === checkRegion);
              }
              else if (checkType !== undefined && checkRegion !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.type === checkType && company.region === checkRegion);
              }
              else if (checkRegion !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.region === checkRegion);
              }
              else if (checkType !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.type === checkType);
              }
              else if (checkRemote !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote);
              }
            }
            //Check Region, Employees, Business Type & Remote
            else if (checkRegion !== undefined && checkEmployeeNum !== undefined && checkType !== undefined && checkRemote !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.employeeNum === checkEmployeeNum && company.type === checkType && company.remote === checkRemote);
            }
            //Check Region, Employees and Business Type
            else if (checkRegion !== undefined && checkEmployeeNum !== undefined && checkType){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.employeeNum === checkEmployeeNum && company.type === checkType);
            }
            //Check Region, Employees and Remote
            else if (checkRegion !== undefined && checkEmployeeNum !== undefined && checkRemote){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.employeeNum === checkEmployeeNum && company.remote === checkRemote);
            }
            //Check Remote, Employees and Business Type
            else if (checkRemote !== undefined && checkEmployeeNum !== undefined && checkType){
              resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote && company.employeeNum === checkEmployeeNum && company.type === checkType);
            }
            else if (checkRemote !== undefined && checkRegion !== undefined && checkType){
              resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote && company.region === checkRemote && company.type === checkType);
            }
            //Filtering Region and Employee Numbers
            else if (checkRegion !== undefined && checkEmployeeNum !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.employeeNum === checkEmployeeNum);
            }
            //Filtering Region and Business Type
            else if (checkRegion !== undefined && checkType !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.type === checkType);
            }
            //Filtering Business Type and Employee Numbers
            else if (checkType !== undefined && checkEmployeeNum !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.type === checkType && company.employeeNum === checkEmployeeNum);
            }
            // Filtering Region and Remote
            else if (checkRegion !== undefined && checkRemote !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.remote === checkRemote);
            }
            //Filtering Remote and Employee Numbers
            else if (checkRemote !== undefined && checkEmployeeNum !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote && company.employeeNum === checkEmployeeNum);
            }
            //Filtering Remote and Business Type
            else if (checkRemote !== undefined && checkType !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote && company.type === checkType);
            }
            else if (checkRegion !== "Any" && checkRegion !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion);
            }
            else if (checkEmployeeNum !== "Any" && checkEmployeeNum !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.employeeNum === checkEmployeeNum);
            }
            else if (checkType !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.type === checkType);
            }
            else if (checkRemote !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote);
            }
          this.filteredData = resultArray;
        }
      },
      mounted() {
         this.getfilteredData();
       }
    };
</script>

<style scoped lang="scss">
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.container {
  width: 90%;
  margin: auto;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
  &__block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 85px;
    @media only screen and (max-width: 850px) {
      grid-template-columns: repeat(1, 1fr);
    }
    &__inline {
      &__company-description {
        &--intro {
          text-align: left;
          font-size: 34px;
          font-family: 'Roboto-Regular', sans-serif;
          color: #24292E;
          margin-bottom: 20px;
          width: 80%;
          .remote-owls {
            color: #F84F78;
            display: inline-block;
          }
        }
        &--para {
          font-size: 16px;
          color: #868686;
          text-align: left;
          line-height: 24px;
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 52px;
          }
        }
      }
    }
  }
  &__filter-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    @media only screen and (max-width: 1075px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    @media only screen and (max-width: 850px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
    @media only screen and (max-width: 580px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
  }
}
.grid {
  background: #FFFFFF;
  box-shadow: 0 2px 4px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
  border-radius: 4px;
  &--filter {
    grid-row: 1 / 5;
    padding: 16px 10px 10px;
    box-shadow: none;
    background: #F4F6F8;
  }
}
.search-container {
  &--search-input {
    width: 85%;
    border-radius: 3px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    padding: 10px 10px 10px 36px;
    font-size: 14px;
    font-family: 'Roboto-Bold', sans-serif;
    background: url(../images/search-icon.svg) no-repeat #FFFFFF scroll 7px 7px;
    &::placeholder {
      color: rgba(0, 0, 9, 0.5);
    }
  }
}
.chev-up {
  background: url(../images/chevron-up.svg);
  background-repeat: no-repeat;
  background-position: 96%;
}
.chev-down {
  background: url(../images/chevron-down.svg);
  background-repeat: no-repeat;
  background-position: 96%;
}
.descContainer {
  display: none;
}
.descContainer.show {
  display: block;
}
.accordion-container {
  .message {
    margin-bottom: 10px;
    margin-top: 32px;
    &-header {
      cursor: pointer;
      text-align: left;
      font-size: 14px;
      font-family: 'Roboto-Bold', sans-serif;
      color: #181818;
    }
    &-body {
      text-align: left;
    }
    &-content {
      ul {
        li {
          font-size: 12px;
          list-style-type: none;
          line-height: 32px;
          &:hover {
            background: #F6F6F8;
            border-radius: 4px;
          }
          &:first-child {
            margin-top: 10px;
          }
          input {
            margin-right: 15px;
            margin-left: 8px;
          }
        }
      }
    }
  }
}
input[type=text]:focus, textarea:focus {
  box-shadow: 0 0 0 1px rgba(36,18,77,0.10), 0 0 0 3px rgba(91,147,255,0.40);
  border-radius: 3px;
  outline: none;
}
//RADIO STYLES
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        border-radius: 100%;
        display: inline-block;
        width: 17px;
        height: 17px;
        position: relative;
        margin-right: 1em;
        vertical-align: middle;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
        box-shadow: 0 2px 4px -2px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.10), inset 0 0 0 5px #ffffff;
        background: #ECECEC;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color: #FFFFFF;
          box-shadow: inset 0 0 0 5px #029688;
          border: none;
          width: 17px;
          height: 17px;
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: #FFFFFF;
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
</style>

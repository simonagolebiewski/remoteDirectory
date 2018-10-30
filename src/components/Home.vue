<template>
  <div class="container">
    <div class="grid grid--filter">
      <form v-on:submit="getfilteredData">
        <div class="search-container">
          <input type="text" class="search-container--search-input form-control" placeholder="Type to search..." v-model="search" v-on:keyup="getfilteredData"></input>
        </div>
      </form>
      <div class="accordion-container">
        <article class="message">
          <div class="message-header showDesc" id="showDesc1" @click="showDesc">Sort By</div>
            <div class="message-body">
              <div class="message-content descContainer" :class="{ show: Show.showDesc1 }">
                  <ul>
                    <li><input type="radio" name="sort" @change="checkSort" value="Alphabetical" class="styled-checkbox"></input><label>Alphabetical</label></li>
                    <li><input type="radio" name="sort" @change="checkSort" value="Recently Updated" class="styled-checkbox"></input><label>Recently Updated</label></li>
                  </ul>
              </div>
            </div>
        </article>
        <article class="message">
          <div class="message-header showDesc" id="showDesc2" @click="showDesc">Region</div>
            <div class="message-body">
              <div class="message-content descContainer" :class="{ show: Show.showDesc2 }">
                <ul>
                  <li><input type="radio" name="region" @change="checkFilter" value="Any" class="styled-checkbox1"></input><label>Any</label></li>
                  <li><input type="radio" name="region" @change="checkFilter" value="USA" class="styled-checkbox1"></input><label>USA</label></li>
                  <li><input type="radio" name="region" @change="checkFilter" value="Europe" class="styled-checkbox1"></input><label>Europe</label></li>
                </ul>
              </div>
            </div>
        </article>
        <article class="message">
          <div class="message-header showDesc" id="showDesc3" @click="showDesc">Size</div>
            <div class="message-body">
              <div class="message-content descContainer" :class="{ show: Show.showDesc3 }">
                <ul>
                  <li><input type="radio" name="employees" @change="checkFilter" value="Any" class="styled-checkbox2"></input><label>Any</label></li>
                  <li><input type="radio" name="employees" @change="checkFilter" value="1-10" class="styled-checkbox2"></input><label>1-10</label></li>
                  <li><input type="radio" name="employees" @change="checkFilter" value="11-50" class="styled-checkbox2"></input><label>11-50</label></li>
                  <li><input type="radio" name="employees" @change="checkFilter" value="51-100" class="styled-checkbox2"></input><label>51-100</label></li>
                  <li><input type="radio" name="employees" @change="checkFilter" value="101-500" class="styled-checkbox2"></input><label>101-500</label></li>
                  <li><input type="radio" name="employees" @change="checkFilter" value="500+" class="styled-checkbox2"></input><label>500+</label></li>
                </ul>
              </div>
            </div>
        </article>
      </div>
    </div>
      <item-card v-for="(item, index) in filteredData" :key="index" :item="item"></item-card>
  </div>
</template>

<script>
import ItemCard from './ItemCard';
import data from '../data/data';
import $ from 'jquery';
export default {
  name: 'Home',
  components: {
    'item-card': ItemCard
  },
  data () {
    return {
      filteredData: data,
      search: '',
      initialData: [],
      Show: {
      	showDesc1: false,
        showDesc2: false,
        showDesc3: false
      }
    }
  },
     methods: {
         showDesc: function(e) {
      		this.Show[e.target.id] = !this.Show[e.target.id];
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
            let resultArray;

            if (checkRegion === "Any" && checkEmployeeNum === "Any"){
              resultArray = filteredDataByFilters;
            }
            else if (checkRegion === "Any"){
              resultArray = filteredDataByFilters;
              if (checkEmployeeNum !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.employeeNum === checkEmployeeNum);
              }
            }
            else if (checkEmployeeNum === "Any"){
              resultArray = filteredDataByFilters;
              if (checkRegion !== undefined){
                resultArray = filteredDataByFilters.filter(company => company.region === checkRegion);
              }
            }
            else if (checkRegion !== undefined && checkEmployeeNum !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.employeeNum === checkEmployeeNum);
            }
            else if (checkRegion !== "Any" && checkRegion !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion);
            }
            else if (checkEmployeeNum !== "Any" && checkEmployeeNum !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.employeeNum === checkEmployeeNum);
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  width: 1000px;
  margin: auto;
  font-family: 'Roboto', sans-serif;
}
.grid {
  background: #FFFFFF;
  box-shadow: 0 2px 4px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
  border-radius: 4px;
  &--filter {
    grid-row: 1 / -1;
    padding: 16px 10px 10px;
    box-shadow: none;
    background: #F4F6F8;
  }
}
.search-container {
  &--search-input {
    width: 90%;
    border-radius: 3px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    padding: 10px;
    background: url(../images/search-icon.svg) no-repeat #FFFFFF scroll 7px 7px;
    background-position: 96%;
    &::placeholder {
      font-family: 'Roboto-Bold', sans-serif;
      font-size: 14px;
      color: rgba(0, 0, 9, 0.5);
    }
  }
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
      background: url(../images/accordion-icon.svg) no-repeat;
      background-position: 98%;
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
</style>

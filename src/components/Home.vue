<template>
  <div class="container">
    <div class="container__block">
      <div class="container__block__inline">
        <div class="container__block__inline__company-description">

          <!-- PUT BELOW LINK WHEREVER YOU WANT -->
          <!-- <router-link to="/about">About</router-link> -->

                <div class="container__block__inline__company-description--intro">
                  All<span class="pink">*</span> the filters you need to find
                  a remote company that’s right for you.
                 </div>
                 <div class="container__block__inline__company-description--para">
                  200+ remote companies and growing. We’re doing our best to curate
                  a comprehensive list but nothing beats your active participation —
                  please feel free to <a v-bind:href="contribute" target="_blank">contribute</a> or suggest any <a v-bind:href="change" target="_blank">change</a> to this website.
                 </div>
                 <small>* Need an additional filter? <a <a v-bind:href="letusknow" target="_blank">Let us know</a> and we’ll gladly add it to the site.</small>
          </div>
        </div>
        <div class="container__block__inline">
          <div class="container__block__inline__illustration"><img src="../images/remote-hero.svg"/></div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid grid--filter" id="grid-filter">
          <div class="sticky-container--outer">
              <form @submit="getfilteredData">
                <div class="search-container">
                  <input type="text" class="search-container--search-input form-control" placeholder="Type to search..." v-model="search" v-on:keyup="getfilteredData"></input>
                </div>
                <div class="accordion-container">
                  <div class="accordion-container__results-container">
                    <div class="accordion-container__results-container__results-remaining">{{remaining}}</div>
                    <a class="accordion-container__results-container__clear-filters" @click="resetData">Clear Filters</a>
                  </div>
                  <article class="message">
                    <div class="message-header showDesc" id="showDesc1" @click="showDesc" :class="[Show.showDesc1 ? 'chev-up' : 'chev-down']">Sort By</div>
                      <div class="message-body">
                        <div class="message-content descContainer" :class="{ show: Show.showDesc1 }">
                            <ul>
                              <li><input type="radio"  id="radio-1" v-model="isChecked" name="sort" @change="checkSort" value="Alphabetical" class="styled-checkbox"></input><label for="radio-1" class="radio-label">Alphabetical</label></li>
                              <li><input type="radio" id="radio-2" v-model="isChecked" name="sort" @change="checkSort" value="Recently Updated" class="styled-checkbox"></input><label for="radio-2" class="radio-label">Recently Updated</label></li>
                            </ul>
                        </div>
                      </div>
                  </article>
                  <article class="message">
                    <div class="message-header showDesc" id="showDesc2" @click="showDesc" :class="[Show.showDesc2 ? 'chev-up' : 'chev-down']">Region</div>
                      <div class="message-body">
                        <div class="message-content descContainer" :class="{ show: Show.showDesc2 }">
                          <ul>
                            <li><input type="radio" id="radio-3" v-model="isChecked1" name="region" @change="checkFilter" value="Any" class="styled-checkbox1"></input><label for="radio-3" class="radio-label">Any</label></li>
                            <li><input type="radio" id="radio-4" v-model="isChecked1" name="region" @change="checkFilter" value="USA" class="styled-checkbox1"></input><label for="radio-4" class="radio-label">USA</label></li>
                            <li><input type="radio" id="radio-5" v-model="isChecked1" name="region" @change="checkFilter" value="Europe" class="styled-checkbox1"></input><label for="radio-5" class="radio-label">Europe</label></li>
                            <li><input type="radio" id="radio-18" v-model="isChecked1" name="region" @change="checkFilter" value="South America" class="styled-checkbox1"></input><label for="radio-18" class="radio-label">South America</label></li>
                            <li><input type="radio" id="radio-19" v-model="isChecked1" name="region" @change="checkFilter" value="Asia" class="styled-checkbox1"></input><label for="radio-19" class="radio-label">Asia</label></li>
                          </ul>
                        </div>
                      </div>
                  </article>
                  <article class="message">
                    <div class="message-header showDesc" id="showDesc3" @click="showDesc" :class="[Show.showDesc3 ? 'chev-up' : 'chev-down']">Size</div>
                      <div class="message-body">
                        <div class="message-content descContainer" :class="{ show: Show.showDesc3 }">
                          <ul>
                            <li><input type="radio" id="radio-6" v-model="isChecked2" name="employees" @change="checkFilter" value="Any" class="styled-checkbox2"></input><label for="radio-6" class="radio-label">Any</label></li>
                            <li><input type="radio" id="radio-7" v-model="isChecked2" name="employees" @change="checkFilter" value="1-10" class="styled-checkbox2"></input><label for="radio-7" class="radio-label">1-10</label></li>
                            <li><input type="radio" id="radio-8" v-model="isChecked2" name="employees" @change="checkFilter" value="11-50" class="styled-checkbox2"></input><label for="radio-8" class="radio-label">11-50</label></li>
                            <li><input type="radio" id="radio-9" v-model="isChecked2" name="employees" @change="checkFilter" value="51-100" class="styled-checkbox2"></input><label for="radio-9" class="radio-label">51-100</label></li>
                            <li><input type="radio" id="radio-10" v-model="isChecked2" name="employees" @change="checkFilter" value="101-500" class="styled-checkbox2"></input><label for="radio-10" class="radio-label">101-500</label></li>
                            <li><input type="radio" id="radio-11" v-model="isChecked2" name="employees" @change="checkFilter" value="500+" class="styled-checkbox2"></input><label for="radio-11" class="radio-label">500+</label></li>
                          </ul>
                        </div>
                      </div>
                  </article>
                  <article class="message">
                    <div class="message-header showDesc" id="showDesc4" @click="showDesc" :class="[Show.showDesc4 ? 'chev-up' : 'chev-down']">Business Model</div>
                      <div class="message-body">
                        <div class="message-content descContainer" :class="{ show: Show.showDesc4 }">
                          <ul>
                            <li><input type="radio" id="radio-12" v-model="isChecked3" name="business" @change="checkFilter" value="Agency" class="styled-checkbox3"></input><label for="radio-12" class="radio-label">Agency</label></li>
                            <li><input type="radio" id="radio-13" v-model="isChecked3" name="business" @change="checkFilter" value="SaaS" class="styled-checkbox3"></input><label for="radio-13" class="radio-label">SaaS</label></li>
                            <li><input type="radio" id="radio-20" v-model="isChecked3" name="business" @change="checkFilter" value="Non-Profit" class="styled-checkbox3"></input><label for="radio-20" class="radio-label">Non-Profit</label></li>
                          </ul>
                        </div>
                      </div>
                  </article>
                  <article class="message">
                    <div class="message-header showDesc" id="showDesc5" @click="showDesc" :class="[Show.showDesc5 ? 'chev-up' : 'chev-down']">Remote Type</div>
                      <div class="message-body">
                        <div class="message-content descContainer" :class="{ show: Show.showDesc5 }">
                          <ul>
                            <li><input type="radio" id="radio-14" v-model="isChecked4" name="remote" @change="checkFilter" value="Fully Remote" class="styled-checkbox4"></input><label for="radio-14" class="radio-label">Fully Remote</label></li>
                            <li><input type="radio" id="radio-15" v-model="isChecked4" name="remote" @change="checkFilter" value="Remote First" class="styled-checkbox4"></input><label for="radio-15" class="radio-label">Remote First</label></li>
                            <li><input type="radio" id="radio-16" v-model="isChecked4" name="remote" @change="checkFilter" value="Remote Friendly" class="styled-checkbox4"></input><label for="radio-16" class="radio-label">Remote Friendly</label></li>
                            <li><input type="radio" id="radio-17" v-model="isChecked4" name="remote" @change="checkFilter" value="Partially Remote" class="styled-checkbox4"></input><label for="radio-17" class="radio-label">Partially Remote</label></li>
                          </ul>
                        </div>
                      </div>
                  </article>
                  <!-- <div><button @click="resetData">Clear Results</button></div> -->
                </div>
              </form>
          </div>
        </div>
        <div class="container__filter-container">
            <div class="grid-item-container">
                <div class="grid-item-container--no-results" v-if="noRemaining"><img class="thumbs-down" src="../images/thumbs-down.svg"></img>{{noRemaining}}</div>
                <item-card v-for="(item, index) in filteredData" :key="index" :item="item"></item-card>
            </div>
        </div>
      </div>

        <div class="container__help" v-show="!cookieBox">
          <div class="container__help--tell-us">Care to help? <a v-bind:href="telluswhy" target="_blank" class="container__help--link" @click="closeAlert">Tell us why</a> you're interested in remote work.</div>
          <div class="container__help--close" @click="closeAlert">Dismiss</div>
        </div>

  </div>
</template>

<script>
import ItemCard from './ItemCard';
import data from '../data/data';
import $ from 'jquery';
import VueRouter from 'vue-router';
export default {
  name: 'Home',
  components: {
    'item-card': ItemCard,
  },
  data () {
    return {
      contribute: 'https://goo.gl/forms/bvlQZR1YUZqeRIRK2',
      change: 'https://goo.gl/forms/uLwvq2JQfwCyt22u2',
      letusknow: 'https://goo.gl/forms/pzMItahAv0vfD2Q32',
      telluswhy: 'https://goo.gl/forms/Tx541Ok2adg81fnr2',
      filteredData: data,
      search: '',
      selected: this.selected,
      cookieBox: this.$cookie.get('cookieBox'),
      visible: false,
      closed: false,
      initialData: [],
      isChecked: true,
      isChecked1: true,
      isChecked2: true,
      isChecked3: true,
      isChecked4: true,
      Show: {
      	showDesc1: false,
        showDesc2: false,
        showDesc3: false,
        showDesc4: false,
        showDesc5: false,
      },
    }
  },
    computed: {
      open() {
      return !this.closed;
      },
      remaining(){
        if (this.filteredData.filter(data => data).length === 1){
            return this.filteredData.filter(data => data).length + " result";
        }
        return this.filteredData.filter(data => data).length + " results";
      },
      noRemaining(){
        if (this.filteredData.filter(data => data).length === 0){
             return "No Results Found.";
           }
      }
    },
     methods: {
         showDesc: function(e) {
      		this.Show[e.target.id] = !this.Show[e.target.id];
         },
         closeAlert: function() {
           this.closed = true;
           this.cookieBox = true;
           this.$cookie.set('cookieBox', this.cookieBox, {expires: 30});
         },
        resetData: function() {
          this.isChecked = false;
          this.isChecked1 = false;
          this.isChecked2 = false;
          this.isChecked3 = false;
          this.isChecked4 = false;
          this.filteredData = data;
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
            else if (checkRegion !== undefined && checkEmployeeNum !== undefined && checkType !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.employeeNum === checkEmployeeNum && company.type === checkType);
            }
            //Check Region, Employees and Remote
            else if (checkRegion !== undefined && checkEmployeeNum !== undefined && checkRemote !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.region === checkRegion && company.employeeNum === checkEmployeeNum && company.remote === checkRemote);
            }
            //Check Remote, Employees and Business Type
            else if (checkRemote !== undefined && checkEmployeeNum !== undefined && checkType !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote && company.employeeNum === checkEmployeeNum && company.type === checkType);
            }
            //Check Remote, Region and Business Type
            else if (checkRemote !== undefined && checkRegion !== undefined && checkType !== undefined){
              resultArray = filteredDataByFilters.filter(company => company.remote === checkRemote && company.region === checkRegion && company.type === checkType);
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
       },
      //  watch: {
      //    deleteCookie: function(){
      //      if (this.$cookie.get('cookieBox') === true){
      //        $("#js-cookie-box").hide();
      //        console.log("hello");
      //      }
      //    }
      //  }
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
  margin: 0 5%;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
  &__help {
    background: #029688;
    height: 63px;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    div {
      line-height: 63px;
      color: #FFFFFF;
      font-family: 'Roboto-Bold', sans-serif;
      font-size: 18px;
    }
    &--tell-us {
      @media only screen and (max-width: 700px) {
        font-size: 16px !important;
        text-align: left;
        padding-left: 10px;
      }
      @media only screen and (max-width: 500px) {
        font-size: 14px !important;
        display: block;
        position: relative;
        line-height: 15px !important;
        text-align: left;
        padding: 10px 60px 10px 10px;
      }
    }
    &--link {
      color: #FFFFFF;
    }
    &--close {
      position: absolute;
      top: 0px;
      right: 20px;
      cursor: pointer;
      text-decoration: underline;

      @media only screen and (max-width: 700px) {
        font-size: 16px !important;
        right: 10px;
        text-decoration: underline;
      }
      @media only screen and (max-width: 500px) {
      line-height: 15px !important;
      padding-top: 10px;
      font-size: 14px !important;
      text-decoration: underline;
      }
    }
  }
  &__block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 20px 0;
    align-items: center;
    @media only screen and (max-width: 850px) {
      grid-template-columns: repeat(2, 1fr);
    }
    &__inline {
      @media only screen and (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: span col1-start;
      }
      &__company-description {
        &--intro {
          text-align: left;
          font-size: 42px;
          line-height: 50px;
          font-family: 'Roboto-Regular', sans-serif;
          color: #24292E;
          margin-bottom: 20px;
          @media only screen and (min-width: 556px) and (max-width: 850px) {
            font-size: 30px;
          }
          @media only screen and (max-width: 555px) {
            font-size: 26px !important;
          }
          @media only screen and (max-width: 425px) {
            font-size: 20px !important;
            line-height: 25px;
          }
          .pink {
            color: #FF3976;
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
          a {
            color: #FF3976;
            font-weight: bold;
            text-decoration: underline;
            &:hover {
              color: darken(#FF3976, 15%);
            }
          }
        }
        small {
          font-family: Roboto-Regular;
          font-size: 12px;
          color: #868686;
          text-align: left;
          display: block;
          a {
            text-decoration: underline;
            font-weight: bold;
            color: #868686;
            &:hover {
              color: darken(#FF3976, 15%);
            }
          }
        }
      }
      &__illustration {
        img {
          @media only screen and (max-width: 850px) {
            width: 100%;
          }
          @media only screen and (max-width: 768px) {
            width: 50%;
          }
          @media only screen and (max-width: 700px) {
            display: none;
          }
        }
      }
    }
  }
  &__filter-container {
    display: inline-block;
    position: relative;
    left: 270px;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    width: 100%;
    @media only screen and (max-width: 700px) {
      width: 100%;
      left: 0;
    }
  }
}
.grid-item-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-column-start: 1;
    grid-column-end: span col3-start;
    width: calc(100% - 270px);
    margin-bottom: 60px;

    @media only screen and (max-width: 1075px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 850px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (max-width: 700px) {
      width: 100%;
    }
    @media only screen and (max-width: 555px) {
      grid-template-columns: repeat(1, 1fr);
      grid-column-start: 1;
      grid-column-end: span col1-start;
    }

    &--no-results {
      background: transparent;
      box-shadow: 0 2px 4px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
      border-radius: 4px;
      color: #868686;
      font-family: Roboto-Bold;
      padding: 70px 0;

      .thumbs-down {
        display: block;
        margin: auto;
        margin-bottom: 14px;
      }
    }
}
.grid {
  background: #FFFFFF;
  box-shadow: 0 2px 4px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
  border-radius: 4px;
  &--filter {
    // padding: 16px 10px 10px;
    background: #F4F6F8;
    position: absolute;
    display: inline-block;
    left: 5%;
    box-shadow: 0 2px 4px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
    border-radius: 4px;
    margin-bottom: 80px;

    @media only screen and (max-width: 700px) {
      display: block;
      position: relative;
      left: 0;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 555px) {
      grid-column-start: 1;
      grid-column-end: span col1-start;
    }
  }
}
.search-container {
  border-bottom: 1px solid #DADBDD;
  padding: 16px;
  position: relative;
  &--search-input {
    width: 75%;
    border-radius: 3px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    padding: 10px 10px 10px 36px;
    font-size: 14px;
    font-family: 'Roboto-Bold', sans-serif;
    background: url(../images/search-icon.svg) no-repeat #FFFFFF scroll 8px 9px;
    @media only screen and (max-width: 800px) {
      width: 75%;
    }
    @media only screen and (max-width: 700px) {
      width: 90%;
    }
    @media only screen and (max-width: 560px) {
      width: 85%;
    }
    @media only screen and (max-width: 425px) {
      width: 80%;
    }
    &::placeholder {
      color: rgba(0, 0, 9, 0.5);
    }
  }
}
.chev-up {
  background: #E8E9EB;
  border-radius: 4px;
  &:after {
    content: url(../images/chevron-up.svg);
    right: 31px;
    position: absolute;
    right: 14px;
    bottom: 2px;
    // background-repeat: no-repeat;
    // background-position: 96%;
  }
}
.chev-down {
  &:after {
    content: url(../images/chevron-down.svg);
    right: 14px;
    position: absolute;
    // background-repeat: no-repeat;
    // background-position: 96%;
  }
}
.descContainer {
  display: none;
}
.descContainer.show {
  display: block;
}
.accordion-container {
  width: 210px;
  padding: 16px;
  @media only screen and (max-width: 700px) {
    width: auto;
  }
  &__results-container {
    text-align: left;
    margin-bottom: 16px;
    &__results-remaining {
      color: #181818;
      font-size: 12px;
      display: inline-block;
      margin-right: 8px;
      width: 60px;
    }
    &__clear-filters {
      cursor: pointer;
      color: #029688;
      text-decoration: underline;
      font-size: 12px;
      display: inline-block;
    }
  }
  .message {
    margin-bottom: 10px;
    // margin-top: 32px;
    &:last-child {
      margin-bottom: 0;
    }
    &-header {
      cursor: pointer;
      text-align: left;
      font-size: 14px;
      font-family: 'Roboto-Bold', sans-serif;
      color: #181818;
      line-height: 32px;
      padding: 0 8px;
      position: relative;
      &:hover {
        background: #E8E9EB;
        border-radius: 4px;
        // padding: 0 8px;
      }
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
          padding-left: 8px;
          // &:hover {
          //   background: #E8E9EB;
          //   border-radius: 4px;
          // }
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
    &:hover {
      + .radio-label {
        &:before {
          background: #C2C2C2;
        }
      }
    }
    + .radio-label {
        cursor: pointer;
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

  .fix-filter {
    position: fixed;
    top: 250px;
  }
  .v-alert__icon {
    position: absolute;
    left: 20px;
    top: 20px;
  }
</style>

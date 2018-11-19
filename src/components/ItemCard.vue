<template>
    <div class="grid">
      <a v-bind:href="item.url" class="top-half" target="_blank">
        <div class="company-icon">
          <img :src="item.logo" alt="Logo"/>
        </div>
        <a href="#" class="name">{{ item.name}}</a>
        <a href="#" class="external-link"></a>
        <span class="description">{{item.description}}</span>
      </a>
      <div class="bottom-half">
        <div class="bottom-half__block">
          <div class="employees">{{item.employeeNum}} Employees</div>
          <div class="bottom-half__block--separator"></div>
          <div class="country">{{item.country}}</div>
        </div>
        <div class="bottom-half__block">
          <div class="remote">{{item.remote}}</div>
          <div class="bottom-half__block--separator"></div>
          <div class="type">{{item.type}}</div>
        </div>
        <!-- <div class="date">{{item.dateUpdated}}</div> -->
      </div>
    </div>
</template>
<script>
export default {
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  width: 1000px;
  margin: auto;
  font-family: 'Roboto', sans-serif;
}
.grid {
  background: #FFFFFF;
  box-shadow: 0 2px 4px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
  border-radius: 4px;
  height: 100%;
  &--filter {
    grid-row: 1 / -1;
    box-shadow: none;
    padding: 16px 10px 10px;
  }
}
.company-icon {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background: #FFFFFF;
  box-shadow: 0 2px 4px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
  overflow: hidden;
    img {
      position: relative;
      height: 100%;
      max-width: 100%;
      display: block;
      margin: auto;
    }
}
.external-link {
  background: url(../images/external-link.svg) no-repeat;
  background-size: 14px;
  height: 14px;
  width: 14px;
  position: absolute;
  top: 16px;
  right: 16px;
  margin-top: 15px;
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
}
.description {
  display: block;
  padding-top: 8px;
  text-align: left;
  margin-bottom: 15px;
  line-height: 1.75;
  text-decoration: none;

  //CSS-GRID
  grid-row: 2;
  grid-column: span 3;
}
.top-half {
    padding: 16px 16px 0px;
    position: relative;

    //CSS-GRID
    display: grid;
    // grid-template-columns: repeat(3, 1fr);
    grid-template-columns: 66px auto;
  .name, .company-icon{
    display: inline-block;
    vertical-align: middle;
  }
  &:hover {
    .external-link {
      display: block;
    }
  }
  .name {
    font-size: 18px;
    color: #181818;
    align-self: center;
    font-weight: 700;
  }
}
.bottom-half {
  border-top: 1px solid #E6E6E6;
  padding: 14px 16px 16px;
  font-family: 'Roboto-Medium', sans-serif;
  &__block {
    display: block;
    text-align: left;
    .employees, .country, .remote, .type {
      display: inline-block;
    }
    &:first-child {
      margin-bottom: 8px;
    }
    &--separator {
      display: inline-block;
      border-radius: 100%;
      background: #868686;
      height: 4px;
      width: 4px;
      vertical-align: middle;
      margin: 0 4px;
    }
  }
  .employees {
    text-align: left;
    vertical-align: middle;
  }
  .country, .remote, .type {
    text-align: left;
    vertical-align: middle;
  }
  .country, .employees, .remote, .type {
    font-size: 12px;
    line-height: 1;
    font-weight: 500;
    color: #868686;
  }
}
</style>

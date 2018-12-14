import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';

Vue.use(VueRouter);

var AboutComponent = Vue.extend({
  template: "#about-component-template"
});

const router = new VueRouter({
	mode: 'history',
	routes: [
    {
			path: '/',
			redirect: {
        name: 'Home'
      }
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
      path: '/about',
			name: 'About',
      component: About
    }
	]
});

export default router;

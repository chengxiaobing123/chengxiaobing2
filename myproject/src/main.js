// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './Header'
import Daohang from './Daohang'
import Swipter from './Swipter'
import Selector from './Selector'
import Dondhua from './Dondhua'
import Footers from './Footers'
import Erciyuan from './Erciyuan'
import Guochan from './Guochan'
import Yinyue from './Yinyue'
import Youxi from './Youxi'
import Aczhengyi from './Aczhengyi'
import Aczhengyi1 from './Aczhengyi1'
import Yule1 from './Yule1'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name,Header);
Vue.component(Swipter.name,Swipter);
Vue.component(Daohang.name,Daohang);
Vue.component(Selector.name,Selector);
Vue.component(Dondhua.name,Dondhua);
Vue.component(Footers.name,Footers);
Vue.component(Erciyuan.name,Erciyuan);
Vue.component(Guochan.name,Guochan);
Vue.component(Yinyue.name,Yinyue);
Vue.component(Youxi.name,Youxi);
Vue.component(Aczhengyi.name,Aczhengyi);
Vue.component(Aczhengyi1.name,Aczhengyi1);
Vue.component(Yule1.name,Yule1);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

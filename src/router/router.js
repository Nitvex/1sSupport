import Vue from "vue";
import Router from "vue-router";
import DefaultPage from "Pages/Main/DefaultPage";
import MainPage from "Pages/Main/MainPage";
import ArticlePage from "Components/ArticlePage";
import ProfilePage from "Pages/Profile/ProfilePage";
import RequestsPage from 'Pages/Requests/RequestsPage';
import NewsPage from 'Pages/News/NewsPage';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "DefaultPage",
      component: DefaultPage,
      children: [
        {
          path: "",
          name: "MainPage",
          component: MainPage
        }
      ]
    },
    {
      path: '/articles/:articleId',
      component: ArticlePage,
      name: "ArticlePage",
      props: true
    },
    {
      path: "/profile",
      component: ProfilePage,
      name: "ProfilePage"
    },
    {
      path: "/requests",
      component: RequestsPage,
      name: "RequestsPage"
    },
    {
      path: "/news",
      component: NewsPage,
      name: "NewsPage"
    },
  ]
});

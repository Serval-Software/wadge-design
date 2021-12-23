import async from "../components/Async/Async";

// Errors components
const NotFoundPage = async(() =>
  import("../pages/ErrorsPage/NotFoundPage/NotFoundPage")
);
const InternalServerErrorPage = async(() =>
  import("../pages/ErrorsPage/InternalServerErrorPage/InternalServerErrorPage")
);


// NavBar components
const HomePage = async(() =>
  import("../pages/Home/Home")
);

// Other components
const TestPage = async(() =>
  import("../pages/autre/Test")
);


// Routes

const errorRoutes = {
  path: "/error",
  children: [
    {
      path: "/error/404",
      name: "Erreur 404",
      component: NotFoundPage,
    },
    {
      path: "/error/500",
      name: "Erreur 500",
      component: InternalServerErrorPage,
    },
  ],
  component: null,
};

const HomeRoute = {
  id: "Home",
  path: "/",
  containsHome: true,
  component: HomePage,
};

const TestRoute = {
  id: "test",
  path: "/test",
  component: TestPage
}


// Routes using the Home layout
export const homeLayoutRoutes = [HomeRoute];

// Routes using the Error layout
export const errorLayoutRoutes = [errorRoutes];


// other

export const testLayoutRoutes = [TestRoute]


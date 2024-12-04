import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CategoryArticles from "./components/Home/CategoryArticles";
import TagArticles from "./components/Home/TagArticles";
import ArticalDetails from "./components/Home/ArticalDetails";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AdminLogin from "./components/auth/AdminLogin";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardArticles from "./components/dashboard/DashboardArticles";
import AddCategory from "./components/dashboard/AddCategory";
import AllCategories from "./components/dashboard/AllCategories";
import ProtectRoute from "./components/auth/ProtectRoute";
import AddTag from "./components/dashboard/AddTag";
import AllTag from "./components/dashboard/AllTag";
import ArticalAdd from "./components/dashboard/ArticalAdd";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/article/:currentPage?" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/all-articles"
            element={<DashboardArticles />}
          />
          <Route path="/dashboard/add-category" element={<AddCategory />} />
          <Route
            path="/dashboard/all-category/:id?"
            element={<AllCategories />}
          />

          <Route
            path="/artical/category/:categorySlug/:currentPage?"
            element={<CategoryArticles />}
          />
          <Route
            path="/artical/tag/:tagSlug/:currentPage?"
            element={<TagArticles />}
          />
          <Route path="/article/details/:slug" element={<ArticalDetails />} />

          <Route
            path="/dashboard/add-tag"
            element={<ProtectRoute element={<AddTag />} />}
          />
          <Route
            path="/dashboard/all-tag/:id?"
            element={<ProtectRoute element={<AllTag />} />}
          />
          <Route
            path="/dashboard/article-add"
            element={<ProtectRoute element={<ArticalAdd />} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

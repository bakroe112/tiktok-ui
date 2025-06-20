// Layous
import { HeaderOnly } from "~/components/Layout";

//Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

// không đăng nhập vẫn vào được
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];
// phải đăng nhập mới vào được
const privateRoutes = [];
export { publicRoutes, privateRoutes };

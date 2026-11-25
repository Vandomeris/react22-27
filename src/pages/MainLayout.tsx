import { Outlet } from "react-router";
import Header from "../components/Header";
import AuthProvider from "../context/AuthContext";
export default function MainLayout() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </AuthProvider>
    </div>
  );
}

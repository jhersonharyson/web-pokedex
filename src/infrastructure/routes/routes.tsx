import { Routes, Route } from "react-router-dom";
import { Error404, Home } from "@src/pages"
import DefaultLayout from "@src/infrastructure/layout/DefaultLayout";

const AppRouter = () => (
    <DefaultLayout>
        <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </DefaultLayout>
);

export default AppRouter;
import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";

import { RoleGuard } from "routing/RoleGuard";
import { routes, publicRouteList, roleGuardedRouteList } from "routing/routes";
import { AuthGuard } from "routing/AuthGuard";
import { Layout } from "components/layout/Layout";

export const AppRouter: React.VFC = () => (
    <Routes>
        <Route
            element={
                // <AuthGuard>
                <Layout>
                    <Outlet />
                </Layout>
                // </AuthGuard>
            }
        >
            {roleGuardedRouteList.map(({ path, Page, allowedRoles }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <RoleGuard allowedRoles={allowedRoles}>
                            <Page />
                        </RoleGuard>
                    }
                />
            ))}
            {publicRouteList.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
        ))}
            <Route path={"/*"} element={<Navigate to={routes.notFound.path} />} />
        </Route>
        
    </Routes>
);

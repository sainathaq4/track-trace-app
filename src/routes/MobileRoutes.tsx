import { Route, Fragment } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { WarehouseYardMobile } from '../pages/mobile/WarehouseYardMobile';
import { YardMobileView } from '../pages/mobile/YardMobileView';
import { QuaysideMobileView } from '../pages/mobile/QuaysideMobileView';
import { VoyageMobileView } from '../pages/mobile/VoyageMobileView';
import { OffshoreMobileView } from '../pages/mobile/OffshoreMobileView';

export function MobileRoutes() {
  return (
    <Fragment>
      <Route path="/mobile/warehouse" element={
        <ProtectedRoute allowedRoles={['warehouse']}>
          <WarehouseYardMobile />
        </ProtectedRoute>
      } />
      <Route path="/mobile/yard" element={
        <ProtectedRoute allowedRoles={['yard']}>
          <YardMobileView />
        </ProtectedRoute>
      } />
      <Route path="/mobile/quayside" element={
        <ProtectedRoute allowedRoles={['quayside']}>
          <QuaysideMobileView />
        </ProtectedRoute>
      } />
      <Route path="/mobile/voyage" element={
        <ProtectedRoute allowedRoles={['voyage']}>
          <VoyageMobileView />
        </ProtectedRoute>
      } />
      <Route path="/mobile/offshore" element={
        <ProtectedRoute allowedRoles={['offshore']}>
          <OffshoreMobileView />
        </ProtectedRoute>
      } />
    </Fragment>
  );
}
import { Route, Fragment } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';

// Desktop Views
import { DeliveryList } from '../pages/warehouse/DeliveryList';
import { CCUList } from '../pages/yard/CCUList';
import { ShipmentList } from '../pages/quayside/ShipmentList';
import { VoyageList } from '../pages/voyage/VoyageList';
import { VoyageShipmentList } from '../pages/voyage/VoyageShipmentList';
import { OffshoreShipmentList } from '../pages/offshore/OffshoreShipmentList';
import { OffshoreReturnList } from '../pages/offshore/OffshoreReturnList';

// Admin Views
import { CCUTypeConfig } from '../pages/config/CCUTypeConfig';
import { ItemTypeConfig } from '../pages/config/ItemTypeConfig';
import { LocationConfig } from '../pages/config/LocationConfig';
import { VesselTypeConfig } from '../pages/config/VesselTypeConfig';

export function DesktopRoutes() {
  return (
    <Fragment>
      {/* Warehouse Routes */}
      <Route path="/warehouse/deliveries" element={
        <ProtectedRoute allowedRoles={['warehouse']}>
          <DeliveryList />
        </ProtectedRoute>
      } />

      {/* Yard Routes */}
      <Route path="/yard/ccu-listing" element={
        <ProtectedRoute allowedRoles={['yard']}>
          <CCUList />
        </ProtectedRoute>
      } />

      {/* Quayside Routes */}
      <Route path="/quayside/shipments" element={
        <ProtectedRoute allowedRoles={['quayside']}>
          <ShipmentList />
        </ProtectedRoute>
      } />

      {/* Voyage Routes */}
      <Route path="/voyage/listing" element={
        <ProtectedRoute allowedRoles={['voyage']}>
          <VoyageList />
        </ProtectedRoute>
      } />
      <Route path="/voyage/shipments" element={
        <ProtectedRoute allowedRoles={['voyage']}>
          <VoyageShipmentList />
        </ProtectedRoute>
      } />

      {/* Offshore Routes */}
      <Route path="/offshore/shipments" element={
        <ProtectedRoute allowedRoles={['offshore']}>
          <OffshoreShipmentList />
        </ProtectedRoute>
      } />
      <Route path="/offshore/returns" element={
        <ProtectedRoute allowedRoles={['offshore']}>
          <OffshoreReturnList />
        </ProtectedRoute>
      } />

      {/* Admin Routes */}
      <Route path="/admin/ccu-types" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <CCUTypeConfig />
        </ProtectedRoute>
      } />
      <Route path="/admin/item-types" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <ItemTypeConfig />
        </ProtectedRoute>
      } />
      <Route path="/admin/locations" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <LocationConfig />
        </ProtectedRoute>
      } />
      <Route path="/admin/vessel-types" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <VesselTypeConfig />
        </ProtectedRoute>
      } />
    </Fragment>
  );
}
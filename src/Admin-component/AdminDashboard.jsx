import React, { useState } from 'react';
import Dashboard from './Dashpoard';
import BarbersDash from './BarbersDash';
import Appointments from './Appointments';
import ServicesDash from './ServicesDash';
import { MdAdminPanelSettings } from "react-icons/md";
import clsx from 'clsx'; 
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AdminDashboard() {
  const navigate = useNavigate(); 
  const [ActiveTab, setActiveTab] = useState('dashboard');

  const handleSignOut = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            Swal.fire({
              text: 'Logged Out',
              icon: 'success',
            }).then(() => {
              navigate('/Admin');
            });
          })
          .catch((error) => {
            Swal.fire({
              text: 'Error during logout',
              icon: 'error',
            });
          });
      }
    });
  };

  const renderContent = () => {
    switch (ActiveTab) {
      case 'dashboard': return <Dashboard />;
      case 'BarbersDash': return <BarbersDash />;
      case 'Appointments': return <Appointments />;
      case 'Services': return <ServicesDash />;
      default: return null;
    }
  };

  const menuItems = [
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Our Barbers', value: 'BarbersDash' },
    { label: 'Services', value: 'Services' },
    { label: 'Appointments', value: 'Appointments' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md h-screen fixed top-0 left-0 flex flex-col justify-between">
        <div>
          <div className="text-center mt-5 flex justify-center">
            <MdAdminPanelSettings className="text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-center py-6">Dashboard</h2>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <div
                key={item.value}
                className={clsx(
                  'transition-all duration-300',
                  ActiveTab === item.value
                    ? 'bg-[#b8a269] rounded-tr-3xl rounded-br-3xl'
                    : ''
                )}
              >
                <button
                  onClick={() => setActiveTab(item.value)}
                  className={clsx(
                    ' cursor-pointer w-full text-left p-3 px-6 transition-all duration-300',
                    ActiveTab === item.value
                      ? 'text-white font-semibold'
                      : 'text-gray-700 hover:text-black'
                  )}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>
        </div>
        <div className="px-6 py-4 text-center">
          <button
            onClick={handleSignOut}
            className="text-red-500 cursor-pointer font-bold hover:text-red-700"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 w-full overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

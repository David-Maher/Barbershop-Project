import React, { useState, useEffect } from 'react';
import Dashboard from './Dashpoard';
import BarbersDash from './BarbersDash';
import Appointments from './Appointments';
import ServicesDash from './ServicesDash';
import { MdAdminPanelSettings } from "react-icons/md";
import clsx from 'clsx'; 
import { auth, db } from '../Firebase';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { collection, query, where, getDocs } from "firebase/firestore";
import moment from 'moment';
import Articals from './Articals';
import HomePageContent from './HomePageContent';
import LandingPageContent from './LandingPageContent';
import AboutPageContent from './AboutPageContent';

// Placeholder Components for Content Updates
function HomeContent() { 
  return <HomePageContent />;
}
function AboutContent() { 
  return <div>About Page Content Editor</div>; 
}
function LandingContent() { 
  return <LandingPageContent />;
}

export default function AdminDashboard() {
  const navigate = useNavigate(); 
  const [ActiveTab, setActiveTab] = useState('dashboard');
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (value) => {
    setOpenDropdown(openDropdown === value ? null : value);
  };

  const [newAppointmentsCount, setNewAppointmentsCount] = useState(0);
  const [readAppointments, setReadAppointments] = useState([]);

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

  const fetchNewAppointments = async () => {
    try {
      const startOfDay = moment().startOf("day").toDate();
      const endOfDay = moment().endOf("day").toDate();

      const q = query(
        collection(db, "bookings"),
        where("dateTime", ">=", startOfDay),
        where("dateTime", "<=", endOfDay)
      );

      const snapshot = await getDocs(q);
      const allAppointments = snapshot.docs.map(doc => doc.id);

      const newOnes = allAppointments.filter(id => !readAppointments.includes(id));
      setNewAppointmentsCount(newOnes.length);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (ActiveTab !== "Appointments") {
        fetchNewAppointments();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [ActiveTab, readAppointments]);

  useEffect(() => {
    if (ActiveTab === "Appointments") {
      const markAllRead = async () => {
        try {
          const startOfDay = moment().startOf("day").toDate();
          const endOfDay = moment().endOf("day").toDate();

          const q = query(
            collection(db, "bookings"),
            where("dateTime", ">=", startOfDay),
            where("dateTime", "<=", endOfDay)
          );

          const snapshot = await getDocs(q);
          const ids = snapshot.docs.map(doc => doc.id);
          setReadAppointments(prev => Array.from(new Set([...prev, ...ids])));
          setNewAppointmentsCount(0);
        } catch (error) {
          console.error(error);
        }
      };
      markAllRead();
    }
  }, [ActiveTab]);

  const renderContent = () => {
    switch (ActiveTab) {
      case 'dashboard': return <Dashboard />;
      case 'BarbersDash': return <BarbersDash />;
      case 'Appointments': return <Appointments />;
      case 'Services': return <ServicesDash />;
      case 'Articals': return <Articals />;

      case 'home-content': return <HomeContent />;
      case 'AboutPageContent': return <AboutPageContent />;
      case 'LandingPageContent': return <LandingPageContent />;
    
      default: return null;
    }
  };

  const menuItems = [
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Our Barbers', value: 'BarbersDash' },
    { label: 'Services', value: 'Services' },
    { label: 'Appointments', value: 'Appointments' },
    { label: 'Articals', value: 'Articals' },

    {
      label: 'Content Updates',
      value: 'content-updates',
      children: [
        { label: 'Home-Page-Content', value: 'home-content' },
        { label: 'About-Page-Content', value: 'AboutPageContent' },
        { label: 'LandingPageContent', value: 'LandingPageContent' },
      ]
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">

      <aside className="w-64 bg-white shadow-2xl h-screen fixed top-0 left-0 flex flex-col justify-between">
        <div>
          <div className="text-center mt-5 flex justify-center">
            <MdAdminPanelSettings className="text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-center py-6">Dashboard</h2>

          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <div key={item.value}>

                {!item.children ? (
                  <div
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
                        'cursor-pointer w-full text-left p-3 px-6 flex justify-between',
                        ActiveTab === item.value ? 'text-white font-semibold' : 'text-gray-700 hover:text-black'
                      )}
                    >
                      {item.label}

                      {item.value === "Appointments" && newAppointmentsCount > 0 && (
                        <span className="ml-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          {newAppointmentsCount}
                        </span>
                      )}
                    </button>
                  </div>

                ) : (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.value)}
                      className="cursor-pointer w-full text-left p-3 px-6 flex justify-between text-gray-700 hover:text-black"
                    >
                      {item.label}
                      <span>{openDropdown === item.value ? '▲' : '▼'}</span>
                    </button>

                    {openDropdown === item.value && (
                      <div className="ml-6 mt-1 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <button
                            key={child.value}
                            onClick={() => setActiveTab(child.value)}
                            className={clsx(
                              'cursor-pointer p-2 pl-4 rounded-lg text-left',
                              ActiveTab === child.value
                                ? 'bg-[#b8a269] text-white font-semibold'
                                : 'text-gray-600 hover:text-black'
                            )}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
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

      <main className="ml-64 p-8 w-full overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

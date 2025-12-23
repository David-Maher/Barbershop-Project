import { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "../Firebase"; 
import moment from "moment";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));

const fetchAppointments = async (date) => {
  try {
    const startOfDay = moment(date).startOf("day").toDate();
    const endOfDay = moment(date).endOf("day").toDate();

    const q = query(
      collection(db, "bookings"),
      where("dateTime", ">=", startOfDay),
      where("dateTime", "<=", endOfDay)
      // هنشيل orderBy هنا لأنه مش هيشتغل على string زي BR-00001
    );

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // ترتيب حسب الرقم في bookingCode
    const sortedData = data.sort((a, b) => {
      const numA = parseInt(a.bookingCode.replace("BR-", ""));
      const numB = parseInt(b.bookingCode.replace("BR-", ""));
      return numA - numB;
    });

    setAppointments(sortedData);
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};

  useEffect(() => {
    fetchAppointments(selectedDate);
  }, [selectedDate]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📅 حجوزات اليوم</h2>

      {/* فلتر بالتاريخ */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border p-2 rounded-2xl mb-4"
      />

      {/* جدول الحجوزات */}
      <table className="w-full border-collapse border text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Booking num</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Branch</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Services</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appt) => (
              <tr key={appt.id}>
                <td className="border p-2">{appt.bookingCode}</td>
                <td className="border p-2">{appt.customerName}</td>
                <td className="border p-2">{appt.branch}</td>
                <td className="border p-2">
                  {moment(appt.dateTime.toDate()).format("hh:mm A - MMMM D, YYYY")}
                </td>
                <td className="border p-2">
                  {appt.service || "—"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                لا توجد حجوزات في هذا التاريخ
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

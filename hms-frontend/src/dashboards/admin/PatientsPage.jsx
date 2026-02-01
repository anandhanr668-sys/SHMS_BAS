import { useEffect } from "react";
import usePatientStore from "../../store/patientStore";

export default function PatientsPage() {
  const { patients, loading, error, fetchPatients } = usePatientStore();

  useEffect(() => {
    fetchPatients();
  }, []);

  if (loading) return <p>Loading patients...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Patients</h2>

      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

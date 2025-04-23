import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Selamat Datang, Admin!</h2>
        <p>Ini adalah halaman dashboard utama Anda.</p>
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h4>Statistik Singkat</h4>
          <p>Total laporan yang masuk hari ini: 12</p>
        </div>

        <div className="card">
          <h4>Aktivitas Terbaru</h4>
          <p>Admin telah memverifikasi 3 laporan berita hoaks.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

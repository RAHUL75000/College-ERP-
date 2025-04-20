document.addEventListener('DOMContentLoaded', () => {
    const attendanceData = [
      { date: '2025-04-01', course: 'CSE101', status: 'Present' },
      { date: '2025-04-02', course: 'MTH201', status: 'Absent' },
      { date: '2025-04-02', course: 'MTH201', status: 'Absent' },
      { date: '2025-04-02', course: 'MTH201', status: 'Absent' },
      { date: '2025-04-02', course: 'MTH201', status: 'Absent' },
      { date: '2025-04-02', course: 'MTH201', status: 'Absent' },
      { date: '2025-04-02', course: 'MTH201', status: 'Absent' },
      // Add more records as needed
    ];
  
    const tbody = document.getElementById('attendance-body');
  
    attendanceData.forEach(record => {
      const row = document.createElement('tr');
  
      const dateCell = document.createElement('td');
      dateCell.textContent = record.date;
      row.appendChild(dateCell);
  
      const courseCell = document.createElement('td');
      courseCell.textContent = record.course;
      row.appendChild(courseCell);
  
      const statusCell = document.createElement('td');
      statusCell.textContent = record.status;
      row.appendChild(statusCell);
  
      tbody.appendChild(row);
    });
  });
  
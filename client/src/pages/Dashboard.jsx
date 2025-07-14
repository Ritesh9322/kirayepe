export default function Dashboard() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <h2>Dashboard (Protected)</h2>
      {token ? (
        <p>Your token is saved – you are logged in.</p>
      ) : (
        <p>No token found – please log in.</p>
      )}
    </div>
  );
}

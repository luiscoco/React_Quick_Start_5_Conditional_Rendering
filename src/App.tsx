// Simplified conditional rendering demo using "if"

function AdminPanel() {
  return <div>Admin Panel</div>
}

function LoginForm() {
  return <div>Login Form</div>
}

export default function App() {
  const isLoggedIn = false

  if (isLoggedIn) {
    return <AdminPanel />
  } else {
    return <LoginForm />
  }
}

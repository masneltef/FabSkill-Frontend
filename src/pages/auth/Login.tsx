import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Interface for login form data
interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate(); // For navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Login successful!');
      navigate('/dashboard'); // Redirect after login (if dashboard exists)
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side with logo */}
      <div className="flex-1 bg-[#6a3de8] h-full flex justify-center items-center">
        <div className="flex flex-col items-center text-white">
          <div className="text-[160px] font-bold leading-none">f</div>
          <div className="text-4xl">
            <span className="font-normal">fab</span>
            <span className="font-bold">skill</span>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-4/5 max-w-md px-4">
          <h2 className="text-2xl font-bold text-center mb-1">Hello!</h2>
          <p className="text-gray-600 text-center mb-10">Welcome to your Real-Time Kinyarwanda Autocaptioning Plateform</p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6a3de8]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6a3de8]"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-[#6a3de8] rounded-full hover:bg-[#5a2ed8] transition duration-300 shadow-md"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <div className="text-center mt-5">
              <a href="#" className="text-gray-500 hover:text-[#6a3de8] text-sm">
                Forgot Password?
              </a>
            </div>

            {/* Add Sign Up Link */}
            <div className="text-center mt-5">
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="text-gray-500 hover:text-[#6a3de8] text-sm"
              >
                New here? Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

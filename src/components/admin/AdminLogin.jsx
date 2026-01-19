import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import FormButton from '../forms/FormButton';
import { useProcessLoginMutation } from '../../app/services/authAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../app/features/auth/authSlice';


const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ processLogin, { isLoading } ] = useProcessLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await processLogin({ username, password }).unwrap();
      dispatch(setLogin({ username: '', roles: data.roles, isAuthenticated: true, jid: data?.jid }));
      toast.success("Login Success.");
      data?.jid ? navigate('/judge') : navigate('/admin');
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || error?.message || 'Failed to Login.');
    }
  }

  return (
    <section className='w-full h-full py-24 max-sm:px-2'>
      <div className="bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 w-full max-w-7xl mx-auto p-px">
        <form
          className="w-full h-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 gap-8"
          onSubmit={handleAdminSubmit}
          autoComplete='on'
        >
          <h2 className="text-xl font-bold text-white-100">Login to Continue...</h2>
          
          <div>
            <Label htmlFor="username" required>Username</Label>
            <Input
              name="username"
              id="username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              placeholder="Enter username"
            />
          </div>

          <div>
            <Label htmlFor="password" required>Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
            />
          </div>

          <FormButton loading={isLoading} className={`disabled:opacity-80`} text={`Login`} />
        </form>
      </div>
    </section>
  )
}

export default AdminLogin
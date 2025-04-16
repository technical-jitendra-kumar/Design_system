import React, { useState } from 'react';
import Typography from './components/Typography/Typography';
import TextInput from './components/TextInput/TextInput';
import Toast from './components/Toast/Toast';
import { MailIcon } from 'lucide-react';
import { cn } from './utils/cn';
import './App.css';
import './styles/tailwind.css';

const App: React.FC = () => {
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    variant: 'info' | 'success' | 'error' | 'warning';
  }>({ visible: false, message: '', variant: 'info' });

  const [inputValue, setInputValue] = useState('');

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setToast({
        visible: true,
        message: 'Please enter a valid input!',
        variant: 'error',
      });
    } else {
      setToast({
        visible: true,
        message: 'Input submitted successfully!',
        variant: 'success',
      });
      setInputValue('');
    }
  };

  const closeToast = () => {
    setToast({ ...toast, visible: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-800 px-6 py-10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-2 ">
          <Typography variant="h1" weight="bold" color="primary">
            ✨ Design System Demo
          </Typography>
          <Typography variant="p" color="muted">
            Explore reusable, themeable components built with React, TypeScript & TailwindCSS.
          </Typography>
          <Typography variant="caption" color="muted">
            Fully accessible & responsive.
          </Typography>
        </header>

        {/* Form Section */}
        <section className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
          <Typography variant="h3" weight="medium">
            🚀 Text Input Example
          </Typography>
          <form onSubmit={handleInputSubmit} className="space-y-4 mt-6">
            <div>
              <Typography variant="label" weight="medium">
                Email Address
              </Typography>
              <TextInput
                size="md"
                placeholder="you@example.com"
                icon={<MailIcon size={16} />}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                aria-label="Email input"
              />
              <Typography variant="helper" color="muted">
                Enter a valid email and submit to trigger a toast.
              </Typography>
            </div>
            <button
              type="submit"
              className={cn(
                'w-full py-2 px-4 rounded-md font-medium transition-all',
                'bg-blue-600 hover:bg-blue-700 text-white shadow-md',
                'disabled:bg-gray-300 disabled:cursor-not-allowed'
              )}
              disabled={!inputValue}
            >
              Submit
            </button>
          </form>

          {/* Variants Showcase */}
          <div className="mt-8 space-y-3">
            <Typography variant="label">Other Input Variants:</Typography>
            <TextInput size="sm" placeholder="Small input" />
            <TextInput size="lg" state="error" placeholder="Error state" />
            <TextInput size="md" state="disabled" placeholder="Disabled input" />
          </div>
        </section>

        {/* Toast */}
        {toast.visible && (
          <Toast
            variant={toast.variant}
            message={toast.message}
            duration={3000}
            onClose={closeToast}
          />
        )}
      </div>
    </div>
  );
};

export default App;